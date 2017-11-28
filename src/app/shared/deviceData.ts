import { IdeviceFar } from "./IdeviceFar";
import { IDeviceSingleMessage } from "./IDeviceSingleMessage";

export const DEVICES: IDeviceSingleMessage = {

    "msg": "Device Details",
    "device": {
        "id": 1,
        "deviceName": "ABC-380",
        "version": "1.18",
        "status": "Active",
        "measurment": {
            "href": "/api/measurement/ABC-380",
            "method": "GET"
        },
        "sensors": {
            "href": "/api/device/sensors/ABC-380",
            "method": "GET"
        }
    },
    "farm": "Chicken"
}