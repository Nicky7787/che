"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestConstants_1 = require("../TestConstants");
/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/
class Logger {
    /**
     * Uses for logging of the public methods of the pageobjects.
     * @param text log text
     */
    static debug(text) {
        if (TestConstants_1.TestConstants.TS_SELENIUM_LOG_LEVEL === 'INFO') {
            return;
        }
        console.log(`        ▼ ${text}`);
    }
    /**
     * Uses for logging of the public methods of the {@link DriverHelper} or
     * private methods inside of pageobjects.
     * @param text log text
     */
    static trace(text) {
        if (TestConstants_1.TestConstants.TS_SELENIUM_LOG_LEVEL === 'INFO') {
            return;
        }
        if (TestConstants_1.TestConstants.TS_SELENIUM_LOG_LEVEL === 'DEBUG') {
            return;
        }
        console.log(`            ‣ ${text}`);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map