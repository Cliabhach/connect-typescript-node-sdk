import { Address } from './address';
import { V1MerchantLocationDetails } from './v1MerchantLocationDetails';
import { V1PhoneNumber } from './v1PhoneNumber';
export declare class V1Merchant {
    'id'?: string;
    'name'?: string;
    'email'?: string;
    'accountType'?: string;
    'accountCapabilities'?: Array<string>;
    'countryCode'?: string;
    'languageCode'?: string;
    'currencyCode'?: string;
    'businessName'?: string;
    'businessAddress'?: Address;
    'businessPhone'?: V1PhoneNumber;
    'businessType'?: string;
    'shippingAddress'?: Address;
    'locationDetails'?: V1MerchantLocationDetails;
    'marketUrl'?: string;
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
