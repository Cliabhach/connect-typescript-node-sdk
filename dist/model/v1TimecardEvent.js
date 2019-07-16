"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1TimecardEvent {
    static getAttributeTypeMap() {
        return V1TimecardEvent.attributeTypeMap;
    }
}
V1TimecardEvent.discriminator = undefined;
V1TimecardEvent.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "eventType",
        "baseName": "event_type",
        "type": "string"
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
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    }
];
exports.V1TimecardEvent = V1TimecardEvent;
//# sourceMappingURL=v1TimecardEvent.js.map