"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteCatalogObjectResponse {
    static getAttributeTypeMap() {
        return DeleteCatalogObjectResponse.attributeTypeMap;
    }
}
DeleteCatalogObjectResponse.discriminator = undefined;
DeleteCatalogObjectResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "deletedObjectIds",
        "baseName": "deleted_object_ids",
        "type": "Array<string>"
    },
    {
        "name": "deletedAt",
        "baseName": "deleted_at",
        "type": "string"
    }
];
exports.DeleteCatalogObjectResponse = DeleteCatalogObjectResponse;
//# sourceMappingURL=deleteCatalogObjectResponse.js.map