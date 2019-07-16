"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StandardUnitDescriptionGroup {
    static getAttributeTypeMap() {
        return StandardUnitDescriptionGroup.attributeTypeMap;
    }
}
StandardUnitDescriptionGroup.discriminator = undefined;
StandardUnitDescriptionGroup.attributeTypeMap = [
    {
        "name": "standardUnitDescriptions",
        "baseName": "standard_unit_descriptions",
        "type": "Array<StandardUnitDescription>"
    },
    {
        "name": "languageCode",
        "baseName": "language_code",
        "type": "string"
    }
];
exports.StandardUnitDescriptionGroup = StandardUnitDescriptionGroup;
//# sourceMappingURL=standardUnitDescriptionGroup.js.map