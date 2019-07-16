"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelError {
    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}
ModelError.discriminator = undefined;
ModelError.attributeTypeMap = [
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
exports.ModelError = ModelError;
//# sourceMappingURL=modelError.js.map