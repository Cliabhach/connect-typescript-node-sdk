"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListItemsResponse {
    static getAttributeTypeMap() {
        return V1ListItemsResponse.attributeTypeMap;
    }
}
V1ListItemsResponse.discriminator = undefined;
V1ListItemsResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Item>"
    }
];
exports.V1ListItemsResponse = V1ListItemsResponse;
//# sourceMappingURL=v1ListItemsResponse.js.map