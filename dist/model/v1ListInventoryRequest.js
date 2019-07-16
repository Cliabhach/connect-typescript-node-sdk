"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListInventoryRequest {
    static getAttributeTypeMap() {
        return V1ListInventoryRequest.attributeTypeMap;
    }
}
V1ListInventoryRequest.discriminator = undefined;
V1ListInventoryRequest.attributeTypeMap = [
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "batchToken",
        "baseName": "batch_token",
        "type": "string"
    }
];
exports.V1ListInventoryRequest = V1ListInventoryRequest;
//# sourceMappingURL=v1ListInventoryRequest.js.map