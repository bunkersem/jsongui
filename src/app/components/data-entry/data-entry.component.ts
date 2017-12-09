import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { JSONDataService } from 'app/providers/jsondata.service';
import { DataEntryEntityComponent } from '../data-entry-entity/data-entry-entity.component';
import * as Rx from 'rxjs/Rx';
import { setInterval } from 'timers';


@Component({
    selector: 'app-data-entry',
    templateUrl: './data-entry.component.html',
    styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit, OnDestroy {

    public error: boolean;
    public schema: {};
    schemaChangedSubscription: Rx.Subscription;

    constructor(public jsd: JSONDataService, public cdr: ChangeDetectorRef) {
        const schemaUpdate = () => {
            try {
                const s = JSON.parse(this.jsd.content.JSONSchema);
                this.schema = s;
                this.error = false;
            } catch (err) {
                console.error(err);
                this.error = true;
            }
        };
        schemaUpdate();
        this.schemaChangedSubscription = this.jsd.content.JSONSchemaChangeEventEmitter
            .debounceTime(1000)
            .distinctUntilChanged()
            .map(() => this.jsd.content.JSONSchema)
            .subscribe(schemaUpdate);
        this.jsd.jsonChangeEventEmitter
            .subscribe(schemaUpdate);
    }



    ngOnInit() {

    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.schemaChangedSubscription.unsubscribe();
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
