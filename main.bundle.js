webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__ = __webpack_require__("./src/app/providers/electron.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(electronService) {
        this.electronService = electronService;
        if (electronService.isElectron()) {
            console.log('Mode electron');
            // Check if electron is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.ipcRenderer);
            // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.childProcess);
        }
        else {
            console.log('Mode web');
        }
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_electron_service__["a" /* ElectronService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PizzaPartyAppModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone_mix__ = __webpack_require__("./node_modules/zone.js/dist/zone-mix.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone_mix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone_mix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata__ = __webpack_require__("./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polyfills__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_component__ = __webpack_require__("./src/app/components/widget/widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_data_entry_data_entry_component__ = __webpack_require__("./src/app/components/data-entry/data-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_data_entry_entity_data_entry_entity_component__ = __webpack_require__("./src/app/components/data-entry-entity/data-entry-entity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_material_angular_module__ = __webpack_require__("./src/app/material/material-angular.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_electron_service__ = __webpack_require__("./src/app/providers/electron.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_jsondata_service__ = __webpack_require__("./src/app/providers/jsondata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_userconfig_userconfig_service__ = __webpack_require__("./src/app/providers/userconfig/userconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var PizzaPartyAppModule = (function () {
    function PizzaPartyAppModule() {
    }
    return PizzaPartyAppModule;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_component__["a" /* WidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_data_entry_data_entry_component__["a" /* DataEntryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_data_entry_entity_data_entry_entity_component__["a" /* DataEntryEntityComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__material_material_angular_module__["a" /* MaterialAngularModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__providers_electron_service__["a" /* ElectronService */], __WEBPACK_IMPORTED_MODULE_16__providers_jsondata_service__["a" /* JSONDataService */], __WEBPACK_IMPORTED_MODULE_17__providers_userconfig_userconfig_service__["a" /* UserConfigService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/data-entry-entity/data-entry-entity.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"desc && desc.type && desc.type !== 'object' && desc.type !== 'array'\">\n    <button class=\"entity-mutator\" (click)=\"clearVal();\"  color=\"accent\" mat-mini-fab>Clear</button>\n</div>\n<div *ngIf=\"desc && desc.type && desc.type === 'array'\">\n    <button class=\"entity-mutator\" (click)=\"addArrElement();\"  color=\"accent\" mat-mini-fab>Add</button>\n</div>\n<div [ngSwitch]=\"desc.type\" class=\"data-entry-entity\">\n    <div *ngSwitchCase=\"'object'\">\n        <h2>{{ desc.title || 'Unknown' }}: Object</h2>\n        <div *ngFor=\"let prop of propsArr\">\n            <app-data-entry-entity [desc]=\"prop\" [prefix]=\"getPrefix(prop.title)\"></app-data-entry-entity>\n        </div>\n\n    </div>\n    <div *ngSwitchCase=\"'string'\">\n        <div>\n            <label>{{ desc.title || 'Prop'}}: String</label>\n        </div>\n        <mat-form-field>\n            <input type=\"text\" #input matInput placeholder=\"label\" [(ngModel)]=\"value\" (ngModelChange)=\"onValueChanged(input.value)\">\n        </mat-form-field>\n\n    </div>\n    <div *ngSwitchCase=\"'integer'\">\n        <div>\n            <label>{{ desc.title || 'Prop'}}: Integer</label>\n        </div>\n        <mat-form-field>\n            <input type=\"number\" #input matInput step=\"1\" [min]=\"desc.minimum\" [max]=\"desc.maximum\" placeholder=\"label\" [(ngModel)]=\"value\"\n                (ngModelChange)=\"onValueChanged(input.value)\">\n        </mat-form-field>\n    </div>\n    <div *ngSwitchCase=\"'number'\">\n        <div>\n            <label>{{ desc.title || 'Prop'}}: Number</label>\n        </div>\n        <mat-form-field>\n            <input type=\"number\" #input matInput step=\"0.01\" [min]=\"desc.minimum\" [max]=\"desc.maximum\" placeholder=\"label\" [(ngModel)]=\"value\"\n                (ngModelChange)=\"onValueChanged(input.value)\">\n        </mat-form-field>\n    </div>\n    <div *ngSwitchCase=\"'array'\">\n        <div>\n            <label>{{ desc.title || 'Prop'}}: Array</label>\n        </div>\n        <div *ngFor=\"let obj of value; index as i\" [attr.data-index]=\"i\">\n            <app-data-entry-entity [desc]=\"desc.items\" [prefix]=\"getPrefix(i)\"></app-data-entry-entity>\n        </div>\n    </div>\n    <div *ngSwitchCase=\"'boolean'\">\n        <div>\n            <div><label>{{ desc.title || 'Prop'}}: Boolean</label></div>\n            <mat-form-field>\n                <mat-select [(ngModel)]=\"value\" (ngModelChange)=\"onValueChanged(value)\">\n                    <mat-option [value]=\"true\">True</mat-option>\n                    <mat-option [value]=\"false\">False</mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </div>\n    <div *ngSwitchDefault>\n        <p color=\"red\">{{ desc.type }} is an unknown type.</p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/app/components/data-entry-entity/data-entry-entity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-select {\n  width: 200px; }\n\n.data-entry-entity {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 20px; }\n\n.entity-mutator {\n  position: relative;\n  bottom: -5px;\n  margin: 5px;\n  margin-bottom: -12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/data-entry-entity/data-entry-entity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataEntryEntityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_providers_jsondata_service__ = __webpack_require__("./src/app/providers/jsondata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataEntryEntityComponent = (function () {
    function DataEntryEntityComponent(jsd) {
        this.jsd = jsd;
        this.valueChangedEventEmitter = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.valueChangeObservable = this.valueChangedEventEmitter
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(this.valueChangedObserver.bind(this));
    }
    DataEntryEntityComponent.prototype.ngOnChanges = function () {
        this.refresh();
    };
    DataEntryEntityComponent.prototype.ngOnInit = function () {
        this.refresh();
        console.log({
            'desc': this.desc,
            'value': this.value,
            prefix: this.prefix,
            propsArr: this.propsArr
        });
    };
    DataEntryEntityComponent.prototype.ngOnDestroy = function () {
        this.valueChangeObservable.unsubscribe();
    };
    DataEntryEntityComponent.prototype.refresh = function () {
        var _this = this;
        this.value = this.getValueFromJsonContent();
        if (this.desc.type === 'object') {
            this.propsArr = Object.keys(this.desc.properties || {}).map(function (title) {
                if (_this.desc.properties[title].title === undefined) {
                    _this.desc.properties[title].title = title;
                }
                return _this.desc.properties[title];
            });
        }
    };
    DataEntryEntityComponent.prototype.valueChangedObserver = function (value) {
        console.log('this this', this);
        if (this.jsd.jsonParseError) {
            return;
        }
        var obj = this.jsd.json;
        // continue finding the object untill [ this.prefix.length - 1 ]
        for (var i = 0; i < this.prefix.length - 1; i++) {
            if (obj[this.prefix[i]] === undefined) {
                obj = obj[this.prefix[i]] = {};
            }
            else {
                obj = obj[this.prefix[i]];
            }
        }
        obj[this.prefix[this.prefix.length - 1]] = value;
        this.refreshJsonContent();
    };
    DataEntryEntityComponent.prototype.refreshJsonContent = function () {
        this.jsd.content.JSONContent = JSON.stringify(this.jsd.json, null, 2);
    };
    DataEntryEntityComponent.prototype.getValueFromJsonContent = function () {
        var obj = this.getParentFromJsonContent();
        return obj && obj[this.prefix[this.prefix.length - 1]];
    };
    DataEntryEntityComponent.prototype.addArrElement = function () {
        this.value = this.value || [];
        console.log('adding', this.desc);
        this.valueChangedObserver(this.value);
        this.value.push(this.defaultVal(this.desc.items.type));
        this.refreshJsonContent();
    };
    DataEntryEntityComponent.prototype.getParentFromJsonContent = function () {
        if (this.jsd.jsonParseError || !this.prefix) {
            return;
        }
        var obj = this.jsd.json;
        // continue finding the object untill [ this.prefix.length - 1 ]
        for (var i = 0; i < this.prefix.length - 1; i++) {
            if (obj[this.prefix[i]] === undefined) {
                return;
            }
            else {
                obj = obj[this.prefix[i]];
            }
        }
        return obj;
    };
    DataEntryEntityComponent.prototype.onValueChanged = function () {
        this.valueChangedEventEmitter.next(this.value);
    };
    DataEntryEntityComponent.prototype.getPrefix = function (title) {
        return (this.prefix || []).concat([title]);
    };
    DataEntryEntityComponent.prototype.clearVal = function () {
        var obj = this.getParentFromJsonContent();
        console.log('clear value', (obj || {})[this.prefix[this.prefix.length - 1]]);
        if (Array.isArray(obj)) {
            obj.splice(this.prefix[this.prefix.length - 1], 1);
        }
        else {
            delete (obj || {})[this.prefix[this.prefix.length - 1]];
        }
        this.refreshJsonContent();
    };
    DataEntryEntityComponent.prototype.defaultVal = function (type) {
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], DataEntryEntityComponent.prototype, "desc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], DataEntryEntityComponent.prototype, "prefix", void 0);
    DataEntryEntityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-data-entry-entity',
            template: __webpack_require__("./src/app/components/data-entry-entity/data-entry-entity.component.html"),
            styles: [__webpack_require__("./src/app/components/data-entry-entity/data-entry-entity.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_providers_jsondata_service__["a" /* JSONDataService */]])
    ], DataEntryEntityComponent);
    return DataEntryEntityComponent;
}());

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


