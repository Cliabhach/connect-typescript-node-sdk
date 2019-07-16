"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListLocationsResponse {
    static getAttributeTypeMap() {
        return V1ListLocationsResponse.attributeTypeMap;
    }
}
V1ListLocationsResponse.discriminator = undefined;
V1ListLocationsResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Merchant>"
    }
];
exports.V1ListLocationsResponse = V1ListLocationsResponse;
//# sourceMappingURL=v1ListLocationsResponse.js.map