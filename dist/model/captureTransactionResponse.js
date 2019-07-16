"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CaptureTransactionResponse {
    static getAttributeTypeMap() {
        return CaptureTransactionResponse.attributeTypeMap;
    }
}
CaptureTransactionResponse.discriminator = undefined;
CaptureTransactionResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    }
];
exports.CaptureTransactionResponse = CaptureTransactionResponse;
//# sourceMappingURL=captureTransactionResponse.js.map