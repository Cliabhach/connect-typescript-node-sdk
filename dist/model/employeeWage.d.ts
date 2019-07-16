import { Money } from './money';
export declare class EmployeeWage {
    'id'?: string;
    'employeeId': string;
    'title'?: string;
    'hourlyRate'?: Money;
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
