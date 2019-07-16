"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateBreakTypeRequest {
    static getAttributeTypeMap() {
        return CreateBreakTypeRequest.attributeTypeMap;
    }
}
CreateBreakTypeRequest.discriminator = undefined;
CreateBreakTypeRequest.attributeTypeMap = [
    {
        "name": "idempotencyKey",
        "baseName": "idempotency_key",
        "type": "string"
    },
    {
        "name": "breakType",
        "baseName": "break_type",
        "type": "BreakType"
    }
];
exports.CreateBreakTypeRequest = CreateBreakTypeRequest;
//# sourceMappingURL=createBreakTypeRequest.js.map