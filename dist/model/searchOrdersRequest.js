"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchOrdersRequest {
    static getAttributeTypeMap() {
        return SearchOrdersRequest.attributeTypeMap;
    }
}
SearchOrdersRequest.discriminator = undefined;
SearchOrdersRequest.attributeTypeMap = [
    {
        "name": "locationIds",
        "baseName": "location_ids",
        "type": "Array<string>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    },
    {
        "name": "query",
        "baseName": "query",
        "type": "SearchOrdersQuery"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "returnEntries",
        "baseName": "return_entries",
        "type": "boolean"
    }
];
exports.SearchOrdersRequest = SearchOrdersRequest;
//# sourceMappingURL=searchOrdersRequest.js.map