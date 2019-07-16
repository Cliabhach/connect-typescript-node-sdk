"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListCashDrawerShiftsResponse {
    static getAttributeTypeMap() {
        return V1ListCashDrawerShiftsResponse.attributeTypeMap;
    }
}
V1ListCashDrawerShiftsResponse.discriminator = undefined;
V1ListCashDrawerShiftsResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1CashDrawerShift>"
    }
];
exports.V1ListCashDrawerShiftsResponse = V1ListCashDrawerShiftsResponse;
//# sourceMappingURL=v1ListCashDrawerShiftsResponse.js.map