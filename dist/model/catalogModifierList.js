"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogModifierList {
    static getAttributeTypeMap() {
        return CatalogModifierList.attributeTypeMap;
    }
}
CatalogModifierList.discriminator = undefined;
CatalogModifierList.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "selectionType",
        "baseName": "selection_type",
        "type": "string"
    },
    {
        "name": "modifiers",
        "baseName": "modifiers",
        "type": "Array<CatalogObject>"
    }
];
exports.CatalogModifierList = CatalogModifierList;
//# sourceMappingURL=catalogModifierList.js.map