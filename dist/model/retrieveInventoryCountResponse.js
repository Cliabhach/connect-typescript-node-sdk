"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetrieveInventoryCountResponse {
    static getAttributeTypeMap() {
        return RetrieveInventoryCountResponse.attributeTypeMap;
    }
}
RetrieveInventoryCountResponse.discriminator = undefined;
RetrieveInventoryCountResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "counts",
        "baseName": "counts",
        "type": "Array<InventoryCount>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.RetrieveInventoryCountResponse = RetrieveInventoryCountResponse;
//# sourceMappingURL=retrieveInventoryCountResponse.js.map