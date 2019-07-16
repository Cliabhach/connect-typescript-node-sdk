import { Address } from './address';
export declare class CreateCustomerCardRequest {
    'cardNonce': string;
    'billingAddress'?: Address;
    'cardholderName'?: string;
    'verificationToken'?: string;
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
