export class Offer {
  has: OfferItem;
  wants: OfferItem;
  link: string;
}

interface OfferItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
  certification;
  color;
}
