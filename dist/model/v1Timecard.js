"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Timecard {
    static getAttributeTypeMap() {
        return V1Timecard.attributeTypeMap;
    }
}
V1Timecard.discriminator = undefined;
V1Timecard.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "employeeId",
        "baseName": "employee_id",
        "type": "string"
    },
    {
        "name": "deleted",
        "baseName": "deleted",
        "type": "boolean"
    },
    {
        "name": "clockinTime",
        "baseName": "clockin_time",
        "type": "string"
    },
    {
        "name": "clockoutTime",
        "baseName": "clockout_time",
        "type": "string"
    },
    {
        "name": "clockinLocationId",
        "baseName": "clockin_location_id",
        "type": "string"
    },
    {
        "name": "clockoutLocationId",
        "baseName": "clockout_location_id",
        "type": "string"
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
    },
    {
        "name": "regularSecondsWorked",
        "baseName": "regular_seconds_worked",
        "type": "number"
    },
    {
        "name": "overtimeSecondsWorked",
        "baseName": "overtime_seconds_worked",
        "type": "number"
    },
    {
        "name": "doubletimeSecondsWorked",
        "baseName": "doubletime_seconds_worked",
        "type": "number"
    }
];
exports.V1Timecard = V1Timecard;
//# sourceMappingURL=v1Timecard.js.map