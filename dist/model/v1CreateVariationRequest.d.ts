import { V1Variation } from './v1Variation';
export declare class V1CreateVariationRequest {
    'body'?: V1Variation;
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
