"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListAdditionalRecipientReceivableRefundsResponse {
    static getAttributeTypeMap() {
        return ListAdditionalRecipientReceivableRefundsResponse.attributeTypeMap;
    }
}
ListAdditionalRecipientReceivableRefundsResponse.discriminator = undefined;
ListAdditionalRecipientReceivableRefundsResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    },
    {
        "name": "receivableRefunds",
        "baseName": "receivable_refunds",
        "type": "Array<AdditionalRecipientReceivableRefund>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.ListAdditionalRecipientReceivableRefundsResponse = ListAdditionalRecipientReceivableRefundsResponse;
//# sourceMappingURL=listAdditionalRecipientReceivableRefundsResponse.js.map