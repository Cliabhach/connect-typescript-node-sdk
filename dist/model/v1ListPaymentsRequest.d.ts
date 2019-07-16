export declare class V1ListPaymentsRequest {
    'order'?: string;
    'beginTime'?: string;
    'endTime'?: string;
    'limit'?: number;
    'batchToken'?: string;
    'includePartial'?: boolean;
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
