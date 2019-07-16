"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryChange {
    static getAttributeTypeMap() {
        return InventoryChange.attributeTypeMap;
    }
}
InventoryChange.discriminator = undefined;
InventoryChange.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "physicalCount",
        "baseName": "physical_count",
        "type": "InventoryPhysicalCount"
    },
    {
        "name": "adjustment",
        "baseName": "adjustment",
        "type": "InventoryAdjustment"
    },
    {
        "name": "transfer",
        "baseName": "transfer",
        "type": "InventoryTransfer"
    }
];
exports.InventoryChange = InventoryChange;
//# sourceMappingURL=inventoryChange.js.map