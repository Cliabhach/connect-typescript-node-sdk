"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogModifierOverride {
    static getAttributeTypeMap() {
        return CatalogModifierOverride.attributeTypeMap;
    }
}
CatalogModifierOverride.discriminator = undefined;
CatalogModifierOverride.attributeTypeMap = [
    {
        "name": "modifierId",
        "baseName": "modifier_id",
        "type": "string"
    },
    {
        "name": "onByDefault",
        "baseName": "on_by_default",
        "type": "boolean"
    }
];
exports.CatalogModifierOverride = CatalogModifierOverride;
//# sourceMappingURL=catalogModifierOverride.js.map