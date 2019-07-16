import { EmployeeWage } from './employeeWage';
import { SquareError } from './squareError';
export declare class GetEmployeeWageResponse {
    'employeeWage'?: EmployeeWage;
    'errors'?: Array<SquareError>;
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
