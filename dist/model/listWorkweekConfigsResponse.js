"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListWorkweekConfigsResponse {
    static getAttributeTypeMap() {
        return ListWorkweekConfigsResponse.attributeTypeMap;
    }
}
ListWorkweekConfigsResponse.discriminator = undefined;
ListWorkweekConfigsResponse.attributeTypeMap = [
    {
        "name": "workweekConfigs",
        "baseName": "workweek_configs",
        "type": "Array<WorkweekConfig>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    }
];
exports.ListWorkweekConfigsResponse = ListWorkweekConfigsResponse;
//# sourceMappingURL=listWorkweekConfigsResponse.js.map