/***/ }),

/***/ "./src/app/components/data-entry/data-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"error; else elseTemplate\">\n    <p style=\"color: red\">Unable to parse JSON Schema. JSON is malformed.</p>\n</ng-container>\n<ng-template #elseTemplate>\n    <p *ngIf=\"jsd.jsonParseError\" style=\"color: red\">Unable to parse JSON Content. JSON is malformed.</p>\n    <app-data-entry-entity [desc]=\"schema\"></app-data-entry-entity>\n</ng-template>";

/***/ }),

/***/ "./src/app/components/data-entry/data-entry.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/data-entry/data-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataEntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_providers_jsondata_service__ = __webpack_require__("./src/app/providers/jsondata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataEntryComponent = (function () {
    function DataEntryComponent(jsd, cdr) {
        var _this = this;
        this.jsd = jsd;
        this.cdr = cdr;
        var schemaUpdate = function () {
            try {
                var s = JSON.parse(_this.jsd.content.JSONSchema);
                _this.schema = s;
                _this.error = false;
            }
            catch (err) {
                console.error(err);
                _this.error = true;
            }
        };
        schemaUpdate();
        this.schemaChangedSubscription = this.jsd.content.JSONSchemaChangeEventEmitter
            .debounceTime(1000)
            .distinctUntilChanged()
            .map(function () { return _this.jsd.content.JSONSchema; })
            .subscribe(schemaUpdate);
        this.jsd.jsonChangeEventEmitter
            .subscribe(schemaUpdate);
    }
    DataEntryComponent.prototype.ngOnInit = function () {
    };
    DataEntryComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.schemaChangedSubscription.unsubscribe();
    };
    DataEntryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-data-entry',
            template: __webpack_require__("./src/app/components/data-entry/data-entry.component.html"),
            styles: [__webpack_require__("./src/app/components/data-entry/data-entry.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_providers_jsondata_service__["a" /* JSONDataService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], DataEntryComponent);
    return DataEntryComponent;
}());

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


/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n  <app-widget></app-widget>>\r\n</div>\r\n";

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.title = "App works !";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n\r\n    <div class=\"widget-wrapper\">\r\n        <div class=\"container widget\">\r\n            <div class=\"col-container\">\r\n                <mat-card class=\"col-5\">\r\n                    <mat-card-content>\r\n                        <div>\r\n                            <h2>Configure</h2>\r\n                        </div>\r\n                        <div>\r\n                            <label>JSON Schema</label>\r\n                        </div>\r\n\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"Choose Type\" [(ngModel)]=\"jsd.options.jsonSchemaOptionChoice\" name=\"jsonSchemaOptionChoice\">\r\n                                <mat-option *ngFor=\"let item of jsd.options.jsonSchemaOptions\" [value]=\"item.value\">\r\n                                    {{item.viewValue}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <p>\r\n                            <label>JSON File</label>\r\n                        </p>\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"Choose Type\" [(ngModel)]=\"jsd.options.jsonOptionChoice\" name=\"jsonOptionChoice\">\r\n                                <mat-option *ngFor=\"let item of jsd.options.jsonOptions\" [value]=\"item.value\">\r\n                                    {{item.viewValue}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <button mat-raised-button color=\"warn\" (click)=\"schemaFromJsonContent()\">Schema From JSON</button>\r\n                        <br>\r\n                        <br>\r\n                        <h3>Examples</h3>\r\n                        <p><button mat-raised-button color=\"accent\" (click)=\"schemaFromUrl('./assets/resources/geo.json')\">GEO Example</button></p>\r\n                        <p><button mat-raised-button color=\"accent\" (click)=\"schemaFromUrl('./assets/resources/card.json')\">Card Example</button></p>\r\n                        <p><button mat-raised-button color=\"accent\" (click)=\"schemaFromUrl('./assets/resources/calendar.json')\">Calender Example</button></p>\r\n                        <p><button mat-raised-button color=\"accent\" (click)=\"schemaFromUrl('./assets/resources/address.json')\">Address Example</button></p>\r\n                    </mat-card-content>\r\n                </mat-card>\r\n                <mat-card class=\"col-7\">\r\n                    <div class=\"json-text-container\">\r\n                        <div>\r\n                            <h2>Content Edit</h2>\r\n                        </div>\r\n                        <span [ngSwitch]=\"jsd.options.jsonSchemaOptionChoice\">\r\n                            <div *ngSwitchCase=\"'file-0'\" class=\"pb-2\">\r\n                                <button color=\"primary\" mat-raised-button (click)=\"schemaUpload.click()\">Upload Schema File</button>\r\n                                <input hidden type=\"file\" #schemaUpload (change)=\"onSchemaUpload($event)\"/>\r\n                            </div>\r\n                            <div *ngSwitchDefault>\r\n                                <mat-form-field>\r\n                                    <textarea matInput rows=\"10\" (ngModelChange)=\"onSchemaChange($event)\" placeholder=\"JSON Schema\" [(ngModel)]=\"jsd.content.JSONSchema\"\r\n                                        (keydown.Tab)=\"onTextAreaTabKeypress($event)\"></textarea>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </span>\r\n                        <span [ngSwitch]=\"jsd.options.jsonOptionChoice\">\r\n                            <div *ngSwitchCase=\"'file-0'\" class=\"pb-2\">\r\n                                <button color=\"primary\" mat-raised-button (click)=\"jsonContentUpload.click()\">Upload JSON File</button>\r\n                                <input hidden type=\"file\" #jsonContentUpload (change)=\"onJSONContentUpload($event)\"/>\r\n                            </div>\r\n                            <div *ngSwitchDefault>\r\n                                <mat-form-field>\r\n                                    <textarea matInput rows=\"10\" (ngModelChange)=\"onContentChange($event)\" placeholder=\"JSON Content\" [(ngModel)]=\"jsd.content.JSONContent\"\r\n                                        (keydown.Tab)=\"onTextAreaTabKeypress($event)\"></textarea>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </span>\r\n\r\n                        <p *ngIf=\"jsd.jsonParseError\" style=\"color: red\">JSON Content Parser Error. Malformed JSON.</p>\r\n                    </div>\r\n\r\n                </mat-card>\r\n            </div>\r\n            <div class=\"mt-5 mb-5\"></div>\r\n            <mat-card>\r\n                <mat-card-header>\r\n                    <mat-card-title><h2>Editor</h2></mat-card-title>\r\n                    <mat-card-subtitle>Edit Entries</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                    <div class=\"divider\"></div>\r\n                    <div class=\"entry-elements\">\r\n                        <app-data-entry></app-data-entry>\r\n                    </div>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</main>";

/***/ }),

