"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListPaymentsResponse {
    static getAttributeTypeMap() {
        return V1ListPaymentsResponse.attributeTypeMap;
    }
}
V1ListPaymentsResponse.discriminator = undefined;
V1ListPaymentsResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Payment>"
    }
];
exports.V1ListPaymentsResponse = V1ListPaymentsResponse;
//# sourceMappingURL=v1ListPaymentsResponse.js.map