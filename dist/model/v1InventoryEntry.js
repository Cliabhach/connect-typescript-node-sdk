"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1InventoryEntry {
    static getAttributeTypeMap() {
        return V1InventoryEntry.attributeTypeMap;
    }
}
V1InventoryEntry.discriminator = undefined;
V1InventoryEntry.attributeTypeMap = [
    {
        "name": "variationId",
        "baseName": "variation_id",
        "type": "string"
    },
    {
        "name": "quantityOnHand",
        "baseName": "quantity_on_hand",
        "type": "number"
    }
];
exports.V1InventoryEntry = V1InventoryEntry;
//# sourceMappingURL=v1InventoryEntry.js.map