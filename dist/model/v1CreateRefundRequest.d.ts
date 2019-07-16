import { V1Money } from './v1Money';
export declare class V1CreateRefundRequest {
    'paymentId': string;
    'type': string;
    'reason': string;
    'refundedMoney'?: V1Money;
    'requestIdempotenceKey'?: string;
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
