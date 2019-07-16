"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BreakType {
    static getAttributeTypeMap() {
        return BreakType.attributeTypeMap;
    }
}
BreakType.discriminator = undefined;
BreakType.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "locationId",
        "baseName": "location_id",
        "type": "string"
    },
    {
        "name": "breakName",
        "baseName": "break_name",
        "type": "string"
    },
    {
        "name": "expectedDuration",
        "baseName": "expected_duration",
        "type": "string"
    },
    {
        "name": "isPaid",
        "baseName": "is_paid",
        "type": "boolean"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "string"
    }
];
exports.BreakType = BreakType;
//# sourceMappingURL=breakType.js.map