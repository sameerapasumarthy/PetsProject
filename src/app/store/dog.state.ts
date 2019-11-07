import { IDog } from '../Dog';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { pushdog, pushToFavourites } from './dog.action';
export class DogStateModel
{
    dogs:IDog[];

    favouritedogs:IDog[];
}

@State<DogStateModel>(
    {
        name:"dogs",
        defaults:{
            dogs:[],
            favouritedogs:[]
        }
    }
)

export class DogState{
        constructor(){}



        @Selector()
         static getDogs(state:DogStateModel):IDog[]
        {
                return state.dogs;
        }

        @Selector()
        static getFavouriteDogs(state:DogStateModel):IDog[]
        {
            return state.favouritedogs;
        }

        @Action(pushdog)
        addDog(cntx:StateContext<DogStateModel>,{ payload }:pushdog)
        {
            const state=cntx.getState();
            cntx.patchState({
                dogs:[...state.dogs,payload]
                 });
        }

        @Action(pushToFavourites)
        addTofavourites(cntx:StateContext<DogStateModel>,{ payload }:pushToFavourites)
        {
            const state=cntx.getState();
            cntx.patchState({
                dogs:[...state.favouritedogs,payload]
                 });
        }
}