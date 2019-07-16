"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetrieveCatalogObjectResponse {
    static getAttributeTypeMap() {
        return RetrieveCatalogObjectResponse.attributeTypeMap;
    }
}
RetrieveCatalogObjectResponse.discriminator = undefined;
RetrieveCatalogObjectResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "CatalogObject"
    },
    {
        "name": "relatedObjects",
        "baseName": "related_objects",
        "type": "Array<CatalogObject>"
    }
];
exports.RetrieveCatalogObjectResponse = RetrieveCatalogObjectResponse;
//# sourceMappingURL=retrieveCatalogObjectResponse.js.map