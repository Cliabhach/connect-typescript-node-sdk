"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ModifierOption {
    static getAttributeTypeMap() {
        return V1ModifierOption.attributeTypeMap;
    }
}
V1ModifierOption.discriminator = undefined;
V1ModifierOption.attributeTypeMap = [
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
        "name": "priceMoney",
        "baseName": "price_money",
        "type": "V1Money"
    },
    {
        "name": "onByDefault",
        "baseName": "on_by_default",
        "type": "boolean"
    },
    {
        "name": "ordinal",
        "baseName": "ordinal",
        "type": "number"
    },
    {
        "name": "modifierListId",
        "baseName": "modifier_list_id",
        "type": "string"
    },
    {
        "name": "v2Id",
        "baseName": "v2_id",
        "type": "string"
    }
];
exports.V1ModifierOption = V1ModifierOption;
//# sourceMappingURL=v1ModifierOption.js.map