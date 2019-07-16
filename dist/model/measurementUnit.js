"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MeasurementUnit {
    static getAttributeTypeMap() {
        return MeasurementUnit.attributeTypeMap;
    }
}
MeasurementUnit.discriminator = undefined;
MeasurementUnit.attributeTypeMap = [
    {
        "name": "customUnit",
        "baseName": "custom_unit",
        "type": "MeasurementUnitCustom"
    },
    {
        "name": "areaUnit",
        "baseName": "area_unit",
        "type": "string"
    },
    {
        "name": "lengthUnit",
        "baseName": "length_unit",
        "type": "string"
    },
    {
        "name": "volumeUnit",
        "baseName": "volume_unit",
        "type": "string"
    },
    {
        "name": "weightUnit",
        "baseName": "weight_unit",
        "type": "string"
    },
    {
        "name": "genericUnit",
        "baseName": "generic_unit",
        "type": "string"
    }
];
exports.MeasurementUnit = MeasurementUnit;
//# sourceMappingURL=measurementUnit.js.map