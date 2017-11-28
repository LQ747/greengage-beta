import { ILocation } from './ILocation';
import { ILink } from './ILink';

export interface IFarmList {

    id: number;
    name: string;
    Company:string;
    location: ILocation;
    view_single: ILink;
    Farmlocation:string;
}
