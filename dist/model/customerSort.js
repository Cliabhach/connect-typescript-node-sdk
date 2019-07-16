"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerSort {
    static getAttributeTypeMap() {
        return CustomerSort.attributeTypeMap;
    }
}
CustomerSort.discriminator = undefined;
CustomerSort.attributeTypeMap = [
    {
        "name": "field",
        "baseName": "field",
        "type": "string"
    },
    {
        "name": "order",
        "baseName": "order",
        "type": "string"
    }
];
exports.CustomerSort = CustomerSort;
//# sourceMappingURL=customerSort.js.map