export declare class V1ListRefundsRequest {
    'order'?: string;
    'beginTime'?: string;
    'endTime'?: string;
    'limit'?: number;
    'batchToken'?: string;
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
