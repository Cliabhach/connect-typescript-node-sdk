"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    static getAttributeTypeMap() {
        return Order.attributeTypeMap;
    }
}
Order.discriminator = undefined;
Order.attributeTypeMap = [
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
        "name": "referenceId",
        "baseName": "reference_id",
        "type": "string"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "OrderSource"
    },
    {
        "name": "customerId",
        "baseName": "customer_id",
        "type": "string"
    },
    {
        "name": "lineItems",
        "baseName": "line_items",
        "type": "Array<OrderLineItem>"
    },
    {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<OrderLineItemTax>"
    },
    {
        "name": "discounts",
        "baseName": "discounts",
        "type": "Array<OrderLineItemDiscount>"
    },
    {
        "name": "serviceCharges",
        "baseName": "service_charges",
        "type": "Array<OrderServiceCharge>"
    },
    {
        "name": "fulfillments",
        "baseName": "fulfillments",
        "type": "Array<OrderFulfillment>"
    },
    {
        "name": "returns",
        "baseName": "returns",
        "type": "Array<OrderReturn>"
    },
    {
        "name": "returnAmounts",
        "baseName": "return_amounts",
        "type": "OrderMoneyAmounts"
    },
    {
        "name": "netAmounts",
        "baseName": "net_amounts",
        "type": "OrderMoneyAmounts"
    },
    {
        "name": "roundingAdjustment",
        "baseName": "rounding_adjustment",
        "type": "OrderRoundingAdjustment"
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
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "string"
    },
    {
        "name": "closedAt",
        "baseName": "closed_at",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
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
        "name": "totalDiscountMoney",
        "baseName": "total_discount_money",
        "type": "Money"
    },
    {
        "name": "totalServiceChargeMoney",
        "baseName": "total_service_charge_money",
        "type": "Money"
    }
];
exports.Order = Order;
//# sourceMappingURL=order.js.map