"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListCategoriesResponse {
    static getAttributeTypeMap() {
        return V1ListCategoriesResponse.attributeTypeMap;
    }
}
V1ListCategoriesResponse.discriminator = undefined;
V1ListCategoriesResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Category>"
    }
];
exports.V1ListCategoriesResponse = V1ListCategoriesResponse;
//# sourceMappingURL=v1ListCategoriesResponse.js.map