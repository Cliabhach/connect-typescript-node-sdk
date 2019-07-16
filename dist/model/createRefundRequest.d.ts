import { Money } from './money';
export declare class CreateRefundRequest {
    'idempotencyKey': string;
    'tenderId': string;
    'reason'?: string;
    'amountMoney': Money;
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
