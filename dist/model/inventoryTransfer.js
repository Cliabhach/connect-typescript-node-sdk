"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryTransfer {
    static getAttributeTypeMap() {
        return InventoryTransfer.attributeTypeMap;
    }
}
InventoryTransfer.discriminator = undefined;
InventoryTransfer.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "referenceId",
        "baseName": "reference_id",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "fromLocationId",
        "baseName": "from_location_id",
        "type": "string"
    },
    {
        "name": "toLocationId",
        "baseName": "to_location_id",
        "type": "string"
    },
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
        "name": "quantity",
        "baseName": "quantity",
        "type": "string"
    },
    {
        "name": "occurredAt",
        "baseName": "occurred_at",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "SourceApplication"
    },
    {
        "name": "employeeId",
        "baseName": "employee_id",
        "type": "string"
    }
];
exports.InventoryTransfer = InventoryTransfer;
//# sourceMappingURL=inventoryTransfer.js.map