/***/ "./src/app/components/widget/widget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget {\n  width: 800px;\n  max-width: 100%;\n  max-width: calc(100% - 20px);\n  margin: auto;\n  padding: 20px; }\n\nmat-grid-tile.grid-tiles {\n  background: lightblue; }\n\n.col-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.json-text-container, .json-text-container mat-form-field {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/widget/widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_providers_jsondata_service__ = __webpack_require__("./src/app/providers/jsondata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_providers_userconfig_userconfig_service__ = __webpack_require__("./src/app/providers/userconfig/userconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_generate_schema__ = __webpack_require__("./node_modules/generate-schema/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_generate_schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_generate_schema__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetComponent = (function () {
    function WidgetComponent(jsd, ucr, http) {
        this.jsd = jsd;
        this.ucr = ucr;
        this.http = http;
        this.title = "App works !";
        var indentation = ucr.repository.userConfigBehaviourSubject.value.text.indentation;
        this.indentChar = { 'tabs': '\t', 'spaces': ' '.repeat(indentation.amount) }[indentation.type];
    }
    WidgetComponent.prototype.ngOnInit = function () {
    };
    WidgetComponent.prototype.onSchemaChange = function ($event) {
        this.jsd.content.JSONSchemaChangeEventEmitter.next(this.jsd.content.JSONSchema);
    };
    WidgetComponent.prototype.onContentChange = function ($event) {
        this.jsd.content.JSONContentChangeEventEmitter.next(this.jsd.content.JSONContent);
    };
    WidgetComponent.prototype.onTextAreaTabKeypress = function ($event) {
        $event.preventDefault();
        var textarea = $event.target;
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        // set textarea value to: text before caret + tab + text after caret
        textarea.value = textarea.value.substring(0, start)
            + this.indentChar // TODO: make dynamic
            + textarea.value.substr(end);
        // put caret at right position again
        textarea.selectionStart = textarea.selectionEnd = start + this.indentChar.length;
    };
    WidgetComponent.prototype.onSchemaUpload = function ($event) {
        var _this = this;
        this.getEventResult($event, function (result) {
            _this.jsd.content.JSONSchema = result;
            _this.jsd.options.jsonSchemaOptionChoice = 'textbox-1';
            _this.jsd.content.JSONSchemaChangeEventEmitter.next(result);
        });
    };
    WidgetComponent.prototype.onJSONContentUpload = function ($event) {
        var _this = this;
        this.getEventResult($event, function (result) {
            _this.jsd.content.JSONContent = result;
            _this.jsd.options.jsonOptionChoice = 'textbox-1';
            _this.jsd.content.JSONContentReEvaluateEventEmitter.next(result);
        });
    };
    WidgetComponent.prototype.getEventResult = function ($event, succesCb) {
        var file = $event.target.files[0];
        this.readJSONFile(file, function (err, result) {
            if (err) {
                console.error(err);
                alert(err);
                return;
            }
            else {
                succesCb(result);
            }
        });
    };
    WidgetComponent.prototype.readJSONFile = function (file, cb) {
        console.log('filel type', file.type);
        var fileExtension = /.*\.json/;
        if (file.name.match(fileExtension) === null) {
            return cb('File does not have the extension: ".json"');
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            cb(null, reader.result);
        };
        reader.readAsText(file);
    };
    WidgetComponent.prototype.schemaFromJsonContent = function () {
        var s = __WEBPACK_IMPORTED_MODULE_4_generate_schema__["json"]('Root', this.jsd.json);
        this.jsd.content.JSONSchema = this.jsd.stringifyJSONFromRules(s);
        this.jsd.content.JSONSchemaChangeEventEmitter.next(this.jsd.content.JSONSchema);
        console.log('generated schema', s);
    };
    WidgetComponent.prototype.schemaFromUrl = function (url) {
        var _this = this;
        this.http.get(url).subscribe(function (data) {
            _this.jsd.content.JSONSchema = JSON.stringify(data, null, _this.indentChar);
            _this.jsd.content.JSONSchemaChangeEventEmitter.next(_this.jsd.content.JSONSchema);
            console.log('fetched schema');
        }, function (err) {
            alert('Sorry, unable to connect to the internet');
        });
    };
    WidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget',
            template: __webpack_require__("./src/app/components/widget/widget.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_providers_jsondata_service__["a" /* JSONDataService */], __WEBPACK_IMPORTED_MODULE_2_app_providers_userconfig_userconfig_service__["a" /* UserConfigService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], WidgetComponent);
    return WidgetComponent;
}());



/***/ }),

