import { IDog } from '../Dog';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { PushDog, PushToFavourites, EmptyStore, EmptyFavourites } from './dog.action';
export class DogStateModel {
    dogs: IDog[];

    favouritedogs: IDog[];
}

@State<DogStateModel>(
    {
        name: "dogs",
        defaults: {
            dogs: [],
            favouritedogs: []
        }
    }
)

export class DogState {
    constructor() { }
    @Selector()
    static getDogs(state: DogStateModel): IDog[] {
        return state.dogs;
    }

    @Selector()
    static getFavouriteDogs(state: DogStateModel): IDog[] {
        return state.favouritedogs;
    }

    @Action(PushDog)
    addDog(cntx: StateContext<DogStateModel>, { payload }: PushDog) {
        const state = cntx.getState();
        cntx.patchState({
            dogs: [...state.dogs, payload]
        });
    }

    @Action(PushToFavourites)
    addTofavourites(cntx: StateContext<DogStateModel>, { payload }: PushToFavourites) {
        const state = cntx.getState();
        cntx.patchState({
            favouritedogs: [...state.favouritedogs, payload]
        });
    }

    @Action(EmptyStore)
    emptyTheStore(cntx: StateContext<DogStateModel>) {
        const state = cntx.getState();
        cntx.patchState({
            dogs: []
        })
    }

    @Action(EmptyFavourites)
    emptyTheFavourites(cntx: StateContext<DogStateModel>) {
        const state = cntx.getState();
        cntx.patchState({
            favouritedogs: []
        })
    }
}