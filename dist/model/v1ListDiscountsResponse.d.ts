import { V1Discount } from './v1Discount';
export declare class V1ListDiscountsResponse {
    'items'?: Array<V1Discount>;
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
