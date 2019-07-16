"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Break {
    static getAttributeTypeMap() {
        return Break.attributeTypeMap;
    }
}
Break.discriminator = undefined;
Break.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "startAt",
        "baseName": "start_at",
        "type": "string"
    },
    {
        "name": "endAt",
        "baseName": "end_at",
        "type": "string"
    },
    {
        "name": "breakTypeId",
        "baseName": "break_type_id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
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
    }
];
exports.Break = Break;
//# sourceMappingURL=break.js.map