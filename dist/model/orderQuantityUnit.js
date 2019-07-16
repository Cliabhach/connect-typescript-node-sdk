"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderQuantityUnit {
    static getAttributeTypeMap() {
        return OrderQuantityUnit.attributeTypeMap;
    }
}
OrderQuantityUnit.discriminator = undefined;
OrderQuantityUnit.attributeTypeMap = [
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
exports.OrderQuantityUnit = OrderQuantityUnit;
//# sourceMappingURL=orderQuantityUnit.js.map