import { IDevice } from "./IDevice";
import { IDiviceSingle } from "./IDiviceSingle";

export interface IDeviceSingleMessage {
    msg:string;
    device:IDiviceSingle;
    farm:string;
}