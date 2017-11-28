import { ILink } from "./ILink";

export interface IDiviceSingle {
    id:number;
    deviceName:string;
    version:string;
    status:string;
    measurment:ILink;
    sensors:ILink;
}