import {ActionType, Actions} from '../../types/action';
import {AppData} from '../../types/state';
import {CITIES} from '../../const';
import {offers} from '../../mocks/offers';
import {getOffersInCity} from '../../utils';

const initialState = {
  city: CITIES[0],
  offers: getOffersInCity(offers, CITIES[0]),
  isDataLoaded: true,
};

const appData = (state = initialState, action: Actions): AppData => {
  switch (action.type) {
    case ActionType.ActiveCity:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.OffersList:
      return {
        ...state,
        offers: getOffersInCity(offers, state.city),
        isDataLoaded: true,
      };
    case ActionType.OfferInFocus:
      return {
        ...state,
        offerInFocus: action.payload,
      };
    default:
      return state;
  }
};

export {appData};

