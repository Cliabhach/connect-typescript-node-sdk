import { V1Refund } from './v1Refund';
export declare class V1ListRefundsResponse {
    'items'?: Array<V1Refund>;
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
