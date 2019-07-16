"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogMeasurementUnit {
    static getAttributeTypeMap() {
        return CatalogMeasurementUnit.attributeTypeMap;
    }
}
CatalogMeasurementUnit.discriminator = undefined;
CatalogMeasurementUnit.attributeTypeMap = [
    {
        "name": "measurementUnit",
        "baseName": "measurement_unit",
        "type": "MeasurementUnit"
    },
    {
        "name": "precision",
        "baseName": "precision",
        "type": "number"
    }
];
exports.CatalogMeasurementUnit = CatalogMeasurementUnit;
//# sourceMappingURL=catalogMeasurementUnit.js.map