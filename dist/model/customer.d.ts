import { Address } from './address';
import { Card } from './card';
import { CustomerGroupInfo } from './customerGroupInfo';
import { CustomerPreferences } from './customerPreferences';
export declare class Customer {
    'id': string;
    'createdAt': string;
    'updatedAt': string;
    'cards'?: Array<Card>;
    'givenName'?: string;
    'familyName'?: string;
    'nickname'?: string;
    'companyName'?: string;
    'emailAddress'?: string;
    'address'?: Address;
    'phoneNumber'?: string;
    'birthday'?: string;
    'referenceId'?: string;
    'note'?: string;
    'preferences'?: CustomerPreferences;
    'groups'?: Array<CustomerGroupInfo>;
    'creationSource'?: string;
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
