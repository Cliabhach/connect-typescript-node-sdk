import { Customer } from './customer';
import { SquareError } from './squareError';
export declare class CreateCustomerResponse {
    'errors'?: Array<SquareError>;
    'customer'?: Customer;
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
