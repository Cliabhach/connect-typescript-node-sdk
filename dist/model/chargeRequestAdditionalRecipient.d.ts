import { Money } from './money';
export declare class ChargeRequestAdditionalRecipient {
    'locationId': string;
    'description': string;
    'amountMoney': Money;
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
