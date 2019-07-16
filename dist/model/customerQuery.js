"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerQuery {
    static getAttributeTypeMap() {
        return CustomerQuery.attributeTypeMap;
    }
}
CustomerQuery.discriminator = undefined;
CustomerQuery.attributeTypeMap = [
    {
        "name": "filter",
        "baseName": "filter",
        "type": "CustomerFilter"
    },
    {
        "name": "sort",
        "baseName": "sort",
        "type": "CustomerSort"
    }
];
exports.CustomerQuery = CustomerQuery;
//# sourceMappingURL=customerQuery.js.map