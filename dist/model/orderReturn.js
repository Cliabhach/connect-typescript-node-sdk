"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderReturn {
    static getAttributeTypeMap() {
        return OrderReturn.attributeTypeMap;
    }
}
OrderReturn.discriminator = undefined;
OrderReturn.attributeTypeMap = [
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "sourceOrderId",
        "baseName": "source_order_id",
        "type": "string"
    },
    {
        "name": "returnLineItems",
        "baseName": "return_line_items",
        "type": "Array<OrderReturnLineItem>"
    },
    {
        "name": "returnServiceCharges",
        "baseName": "return_service_charges",
        "type": "Array<OrderReturnServiceCharge>"
    },
    {
        "name": "returnTaxes",
        "baseName": "return_taxes",
        "type": "Array<OrderReturnTax>"
    },
    {
        "name": "returnDiscounts",
        "baseName": "return_discounts",
        "type": "Array<OrderReturnDiscount>"
    },
    {
        "name": "roundingAdjustment",
        "baseName": "rounding_adjustment",
        "type": "OrderRoundingAdjustment"
    },
    {
        "name": "returnAmounts",
        "baseName": "return_amounts",
        "type": "OrderMoneyAmounts"
    }
];
exports.OrderReturn = OrderReturn;
//# sourceMappingURL=orderReturn.js.map