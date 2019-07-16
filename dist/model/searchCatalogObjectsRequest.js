"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchCatalogObjectsRequest {
    static getAttributeTypeMap() {
        return SearchCatalogObjectsRequest.attributeTypeMap;
    }
}
SearchCatalogObjectsRequest.discriminator = undefined;
SearchCatalogObjectsRequest.attributeTypeMap = [
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    },
    {
        "name": "objectTypes",
        "baseName": "object_types",
        "type": "Array<string>"
    },
    {
        "name": "includeDeletedObjects",
        "baseName": "include_deleted_objects",
        "type": "boolean"
    },
    {
        "name": "includeRelatedObjects",
        "baseName": "include_related_objects",
        "type": "boolean"
    },
    {
        "name": "beginTime",
        "baseName": "begin_time",
        "type": "string"
    },
    {
        "name": "query",
        "baseName": "query",
        "type": "CatalogQuery"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    }
];
exports.SearchCatalogObjectsRequest = SearchCatalogObjectsRequest;
//# sourceMappingURL=searchCatalogObjectsRequest.js.map