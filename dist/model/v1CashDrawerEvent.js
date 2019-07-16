"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1CashDrawerEvent {
    static getAttributeTypeMap() {
        return V1CashDrawerEvent.attributeTypeMap;
    }
}
V1CashDrawerEvent.discriminator = undefined;
V1CashDrawerEvent.attributeTypeMap = [
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
        "name": "eventType",
        "baseName": "event_type",
        "type": "string"
    },
    {
        "name": "eventMoney",
        "baseName": "event_money",
        "type": "V1Money"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    }
];
exports.V1CashDrawerEvent = V1CashDrawerEvent;
//# sourceMappingURL=v1CashDrawerEvent.js.map