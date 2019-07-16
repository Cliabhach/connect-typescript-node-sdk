"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListCatalogRequest {
    static getAttributeTypeMap() {
        return ListCatalogRequest.attributeTypeMap;
    }
}
ListCatalogRequest.discriminator = undefined;
ListCatalogRequest.attributeTypeMap = [
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    },
    {
        "name": "types",
        "baseName": "types",
        "type": "string"
    }
];
exports.ListCatalogRequest = ListCatalogRequest;
//# sourceMappingURL=listCatalogRequest.js.map