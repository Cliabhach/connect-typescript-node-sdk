"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetrieveInventoryCountRequest {
    static getAttributeTypeMap() {
        return RetrieveInventoryCountRequest.attributeTypeMap;
    }
}
RetrieveInventoryCountRequest.discriminator = undefined;
RetrieveInventoryCountRequest.attributeTypeMap = [
    {
        "name": "locationIds",
        "baseName": "location_ids",
        "type": "string"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.RetrieveInventoryCountRequest = RetrieveInventoryCountRequest;
//# sourceMappingURL=retrieveInventoryCountRequest.js.map