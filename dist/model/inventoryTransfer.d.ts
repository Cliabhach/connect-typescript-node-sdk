import { SourceApplication } from './sourceApplication';
export declare class InventoryTransfer {
    'id'?: string;
    'referenceId'?: string;
    'state'?: string;
    'fromLocationId'?: string;
    'toLocationId'?: string;
    'catalogObjectId'?: string;
    'catalogObjectType'?: string;
    'quantity'?: string;
    'occurredAt'?: string;
    'createdAt'?: string;
    'source'?: SourceApplication;
    'employeeId'?: string;
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
