import { IDog } from '../Dog';

export class PushDog {
        static readonly type = "Dog loaded"

        constructor(public payload: IDog) { }
}

export class PushToFavourites {
        static readonly type = "Favourite dog"

        constructor(public payload: IDog) { }

}

export class EmptyStore {
        static readonly type = "Empty the store"
}

export class EmptyFavourites {
        static readonly type = "Empty the Favourites"
}