/***/ "./src/app/electron/debug.inspect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__("electron");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
// Importing this adds a right-click menu with 'Inspect Element' option

var Menu = __WEBPACK_IMPORTED_MODULE_0_electron__["remote"].Menu, MenuItem = __WEBPACK_IMPORTED_MODULE_0_electron__["remote"].MenuItem;
var rightClickPosition = null;
var menu = new Menu();
var menuItem = new MenuItem({
    label: 'Inspect Element',
    click: function () {
        __WEBPACK_IMPORTED_MODULE_0_electron__["remote"].getCurrentWindow().inspectElement(rightClickPosition.x, rightClickPosition.y);
    }
});
menu.append(menuItem);
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    rightClickPosition = { x: e.x, y: e.y };
    menu.popup(__WEBPACK_IMPORTED_MODULE_0_electron__["remote"].getCurrentWindow());
}, false);


/***/ }),

/***/ "./src/app/electron/electron.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__("electron");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);

var Menu = __WEBPACK_IMPORTED_MODULE_0_electron__["remote"].Menu, MenuItem = __WEBPACK_IMPORTED_MODULE_0_electron__["remote"].MenuItem;
// import './debug.inspect';
// const menu = remote.Menu.buildFromTemplate(template);
__WEBPACK_IMPORTED_MODULE_0_electron__["remote"].Menu.setApplicationMenu(null);
// remote.Menu.setApplicationMenu(menu);


