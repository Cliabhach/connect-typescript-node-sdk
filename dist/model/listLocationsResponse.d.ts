import { Location } from './location';
export declare class ListLocationsResponse {
    'errors'?: Array<Error>;
    'locations'?: Array<Location>;
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
