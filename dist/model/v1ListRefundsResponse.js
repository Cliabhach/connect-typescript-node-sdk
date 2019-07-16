"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListRefundsResponse {
    static getAttributeTypeMap() {
        return V1ListRefundsResponse.attributeTypeMap;
    }
}
V1ListRefundsResponse.discriminator = undefined;
V1ListRefundsResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Refund>"
    }
];
exports.V1ListRefundsResponse = V1ListRefundsResponse;
//# sourceMappingURL=v1ListRefundsResponse.js.map