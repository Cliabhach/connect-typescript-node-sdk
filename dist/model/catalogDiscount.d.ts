import { Money } from './money';
export declare class CatalogDiscount {
    'name'?: string;
    'discountType'?: string;
    'percentage'?: string;
    'amountMoney'?: Money;
    'pinRequired'?: boolean;
    'labelColor'?: string;
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
