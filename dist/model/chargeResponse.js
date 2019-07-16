"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChargeResponse {
    static getAttributeTypeMap() {
        return ChargeResponse.attributeTypeMap;
    }
}
ChargeResponse.discriminator = undefined;
ChargeResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
    }
];
exports.ChargeResponse = ChargeResponse;
//# sourceMappingURL=chargeResponse.js.map