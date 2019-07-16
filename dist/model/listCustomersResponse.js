"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListCustomersResponse {
    static getAttributeTypeMap() {
        return ListCustomersResponse.attributeTypeMap;
    }
}
ListCustomersResponse.discriminator = undefined;
ListCustomersResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    },
    {
        "name": "customers",
        "baseName": "customers",
        "type": "Array<Customer>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.ListCustomersResponse = ListCustomersResponse;
//# sourceMappingURL=listCustomersResponse.js.map