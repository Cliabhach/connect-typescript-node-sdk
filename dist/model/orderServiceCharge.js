"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderServiceCharge {
    static getAttributeTypeMap() {
        return OrderServiceCharge.attributeTypeMap;
    }
}
OrderServiceCharge.discriminator = undefined;
OrderServiceCharge.attributeTypeMap = [
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "catalogObjectId",
        "baseName": "catalog_object_id",
        "type": "string"
    },
    {
        "name": "percentage",
        "baseName": "percentage",
        "type": "string"
    },
    {
        "name": "amountMoney",
        "baseName": "amount_money",
        "type": "Money"
    },
    {
        "name": "appliedMoney",
        "baseName": "applied_money",
        "type": "Money"
    },
    {
        "name": "totalMoney",
        "baseName": "total_money",
        "type": "Money"
    },
    {
        "name": "totalTaxMoney",
        "baseName": "total_tax_money",
        "type": "Money"
    },
    {
        "name": "calculationPhase",
        "baseName": "calculation_phase",
        "type": "string"
    },
    {
        "name": "taxable",
        "baseName": "taxable",
        "type": "boolean"
    },
    {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<OrderLineItemTax>"
    }
];
exports.OrderServiceCharge = OrderServiceCharge;
//# sourceMappingURL=orderServiceCharge.js.map