"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListEmployeesRequest {
    static getAttributeTypeMap() {
        return ListEmployeesRequest.attributeTypeMap;
    }
}
ListEmployeesRequest.discriminator = undefined;
ListEmployeesRequest.attributeTypeMap = [
    {
        "name": "locationId",
        "baseName": "location_id",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
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
exports.ListEmployeesRequest = ListEmployeesRequest;
//# sourceMappingURL=listEmployeesRequest.js.map