import { Address } from './address';
export declare class CreateCustomerRequest {
    'idempotencyKey'?: string;
    'givenName'?: string;
    'familyName'?: string;
    'companyName'?: string;
    'nickname'?: string;
    'emailAddress'?: string;
    'address'?: Address;
    'phoneNumber'?: string;
    'referenceId'?: string;
    'note'?: string;
    'birthday'?: string;
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
