import { SquareError } from './squareError';
import { Transaction } from './transaction';
export declare class ChargeResponse {
    'errors'?: Array<SquareError>;
    'transaction'?: Transaction;
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
