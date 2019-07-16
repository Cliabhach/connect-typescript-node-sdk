import { V1Money } from './v1Money';
export declare class V1SettlementEntry {
    'paymentId'?: string;
    'type'?: string;
    'amountMoney'?: V1Money;
    'feeMoney'?: V1Money;
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
