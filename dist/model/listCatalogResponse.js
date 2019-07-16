"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListCatalogResponse {
    static getAttributeTypeMap() {
        return ListCatalogResponse.attributeTypeMap;
    }
}
ListCatalogResponse.discriminator = undefined;
ListCatalogResponse.attributeTypeMap = [
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
    }
];
exports.ListCatalogResponse = ListCatalogResponse;
//# sourceMappingURL=listCatalogResponse.js.map