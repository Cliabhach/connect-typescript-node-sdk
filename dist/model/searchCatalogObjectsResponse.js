"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchCatalogObjectsResponse {
    static getAttributeTypeMap() {
        return SearchCatalogObjectsResponse.attributeTypeMap;
    }
}
SearchCatalogObjectsResponse.discriminator = undefined;
SearchCatalogObjectsResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
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
exports.SearchCatalogObjectsResponse = SearchCatalogObjectsResponse;
//# sourceMappingURL=searchCatalogObjectsResponse.js.map