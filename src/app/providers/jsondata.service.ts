import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { UserConfigService } from 'app/providers/userconfig/userconfig.service';
import { UserConfig } from 'app/providers/userconfig/repository';


@Injectable()
export class JSONDataService {

    public options = {
        jsonSchemaOptions: [
            { viewValue: 'File', value: 'file-0' },
            { viewValue: 'Textbox', value: 'textbox-1', }
        ],
        jsonSchemaOptionChoice: '',
        jsonOptions: [
            { viewValue: 'File', value: 'file-0' },
            { viewValue: 'Textbox', value: 'textbox-1', }
        ],
        jsonOptionChoice: '',
    };
    public content = {
        JSONSchemaChangeEventEmitter: new Rx.Subject<string>(),
        JSONContentReEvaluateEventEmitter: new Rx.Subject<string>(),
        JSONContentChangeEventEmitter: new Rx.Subject<string>(),
        JSONContent: '{\n\t\n}',
        JSONSchema: '{\n\t\n}'
    };
    public json = {};
    public jsonChangeEventEmitter = new Rx.Subject<{}>();
    public jsonParseError: boolean;
    public stringifyJSONFromRules: (obj) => string;

    constructor(private ucs: UserConfigService) {
        const config = ucs.repository.userConfigBehaviourSubject.value;
        if (config) {
            this.applySettings(config);
        } else {
            ucs.repository.userConfigBehaviourSubject
                .take(1)
                .subscribe(this.applySettings);
        }
        this.stringifyJSONFromRules = (obj) => {
            const indentation = this.getIndentCharForUserConfig();
            try {
                return JSON.stringify(obj, null, indentation);
            } catch (err) {
                alert('Unable to stringify object');
                console.error(err);
                return '{}';
            }
        }
        this.content.JSONContentChangeEventEmitter
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(() => {
                this.content.JSONContentReEvaluateEventEmitter.next(this.content.JSONContent);
            });
        this.content.JSONContentReEvaluateEventEmitter
            .subscribe(() => {
                try {
                    this.json = JSON.parse(this.content.JSONContent);
                    this.jsonParseError = false;
                    this.jsonChangeEventEmitter.next(this.json);
                } catch (err) {
                    console.log(err);
                    this.jsonParseError = true;
                }
            })
    }

    applySettings(config: UserConfig) {
        this.options.jsonOptionChoice = this.options.jsonOptions
            .find(jo => jo.value === config.entry.JSONContentEntryMethod).value;
        this.options.jsonSchemaOptionChoice = this.options.jsonSchemaOptions
            .find(jso => jso.value === config.entry.JSONSchemaEntryMethod).value;
    }

    getIndentCharForUserConfig() {
        if (this.ucs.repository.userConfigBehaviourSubject.value === null) {
            console.error('User Service is not ready yet');
            alert('User Service is not ready yet. Try Again');
            return;
        }
        const indentation = this.ucs.repository.userConfigBehaviourSubject.value.text.indentation;
        return { 'tabs': '\t', 'spaces': ' '.repeat(indentation.amount) }[indentation.type];
    }
}

