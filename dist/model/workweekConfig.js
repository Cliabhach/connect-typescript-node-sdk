"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorkweekConfig {
    static getAttributeTypeMap() {
        return WorkweekConfig.attributeTypeMap;
    }
}
WorkweekConfig.discriminator = undefined;
WorkweekConfig.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "startOfWeek",
        "baseName": "start_of_week",
        "type": "string"
    },
    {
        "name": "startOfDayLocalTime",
        "baseName": "start_of_day_local_time",
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
exports.WorkweekConfig = WorkweekConfig;
//# sourceMappingURL=workweekConfig.js.map