"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerPreferences {
    static getAttributeTypeMap() {
        return CustomerPreferences.attributeTypeMap;
    }
}
CustomerPreferences.discriminator = undefined;
CustomerPreferences.attributeTypeMap = [
    {
        "name": "emailUnsubscribed",
        "baseName": "email_unsubscribed",
        "type": "boolean"
    }
];
exports.CustomerPreferences = CustomerPreferences;
//# sourceMappingURL=customerPreferences.js.map