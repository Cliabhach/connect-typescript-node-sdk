"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogQueryItemsForTax {
    static getAttributeTypeMap() {
        return CatalogQueryItemsForTax.attributeTypeMap;
    }
}
CatalogQueryItemsForTax.discriminator = undefined;
CatalogQueryItemsForTax.attributeTypeMap = [
    {
        "name": "taxIds",
        "baseName": "tax_ids",
        "type": "Array<string>"
    }
];
exports.CatalogQueryItemsForTax = CatalogQueryItemsForTax;
//# sourceMappingURL=catalogQueryItemsForTax.js.map