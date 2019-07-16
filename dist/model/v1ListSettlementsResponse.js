"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListSettlementsResponse {
    static getAttributeTypeMap() {
        return V1ListSettlementsResponse.attributeTypeMap;
    }
}
V1ListSettlementsResponse.discriminator = undefined;
V1ListSettlementsResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Settlement>"
    }
];
exports.V1ListSettlementsResponse = V1ListSettlementsResponse;
//# sourceMappingURL=v1ListSettlementsResponse.js.map