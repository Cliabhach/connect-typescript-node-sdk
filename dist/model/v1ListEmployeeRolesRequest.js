"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListEmployeeRolesRequest {
    static getAttributeTypeMap() {
        return V1ListEmployeeRolesRequest.attributeTypeMap;
    }
}
V1ListEmployeeRolesRequest.discriminator = undefined;
V1ListEmployeeRolesRequest.attributeTypeMap = [
    {
        "name": "order",
        "baseName": "order",
        "type": "string"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "batchToken",
        "baseName": "batch_token",
        "type": "string"
    }
];
exports.V1ListEmployeeRolesRequest = V1ListEmployeeRolesRequest;
//# sourceMappingURL=v1ListEmployeeRolesRequest.js.map