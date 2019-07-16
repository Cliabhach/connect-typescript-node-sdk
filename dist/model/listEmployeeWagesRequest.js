"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListEmployeeWagesRequest {
    static getAttributeTypeMap() {
        return ListEmployeeWagesRequest.attributeTypeMap;
    }
}
ListEmployeeWagesRequest.discriminator = undefined;
ListEmployeeWagesRequest.attributeTypeMap = [
    {
        "name": "employeeId",
        "baseName": "employee_id",
        "type": "string"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.ListEmployeeWagesRequest = ListEmployeeWagesRequest;
//# sourceMappingURL=listEmployeeWagesRequest.js.map