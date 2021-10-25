export type Locations = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type Cities = {
  location: Locations,
  name: string,
}

export type Hosts = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

export type Offer = {
  bedrooms: number,
  city: Cities,
  description: string,
  goods: string[],
  host: Hosts,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Locations,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type:string,
}

export type Offers = Offer[];
