import {Location, City} from './offer';

export type HostsDTO = {
  'avatar_url': string,
  'id': number,
  'is_pro': boolean,
  'name': string,
}

export type OfferDTO = {
  'bedrooms': number,
  'city': City,
  'description': string,
  'goods': string[],
  'host': HostsDTO,
  'id': number,
  'images': string[],
  'is_favorite': boolean,
  'is_premium': boolean,
  'location': Location,
  'max_adults': number,
  'preview_image': string,
  'price': number,
  'rating': number,
  'title': string,
  'type': string,
}

export type CommentDTO = {
  'comment': string,
  'date': string,
  'id': number,
  'rating': number,
  'user': {
    'avatar_url': string,
    'id': number,
    'is_pro': boolean,
    'name': string,
  },
}

export type UserDTO = {
  'email': string,
  'avatar_url': string,
  'id': number,
  'is_pro': boolean,
  'name': string,
  'token': string,
}
