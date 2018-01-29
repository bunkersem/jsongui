import { Component, OnInit } from '@angular/core';
import { JSONDataService } from 'app/providers/jsondata.service';
import { UserConfigService } from 'app/providers/userconfig/userconfig.service';
import { HttpClient } from '@angular/common/http';

import * as generateSchema from 'generate-schema';

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
    title = `App works !`;
    indentChar: string;

    constructor(public jsd: JSONDataService, public ucr: UserConfigService, private http: HttpClient) {
        const indentation = ucr.repository.userConfigBehaviourSubject.value.text.indentation;
        this.indentChar = { 'tabs': '\t', 'spaces': ' '.repeat(indentation.amount) }[indentation.type];
    }

    ngOnInit() {

    }

    onSchemaChange($event) {
        this.jsd.content.JSONSchemaChangeEventEmitter.next(this.jsd.content.JSONSchema);
    }

    onContentChange($event) {
        this.jsd.content.JSONContentChangeEventEmitter.next(this.jsd.content.JSONContent);
    }

    onTextAreaTabKeypress($event: KeyboardEvent) {
        $event.preventDefault();
        const textarea = (<HTMLTextAreaElement>$event.target);
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret

        textarea.value = textarea.value.substring(0, start)
            + this.indentChar // TODO: make dynamic
            + textarea.value.substr(end);

        // put caret at right position again
        textarea.selectionStart = textarea.selectionEnd = start + this.indentChar.length;
    }

    onSchemaUpload($event: Event) {
        this.getEventResult($event, (result) => {
            this.jsd.content.JSONSchema = result;
            this.jsd.options.jsonSchemaOptionChoice = 'textbox-1';
            this.jsd.content.JSONSchemaChangeEventEmitter.next(result);
        });
    }

    onJSONContentUpload($event: Event) {
        this.getEventResult($event, (result) => {
            this.jsd.content.JSONContent = result;
            this.jsd.options.jsonOptionChoice = 'textbox-1';
            this.jsd.content.JSONContentReEvaluateEventEmitter.next(result);
        });
    }

    private getEventResult($event: Event, succesCb: (result: string) => void) {
        const file = (<HTMLInputElement>$event.target).files[0];
        this.readJSONFile(file, (err, result) => {
            if (err) {
                console.error(err);
                alert(err);
                return;
            } else {
                succesCb(result);
            }
        });
    }

    private readJSONFile(file: File, cb: (err: string, result?: string) => any) {
        console.log('filel type', file.type);
        const fileExtension = /.*\.json/;
        if (file.name.match(fileExtension) === null) {
            return cb('File does not have the extension: ".json"');
        }
        const reader = new FileReader();

        reader.onload = function (e) {
            cb(null, reader.result);
        }
        reader.readAsText(file);
    }

    schemaFromJsonContent() {
        const s = generateSchema.json('Root', this.jsd.json);
        this.jsd.content.JSONSchema = this.jsd.stringifyJSONFromRules(s);
        this.jsd.content.JSONSchemaChangeEventEmitter.next(this.jsd.content.JSONSchema);
        console.log('generated schema', s);
    }

    schemaFromUrl(url) {
        this.http.get(url).subscribe(data => {
            this.jsd.content.JSONSchema = JSON.stringify(data, null, this.indentChar);
            this.jsd.content.JSONSchemaChangeEventEmitter.next(this.jsd.content.JSONSchema);
            console.log('fetched schema');
        }, err => {
            alert('Sorry, unable to connect to the internet');
        })
    }
}
