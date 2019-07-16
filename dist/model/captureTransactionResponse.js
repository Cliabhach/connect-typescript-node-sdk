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
        "type": "Array<SquareError>"
    }
];
exports.CaptureTransactionResponse = CaptureTransactionResponse;
//# sourceMappingURL=captureTransactionResponse.js.map