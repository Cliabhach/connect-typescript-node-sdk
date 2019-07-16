"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetEmployeeWageResponse {
    static getAttributeTypeMap() {
        return GetEmployeeWageResponse.attributeTypeMap;
    }
}
GetEmployeeWageResponse.discriminator = undefined;
GetEmployeeWageResponse.attributeTypeMap = [
    {
        "name": "employeeWage",
        "baseName": "employee_wage",
        "type": "EmployeeWage"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    }
];
exports.GetEmployeeWageResponse = GetEmployeeWageResponse;
//# sourceMappingURL=getEmployeeWageResponse.js.map