"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogInfoResponse {
    static getAttributeTypeMap() {
        return CatalogInfoResponse.attributeTypeMap;
    }
}
CatalogInfoResponse.discriminator = undefined;
CatalogInfoResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "limits",
        "baseName": "limits",
        "type": "CatalogInfoResponseLimits"
    },
    {
        "name": "standardUnitDescriptionGroup",
        "baseName": "standard_unit_description_group",
        "type": "StandardUnitDescriptionGroup"
    }
];
exports.CatalogInfoResponse = CatalogInfoResponse;
//# sourceMappingURL=catalogInfoResponse.js.map