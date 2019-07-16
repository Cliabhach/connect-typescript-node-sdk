"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateRefundResponse {
    static getAttributeTypeMap() {
        return CreateRefundResponse.attributeTypeMap;
    }
}
CreateRefundResponse.discriminator = undefined;
CreateRefundResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "refund",
        "baseName": "refund",
        "type": "Refund"
    }
];
exports.CreateRefundResponse = CreateRefundResponse;
//# sourceMappingURL=createRefundResponse.js.map