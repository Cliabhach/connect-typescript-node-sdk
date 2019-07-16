"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchRetrieveCatalogObjectsResponse {
    static getAttributeTypeMap() {
        return BatchRetrieveCatalogObjectsResponse.attributeTypeMap;
    }
}
BatchRetrieveCatalogObjectsResponse.discriminator = undefined;
BatchRetrieveCatalogObjectsResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "objects",
        "baseName": "objects",
        "type": "Array<CatalogObject>"
    },
    {
        "name": "relatedObjects",
        "baseName": "related_objects",
        "type": "Array<CatalogObject>"
    }
];
exports.BatchRetrieveCatalogObjectsResponse = BatchRetrieveCatalogObjectsResponse;
//# sourceMappingURL=batchRetrieveCatalogObjectsResponse.js.map