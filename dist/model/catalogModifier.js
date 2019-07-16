"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogModifier {
    static getAttributeTypeMap() {
        return CatalogModifier.attributeTypeMap;
    }
}
CatalogModifier.discriminator = undefined;
CatalogModifier.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "priceMoney",
        "baseName": "price_money",
        "type": "Money"
    }
];
exports.CatalogModifier = CatalogModifier;
//# sourceMappingURL=catalogModifier.js.map