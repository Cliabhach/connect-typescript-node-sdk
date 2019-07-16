import { Customer } from './customer';
import { SquareError } from './squareError';
export declare class ListCustomersResponse {
    'errors'?: Array<SquareError>;
    'customers'?: Array<Customer>;
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
