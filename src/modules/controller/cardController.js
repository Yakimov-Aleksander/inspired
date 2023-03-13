import { API_URL, DATA } from '../const';
import { getData } from '../getData';
import { renderCard } from '../render/renderCard';
import { renderCart } from '../render/renderCart';
import { renderHero } from '../render/renderHero';
import { renderNavigation } from '../render/renderNavigation';
import { renderOrder } from '../render/renderOrder';
import { renderProducts } from '../render/renderProducts';

export const cardController = async (routerData) => {
  const { id } = routerData.data;

  const data = await getData(`${API_URL}/api/goods/${id}`);
  const { gender, category } = data;

  renderNavigation({ gender, category, render: true });
  renderHero({ render: false });
  renderCard({ data, render: true });
  renderProducts({
    title: 'Вам также может понравиться',
    params: { count: 4, gender },
    render: true,
  });
  renderCart({ render: false });
  renderOrder({ render: false });
};
