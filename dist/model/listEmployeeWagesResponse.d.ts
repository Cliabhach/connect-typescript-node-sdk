import { EmployeeWage } from './employeeWage';
import { SquareError } from './squareError';
export declare class ListEmployeeWagesResponse {
    'employeeWages'?: Array<EmployeeWage>;
    'cursor'?: string;
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
