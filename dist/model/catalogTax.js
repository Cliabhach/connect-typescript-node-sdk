"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogTax {
    static getAttributeTypeMap() {
        return CatalogTax.attributeTypeMap;
    }
}
CatalogTax.discriminator = undefined;
CatalogTax.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "calculationPhase",
        "baseName": "calculation_phase",
        "type": "string"
    },
    {
        "name": "inclusionType",
        "baseName": "inclusion_type",
        "type": "string"
    },
    {
        "name": "percentage",
        "baseName": "percentage",
        "type": "string"
    },
    {
        "name": "appliesToCustomAmounts",
        "baseName": "applies_to_custom_amounts",
        "type": "boolean"
    },
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean"
    }
];
exports.CatalogTax = CatalogTax;
//# sourceMappingURL=catalogTax.js.map