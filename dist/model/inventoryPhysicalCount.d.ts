import { SourceApplication } from './sourceApplication';
export declare class InventoryPhysicalCount {
    'id'?: string;
    'referenceId'?: string;
    'catalogObjectId'?: string;
    'catalogObjectType'?: string;
    'state'?: string;
    'locationId'?: string;
    'quantity'?: string;
    'source'?: SourceApplication;
    'employeeId'?: string;
    'occurredAt'?: string;
    'createdAt'?: string;
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
