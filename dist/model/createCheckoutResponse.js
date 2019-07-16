"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCheckoutResponse {
    static getAttributeTypeMap() {
        return CreateCheckoutResponse.attributeTypeMap;
    }
}
CreateCheckoutResponse.discriminator = undefined;
CreateCheckoutResponse.attributeTypeMap = [
    {
        "name": "checkout",
        "baseName": "checkout",
        "type": "Checkout"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    }
];
exports.CreateCheckoutResponse = CreateCheckoutResponse;
//# sourceMappingURL=createCheckoutResponse.js.map