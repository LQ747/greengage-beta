import { IRgb } from "./IRgb";

export interface IMeasurmentData{
    humidityData:string[],
    Co2Data:string[],
    TempData:string[],
    Nh3Data:string[],
    RgbData:IRgb;


}