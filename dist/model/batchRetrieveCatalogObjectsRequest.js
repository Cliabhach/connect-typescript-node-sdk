"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchRetrieveCatalogObjectsRequest {
    static getAttributeTypeMap() {
        return BatchRetrieveCatalogObjectsRequest.attributeTypeMap;
    }
}
BatchRetrieveCatalogObjectsRequest.discriminator = undefined;
BatchRetrieveCatalogObjectsRequest.attributeTypeMap = [
    {
        "name": "objectIds",
        "baseName": "object_ids",
        "type": "Array<string>"
    },
    {
        "name": "includeRelatedObjects",
        "baseName": "include_related_objects",
        "type": "boolean"
    }
];
exports.BatchRetrieveCatalogObjectsRequest = BatchRetrieveCatalogObjectsRequest;
//# sourceMappingURL=batchRetrieveCatalogObjectsRequest.js.map