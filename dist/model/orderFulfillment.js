"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderFulfillment {
    static getAttributeTypeMap() {
        return OrderFulfillment.attributeTypeMap;
    }
}
OrderFulfillment.discriminator = undefined;
OrderFulfillment.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "pickupDetails",
        "baseName": "pickup_details",
        "type": "OrderFulfillmentPickupDetails"
    }
];
exports.OrderFulfillment = OrderFulfillment;
//# sourceMappingURL=orderFulfillment.js.map