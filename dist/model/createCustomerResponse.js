"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCustomerResponse {
    static getAttributeTypeMap() {
        return CreateCustomerResponse.attributeTypeMap;
    }
}
CreateCustomerResponse.discriminator = undefined;
CreateCustomerResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "Customer"
    }
];
exports.CreateCustomerResponse = CreateCustomerResponse;
//# sourceMappingURL=createCustomerResponse.js.map