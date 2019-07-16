"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryAdjustment {
    static getAttributeTypeMap() {
        return InventoryAdjustment.attributeTypeMap;
    }
}
InventoryAdjustment.discriminator = undefined;
InventoryAdjustment.attributeTypeMap = [
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
        "name": "fromState",
        "baseName": "from_state",
        "type": "string"
    },
    {
        "name": "toState",
        "baseName": "to_state",
        "type": "string"
    },
    {
        "name": "locationId",
        "baseName": "location_id",
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
        "name": "totalPriceMoney",
        "baseName": "total_price_money",
        "type": "Money"
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
    },
    {
        "name": "transactionId",
        "baseName": "transaction_id",
        "type": "string"
    },
    {
        "name": "refundId",
        "baseName": "refund_id",
        "type": "string"
    },
    {
        "name": "purchaseOrderId",
        "baseName": "purchase_order_id",
        "type": "string"
    },
    {
        "name": "goodsReceiptId",
        "baseName": "goods_receipt_id",
        "type": "string"
    }
];
exports.InventoryAdjustment = InventoryAdjustment;
//# sourceMappingURL=inventoryAdjustment.js.map