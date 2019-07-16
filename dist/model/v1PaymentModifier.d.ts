import { V1Money } from './v1Money';
export declare class V1PaymentModifier {
    'name'?: string;
    'appliedMoney'?: V1Money;
    'modifierOptionId'?: string;
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
