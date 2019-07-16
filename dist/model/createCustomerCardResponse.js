"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCustomerCardResponse {
    static getAttributeTypeMap() {
        return CreateCustomerCardResponse.attributeTypeMap;
    }
}
CreateCustomerCardResponse.discriminator = undefined;
CreateCustomerCardResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    },
    {
        "name": "card",
        "baseName": "card",
        "type": "Card"
    }
];
exports.CreateCustomerCardResponse = CreateCustomerCardResponse;
//# sourceMappingURL=createCustomerCardResponse.js.map