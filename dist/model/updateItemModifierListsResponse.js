"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateItemModifierListsResponse {
    static getAttributeTypeMap() {
        return UpdateItemModifierListsResponse.attributeTypeMap;
    }
}
UpdateItemModifierListsResponse.discriminator = undefined;
UpdateItemModifierListsResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SquareError>"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "string"
    }
];
exports.UpdateItemModifierListsResponse = UpdateItemModifierListsResponse;
//# sourceMappingURL=updateItemModifierListsResponse.js.map