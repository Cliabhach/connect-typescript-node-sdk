"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShiftQuery {
    static getAttributeTypeMap() {
        return ShiftQuery.attributeTypeMap;
    }
}
ShiftQuery.discriminator = undefined;
ShiftQuery.attributeTypeMap = [
    {
        "name": "filter",
        "baseName": "filter",
        "type": "ShiftFilter"
    },
    {
        "name": "sort",
        "baseName": "sort",
        "type": "ShiftSort"
    }
];
exports.ShiftQuery = ShiftQuery;
//# sourceMappingURL=shiftQuery.js.map