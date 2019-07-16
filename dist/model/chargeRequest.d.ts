import { AdditionalRecipient } from './additionalRecipient';
import { Address } from './address';
import { Money } from './money';
export declare class ChargeRequest {
    'idempotencyKey': string;
    'amountMoney': Money;
    'cardNonce'?: string;
    'customerCardId'?: string;
    'delayCapture'?: boolean;
    'referenceId'?: string;
    'note'?: string;
    'customerId'?: string;
    'billingAddress'?: Address;
    'shippingAddress'?: Address;
    'buyerEmailAddress'?: string;
    'orderId'?: string;
    'additionalRecipients'?: Array<AdditionalRecipient>;
    'verificationToken'?: string;
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
