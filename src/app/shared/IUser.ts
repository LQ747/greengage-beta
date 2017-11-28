import { ILink } from './ILink';

export interface IUser {
    name: string;
    phone: number;
    email: string;
    message: string;
    exportType: string;
    role: string;
    details: ILink;

}
