"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1EmployeeRole {
    static getAttributeTypeMap() {
        return V1EmployeeRole.attributeTypeMap;
    }
}
V1EmployeeRole.discriminator = undefined;
V1EmployeeRole.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "permissions",
        "baseName": "permissions",
        "type": "Array<string>"
    },
    {
        "name": "isOwner",
        "baseName": "is_owner",
        "type": "boolean"
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
exports.V1EmployeeRole = V1EmployeeRole;
//# sourceMappingURL=v1EmployeeRole.js.map