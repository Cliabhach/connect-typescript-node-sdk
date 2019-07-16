import { EmployeeWage } from './employeeWage';
export declare class GetEmployeeWageResponse {
    'employeeWage'?: EmployeeWage;
    'errors'?: Array<Error>;
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
