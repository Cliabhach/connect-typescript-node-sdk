"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1CashDrawerShift {
    static getAttributeTypeMap() {
        return V1CashDrawerShift.attributeTypeMap;
    }
}
V1CashDrawerShift.discriminator = undefined;
V1CashDrawerShift.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "eventType",
        "baseName": "event_type",
        "type": "string"
    },
    {
        "name": "openedAt",
        "baseName": "opened_at",
        "type": "string"
    },
    {
        "name": "endedAt",
        "baseName": "ended_at",
        "type": "string"
    },
    {
        "name": "closedAt",
        "baseName": "closed_at",
        "type": "string"
    },
    {
        "name": "employeeIds",
        "baseName": "employee_ids",
        "type": "Array<string>"
    },
    {
        "name": "openingEmployeeId",
        "baseName": "opening_employee_id",
        "type": "string"
    },
    {
        "name": "endingEmployeeId",
        "baseName": "ending_employee_id",
        "type": "string"
    },
    {
        "name": "closingEmployeeId",
        "baseName": "closing_employee_id",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "startingCashMoney",
        "baseName": "starting_cash_money",
        "type": "V1Money"
    },
    {
        "name": "cashPaymentMoney",
        "baseName": "cash_payment_money",
        "type": "V1Money"
    },
    {
        "name": "cashRefundsMoney",
        "baseName": "cash_refunds_money",
        "type": "V1Money"
    },
    {
        "name": "cashPaidInMoney",
        "baseName": "cash_paid_in_money",
        "type": "V1Money"
    },
    {
        "name": "cashPaidOutMoney",
        "baseName": "cash_paid_out_money",
        "type": "V1Money"
    },
    {
        "name": "expectedCashMoney",
        "baseName": "expected_cash_money",
        "type": "V1Money"
    },
    {
        "name": "closedCashMoney",
        "baseName": "closed_cash_money",
        "type": "V1Money"
    },
    {
        "name": "device",
        "baseName": "device",
        "type": "Device"
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<V1CashDrawerEvent>"
    }
];
exports.V1CashDrawerShift = V1CashDrawerShift;
//# sourceMappingURL=v1CashDrawerShift.js.map