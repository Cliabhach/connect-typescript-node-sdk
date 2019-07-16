"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VoidTransactionResponse {
    static getAttributeTypeMap() {
        return VoidTransactionResponse.attributeTypeMap;
    }
}
VoidTransactionResponse.discriminator = undefined;
VoidTransactionResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    }
];
exports.VoidTransactionResponse = VoidTransactionResponse;
//# sourceMappingURL=voidTransactionResponse.js.map