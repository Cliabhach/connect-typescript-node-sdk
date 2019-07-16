"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListInventoryResponse {
    static getAttributeTypeMap() {
        return V1ListInventoryResponse.attributeTypeMap;
    }
}
V1ListInventoryResponse.discriminator = undefined;
V1ListInventoryResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1InventoryEntry>"
    }
];
exports.V1ListInventoryResponse = V1ListInventoryResponse;
//# sourceMappingURL=v1ListInventoryResponse.js.map