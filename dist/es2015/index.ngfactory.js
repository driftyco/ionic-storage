/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from './index';
var IonicStorageModuleInjector = (function (_super) {
    __extends(IonicStorageModuleInjector, _super);
    function IonicStorageModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    IonicStorageModuleInjector.prototype.createInternal = function () {
        this._IonicStorageModule_0 = new import1.IonicStorageModule();
        return this._IonicStorageModule_0;
    };
    IonicStorageModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import1.IonicStorageModule)) {
            return this._IonicStorageModule_0;
        }
        return notFoundResult;
    };
    IonicStorageModuleInjector.prototype.destroyInternal = function () {
    };
    return IonicStorageModuleInjector;
}(import0.ɵNgModuleInjector));
export var IonicStorageModuleNgFactory = new import0.NgModuleFactory(IonicStorageModuleInjector, import1.IonicStorageModule);
