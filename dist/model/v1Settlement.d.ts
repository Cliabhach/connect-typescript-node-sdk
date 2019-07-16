import { V1Money } from './v1Money';
import { V1SettlementEntry } from './v1SettlementEntry';
export declare class V1Settlement {
    'id'?: string;
    'status'?: string;
    'totalMoney'?: V1Money;
    'initiatedAt'?: string;
    'bankAccountId'?: string;
    'entries'?: Array<V1SettlementEntry>;
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
