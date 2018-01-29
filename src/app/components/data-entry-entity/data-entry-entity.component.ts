import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { JSONSchemaElement } from 'app/components/data-entry-entity/jsonschema';
import * as Rx from 'rxjs/Rx';
import { JSONDataService } from 'app/providers/jsondata.service';
import { getQueryValue } from '@angular/core/src/view/query';


@Component({
    selector: 'app-data-entry-entity',
    templateUrl: './data-entry-entity.component.html',
    styleUrls: ['./data-entry-entity.component.scss']
})
export class DataEntryEntityComponent implements OnInit, OnChanges, OnDestroy {

    @Input() desc: JSONSchemaElement;
    @Input() prefix: (string | number)[];
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
        console.log({
            'desc': this.desc,
            'value': this.value,
            prefix: this.prefix,
            propsArr: this.propsArr
        })
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
        this.refreshJsonContent();
    }

    refreshJsonContent() {
        this.jsd.content.JSONContent = JSON.stringify(this.jsd.json, null, 2);
    }

    getValueFromJsonContent() {
        const obj = this.getParentFromJsonContent();
        return obj && obj[this.prefix[this.prefix.length - 1]];
    }

    addArrElement() {
        this.value = this.value || [];
        console.log('adding', this.desc);
        this.valueChangedObserver(this.value)
        this.value.push(this.defaultVal((<any>this.desc.items).type));
        this.refreshJsonContent();
    }

    getParentFromJsonContent() {
        if (this.jsd.jsonParseError || !this.prefix) {
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
        return obj;
    }

    onValueChanged() {
        this.valueChangedEventEmitter.next(this.value);
    }

    getPrefix(title) {
        return (this.prefix || []).concat([title]);
    }

    clearVal() {
        const obj = this.getParentFromJsonContent();
        console.log('clear value', (obj || {})[this.prefix[this.prefix.length - 1]])
        if (Array.isArray(obj)) {
            (<any>obj).splice(<number>this.prefix[this.prefix.length - 1], 1)
        } else {
            delete (obj || {})[this.prefix[this.prefix.length - 1]];
        }
        this.refreshJsonContent();
    }

    defaultVal(type) {
        switch (type) {
            case 'boolean': return false;
            case 'function': return function () { };
            case 'null': return null;
            case 'number': return 0;
            case 'object': return {};
            case 'string': return '';
            case 'symbol': return Symbol();
            case 'undefined': return void 0;
        }
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

