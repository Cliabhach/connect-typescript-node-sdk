"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogItemModifierListInfo {
    static getAttributeTypeMap() {
        return CatalogItemModifierListInfo.attributeTypeMap;
    }
}
CatalogItemModifierListInfo.discriminator = undefined;
CatalogItemModifierListInfo.attributeTypeMap = [
    {
        "name": "modifierListId",
        "baseName": "modifier_list_id",
        "type": "string"
    },
    {
        "name": "modifierOverrides",
        "baseName": "modifier_overrides",
        "type": "Array<CatalogModifierOverride>"
    },
    {
        "name": "minSelectedModifiers",
        "baseName": "min_selected_modifiers",
        "type": "number"
    },
    {
        "name": "maxSelectedModifiers",
        "baseName": "max_selected_modifiers",
        "type": "number"
    },
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean"
    }
];
exports.CatalogItemModifierListInfo = CatalogItemModifierListInfo;
//# sourceMappingURL=catalogItemModifierListInfo.js.map