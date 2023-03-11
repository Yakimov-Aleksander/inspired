import { countController } from '../controller/countController';
import { createElement } from '../utils/createElement';

export const renderCount = () => {
  const control = createElement('div', { className: 'card__count count' });

  const minus = createElement(
    'button',
    {
      className: 'count__item count__minus',
      type: 'button',
      textContent: '-',
    },
    { parent: control },
  );

  const number = createElement(
    'span',
    {
      className: 'count__item count__number',
      textContent: '1',
    },
    { parent: control },
  );

  const plus = createElement(
    'button',
    {
      className: 'count__item count__plus',
      type: 'button',
      textContent: '+',
    },
    { parent: control },
  );

  const input = createElement(
    'input',
    {
      type: 'hidden',
      value: '1',
      name: 'count',
    },
    { parent: control },
  );

  countController(minus, number, plus, input);

  return control;
};

/*
  <div class="card__count count">
        <button class="count__item count__minus">-</button>
        <span class="count__item count__number">1</span>
        <button class="count__item count__plus">+</button>
        <input type="hidden" name="count" value="1">
      </div>
*/
