"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}
Transaction.discriminator = undefined;
Transaction.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "locationId",
        "baseName": "location_id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "tenders",
        "baseName": "tenders",
        "type": "Array<Tender>"
    },
    {
        "name": "refunds",
        "baseName": "refunds",
        "type": "Array<Refund>"
    },
    {
        "name": "referenceId",
        "baseName": "reference_id",
        "type": "string"
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "string"
    },
    {
        "name": "clientId",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "shippingAddress",
        "baseName": "shipping_address",
        "type": "Address"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    }
];
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map