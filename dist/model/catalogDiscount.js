"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogDiscount {
    static getAttributeTypeMap() {
        return CatalogDiscount.attributeTypeMap;
    }
}
CatalogDiscount.discriminator = undefined;
CatalogDiscount.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "discountType",
        "baseName": "discount_type",
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
        "name": "pinRequired",
        "baseName": "pin_required",
        "type": "boolean"
    },
    {
        "name": "labelColor",
        "baseName": "label_color",
        "type": "string"
    }
];
exports.CatalogDiscount = CatalogDiscount;
//# sourceMappingURL=catalogDiscount.js.map