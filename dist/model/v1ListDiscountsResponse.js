"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListDiscountsResponse {
    static getAttributeTypeMap() {
        return V1ListDiscountsResponse.attributeTypeMap;
    }
}
V1ListDiscountsResponse.discriminator = undefined;
V1ListDiscountsResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Discount>"
    }
];
exports.V1ListDiscountsResponse = V1ListDiscountsResponse;
//# sourceMappingURL=v1ListDiscountsResponse.js.map