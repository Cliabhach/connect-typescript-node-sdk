"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerCreationSourceFilter {
    static getAttributeTypeMap() {
        return CustomerCreationSourceFilter.attributeTypeMap;
    }
}
CustomerCreationSourceFilter.discriminator = undefined;
CustomerCreationSourceFilter.attributeTypeMap = [
    {
        "name": "values",
        "baseName": "values",
        "type": "Array<string>"
    },
    {
        "name": "rule",
        "baseName": "rule",
        "type": "string"
    }
];
exports.CustomerCreationSourceFilter = CustomerCreationSourceFilter;
//# sourceMappingURL=customerCreationSourceFilter.js.map