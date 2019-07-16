"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListFeesResponse {
    static getAttributeTypeMap() {
        return V1ListFeesResponse.attributeTypeMap;
    }
}
V1ListFeesResponse.discriminator = undefined;
V1ListFeesResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Fee>"
    }
];
exports.V1ListFeesResponse = V1ListFeesResponse;
//# sourceMappingURL=v1ListFeesResponse.js.map