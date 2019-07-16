"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetrieveInventoryChangesRequest {
    static getAttributeTypeMap() {
        return RetrieveInventoryChangesRequest.attributeTypeMap;
    }
}
RetrieveInventoryChangesRequest.discriminator = undefined;
RetrieveInventoryChangesRequest.attributeTypeMap = [
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
exports.RetrieveInventoryChangesRequest = RetrieveInventoryChangesRequest;
//# sourceMappingURL=retrieveInventoryChangesRequest.js.map