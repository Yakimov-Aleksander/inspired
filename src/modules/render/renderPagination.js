import { createElement } from '../utils/createElement';
import { getUrl } from '../utils/getUrl';

export const renderPagination = (wrapperPagination, page, pages, count) => {
  wrapperPagination.textContent = '';

  const paginationList = createElement(
    'ul',
    {
      className: 'pagination__list',
    },
    {
      parent: wrapperPagination,
    },
  );

  const isNotStart = page - Math.floor(count / 2) > 1;
  const isEnd = page + Math.floor(count / 2) >= pages;

  if (count > pages) {
    count = pages;
  }

  for (let i = 0; i < count; i++) {
    let n = i + 1;

    if (isNotStart) {
      if (isEnd) {
        n = pages - count + i + 1;
      } else {
        n = page - Math.floor(count / 2) + i;
      }
    }

    createElement(
      'li',
      {
        className: 'pagination__item',
      },
      {
        parent: paginationList,
        append: createElement('a', {
          textContent: n,
          href: getUrl({ page: n }),
          className: `pagination__link
          ${page === n ? 'pagination__link_active' : ''}`,
        }),
      },
    );
  }

  if (pages > count) {
    createElement(
      'a',
      {
        className: `pagination__arrow pagination__arrow_start ${
          !isNotStart ? 'pagination__arrow_disabled' : ''
        }`,
        href: getUrl({ page: 1 }),
        tabIndex: !isNotStart ? '-1' : '0',
        innerHTML: `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 15.06L10.9096 12L14 8.94L13.0486 8L9 12L13.0486 16L14 15.06Z" fill="currentColor"/>
          </svg>        
        `,
        ariaLabel: 'В начало',
      },
      {
        cb(link) {
          wrapperPagination.prepend(link);
        },
      },
    ),
      createElement(
        'a',
        {
          className: `pagination__arrow pagination__arrow_end ${
            isEnd ? 'pagination__arrow_disabled' : ''
          }`,
          href: getUrl({ page: pages }),
          tabIndex: isEnd ? '-1' : '0',
          innerHTML: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15.06L13.0904 12L10 8.94L10.9514 8L15 12L10.9514 16L10 15.06Z" fill="currentColor"/>
            </svg>          
          `,
          ariaLabel: 'В конец',
        },
        {
          parent: wrapperPagination,
        },
      );
  }
};
