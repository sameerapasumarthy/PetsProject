import { IDog } from '../Dog';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { PushDog, PushToFavourites, EmptyStore, EmptyFavourites, RemoveFromFavourite, FavouriteDogs, editItem, editFavItem } from './dog.action';
import { DogsService } from '../dogs.service';
export class DogStateModel {
    // dogs: IDog[];
    //favouritedogs: IDog[];

    dogs: { [key: string]: IDog }
    favouritedogs: { [key: string]: IDog }
}

@State<DogStateModel>(
    {
        name: "dogs",
        defaults: {
            dogs: {},
            favouritedogs: {}
        }
    }
)

export class DogState {
    constructor() { }
    @Selector()
    static getDogs(state: DogStateModel): IDog[] {
        // return state.dogs;
        return Object.values(state.dogs)
    }

    @Selector()
    static getFavouriteDogs(state: DogStateModel): IDog[] {
        return Object.values(state.favouritedogs);
    }

    @Action(PushDog)
    addDog(cntx: StateContext<DogStateModel>, { dog }: PushDog) {
        const state = cntx.getState();
        cntx.patchState({
            dogs: {
                ...state.dogs,
                [dog.message]: { ...dog }
            }
        });
    }

    @Action(PushToFavourites)
    addTofavourites(cntx: StateContext<DogStateModel>, { favdog }: PushToFavourites) {
        const state = cntx.getState();
        const dogscopy = { ...state.dogs };
        const key = favdog.message
        delete dogscopy[key]
        //state.dogs=dogscopy
        cntx.patchState({
            dogs: dogscopy,
            favouritedogs: {
                ...state.favouritedogs,
                [favdog.message]: { ...favdog }
            }

        });
    }

    @Action(FavouriteDogs)
    getFavourites(cntx: StateContext<DogStateModel>,{ favdogobj }:FavouriteDogs)
    {
        const state = cntx.getState();
        
        cntx.patchState({favouritedogs: favdogobj })
    }
    

    @Action(RemoveFromFavourite)
    removeDog(cntx: StateContext<DogStateModel>, { dog }: RemoveFromFavourite) {
        const state = cntx.getState();
        const favdogscopy = { ...state.favouritedogs };
        const key = dog.message
        delete favdogscopy[key]
        cntx.patchState({
            favouritedogs: favdogscopy,
            dogs: {
                ...state.dogs,
                [dog.message]: { ...dog }
             }
        })
    }

    @Action(editItem)
    editDogDetails(cntx: StateContext<DogStateModel>, { dog }: editItem)
    {
        const state = cntx.getState();
        cntx.patchState({
            
            dogs: {
                ...state.dogs,
                [dog.message]: { ...dog }
             }
            
            })
    }
    @Action(editFavItem)
    editFavDogDetails(cntx: StateContext<DogStateModel>, { dog }: editFavItem)
    {
        const state = cntx.getState();
        cntx.patchState({
            
            favouritedogs: {
                ...state.favouritedogs,
                [dog.message]: { ...dog }
             }
            
            })
    }


    @Action(EmptyStore)
    emptyTheStore(cntx: StateContext<DogStateModel>) {
        const state = cntx.getState();
        cntx.patchState({
            dogs: {}
        })
    }

    @Action(EmptyFavourites)
    emptyTheFavourites(cntx: StateContext<DogStateModel>) {
        const state = cntx.getState();
        cntx.patchState({
            favouritedogs: {}
        })
    }
}