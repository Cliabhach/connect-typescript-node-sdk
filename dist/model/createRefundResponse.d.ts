import { Refund } from './refund';
import { SquareError } from './squareError';
export declare class CreateRefundResponse {
    'errors'?: Array<SquareError>;
    'refund'?: Refund;
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
