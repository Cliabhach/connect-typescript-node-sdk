"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ListModifierListsResponse {
    static getAttributeTypeMap() {
        return V1ListModifierListsResponse.attributeTypeMap;
    }
}
V1ListModifierListsResponse.discriminator = undefined;
V1ListModifierListsResponse.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1ModifierList>"
    }
];
exports.V1ListModifierListsResponse = V1ListModifierListsResponse;
//# sourceMappingURL=v1ListModifierListsResponse.js.map