"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetrieveEmployeeResponse {
    static getAttributeTypeMap() {
        return RetrieveEmployeeResponse.attributeTypeMap;
    }
}
RetrieveEmployeeResponse.discriminator = undefined;
RetrieveEmployeeResponse.attributeTypeMap = [
    {
        "name": "employee",
        "baseName": "employee",
        "type": "Employee"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    }
];
exports.RetrieveEmployeeResponse = RetrieveEmployeeResponse;
//# sourceMappingURL=retrieveEmployeeResponse.js.map