"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderFulfillmentRecipient {
    static getAttributeTypeMap() {
        return OrderFulfillmentRecipient.attributeTypeMap;
    }
}
OrderFulfillmentRecipient.discriminator = undefined;
OrderFulfillmentRecipient.attributeTypeMap = [
    {
        "name": "customerId",
        "baseName": "customer_id",
        "type": "string"
    },
    {
        "name": "displayName",
        "baseName": "display_name",
        "type": "string"
    },
    {
        "name": "emailAddress",
        "baseName": "email_address",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phone_number",
        "type": "string"
    }
];
exports.OrderFulfillmentRecipient = OrderFulfillmentRecipient;
//# sourceMappingURL=orderFulfillmentRecipient.js.map