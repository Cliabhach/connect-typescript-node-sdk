"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryCount {
    static getAttributeTypeMap() {
        return InventoryCount.attributeTypeMap;
    }
}
InventoryCount.discriminator = undefined;
InventoryCount.attributeTypeMap = [
    {
        "name": "catalogObjectId",
        "baseName": "catalog_object_id",
        "type": "string"
    },
    {
        "name": "catalogObjectType",
        "baseName": "catalog_object_type",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "locationId",
        "baseName": "location_id",
        "type": "string"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "string"
    },
    {
        "name": "calculatedAt",
        "baseName": "calculated_at",
        "type": "string"
    }
];
exports.InventoryCount = InventoryCount;
//# sourceMappingURL=inventoryCount.js.map