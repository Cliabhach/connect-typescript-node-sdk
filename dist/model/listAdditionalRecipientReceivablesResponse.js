"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListAdditionalRecipientReceivablesResponse {
    static getAttributeTypeMap() {
        return ListAdditionalRecipientReceivablesResponse.attributeTypeMap;
    }
}
ListAdditionalRecipientReceivablesResponse.discriminator = undefined;
ListAdditionalRecipientReceivablesResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "receivables",
        "baseName": "receivables",
        "type": "Array<AdditionalRecipientReceivable>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.ListAdditionalRecipientReceivablesResponse = ListAdditionalRecipientReceivablesResponse;
//# sourceMappingURL=listAdditionalRecipientReceivablesResponse.js.map