import { API_URL, COUNT_PAGINATION, DATA, products } from '../const';
import { createElement } from '../utils/createElement';
import { getData } from '../getData';
import { renderPagination } from './renderPagination';
import { getFavorite } from '../controller/favoriteController';

export const renderProducts = async (title, params) => {
  products.textContent = '';

  const data = await getData(`${API_URL}/api/goods`, params);

  const goods = Array.isArray(data) ? data : data.goods;

  const container = createElement(
    'div',
    {
      className: 'container',
    },
    {
      parent: products,
    },
  );

  const titleElem = createElement(
    'h2',
    {
      className: 'goods__title',
      textContent: title,
    },
    {
      parent: container,
    },
  );

  if (Object.hasOwn(data, 'totalCount')) {
    createElement(
      'sup',
      {
        class: 'goods__title-sup',
        innerHTML: `&nbsp(${data?.totalCount})`,
      },
      { parent: titleElem },
    );

    if (!data.totalCount) {
      createElement(
        'p',
        {
          className: 'goods__warning',
          textContent: 'По вашему запросу ничего не найдено',
        },
        { parent: container },
      );

      return;
    }
  }

  const favoriteList = getFavorite();

  const listCard = goods.map((product) => {
    const li = createElement('li', {
      className: 'goods__item',
    });

    const article = createElement(
      'article',
      {
        className: 'product',
        innerHTML: `
        <a href="#/product/${product.id}" class="product__link">
          <img class="product__img" src="${API_URL}/${product.pic}" alt="${
          product.title
        }">
          <h3 class="product__title">${product.title}</h3>
        </a>

        <div class="product__row">
          <p class="product__price">руб ${product.price}</p>

          <button
           class="product__btn-favorite favorite
           ${favoriteList.includes(product.id) ? 'favorite_active' : ''}"
           aria-label="добавить в избранное"
           data-id=${product.id}></button>
        </div>
      `,
      },
      {
        parent: li,
      },
    );

    createElement(
      'ul',
      {
        className: 'product__color-list',
      },
      {
        parent: article,
        appends: product.colors.map((colorId, i) => {
          const color = DATA.colors.find((item) => item.id == colorId);

          return createElement('li', {
            className: `color color_${color.title} ${i ? '' : 'color_check'}`,
          });
        }),
      },
    );

    return li;
  });

  createElement(
    'ul',
    {
      className: 'goods__list',
    },
    {
      appends: listCard,
      parent: container,
    },
  );

  if (data.pages && data.pages > 1) {
    const pagination = createElement(
      'div',
      { className: 'goods__pagination pagination' },
      { parent: container },
    );

    renderPagination(pagination, data.page, data.pages, COUNT_PAGINATION);
  }
};
