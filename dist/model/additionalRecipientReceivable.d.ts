import { AdditionalRecipientReceivableRefund } from './additionalRecipientReceivableRefund';
import { Money } from './money';
export declare class AdditionalRecipientReceivable {
    'id': string;
    'transactionId': string;
    'transactionLocationId': string;
    'amountMoney': Money;
    'createdAt'?: string;
    'refunds'?: Array<AdditionalRecipientReceivableRefund>;
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
