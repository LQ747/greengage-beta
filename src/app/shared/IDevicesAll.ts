import { ILink } from "./ILink";
import { ISensors } from "./ISensors";

export class IDevicesAll{
    id:number;
    deviceName:string;
    version:string;
    status:string;
    details:ILink;
    sensors:ISensors;
    farm:string;
}