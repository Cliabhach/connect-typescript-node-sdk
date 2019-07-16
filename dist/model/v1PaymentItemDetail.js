"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1PaymentItemDetail {
    static getAttributeTypeMap() {
        return V1PaymentItemDetail.attributeTypeMap;
    }
}
V1PaymentItemDetail.discriminator = undefined;
V1PaymentItemDetail.attributeTypeMap = [
    {
        "name": "categoryName",
        "baseName": "category_name",
        "type": "string"
    },
    {
        "name": "sku",
        "baseName": "sku",
        "type": "string"
    },
    {
        "name": "itemId",
        "baseName": "item_id",
        "type": "string"
    },
    {
        "name": "itemVariationId",
        "baseName": "item_variation_id",
        "type": "string"
    }
];
exports.V1PaymentItemDetail = V1PaymentItemDetail;
//# sourceMappingURL=v1PaymentItemDetail.js.map