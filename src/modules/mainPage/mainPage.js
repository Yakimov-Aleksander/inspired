import { renderHero } from '../render/renderHero';
import { renderNavigation } from '../render/renderNavigation';
import { renderProducts } from '../render/renderProducts';

export const mainPage = (gender = 'women') => {
  console.log('gender: ', gender);
  renderNavigation(gender);
  renderHero(gender);
  renderProducts('Новинки', { gender });
};
