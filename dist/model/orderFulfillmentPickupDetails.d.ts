import { OrderFulfillmentRecipient } from './orderFulfillmentRecipient';
export declare class OrderFulfillmentPickupDetails {
    'recipient'?: OrderFulfillmentRecipient;
    'expiresAt'?: string;
    'autoCompleteDuration'?: string;
    'scheduleType'?: string;
    'pickupAt'?: string;
    'pickupWindowDuration'?: string;
    'prepTimeDuration'?: string;
    'note'?: string;
    'placedAt'?: string;
    'acceptedAt'?: string;
    'rejectedAt'?: string;
    'readyAt'?: string;
    'expiredAt'?: string;
    'pickedUpAt'?: string;
    'canceledAt'?: string;
    'cancelReason'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
