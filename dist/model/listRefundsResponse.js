"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListRefundsResponse {
    static getAttributeTypeMap() {
        return ListRefundsResponse.attributeTypeMap;
    }
}
ListRefundsResponse.discriminator = undefined;
ListRefundsResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "refunds",
        "baseName": "refunds",
        "type": "Array<Refund>"
    },
    {
        "name": "cursor",
        "baseName": "cursor",
        "type": "string"
    }
];
exports.ListRefundsResponse = ListRefundsResponse;
//# sourceMappingURL=listRefundsResponse.js.map