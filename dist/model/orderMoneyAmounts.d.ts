import { Money } from './money';
export declare class OrderMoneyAmounts {
    'totalMoney'?: Money;
    'taxMoney'?: Money;
    'discountMoney'?: Money;
    'tipMoney'?: Money;
    'serviceChargeMoney'?: Money;
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
