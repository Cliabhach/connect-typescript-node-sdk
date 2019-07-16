"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShiftWorkday {
    static getAttributeTypeMap() {
        return ShiftWorkday.attributeTypeMap;
    }
}
ShiftWorkday.discriminator = undefined;
ShiftWorkday.attributeTypeMap = [
    {
        "name": "dateRange",
        "baseName": "date_range",
        "type": "DateRange"
    },
    {
        "name": "matchShiftsBy",
        "baseName": "match_shifts_by",
        "type": "string"
    },
    {
        "name": "defaultTimezone",
        "baseName": "default_timezone",
        "type": "string"
    }
];
exports.ShiftWorkday = ShiftWorkday;
//# sourceMappingURL=shiftWorkday.js.map