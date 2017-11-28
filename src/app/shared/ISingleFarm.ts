import { ILocation } from "./ILocation";
import { ILink } from "./ILink";
import { IAction } from "./IAction";

export interface ISingleFarm {
    id:number;
    name:string;
    numberOfUsers:number;
    deviceNumber:number;
    location:ILocation;
    view_devices:ILink;
    view_users:ILink;
    action:IAction;
}