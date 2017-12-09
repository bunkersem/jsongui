import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { JSONSchemaElement } from 'app/components/data-entry-entity/jsonschema';
import * as Rx from 'rxjs/Rx';
import { JSONDataService } from 'app/providers/jsondata.service';


@Component({
    selector: 'app-data-entry-entity',
    templateUrl: './data-entry-entity.component.html',
    styleUrls: ['./data-entry-entity.component.scss']
})
export class DataEntryEntityComponent implements OnInit, OnChanges, OnDestroy {

    @Input() desc: JSONSchemaElement;
    @Input() prefix: string[];
    value: any;
    propsArr: JSONSchemaElement[];
    valueChangedEventEmitter = new Rx.Subject<string>();
    valueChangeObservable: Rx.Subscription;

    constructor(public jsd: JSONDataService) {
        this.valueChangeObservable = this.valueChangedEventEmitter
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(this.valueChangedObserver.bind(this));
    }

    ngOnChanges() {
        this.refresh();
    }

    ngOnInit() {
        this.refresh();
    }


    ngOnDestroy() {
        this.valueChangeObservable.unsubscribe();
    }

    refresh() {
        this.value = this.getValueFromJsonContent();
        if (this.desc.type === 'object') {
            this.propsArr = Object.keys(this.desc.properties || {}).map(title => {
                if (this.desc.properties[title].title === undefined) {
                    this.desc.properties[title].title = title;
                }
                return this.desc.properties[title];
            });
        }
    }

    valueChangedObserver(value) {
        console.log('this this', this);
        if (this.jsd.jsonParseError) {
            return;
        }
        let obj = this.jsd.json;
        // continue finding the object untill [ this.prefix.length - 1 ]
        for (let i = 0; i < this.prefix.length - 1; i++) {
            if (obj[this.prefix[i]] === undefined) {
                obj = obj[this.prefix[i]] = {};
            } else {
                obj = obj[this.prefix[i]];
            }
        }
        obj[this.prefix[this.prefix.length - 1]] = value;
        this.jsd.content.JSONContent = JSON.stringify(this.jsd.json, null, 2);
    }

    getValueFromJsonContent() {
        if (this.jsd.jsonParseError || ! this.prefix) {
            return;
        }
        let obj = this.jsd.json;
        // continue finding the object untill [ this.prefix.length - 1 ]
        for (let i = 0; i < this.prefix.length - 1; i++) {
            if (obj[this.prefix[i]] === undefined) {
                return;
            } else {
                obj = obj[this.prefix[i]];
            }
        }
        return obj[this.prefix[this.prefix.length - 1]];
    }

    onValueChanged() {
        this.valueChangedEventEmitter.next(this.value);
    }

    getPrefix(title) {
        return (this.prefix || []).concat([title]);
    }

}



/*
{
    "title": "Person",
    "type": "object",
    "properties": {
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "age": {
            "description": "Age in years",
            "type": "integer",
            "minimum": 0
        }
    },
    "required": ["firstName", "lastName"]
}
*/

