import { Money } from './money';
export declare class AdditionalRecipientReceivableRefund {
    'id': string;
    'receivableId': string;
    'refundId': string;
    'transactionLocationId': string;
    'amountMoney': Money;
    'createdAt'?: string;
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
