"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class V1Fee {
    static getAttributeTypeMap() {
        return V1Fee.attributeTypeMap;
    }
}
V1Fee.discriminator = undefined;
V1Fee.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "rate",
        "baseName": "rate",
        "type": "string"
    },
    {
        "name": "calculationPhase",
        "baseName": "calculation_phase",
        "type": "string"
    },
    {
        "name": "adjustmentType",
        "baseName": "adjustment_type",
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
    },
    {
        "name": "inclusionType",
        "baseName": "inclusion_type",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "v2Id",
        "baseName": "v2_id",
        "type": "string"
    }
];
exports.V1Fee = V1Fee;
//# sourceMappingURL=v1Fee.js.map