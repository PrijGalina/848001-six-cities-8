import {Offer} from '../types/offer';
import {ReviewType} from '../types/review';
import {OfferDTO, CommentDTO, UserDTO} from '../types/server-types';
import {UserData} from '../types/auth-data';

const adaptOffersToClient = (offers:OfferDTO[] = []): Offer[] =>
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
    location: {...offer.location },
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
  }));

const adaptOfferToClient = (offer:OfferDTO): Offer =>
  ({
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
    location: {...offer.location },
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
  });

const adaptCommentsToClient = (comments: CommentDTO[] = []): ReviewType[] =>
  comments.map((comment) => ({
    comment: comment.comment,
    date: comment.date,
    id: comment.id,
    rating: comment.rating,
    user: {
      avatarUrl: comment.user.avatar_url,
      id: comment.user.id,
      isPro: comment.user.is_pro,
      name: comment.user.name,
    },
  }));

const adaptUserToClient = (user: UserDTO): UserData =>
  ({
    avatarUrl: user.avatar_url,
    email: user.email,
    id: user.id,
    isPro: user.is_pro,
    name: user.name,
    token: user.token,
  });

export {adaptOffersToClient, adaptOfferToClient, adaptCommentsToClient, adaptUserToClient};
