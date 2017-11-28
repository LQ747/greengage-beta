import { ILink } from "./ILink";

export interface IDevice {
    id:number;
    deviceName:string;
    version:string;
    status:string;
    details:ILink;
}