"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StandardUnitDescription {
    static getAttributeTypeMap() {
        return StandardUnitDescription.attributeTypeMap;
    }
}
StandardUnitDescription.discriminator = undefined;
StandardUnitDescription.attributeTypeMap = [
    {
        "name": "unit",
        "baseName": "unit",
        "type": "MeasurementUnit"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "abbreviation",
        "baseName": "abbreviation",
        "type": "string"
    }
];
exports.StandardUnitDescription = StandardUnitDescription;
//# sourceMappingURL=standardUnitDescription.js.map