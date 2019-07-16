"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateOrderRequest {
    static getAttributeTypeMap() {
        return CreateOrderRequest.attributeTypeMap;
    }
}
CreateOrderRequest.discriminator = undefined;
CreateOrderRequest.attributeTypeMap = [
    {
        "name": "order",
        "baseName": "order",
        "type": "Order"
    },
    {
        "name": "idempotencyKey",
        "baseName": "idempotency_key",
        "type": "string"
    },
    {
        "name": "referenceId",
        "baseName": "reference_id",
        "type": "string"
    },
    {
        "name": "lineItems",
        "baseName": "line_items",
        "type": "Array<CreateOrderRequestLineItem>"
    },
    {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<CreateOrderRequestTax>"
    },
    {
        "name": "discounts",
        "baseName": "discounts",
        "type": "Array<CreateOrderRequestDiscount>"
    }
];
exports.CreateOrderRequest = CreateOrderRequest;
//# sourceMappingURL=createOrderRequest.js.map