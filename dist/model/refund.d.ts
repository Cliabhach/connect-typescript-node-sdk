import { AdditionalRecipient } from './additionalRecipient';
import { Money } from './money';
export declare class Refund {
    'id': string;
    'locationId': string;
    'transactionId': string;
    'tenderId': string;
    'createdAt'?: string;
    'reason': string;
    'amountMoney': Money;
    'status': string;
    'processingFeeMoney'?: Money;
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
