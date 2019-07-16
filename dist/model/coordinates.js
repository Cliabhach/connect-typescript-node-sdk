"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coordinates {
    static getAttributeTypeMap() {
        return Coordinates.attributeTypeMap;
    }
}
Coordinates.discriminator = undefined;
Coordinates.attributeTypeMap = [
    {
        "name": "latitude",
        "baseName": "latitude",
        "type": "number"
    },
    {
        "name": "longitude",
        "baseName": "longitude",
        "type": "number"
    }
];
exports.Coordinates = Coordinates;
//# sourceMappingURL=coordinates.js.map