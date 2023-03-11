import './index.html';
import './index.scss';

import { router } from './modules/utils/router';
import { renderFooter } from './modules/render/renderFooter';
import { renderHeader } from './modules/render/renderHeader';
import { mainPageController } from './modules/controller/mainPageController';
import { getData } from './modules/getData';
import { API_URL, DATA, main } from './modules/const';
import { createCssColors } from './modules/createCssColors';
import { createElement } from './modules/utils/createElement';
import { categoryPageController } from './modules/controller/categoryPageController';
import { searchPageController } from './modules/controller/searchController';
import { favoriteController } from './modules/controller/favoriteController';
import { cardController } from './modules/controller/cardController';

const init = async () => {
  try {
    DATA.navigation = await getData(`${API_URL}/api/categories`);
    DATA.colors = await getData(`${API_URL}/api/colors`);

    router.on('*', () => {
      renderHeader();
      renderFooter();
    });

    createCssColors(DATA.colors);

    router.on('/', () => {
      mainPageController();
    });

    router.on('women', () => {
      mainPageController('women');
    });

    router.on('men', () => {
      mainPageController('men');
    });

    router.on('/:gender/:category', categoryPageController);

    router.on('/product/:id', cardController);

    router.on('search', searchPageController);

    router.on('favorite', favoriteController);
  } catch (e) {
    console.log(e);
    createElement(
      'h2',
      {
        textContent: 'Что-то пошло не так...',
      },
      {
        parent: main,
        cb(h2) {
          h2.style.textAlign = 'center';
        },
      },
    );
  } finally {
    router.resolve();
  }
};

init();
