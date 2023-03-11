import { API_URL, DATA } from '../const';
import { getData } from '../getData';
import { renderCard } from '../render/renderCard';
import { renderHero } from '../render/renderHero';
import { renderNavigation } from '../render/renderNavigation';
import { renderProducts } from '../render/renderProducts';

export const cardController = async (routerData) => {
  const { id } = routerData.data;

  const data = await getData(`${API_URL}/api/goods/${id}`);

  renderNavigation(data.gender, data.category);
  renderHero(false);
  renderCard(data);
  renderProducts('Вам также может понравиться', {
    count: 4,
    gender: data.gender,
  });
};
