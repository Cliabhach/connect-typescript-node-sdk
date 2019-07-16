"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShiftWage {
    static getAttributeTypeMap() {
        return ShiftWage.attributeTypeMap;
    }
}
ShiftWage.discriminator = undefined;
ShiftWage.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "hourlyRate",
        "baseName": "hourly_rate",
        "type": "Money"
    }
];
exports.ShiftWage = ShiftWage;
//# sourceMappingURL=shiftWage.js.map