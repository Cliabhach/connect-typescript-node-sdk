"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateItemTaxesResponse {
    static getAttributeTypeMap() {
        return UpdateItemTaxesResponse.attributeTypeMap;
    }
}
UpdateItemTaxesResponse.discriminator = undefined;
UpdateItemTaxesResponse.attributeTypeMap = [
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
exports.UpdateItemTaxesResponse = UpdateItemTaxesResponse;
//# sourceMappingURL=updateItemTaxesResponse.js.map