"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogItemVariation {
    static getAttributeTypeMap() {
        return CatalogItemVariation.attributeTypeMap;
    }
}
CatalogItemVariation.discriminator = undefined;
CatalogItemVariation.attributeTypeMap = [
    {
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "sku",
        "baseName": "sku",
        "type": "string"
    },
    {
        "name": "upc",
        "baseName": "upc",
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
        "type": "Money"
    },
    {
        "name": "locationOverrides",
        "baseName": "location_overrides",
        "type": "Array<ItemVariationLocationOverrides>"
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
        "name": "serviceDuration",
        "baseName": "service_duration",
        "type": "number"
    },
    {
        "name": "measurementUnitId",
        "baseName": "measurement_unit_id",
        "type": "string"
    }
];
exports.CatalogItemVariation = CatalogItemVariation;
//# sourceMappingURL=catalogItemVariation.js.map