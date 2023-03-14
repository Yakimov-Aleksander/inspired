import { API_URL } from '../const';

export const sendOrder = async (order) => {
  const res = await fetch(`${API_URL}/api/order`, {
    method: 'POST',
    body: JSON.stringify(order),
  });

  return res.json();
};
