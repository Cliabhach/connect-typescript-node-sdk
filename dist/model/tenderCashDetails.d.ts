import { Money } from './money';
export declare class TenderCashDetails {
    'buyerTenderedMoney'?: Money;
    'changeBackMoney'?: Money;
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
