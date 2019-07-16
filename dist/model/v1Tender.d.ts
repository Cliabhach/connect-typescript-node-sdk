import { V1Money } from './v1Money';
export declare class V1Tender {
    'id'?: string;
    'type'?: string;
    'name'?: string;
    'employeeId'?: string;
    'receiptUrl'?: string;
    'cardBrand'?: string;
    'panSuffix'?: string;
    'entryMethod'?: string;
    'paymentNote'?: string;
    'totalMoney'?: V1Money;
    'tenderedMoney'?: V1Money;
    'tenderedAt'?: string;
    'settledAt'?: string;
    'changeBackMoney'?: V1Money;
    'refundedMoney'?: V1Money;
    'isExchange'?: boolean;
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
