"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1OrderHistoryEntry {
    static getAttributeTypeMap() {
        return V1OrderHistoryEntry.attributeTypeMap;
    }
}
V1OrderHistoryEntry.discriminator = undefined;
V1OrderHistoryEntry.attributeTypeMap = [
    {
        "name": "action",
        "baseName": "action",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    }
];
exports.V1OrderHistoryEntry = V1OrderHistoryEntry;
//# sourceMappingURL=v1OrderHistoryEntry.js.map