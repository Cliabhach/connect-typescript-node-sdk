"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1CreateEmployeeRoleRequest {
    static getAttributeTypeMap() {
        return V1CreateEmployeeRoleRequest.attributeTypeMap;
    }
}
V1CreateEmployeeRoleRequest.discriminator = undefined;
V1CreateEmployeeRoleRequest.attributeTypeMap = [
    {
        "name": "employeeRole",
        "baseName": "employee_role",
        "type": "V1EmployeeRole"
    }
];
exports.V1CreateEmployeeRoleRequest = V1CreateEmployeeRoleRequest;
//# sourceMappingURL=v1CreateEmployeeRoleRequest.js.map