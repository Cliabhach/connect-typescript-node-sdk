"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogQueryText {
    static getAttributeTypeMap() {
        return CatalogQueryText.attributeTypeMap;
    }
}
CatalogQueryText.discriminator = undefined;
CatalogQueryText.attributeTypeMap = [
    {
        "name": "keywords",
        "baseName": "keywords",
        "type": "Array<string>"
    }
];
exports.CatalogQueryText = CatalogQueryText;
//# sourceMappingURL=catalogQueryText.js.map