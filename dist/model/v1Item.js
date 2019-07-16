"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Item {
    static getAttributeTypeMap() {
        return V1Item.attributeTypeMap;
    }
}
V1Item.discriminator = undefined;
V1Item.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
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
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "color",
        "baseName": "color",
        "type": "string"
    },
    {
        "name": "abbreviation",
        "baseName": "abbreviation",
        "type": "string"
    },
    {
        "name": "visibility",
        "baseName": "visibility",
        "type": "string"
    },
    {
        "name": "availableOnline",
        "baseName": "available_online",
        "type": "boolean"
    },
    {
        "name": "masterImage",
        "baseName": "master_image",
        "type": "V1ItemImage"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "V1Category"
    },
    {
        "name": "variations",
        "baseName": "variations",
        "type": "Array<V1Variation>"
    },
    {
        "name": "modifierLists",
        "baseName": "modifier_lists",
        "type": "Array<V1ModifierList>"
    },
    {
        "name": "fees",
        "baseName": "fees",
        "type": "Array<V1Fee>"
    },
    {
        "name": "taxable",
        "baseName": "taxable",
        "type": "boolean"
    },
    {
        "name": "categoryId",
        "baseName": "category_id",
        "type": "string"
    },
    {
        "name": "availableForPickup",
        "baseName": "available_for_pickup",
        "type": "boolean"
    },
    {
        "name": "v2Id",
        "baseName": "v2_id",
        "type": "string"
    }
];
exports.V1Item = V1Item;
//# sourceMappingURL=v1Item.js.map