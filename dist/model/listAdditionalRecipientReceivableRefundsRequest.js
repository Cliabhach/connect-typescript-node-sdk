"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListAdditionalRecipientReceivableRefundsRequest {
    static getAttributeTypeMap() {
        return ListAdditionalRecipientReceivableRefundsRequest.attributeTypeMap;
    }
}
ListAdditionalRecipientReceivableRefundsRequest.discriminator = undefined;
ListAdditionalRecipientReceivableRefundsRequest.attributeTypeMap = [
    {
        "name": "beginTime",
        "baseName": "begin_time",
        "type": "string"
    },
    {
        "name": "endTime",
        "baseName": "end_time",
        "type": "string"
    },
    {
        "name": "sortOrder",
        "baseName": "sort_order",
        "type": "string"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.ListAdditionalRecipientReceivableRefundsRequest = ListAdditionalRecipientReceivableRefundsRequest;
//# sourceMappingURL=listAdditionalRecipientReceivableRefundsRequest.js.map