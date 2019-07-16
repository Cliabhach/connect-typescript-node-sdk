"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateItemTaxesRequest {
    static getAttributeTypeMap() {
        return UpdateItemTaxesRequest.attributeTypeMap;
    }
}
UpdateItemTaxesRequest.discriminator = undefined;
UpdateItemTaxesRequest.attributeTypeMap = [
    {
        "name": "itemIds",
        "baseName": "item_ids",
        "type": "Array<string>"
    },
    {
        "name": "taxesToEnable",
        "baseName": "taxes_to_enable",
        "type": "Array<string>"
    },
    {
        "name": "taxesToDisable",
        "baseName": "taxes_to_disable",
        "type": "Array<string>"
    }
];
exports.UpdateItemTaxesRequest = UpdateItemTaxesRequest;
//# sourceMappingURL=updateItemTaxesRequest.js.map