import { V1Settlement } from './v1Settlement';
export declare class V1ListSettlementsResponse {
    'items'?: Array<V1Settlement>;
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
