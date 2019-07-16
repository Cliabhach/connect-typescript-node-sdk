"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DateRange {
    static getAttributeTypeMap() {
        return DateRange.attributeTypeMap;
    }
}
DateRange.discriminator = undefined;
DateRange.attributeTypeMap = [
    {
        "name": "startDate",
        "baseName": "start_date",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "end_date",
        "type": "string"
    }
];
exports.DateRange = DateRange;
//# sourceMappingURL=dateRange.js.map