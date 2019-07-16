"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListEmployeesResponse {
    static getAttributeTypeMap() {
        return V1ListEmployeesResponse.attributeTypeMap;
    }
}
V1ListEmployeesResponse.discriminator = undefined;
V1ListEmployeesResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Employee>"
    }
];
exports.V1ListEmployeesResponse = V1ListEmployeesResponse;
//# sourceMappingURL=v1ListEmployeesResponse.js.map