"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetrieveInventoryPhysicalCountResponse {
    static getAttributeTypeMap() {
        return RetrieveInventoryPhysicalCountResponse.attributeTypeMap;
    }
}
RetrieveInventoryPhysicalCountResponse.discriminator = undefined;
RetrieveInventoryPhysicalCountResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "InventoryPhysicalCount"
    }
];
exports.RetrieveInventoryPhysicalCountResponse = RetrieveInventoryPhysicalCountResponse;
//# sourceMappingURL=retrieveInventoryPhysicalCountResponse.js.map