import { OrderFulfillmentPickupDetails } from './orderFulfillmentPickupDetails';
export declare class OrderFulfillment {
    'type'?: string;
    'state'?: string;
    'pickupDetails'?: OrderFulfillmentPickupDetails;
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
