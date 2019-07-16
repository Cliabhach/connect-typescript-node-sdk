import { Money } from './money';
export declare class AdditionalRecipient {
    'locationId': string;
    'description': string;
    'amountMoney': Money;
    'receivableId'?: string;
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
