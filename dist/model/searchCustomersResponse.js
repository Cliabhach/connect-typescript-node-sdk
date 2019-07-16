"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchCustomersResponse {
    static getAttributeTypeMap() {
        return SearchCustomersResponse.attributeTypeMap;
    }
}
SearchCustomersResponse.discriminator = undefined;
SearchCustomersResponse.attributeTypeMap = [
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
exports.SearchCustomersResponse = SearchCustomersResponse;
//# sourceMappingURL=searchCustomersResponse.js.map