/***/ }),

/***/ "./src/app/material/material-angular.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialAngularModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialAngularModule = (function () {
    function MaterialAngularModule() {
    }
    MaterialAngularModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTabsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTabsModule */],
            ],
        })
    ], MaterialAngularModule);
    return MaterialAngularModule;
}());



/***/ }),

/***/ "./src/app/providers/electron.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { msger } from '../../../electron/electron-renderer-msging';
var ElectronService = (function () {
    function ElectronService() {
        this.isElectron = function () {
            return window && window.process && window.process.type;
        };
        // Conditional imports
        if (this.isElectron()) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.childProcess = window.require('child_process');
            __webpack_require__("./src/app/electron/electron.config.ts");
            __webpack_require__("./src/app/electron/debug.inspect.ts");
            // // msging
            // console.log('renderer: lets send a msg');
            // msger.send('default', { msg: 'hello world' }, args => {
            //     console.log('renderer: got response', args)
            // });
        }
    }
    ElectronService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ElectronService);
    return ElectronService;
}());



/***/ }),

/***/ "./src/app/providers/jsondata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JSONDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_providers_userconfig_userconfig_service__ = __webpack_require__("./src/app/providers/userconfig/userconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JSONDataService = (function () {
    function JSONDataService(ucs) {
        var _this = this;
        this.ucs = ucs;
        this.options = {
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
        this.content = {
            JSONSchemaChangeEventEmitter: new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"](),
            JSONContentReEvaluateEventEmitter: new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"](),
            JSONContentChangeEventEmitter: new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"](),
            JSONContent: '{\n\t\n}',
            JSONSchema: '{\n\t\n}'
        };
        this.json = {};
        this.jsonChangeEventEmitter = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        var config = ucs.repository.userConfigBehaviourSubject.value;
        if (config) {
            this.applySettings(config);
        }
        else {
            ucs.repository.userConfigBehaviourSubject
                .take(1)
                .subscribe(this.applySettings);
        }
        this.stringifyJSONFromRules = function (obj) {
            var indentation = _this.getIndentCharForUserConfig();
            try {
                return JSON.stringify(obj, null, indentation);
            }
            catch (err) {
                alert('Unable to stringify object');
                console.error(err);
                return '{}';
            }
        };
        this.content.JSONContentChangeEventEmitter
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(function () {
            _this.content.JSONContentReEvaluateEventEmitter.next(_this.content.JSONContent);
        });
        this.content.JSONContentReEvaluateEventEmitter
            .subscribe(function () {
            try {
                _this.json = JSON.parse(_this.content.JSONContent);
                _this.jsonParseError = false;
                _this.jsonChangeEventEmitter.next(_this.json);
            }
            catch (err) {
                console.log(err);
                _this.jsonParseError = true;
            }
        });
    }
    JSONDataService.prototype.applySettings = function (config) {
        this.options.jsonOptionChoice = this.options.jsonOptions
            .find(function (jo) { return jo.value === config.entry.JSONContentEntryMethod; }).value;
        this.options.jsonSchemaOptionChoice = this.options.jsonSchemaOptions
            .find(function (jso) { return jso.value === config.entry.JSONSchemaEntryMethod; }).value;
    };
    JSONDataService.prototype.getIndentCharForUserConfig = function () {
        if (this.ucs.repository.userConfigBehaviourSubject.value === null) {
            console.error('User Service is not ready yet');
            alert('User Service is not ready yet. Try Again');
            return;
        }
        var indentation = this.ucs.repository.userConfigBehaviourSubject.value.text.indentation;
        return { 'tabs': '\t', 'spaces': ' '.repeat(indentation.amount) }[indentation.type];
    };
    JSONDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_providers_userconfig_userconfig_service__["a" /* UserConfigService */]])
    ], JSONDataService);
    return JSONDataService;
}());



