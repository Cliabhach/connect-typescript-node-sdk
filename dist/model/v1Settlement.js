"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Settlement {
    static getAttributeTypeMap() {
        return V1Settlement.attributeTypeMap;
    }
}
V1Settlement.discriminator = undefined;
V1Settlement.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "totalMoney",
        "baseName": "total_money",
        "type": "V1Money"
    },
    {
        "name": "initiatedAt",
        "baseName": "initiated_at",
        "type": "string"
    },
    {
        "name": "bankAccountId",
        "baseName": "bank_account_id",
        "type": "string"
    },
    {
        "name": "entries",
        "baseName": "entries",
        "type": "Array<V1SettlementEntry>"
    }
];
exports.V1Settlement = V1Settlement;
//# sourceMappingURL=v1Settlement.js.map