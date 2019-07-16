import { V1Fee } from './v1Fee';
export declare class V1ListFeesResponse {
    'items'?: Array<V1Fee>;
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
