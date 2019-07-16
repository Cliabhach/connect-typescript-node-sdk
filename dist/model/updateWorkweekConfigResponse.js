"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateWorkweekConfigResponse {
    static getAttributeTypeMap() {
        return UpdateWorkweekConfigResponse.attributeTypeMap;
    }
}
UpdateWorkweekConfigResponse.discriminator = undefined;
UpdateWorkweekConfigResponse.attributeTypeMap = [
    {
        "name": "workweekConfig",
        "baseName": "workweek_config",
        "type": "WorkweekConfig"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    }
];
exports.UpdateWorkweekConfigResponse = UpdateWorkweekConfigResponse;
//# sourceMappingURL=updateWorkweekConfigResponse.js.map