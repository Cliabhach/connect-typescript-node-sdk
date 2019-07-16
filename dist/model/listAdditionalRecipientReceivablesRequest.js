"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListAdditionalRecipientReceivablesRequest {
    static getAttributeTypeMap() {
        return ListAdditionalRecipientReceivablesRequest.attributeTypeMap;
    }
}
ListAdditionalRecipientReceivablesRequest.discriminator = undefined;
ListAdditionalRecipientReceivablesRequest.attributeTypeMap = [
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
exports.ListAdditionalRecipientReceivablesRequest = ListAdditionalRecipientReceivablesRequest;
//# sourceMappingURL=listAdditionalRecipientReceivablesRequest.js.map