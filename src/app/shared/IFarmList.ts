import { ILocation } from './ILocation';
import { ILink } from './ILink';

export interface IFarmList {

    id: number;
    name: string;
    location: ILocation;
    view_single: ILink;
}
