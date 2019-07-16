import { V1Category } from './v1Category';
export declare class V1ListCategoriesResponse {
    'items'?: Array<V1Category>;
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
