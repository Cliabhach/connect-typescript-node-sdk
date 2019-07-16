import { Refund } from './refund';
export declare class CreateRefundResponse {
    'errors'?: Array<Error>;
    'refund'?: Refund;
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
