"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderFulfillmentPickupDetails {
    static getAttributeTypeMap() {
        return OrderFulfillmentPickupDetails.attributeTypeMap;
    }
}
OrderFulfillmentPickupDetails.discriminator = undefined;
OrderFulfillmentPickupDetails.attributeTypeMap = [
    {
        "name": "recipient",
        "baseName": "recipient",
        "type": "OrderFulfillmentRecipient"
    },
    {
        "name": "expiresAt",
        "baseName": "expires_at",
        "type": "string"
    },
    {
        "name": "autoCompleteDuration",
        "baseName": "auto_complete_duration",
        "type": "string"
    },
    {
        "name": "scheduleType",
        "baseName": "schedule_type",
        "type": "string"
    },
    {
        "name": "pickupAt",
        "baseName": "pickup_at",
        "type": "string"
    },
    {
        "name": "pickupWindowDuration",
        "baseName": "pickup_window_duration",
        "type": "string"
    },
    {
        "name": "prepTimeDuration",
        "baseName": "prep_time_duration",
        "type": "string"
    },
    {
        "name": "note",
        "baseName": "note",
        "type": "string"
    },
    {
        "name": "placedAt",
        "baseName": "placed_at",
        "type": "string"
    },
    {
        "name": "acceptedAt",
        "baseName": "accepted_at",
        "type": "string"
    },
    {
        "name": "rejectedAt",
        "baseName": "rejected_at",
        "type": "string"
    },
    {
        "name": "readyAt",
        "baseName": "ready_at",
        "type": "string"
    },
    {
        "name": "expiredAt",
        "baseName": "expired_at",
        "type": "string"
    },
    {
        "name": "pickedUpAt",
        "baseName": "picked_up_at",
        "type": "string"
    },
    {
        "name": "canceledAt",
        "baseName": "canceled_at",
        "type": "string"
    },
    {
        "name": "cancelReason",
        "baseName": "cancel_reason",
        "type": "string"
    }
];
exports.OrderFulfillmentPickupDetails = OrderFulfillmentPickupDetails;
//# sourceMappingURL=orderFulfillmentPickupDetails.js.map