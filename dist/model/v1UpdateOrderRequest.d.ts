export declare class V1UpdateOrderRequest {
    'action': string;
    'shippedTrackingNumber'?: string;
    'completedNote'?: string;
    'refundedNote'?: string;
    'canceledNote'?: string;
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
