"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpsertCatalogObjectRequest {
    static getAttributeTypeMap() {
        return UpsertCatalogObjectRequest.attributeTypeMap;
    }
}
UpsertCatalogObjectRequest.discriminator = undefined;
UpsertCatalogObjectRequest.attributeTypeMap = [
    {
        "name": "idempotencyKey",
        "baseName": "idempotency_key",
        "type": "string"
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "CatalogObject"
    }
];
exports.UpsertCatalogObjectRequest = UpsertCatalogObjectRequest;
//# sourceMappingURL=upsertCatalogObjectRequest.js.map