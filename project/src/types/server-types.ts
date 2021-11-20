import {Location, City} from './offer';

export type ServerHosts = {
  'avatar_url': string,
  'id': number,
  'is_pro': boolean,
  'name': string,
}

export type ServerOffer = {
  'bedrooms': number,
  city: City,
  'description': string,
  'goods': string[],
  host: ServerHosts,
  'id': number,
  'images': string[],
  'is_favorite': boolean,
  'is_premium': boolean,
  location: Location,
  'max_adults': number,
  'preview_image': string,
  'price': number,
  'rating': number,
  'title': string,
  'type': string,
}
