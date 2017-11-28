import { ILocation } from "./ILocation";
import { ILink } from "./ILink";

export interface ISingleFarm {
    id:number;
    name:string;
    deviceNumber:number;
    location:ILocation;
    view_devices:ILink;
    view_users:ILink;
}