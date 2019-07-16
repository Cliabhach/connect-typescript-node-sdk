"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetrieveInventoryChangesResponse {
    static getAttributeTypeMap() {
        return RetrieveInventoryChangesResponse.attributeTypeMap;
    }
}
RetrieveInventoryChangesResponse.discriminator = undefined;
RetrieveInventoryChangesResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "changes",
        "baseName": "changes",
        "type": "Array<InventoryChange>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.RetrieveInventoryChangesResponse = RetrieveInventoryChangesResponse;
//# sourceMappingURL=retrieveInventoryChangesResponse.js.map