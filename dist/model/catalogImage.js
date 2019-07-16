"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogImage {
    static getAttributeTypeMap() {
        return CatalogImage.attributeTypeMap;
    }
}
CatalogImage.discriminator = undefined;
CatalogImage.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "caption",
        "baseName": "caption",
        "type": "string"
    }
];
exports.CatalogImage = CatalogImage;
//# sourceMappingURL=catalogImage.js.map