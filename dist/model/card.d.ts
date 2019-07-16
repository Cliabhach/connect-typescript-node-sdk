import { Address } from './address';
export declare class Card {
    'id'?: string;
    'cardBrand'?: string;
    'last4'?: string;
    'expMonth'?: number;
    'expYear'?: number;
    'cardholderName'?: string;
    'billingAddress'?: Address;
    'fingerprint'?: string;
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
