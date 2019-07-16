"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListEmployeeRolesResponse {
    static getAttributeTypeMap() {
        return V1ListEmployeeRolesResponse.attributeTypeMap;
    }
}
V1ListEmployeeRolesResponse.discriminator = undefined;
V1ListEmployeeRolesResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1EmployeeRole>"
    }
];
exports.V1ListEmployeeRolesResponse = V1ListEmployeeRolesResponse;
//# sourceMappingURL=v1ListEmployeeRolesResponse.js.map