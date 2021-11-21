import {Offer} from '../types/offer';
import {OfferDTO} from '../types/server-types';

const adaptToClient = (offers:OfferDTO[] = []):Offer[] =>
  offers.map((offer) => ({
    bedrooms: offer.bedrooms,
    city: {
      location: {...offer.city.location },
      name: offer.city.name,
    },
    description: offer.description,
    goods: offer.goods,
    host: {
      avatarUrl: offer.host.avatar_url,
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
    },
    id: offer.id,
    images: offer.images,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    location: {...offer.city.location },
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
  }));

export {adaptToClient};
