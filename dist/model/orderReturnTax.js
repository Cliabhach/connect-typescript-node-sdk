"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderReturnTax {
    static getAttributeTypeMap() {
        return OrderReturnTax.attributeTypeMap;
    }
}
OrderReturnTax.discriminator = undefined;
OrderReturnTax.attributeTypeMap = [
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "sourceTaxUid",
        "baseName": "source_tax_uid",
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
exports.OrderReturnTax = OrderReturnTax;
//# sourceMappingURL=orderReturnTax.js.map