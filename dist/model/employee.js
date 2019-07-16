"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    static getAttributeTypeMap() {
        return Employee.attributeTypeMap;
    }
}
Employee.discriminator = undefined;
Employee.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "first_name",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "last_name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phone_number",
        "type": "string"
    },
    {
        "name": "locationIds",
        "baseName": "location_ids",
        "type": "Array<string>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
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
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map