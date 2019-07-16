"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemVariationLocationOverrides {
    static getAttributeTypeMap() {
        return ItemVariationLocationOverrides.attributeTypeMap;
    }
}
ItemVariationLocationOverrides.discriminator = undefined;
ItemVariationLocationOverrides.attributeTypeMap = [
    {
        "name": "locationId",
        "baseName": "location_id",
        "type": "string"
    },
    {
        "name": "priceMoney",
        "baseName": "price_money",
        "type": "Money"
    },
    {
        "name": "pricingType",
        "baseName": "pricing_type",
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
    }
];
exports.ItemVariationLocationOverrides = ItemVariationLocationOverrides;
//# sourceMappingURL=itemVariationLocationOverrides.js.map