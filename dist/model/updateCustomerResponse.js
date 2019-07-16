"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateCustomerResponse {
    static getAttributeTypeMap() {
        return UpdateCustomerResponse.attributeTypeMap;
    }
}
UpdateCustomerResponse.discriminator = undefined;
UpdateCustomerResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "Customer"
    }
];
exports.UpdateCustomerResponse = UpdateCustomerResponse;
//# sourceMappingURL=updateCustomerResponse.js.map