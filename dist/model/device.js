"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Device {
    static getAttributeTypeMap() {
        return Device.attributeTypeMap;
    }
}
Device.discriminator = undefined;
Device.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.Device = Device;
//# sourceMappingURL=device.js.map