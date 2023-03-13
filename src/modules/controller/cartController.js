import { renderCard } from '../render/renderCard';
import { renderCart } from '../render/renderCart';
import { renderHero } from '../render/renderHero';
import { renderNavigation } from '../render/renderNavigation';
import { renderOrder } from '../render/renderOrder';
import { renderProducts } from '../render/renderProducts';

export const addProductCart = (product) => {
  console.log('product: ', product);
};

export const cartController = () => {
  renderNavigation({ render: false });
  renderHero({ render: false });
  renderCard({ render: false });
  renderProducts({ render: false });
  renderCart({ render: true });
  renderOrder({ render: true });
};
