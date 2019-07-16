"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogItem {
    static getAttributeTypeMap() {
        return CatalogItem.attributeTypeMap;
    }
}
CatalogItem.discriminator = undefined;
CatalogItem.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "abbreviation",
        "baseName": "abbreviation",
        "type": "string"
    },
    {
        "name": "labelColor",
        "baseName": "label_color",
        "type": "string"
    },
    {
        "name": "availableOnline",
        "baseName": "available_online",
        "type": "boolean"
    },
    {
        "name": "availableForPickup",
        "baseName": "available_for_pickup",
        "type": "boolean"
    },
    {
        "name": "availableElectronically",
        "baseName": "available_electronically",
        "type": "boolean"
    },
    {
        "name": "categoryId",
        "baseName": "category_id",
        "type": "string"
    },
    {
        "name": "taxIds",
        "baseName": "tax_ids",
        "type": "Array<string>"
    },
    {
        "name": "modifierListInfo",
        "baseName": "modifier_list_info",
        "type": "Array<CatalogItemModifierListInfo>"
    },
    {
        "name": "variations",
        "baseName": "variations",
        "type": "Array<CatalogObject>"
    },
    {
        "name": "productType",
        "baseName": "product_type",
        "type": "string"
    },
    {
        "name": "skipModifierScreen",
        "baseName": "skip_modifier_screen",
        "type": "boolean"
    }
];
exports.CatalogItem = CatalogItem;
//# sourceMappingURL=catalogItem.js.map