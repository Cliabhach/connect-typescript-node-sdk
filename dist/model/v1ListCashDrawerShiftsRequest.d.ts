export declare class V1ListCashDrawerShiftsRequest {
    'order'?: string;
    'beginTime'?: string;
    'endTime'?: string;
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
