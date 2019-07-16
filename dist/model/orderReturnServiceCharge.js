"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderReturnServiceCharge {
    static getAttributeTypeMap() {
        return OrderReturnServiceCharge.attributeTypeMap;
    }
}
OrderReturnServiceCharge.discriminator = undefined;
OrderReturnServiceCharge.attributeTypeMap = [
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "sourceServiceChargeUid",
        "baseName": "source_service_charge_uid",
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
        "name": "returnTaxes",
        "baseName": "return_taxes",
        "type": "Array<OrderReturnTax>"
    }
];
exports.OrderReturnServiceCharge = OrderReturnServiceCharge;
//# sourceMappingURL=orderReturnServiceCharge.js.map