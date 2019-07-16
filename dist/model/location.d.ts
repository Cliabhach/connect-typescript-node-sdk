import { Address } from './address';
import { BusinessHours } from './businessHours';
import { Coordinates } from './coordinates';
export declare class Location {
    'id'?: string;
    'name'?: string;
    'address'?: Address;
    'timezone'?: string;
    'capabilities'?: Array<string>;
    'status'?: string;
    'createdAt'?: string;
    'merchantId'?: string;
    'country'?: string;
    'languageCode'?: string;
    'currency'?: string;
    'phoneNumber'?: string;
    'businessName'?: string;
    'type'?: string;
    'websiteUrl'?: string;
    'businessHours'?: BusinessHours;
    'businessEmail'?: string;
    'description'?: string;
    'twitterUsername'?: string;
    'instagramUsername'?: string;
    'facebookUrl'?: string;
    'coordinates'?: Coordinates;
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
