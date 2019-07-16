"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListEmployeesResponse {
    static getAttributeTypeMap() {
        return ListEmployeesResponse.attributeTypeMap;
    }
}
ListEmployeesResponse.discriminator = undefined;
ListEmployeesResponse.attributeTypeMap = [
    {
        "name": "employees",
        "baseName": "employees",
        "type": "Array<Employee>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    }
];
exports.ListEmployeesResponse = ListEmployeesResponse;
//# sourceMappingURL=listEmployeesResponse.js.map