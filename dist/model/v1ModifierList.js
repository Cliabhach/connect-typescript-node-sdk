"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1ModifierList {
    static getAttributeTypeMap() {
        return V1ModifierList.attributeTypeMap;
    }
}
V1ModifierList.discriminator = undefined;
V1ModifierList.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "selectionType",
        "baseName": "selection_type",
        "type": "string"
    },
    {
        "name": "modifierOptions",
        "baseName": "modifier_options",
        "type": "Array<V1ModifierOption>"
    },
    {
        "name": "v2Id",
        "baseName": "v2_id",
        "type": "string"
    }
];
exports.V1ModifierList = V1ModifierList;
//# sourceMappingURL=v1ModifierList.js.map