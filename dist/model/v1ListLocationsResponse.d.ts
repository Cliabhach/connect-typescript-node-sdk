import { V1Merchant } from './v1Merchant';
export declare class V1ListLocationsResponse {
    'items'?: Array<V1Merchant>;
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
