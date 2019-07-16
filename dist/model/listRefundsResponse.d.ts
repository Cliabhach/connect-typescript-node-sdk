import { Refund } from './refund';
export declare class ListRefundsResponse {
    'errors'?: Array<Error>;
    'refunds'?: Array<Refund>;
    'cursor'?: string;
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
