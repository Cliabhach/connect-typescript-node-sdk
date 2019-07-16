"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimeRange {
    static getAttributeTypeMap() {
        return TimeRange.attributeTypeMap;
    }
}
TimeRange.discriminator = undefined;
TimeRange.attributeTypeMap = [
    {
        "name": "startAt",
        "baseName": "start_at",
        "type": "string"
    },
    {
        "name": "endAt",
        "baseName": "end_at",
        "type": "string"
    }
];
exports.TimeRange = TimeRange;
//# sourceMappingURL=timeRange.js.map