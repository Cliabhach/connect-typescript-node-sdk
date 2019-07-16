"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SquareError {
    static getAttributeTypeMap() {
        return SquareError.attributeTypeMap;
    }
}
SquareError.discriminator = undefined;
SquareError.attributeTypeMap = [
    {
        "name": "category",
        "baseName": "category",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "string"
    },
    {
        "name": "field",
        "baseName": "field",
        "type": "string"
    }
];
exports.SquareError = SquareError;
//# sourceMappingURL=squareError.js.map