"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TenderCashDetails {
    static getAttributeTypeMap() {
        return TenderCashDetails.attributeTypeMap;
    }
}
TenderCashDetails.discriminator = undefined;
TenderCashDetails.attributeTypeMap = [
    {
        "name": "buyerTenderedMoney",
        "baseName": "buyer_tendered_money",
        "type": "Money"
    },
    {
        "name": "changeBackMoney",
        "baseName": "change_back_money",
        "type": "Money"
    }
];
exports.TenderCashDetails = TenderCashDetails;
//# sourceMappingURL=tenderCashDetails.js.map