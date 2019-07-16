import { Address } from './address';
import { ChargeRequestAdditionalRecipient } from './chargeRequestAdditionalRecipient';
import { CreateOrderRequest } from './createOrderRequest';
export declare class CreateCheckoutRequest {
    'idempotencyKey': string;
    'order': CreateOrderRequest;
    'askForShippingAddress'?: boolean;
    'merchantSupportEmail'?: string;
    'prePopulateBuyerEmail'?: string;
    'prePopulateShippingAddress'?: Address;
    'redirectUrl'?: string;
    'additionalRecipients'?: Array<ChargeRequestAdditionalRecipient>;
    'note'?: string;
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
