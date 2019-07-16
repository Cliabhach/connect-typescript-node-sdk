import { AdditionalRecipientReceivable } from './additionalRecipientReceivable';
export declare class ListAdditionalRecipientReceivablesResponse {
    'errors'?: Array<Error>;
    'receivables'?: Array<AdditionalRecipientReceivable>;
    'cursor'?: string;
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
