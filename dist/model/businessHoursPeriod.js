"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BusinessHoursPeriod {
    static getAttributeTypeMap() {
        return BusinessHoursPeriod.attributeTypeMap;
    }
}
BusinessHoursPeriod.discriminator = undefined;
BusinessHoursPeriod.attributeTypeMap = [
    {
        "name": "dayOfWeek",
        "baseName": "day_of_week",
        "type": "string"
    },
    {
        "name": "startLocalTime",
        "baseName": "start_local_time",
        "type": "string"
    },
    {
        "name": "endLocalTime",
        "baseName": "end_local_time",
        "type": "string"
    }
];
exports.BusinessHoursPeriod = BusinessHoursPeriod;
//# sourceMappingURL=businessHoursPeriod.js.map