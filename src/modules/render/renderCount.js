import { countController } from '../controller/countController';
import { createElement } from '../utils/createElement';

export const renderCount = (count, className, returnCount = () => {}) => {
  const control = createElement('div', { className: `${className} count` });

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
      textContent: count,
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
      value: count,
      name: 'count',
    },
    { parent: control },
  );

  countController(minus, number, plus, input, returnCount);

  return control;
};
