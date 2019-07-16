import { Customer } from './customer';
export declare class RetrieveCustomerResponse {
    'errors'?: Array<Error>;
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
