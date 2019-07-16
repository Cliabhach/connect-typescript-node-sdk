"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListPagesResponse {
    static getAttributeTypeMap() {
        return V1ListPagesResponse.attributeTypeMap;
    }
}
V1ListPagesResponse.discriminator = undefined;
V1ListPagesResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Page>"
    }
];
exports.V1ListPagesResponse = V1ListPagesResponse;
//# sourceMappingURL=v1ListPagesResponse.js.map