"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListCashDrawerShiftsRequest {
    static getAttributeTypeMap() {
        return V1ListCashDrawerShiftsRequest.attributeTypeMap;
    }
}
V1ListCashDrawerShiftsRequest.discriminator = undefined;
V1ListCashDrawerShiftsRequest.attributeTypeMap = [
    {
        "name": "order",
        "baseName": "order",
        "type": "string"
    },
    {
        "name": "beginTime",
        "baseName": "begin_time",
        "type": "string"
    },
    {
        "name": "endTime",
        "baseName": "end_time",
        "type": "string"
    }
];
exports.V1ListCashDrawerShiftsRequest = V1ListCashDrawerShiftsRequest;
//# sourceMappingURL=v1ListCashDrawerShiftsRequest.js.map