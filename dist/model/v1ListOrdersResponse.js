"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListOrdersResponse {
    static getAttributeTypeMap() {
        return V1ListOrdersResponse.attributeTypeMap;
    }
}
V1ListOrdersResponse.discriminator = undefined;
V1ListOrdersResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Order>"
    }
];
exports.V1ListOrdersResponse = V1ListOrdersResponse;
//# sourceMappingURL=v1ListOrdersResponse.js.map