"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchCustomersRequest {
    static getAttributeTypeMap() {
        return SearchCustomersRequest.attributeTypeMap;
    }
}
SearchCustomersRequest.discriminator = undefined;
SearchCustomersRequest.attributeTypeMap = [
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "query",
        "baseName": "query",
        "type": "CustomerQuery"
    }
];
exports.SearchCustomersRequest = SearchCustomersRequest;
//# sourceMappingURL=searchCustomersRequest.js.map