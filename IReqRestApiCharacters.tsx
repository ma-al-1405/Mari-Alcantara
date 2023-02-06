/*Hacemos uso de la api y se intercambian los valores por los siguientes
a. Welcome por IReqRestApiCharacters.
b. Info por IInfo.
c. Result por ICharacter.
d. Gender por IGender.
e. Location por ILocation.
f. Status por IStatus.
Esto aplicado y recolectado de  la respuesta de Postman y de la pagina https://app.quicktype.io/ con lenjuega TypeScript
*/

export interface IReqRestApiCharacters {
    info:    IInfo;
    results: ICharacter[];
}
export interface IInfo {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}
export interface ICharacter {
    id:       number;
    name:     string;
    status:   IStatus;
    species:  string;
    type:     string;
    gender:   IGender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}
export enum IGender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}
export interface ILocation {
    name: string;
    url:  string;
}
export enum IStatus {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
