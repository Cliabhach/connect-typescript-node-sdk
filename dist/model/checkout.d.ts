import { AdditionalRecipient } from './additionalRecipient';
import { Address } from './address';
import { Order } from './order';
export declare class Checkout {
    'id'?: string;
    'checkoutPageUrl'?: string;
    'askForShippingAddress'?: boolean;
    'merchantSupportEmail'?: string;
    'prePopulateBuyerEmail'?: string;
    'prePopulateShippingAddress'?: Address;
    'redirectUrl'?: string;
    'order'?: Order;
    'createdAt'?: string;
    'additionalRecipients'?: Array<AdditionalRecipient>;
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