/***/ }),

/***/ "./src/app/providers/userconfig/browser.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserUserConfigRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repository__ = __webpack_require__("./src/app/providers/userconfig/repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);


var BrowserUserConfigRepository = (function () {
    function BrowserUserConfigRepository() {
        this.userConfigBehaviourSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](null);
        this.userConfigBehaviourSubject.next(Object(__WEBPACK_IMPORTED_MODULE_0__repository__["a" /* createDefaultUserConfig */])());
    }
    BrowserUserConfigRepository.prototype.setConfig = function (config) {
        this.userConfigBehaviourSubject.next(config);
    };
    return BrowserUserConfigRepository;
}());



/***/ }),

/***/ "./src/app/providers/userconfig/electron.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronUserConfigRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repository__ = __webpack_require__("./src/app/providers/userconfig/repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);


var ElectronUserConfigRepository = (function () {
    function ElectronUserConfigRepository() {
        this.userConfigBehaviourSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](null);
        this.userConfigBehaviourSubject.next(Object(__WEBPACK_IMPORTED_MODULE_0__repository__["a" /* createDefaultUserConfig */])());
    }
    ElectronUserConfigRepository.prototype.setConfig = function (config) {
        this.userConfigBehaviourSubject.next(config);
    };
    return ElectronUserConfigRepository;
}());



