"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Employee {
    static getAttributeTypeMap() {
        return V1Employee.attributeTypeMap;
    }
}
V1Employee.discriminator = undefined;
V1Employee.attributeTypeMap = [
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
        "name": "roleIds",
        "baseName": "role_ids",
        "type": "Array<string>"
    },
    {
        "name": "authorizedLocationIds",
        "baseName": "authorized_location_ids",
        "type": "Array<string>"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "externalId",
        "baseName": "external_id",
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
exports.V1Employee = V1Employee;
//# sourceMappingURL=v1Employee.js.map