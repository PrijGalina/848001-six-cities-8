import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {CITIES} from '../const';
import {getOffersInCity} from '../utils';
import {offers} from '../mocks/offers';

const initialState = {
  city: CITIES[0],
  offers: getOffersInCity(offers, CITIES[0]),
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ActiveCity:
      return {...state, city: action.payload};
    case ActionType.OffersList:
      return {...state, offers: getOffersInCity(offers, state.city)};
    default:
      return state;
  }
};

export {reducer};
