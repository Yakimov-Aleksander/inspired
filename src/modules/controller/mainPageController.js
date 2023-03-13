import { renderCard } from '../render/renderCard';
import { renderCart } from '../render/renderCart';
import { renderHero } from '../render/renderHero';
import { renderNavigation } from '../render/renderNavigation';
import { renderOrder } from '../render/renderOrder';
import { renderProducts } from '../render/renderProducts';

export const mainPageController = (gender = 'women') => {
  renderNavigation({ gender, render: true });
  renderHero({ gender, render: true });
  renderCard({ rende: false });
  renderProducts({ title: 'Новинки', params: { gender }, render: true });
  renderCart({ render: false });
  renderOrder({ render: false });
};
