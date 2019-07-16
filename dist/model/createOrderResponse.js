"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateOrderResponse {
    static getAttributeTypeMap() {
        return CreateOrderResponse.attributeTypeMap;
    }
}
CreateOrderResponse.discriminator = undefined;
CreateOrderResponse.attributeTypeMap = [
    {
        "name": "order",
        "baseName": "order",
        "type": "Order"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    }
];
exports.CreateOrderResponse = CreateOrderResponse;
//# sourceMappingURL=createOrderResponse.js.map