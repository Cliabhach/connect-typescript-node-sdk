"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogProductSet {
    static getAttributeTypeMap() {
        return CatalogProductSet.attributeTypeMap;
    }
}
CatalogProductSet.discriminator = undefined;
CatalogProductSet.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "productIdsAny",
        "baseName": "product_ids_any",
        "type": "Array<string>"
    },
    {
        "name": "productIdsAll",
        "baseName": "product_ids_all",
        "type": "Array<string>"
    },
    {
        "name": "quantityExact",
        "baseName": "quantity_exact",
        "type": "number"
    },
    {
        "name": "quantityMin",
        "baseName": "quantity_min",
        "type": "number"
    },
    {
        "name": "quantityMax",
        "baseName": "quantity_max",
        "type": "number"
    },
    {
        "name": "allProducts",
        "baseName": "all_products",
        "type": "boolean"
    }
];
exports.CatalogProductSet = CatalogProductSet;
//# sourceMappingURL=catalogProductSet.js.map