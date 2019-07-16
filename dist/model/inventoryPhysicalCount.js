"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryPhysicalCount {
    static getAttributeTypeMap() {
        return InventoryPhysicalCount.attributeTypeMap;
    }
}
InventoryPhysicalCount.discriminator = undefined;
InventoryPhysicalCount.attributeTypeMap = [
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
        "name": "source",
        "baseName": "source",
        "type": "SourceApplication"
    },
    {
        "name": "employeeId",
        "baseName": "employee_id",
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
    }
];
exports.InventoryPhysicalCount = InventoryPhysicalCount;
//# sourceMappingURL=inventoryPhysicalCount.js.map