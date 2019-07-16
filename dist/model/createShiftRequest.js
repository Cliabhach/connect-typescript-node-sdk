"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateShiftRequest {
    static getAttributeTypeMap() {
        return CreateShiftRequest.attributeTypeMap;
    }
}
CreateShiftRequest.discriminator = undefined;
CreateShiftRequest.attributeTypeMap = [
    {
        "name": "idempotencyKey",
        "baseName": "idempotency_key",
        "type": "string"
    },
    {
        "name": "shift",
        "baseName": "shift",
        "type": "Shift"
    }
];
exports.CreateShiftRequest = CreateShiftRequest;
//# sourceMappingURL=createShiftRequest.js.map