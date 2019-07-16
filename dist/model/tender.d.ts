import { AdditionalRecipient } from './additionalRecipient';
import { Money } from './money';
import { TenderCardDetails } from './tenderCardDetails';
import { TenderCashDetails } from './tenderCashDetails';
export declare class Tender {
    'id'?: string;
    'locationId'?: string;
    'transactionId'?: string;
    'createdAt'?: string;
    'note'?: string;
    'amountMoney'?: Money;
    'tipMoney'?: Money;
    'processingFeeMoney'?: Money;
    'customerId'?: string;
    'type': string;
    'cardDetails'?: TenderCardDetails;
    'cashDetails'?: TenderCashDetails;
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
