"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderReturnDiscount {
    static getAttributeTypeMap() {
        return OrderReturnDiscount.attributeTypeMap;
    }
}
OrderReturnDiscount.discriminator = undefined;
OrderReturnDiscount.attributeTypeMap = [
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "sourceDiscountUid",
        "baseName": "source_discount_uid",
        "type": "string"
    },
    {
        "name": "catalogObjectId",
        "baseName": "catalog_object_id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
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
        "name": "scope",
        "baseName": "scope",
        "type": "string"
    }
];
exports.OrderReturnDiscount = OrderReturnDiscount;
//# sourceMappingURL=orderReturnDiscount.js.map