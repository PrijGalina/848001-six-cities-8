
static adaptToClient(offers = []) {
  return offers.map((m = {}) => ({
    bedrooms: m.bedrooms,
    city: m.city,
    comments: m.comments,
    : m.city.location,
    : m.city.location.latitude,
    : m.city.location.longitude,
    : m.city.location.zoom,
    : m.city.name
    : m.description
    : m.goods
    : m.host
    : m.avatar_url
    : m.id
    : m.is_pro
    : m.name
    : m.id
    : m.images
    : m.is_favorite
    : m.is_premium
    : m.location
    : m.latitude
    : m.longitude
    : m.max_adults
    : m.preview_image
    : m.price
    : m.rating
    : m.title
    : m.type
  }));
}
