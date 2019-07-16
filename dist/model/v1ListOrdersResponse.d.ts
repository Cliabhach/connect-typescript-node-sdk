import { V1Order } from './v1Order';
export declare class V1ListOrdersResponse {
    'items'?: Array<V1Order>;
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
