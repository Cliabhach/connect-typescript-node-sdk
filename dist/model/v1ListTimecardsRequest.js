"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListTimecardsRequest {
    static getAttributeTypeMap() {
        return V1ListTimecardsRequest.attributeTypeMap;
    }
}
V1ListTimecardsRequest.discriminator = undefined;
V1ListTimecardsRequest.attributeTypeMap = [
    {
        "name": "order",
        "baseName": "order",
        "type": "string"
    },
    {
        "name": "employeeId",
        "baseName": "employee_id",
        "type": "string"
    },
    {
        "name": "beginClockinTime",
        "baseName": "begin_clockin_time",
        "type": "string"
    },
    {
        "name": "endClockinTime",
        "baseName": "end_clockin_time",
        "type": "string"
    },
    {
        "name": "beginClockoutTime",
        "baseName": "begin_clockout_time",
        "type": "string"
    },
    {
        "name": "endClockoutTime",
        "baseName": "end_clockout_time",
        "type": "string"
    },
    {
        "name": "beginUpdatedAt",
        "baseName": "begin_updated_at",
        "type": "string"
    },
    {
        "name": "endUpdatedAt",
        "baseName": "end_updated_at",
        "type": "string"
    },
    {
        "name": "deleted",
        "baseName": "deleted",
        "type": "boolean"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "batchToken",
        "baseName": "batch_token",
        "type": "string"
    }
];
exports.V1ListTimecardsRequest = V1ListTimecardsRequest;
//# sourceMappingURL=v1ListTimecardsRequest.js.map