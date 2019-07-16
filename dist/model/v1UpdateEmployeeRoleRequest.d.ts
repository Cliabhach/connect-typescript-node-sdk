import { V1EmployeeRole } from './v1EmployeeRole';
export declare class V1UpdateEmployeeRoleRequest {
    'body': V1EmployeeRole;
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
