"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1UpdateModifierListRequest {
    static getAttributeTypeMap() {
        return V1UpdateModifierListRequest.attributeTypeMap;
    }
}
V1UpdateModifierListRequest.discriminator = undefined;
V1UpdateModifierListRequest.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "selectionType",
        "baseName": "selection_type",
        "type": "string"
    }
];
exports.V1UpdateModifierListRequest = V1UpdateModifierListRequest;
//# sourceMappingURL=v1UpdateModifierListRequest.js.map