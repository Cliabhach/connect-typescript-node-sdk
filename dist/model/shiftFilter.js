"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShiftFilter {
    static getAttributeTypeMap() {
        return ShiftFilter.attributeTypeMap;
    }
}
ShiftFilter.discriminator = undefined;
ShiftFilter.attributeTypeMap = [
    {
        "name": "locationId",
        "baseName": "location_id",
        "type": "Array<string>"
    },
    {
        "name": "employeeId",
        "baseName": "employee_id",
        "type": "Array<string>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "start",
        "baseName": "start",
        "type": "TimeRange"
    },
    {
        "name": "end",
        "baseName": "end",
        "type": "TimeRange"
    },
    {
        "name": "workday",
        "baseName": "workday",
        "type": "ShiftWorkday"
    }
];
exports.ShiftFilter = ShiftFilter;
//# sourceMappingURL=shiftFilter.js.map