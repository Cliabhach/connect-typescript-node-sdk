"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shift {
    static getAttributeTypeMap() {
        return Shift.attributeTypeMap;
    }
}
Shift.discriminator = undefined;
Shift.attributeTypeMap = [
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
        "name": "locationId",
        "baseName": "location_id",
        "type": "string"
    },
    {
        "name": "timezone",
        "baseName": "timezone",
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
        "name": "wage",
        "baseName": "wage",
        "type": "ShiftWage"
    },
    {
        "name": "breaks",
        "baseName": "breaks",
        "type": "Array<Break>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
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
exports.Shift = Shift;
//# sourceMappingURL=shift.js.map