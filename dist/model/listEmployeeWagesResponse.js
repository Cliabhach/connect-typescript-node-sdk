"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListEmployeeWagesResponse {
    static getAttributeTypeMap() {
        return ListEmployeeWagesResponse.attributeTypeMap;
    }
}
ListEmployeeWagesResponse.discriminator = undefined;
ListEmployeeWagesResponse.attributeTypeMap = [
    {
        "name": "employeeWages",
        "baseName": "employee_wages",
        "type": "Array<EmployeeWage>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    }
];
exports.ListEmployeeWagesResponse = ListEmployeeWagesResponse;
//# sourceMappingURL=listEmployeeWagesResponse.js.map