"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Variation {
    static getAttributeTypeMap() {
        return V1Variation.attributeTypeMap;
    }
}
V1Variation.discriminator = undefined;
V1Variation.attributeTypeMap = [
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
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "ordinal",
        "baseName": "ordinal",
        "type": "number"
    },
    {
        "name": "pricingType",
        "baseName": "pricing_type",
        "type": "string"
    },
    {
        "name": "priceMoney",
        "baseName": "price_money",
        "type": "V1Money"
    },
    {
        "name": "sku",
        "baseName": "sku",
        "type": "string"
    },
    {
        "name": "trackInventory",
        "baseName": "track_inventory",
        "type": "boolean"
    },
    {
        "name": "inventoryAlertType",
        "baseName": "inventory_alert_type",
        "type": "string"
    },
    {
        "name": "inventoryAlertThreshold",
        "baseName": "inventory_alert_threshold",
        "type": "number"
    },
    {
        "name": "userData",
        "baseName": "user_data",
        "type": "string"
    },
    {
        "name": "v2Id",
        "baseName": "v2_id",
        "type": "string"
    }
];
exports.V1Variation = V1Variation;
//# sourceMappingURL=v1Variation.js.map