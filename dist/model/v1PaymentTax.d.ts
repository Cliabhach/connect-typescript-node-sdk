import { SquareError } from './squareError';
import { V1Money } from './v1Money';
export declare class V1PaymentTax {
    'errors'?: Array<SquareError>;
    'name'?: string;
    'appliedMoney'?: V1Money;
    'rate'?: string;
    'inclusionType'?: string;
    'feeId'?: string;
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
