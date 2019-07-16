"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MeasurementUnitCustom {
    static getAttributeTypeMap() {
        return MeasurementUnitCustom.attributeTypeMap;
    }
}
MeasurementUnitCustom.discriminator = undefined;
MeasurementUnitCustom.attributeTypeMap = [
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
exports.MeasurementUnitCustom = MeasurementUnitCustom;
//# sourceMappingURL=measurementUnitCustom.js.map