import './index.html';
import './index.scss';

import { router } from './modules/router';
import { renderFooter } from './modules/render/renderFooter';
import { renderHeader } from './modules/render/renderHeader';
import { mainPage } from './modules/mainPage';
import { getData } from './modules/getData';
import { API_URL, DATA } from './modules/const';
import { createCssColors } from './modules/createCssColors';
import { createElement } from './modules/createElement';
import { categoryPage } from './modules/categoryPage';

const init = async () => {
  try {
    router.on('*', () => {
      renderHeader();
      renderFooter();
    });

    DATA.navigation = await getData(`${API_URL}/api/categories`);
    DATA.colors = await getData(`${API_URL}/api/colors`);

    createCssColors(DATA.colors);

    router.on('/', () => {
      mainPage();
    });

    router.on('women', () => {
      mainPage('women');
    });

    router.on('men', () => {
      mainPage('men');
    });

    router.on('/:gender/:category', categoryPage);

    router.on('search', (data) => {
      console.log(data.params.value);
    });

    // setTimeout(() => {
    //   router.navigate('men');
    // }, 3000);

    // setTimeout(() => {
    //   router.navigate('women');
    // }, 6000);
  } catch (e) {
    console.log(e);
    createElement(
      'h2',
      {
        textContent: 'Что-то пошло не так...',
      },
      {
        parent: document.querySelector('main'),
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
