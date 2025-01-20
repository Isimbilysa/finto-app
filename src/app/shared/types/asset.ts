import { Portfolio } from "./portfolio";

export interface Asset {
    id:string,
    name : string, 
    description : string, 
    marketValue: number,
    assetType: string,
    assetStatus : string,
    portfolio: Portfolio
    // assetStatus: string,
}
