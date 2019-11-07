import { IDog } from '../Dog';

export class pushdog
{
        static readonly type="Dog loaded"

        constructor( public payload:IDog){}
}

export class pushToFavourites
{
        static readonly type="Favourite dog"

        constructor( public payload:IDog){}

}