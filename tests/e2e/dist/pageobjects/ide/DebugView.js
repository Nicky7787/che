"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/
const inversify_1 = require("inversify");
const inversify_types_1 = require("../../inversify.types");
const DriverHelper_1 = require("../../utils/DriverHelper");
const selenium_webdriver_1 = require("selenium-webdriver");
const Ide_1 = require("./Ide");
const Logger_1 = require("../../utils/Logger");
let DebugView = class DebugView {
    constructor(driverHelper, ide) {
        this.driverHelper = driverHelper;
        this.ide = ide;
    }
    clickOnDebugConfigurationDropDown() {
        return __awaiter(this, void 0, void 0, function* () {
            Logger_1.Logger.debug('DebugView.clickOnDebugConfigurationDropDown');
            yield this.driverHelper.waitAndClick(selenium_webdriver_1.By.css('select.debug-configuration'));
        });
    }
    clickOnDebugConfigurationItem(itemText) {
        return __awaiter(this, void 0, void 0, function* () {
            Logger_1.Logger.debug(`DebugView.clickOnDebugConfigurationItem "${itemText}"`);
            const configurationItemLocator = selenium_webdriver_1.By.xpath(`//select[@class='debug-configuration']//option[text()=\'${itemText}\']`);
            yield this.driverHelper.waitAndClick(configurationItemLocator);
            yield this.ide.performKeyCombination(selenium_webdriver_1.Key.ESCAPE);
        });
    }
    clickOnRunDebugButton() {
        return __awaiter(this, void 0, void 0, function* () {
            Logger_1.Logger.debug('DebugView.clickOnRunDebugButton');
            const runDebugButtonLocator = selenium_webdriver_1.By.xpath('//span[@title=\'Start Debugging\']');
            yield this.driverHelper.waitAndClick(runDebugButtonLocator);
        });
    }
};
DebugView = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(inversify_types_1.CLASSES.DriverHelper)),
    __param(1, inversify_1.inject(inversify_types_1.CLASSES.Ide)),
    __metadata("design:paramtypes", [DriverHelper_1.DriverHelper,
        Ide_1.Ide])
], DebugView);
exports.DebugView = DebugView;
//# sourceMappingURL=DebugView.js.map