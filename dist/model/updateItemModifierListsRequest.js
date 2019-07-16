"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateItemModifierListsRequest {
    static getAttributeTypeMap() {
        return UpdateItemModifierListsRequest.attributeTypeMap;
    }
}
UpdateItemModifierListsRequest.discriminator = undefined;
UpdateItemModifierListsRequest.attributeTypeMap = [
    {
        "name": "itemIds",
        "baseName": "item_ids",
        "type": "Array<string>"
    },
    {
        "name": "modifierListsToEnable",
        "baseName": "modifier_lists_to_enable",
        "type": "Array<string>"
    },
    {
        "name": "modifierListsToDisable",
        "baseName": "modifier_lists_to_disable",
        "type": "Array<string>"
    }
];
exports.UpdateItemModifierListsRequest = UpdateItemModifierListsRequest;
//# sourceMappingURL=updateItemModifierListsRequest.js.map