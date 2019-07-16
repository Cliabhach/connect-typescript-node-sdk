"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderEntry {
    static getAttributeTypeMap() {
        return OrderEntry.attributeTypeMap;
    }
}
OrderEntry.discriminator = undefined;
OrderEntry.attributeTypeMap = [
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "locationId",
        "baseName": "location_id",
        "type": "string"
    }
];
exports.OrderEntry = OrderEntry;
//# sourceMappingURL=orderEntry.js.map