import { Money } from './money';
import { SourceApplication } from './sourceApplication';
export declare class InventoryAdjustment {
    'id'?: string;
    'referenceId'?: string;
    'fromState'?: string;
    'toState'?: string;
    'locationId'?: string;
    'catalogObjectId'?: string;
    'catalogObjectType'?: string;
    'quantity'?: string;
    'totalPriceMoney'?: Money;
    'occurredAt'?: string;
    'createdAt'?: string;
    'source'?: SourceApplication;
    'employeeId'?: string;
    'transactionId'?: string;
    'refundId'?: string;
    'purchaseOrderId'?: string;
    'goodsReceiptId'?: string;
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
