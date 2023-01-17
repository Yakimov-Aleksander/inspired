import { renderHero } from '../render/renderHero';
import { renderNavigation } from '../render/renderNavigation';
import { renderProducts } from '../render/renderProducts';

export const mainPage = (gender) => {
  console.log('gender: ', gender);
  renderNavigation();
  renderHero();
  renderProducts();
};
