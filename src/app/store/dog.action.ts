import { IDog } from '../Dog';

export class PushDog {
        static readonly type = "Dog loaded"

        constructor(public dog: IDog) { }
}

export class PushToFavourites {
        static readonly type ="dog liked"

        constructor(public favdog: IDog) { }
}
export class FavouriteDogs
{
        static readonly type = "Favourite dogs" 
        constructor(public favdogobj: {}) { } 
}


export class RemoveFromFavourite
{
        static readonly type = "Dislike dog"
        constructor(public dog: IDog) { }
}
export class EmptyStore {
        static readonly type = "Empty the store"

}

export class editItem{
        static readonly type = "Edit Dog"  
        constructor(public dog: IDog) { }
}

export class editFavItem{
        static readonly type = "Edit Dog"  
        constructor(public dog: IDog) { }
}


export class EmptyFavourites {
        static readonly type = "Empty the Favourites"
}