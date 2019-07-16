import { V1Payment } from './v1Payment';
export declare class V1ListPaymentsResponse {
    'items'?: Array<V1Payment>;
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
