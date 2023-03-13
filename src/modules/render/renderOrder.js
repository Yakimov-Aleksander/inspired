import { order } from '../const';

export const renderOrder = ({ render }) => {
  order.textContent = '';

  if (!render) {
    return;
  }
};

/*
<div class="container">
  <h2 class="order__title">Оформление заказа</h2>

  <form class="order__form">
    <fieldset class="order__personal">
      <label class="order__label">
        <input class="order__input" type="text" placeholder="ФИО" name="fio">
      </label>

      <label class="order__label">
        <input class="order__input" type="text" placeholder="Адрес доставки" name="address">
      </label>

      <label class="order__label">
        <input class="order__input" type="text" placeholder="Телефон" name="phone">
      </label>

      <label class="order__label">
        <input class="order__input" type="text" placeholder="E-mail" name="email">
      </label>
    </fieldset>

    <fieldset class="order__radio-list">
      <label class="order__radio radio">
        <input class="radio__input" type="radio" name="delivery" value="delivery">
        <span class="radio__text">Доставка</span>
      </label>

      <label class="order__radio radio">
        <input class="radio__input" type="radio" name="delivery" value="self">
        <span class="radio__text">Самовывоз</span>
      </label>
    </fieldset>

    <button class="order__submit main-button" type="submit">Оформить</button>

  </form>
</div>

*/
