"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetrieveCatalogObjectRequest {
    static getAttributeTypeMap() {
        return RetrieveCatalogObjectRequest.attributeTypeMap;
    }
}
RetrieveCatalogObjectRequest.discriminator = undefined;
RetrieveCatalogObjectRequest.attributeTypeMap = [
    {
        "name": "includeRelatedObjects",
        "baseName": "include_related_objects",
        "type": "boolean"
    }
];
exports.RetrieveCatalogObjectRequest = RetrieveCatalogObjectRequest;
//# sourceMappingURL=retrieveCatalogObjectRequest.js.map