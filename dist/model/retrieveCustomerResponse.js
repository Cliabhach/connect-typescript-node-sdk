"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetrieveCustomerResponse {
    static getAttributeTypeMap() {
        return RetrieveCustomerResponse.attributeTypeMap;
    }
}
RetrieveCustomerResponse.discriminator = undefined;
RetrieveCustomerResponse.attributeTypeMap = [
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
exports.RetrieveCustomerResponse = RetrieveCustomerResponse;
//# sourceMappingURL=retrieveCustomerResponse.js.map