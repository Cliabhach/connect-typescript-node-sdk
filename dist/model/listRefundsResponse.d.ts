import { Refund } from './refund';
import { SquareError } from './squareError';
export declare class ListRefundsResponse {
    'errors'?: Array<SquareError>;
    'refunds'?: Array<Refund>;
    'cursor'?: string;
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
