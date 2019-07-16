import { V1Page } from './v1Page';
export declare class V1ListPagesResponse {
    'items'?: Array<V1Page>;
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