/***/ }),

/***/ "./src/app/providers/userconfig/repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createDefaultUserConfig; });
var createDefaultUserConfig = function () {
    return {
        title: 'userConfig',
        text: {
            indentation: {
                type: 'spaces',
                amount: 4,
            }
        },
        entry: {
            JSONContentEntryMethod: 'textbox-1',
            JSONSchemaEntryMethod: 'textbox-1',
        }
    };
};


/***/ }),

/***/ "./src/app/providers/userconfig/userconfig.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_repository__ = __webpack_require__("./src/app/providers/userconfig/browser.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electron_service__ = __webpack_require__("./src/app/providers/electron.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__electron_repository__ = __webpack_require__("./src/app/providers/userconfig/electron.repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserConfigService = (function () {
    function UserConfigService(electronService) {
        if (electronService.isElectron()) {
            this.repository = new __WEBPACK_IMPORTED_MODULE_3__electron_repository__["a" /* ElectronUserConfigRepository */]();
        }
        else {
            this.repository = new __WEBPACK_IMPORTED_MODULE_1__browser_repository__["a" /* BrowserUserConfigRepository */]();
        }
    }
    UserConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__electron_service__["a" /* ElectronService */]])
    ], UserConfigService);
    return UserConfigService;
}());



/***/ }),

/***/ "./src/environments/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file contains development variables. (When you work in DEV MODE)
// This file is use by webpack. Please don't rename it and don't move it to another directory.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_environments__ = __webpack_require__("./src/environments/index.ts");





if (__WEBPACK_IMPORTED_MODULE_4_environments__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */], {
    preserveWhitespaces: false
})
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix__ = __webpack_require__("./node_modules/zone.js/dist/zone-mix.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ "crypto":
/***/ (function(module, exports) {

if(typeof require('crypto') === 'undefined') {var e = new Error("Cannot find module \"require('crypto')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('crypto');

/***/ }),

/***/ "electron":
/***/ (function(module, exports) {

module.exports = require('electron');

/***/ }),

/***/ "events":
/***/ (function(module, exports) {

if(typeof require('events') === 'undefined') {var e = new Error("Cannot find module \"require('events')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('events');

/***/ }),

/***/ "fs":
/***/ (function(module, exports) {

if(typeof require('fs') === 'undefined') {var e = new Error("Cannot find module \"require('fs')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('fs');

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
//# sourceMappingURL=main.bundle.js.map