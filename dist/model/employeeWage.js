"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeWage {
    static getAttributeTypeMap() {
        return EmployeeWage.attributeTypeMap;
    }
}
EmployeeWage.discriminator = undefined;
EmployeeWage.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "employeeId",
        "baseName": "employee_id",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "hourlyRate",
        "baseName": "hourly_rate",
        "type": "Money"
    }
];
exports.EmployeeWage = EmployeeWage;
//# sourceMappingURL=employeeWage.js.map