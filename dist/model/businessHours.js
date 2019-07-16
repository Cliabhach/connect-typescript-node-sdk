"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BusinessHours {
    static getAttributeTypeMap() {
        return BusinessHours.attributeTypeMap;
    }
}
BusinessHours.discriminator = undefined;
BusinessHours.attributeTypeMap = [
    {
        "name": "periods",
        "baseName": "periods",
        "type": "Array<BusinessHoursPeriod>"
    }
];
exports.BusinessHours = BusinessHours;
//# sourceMappingURL=businessHours.js.map