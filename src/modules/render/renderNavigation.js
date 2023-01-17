export const renderNavigation = () => {
  const navigation = document.querySelector('.navigation');

  navigation.innerHTML = `
    <div class="container">
    <ul class="navigation__gender gender">
      <li class="gender__item">
        <a href="#" class="gender__link gender__link_active">Женщины</a>
      </li>
      <li class="gender__item">
        <a href="#" class="gender__link">Мужчины</a>
      </li>
    </ul>

    <ul class="navigation__category category">
      <li class="category__item">
        <a href="#" class="category__link category__link_active">Бюстгальтеры</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link">Трусы</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link">Носки</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link">Халаты</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link">Термобелье</a>
      </li>
      <li class="category__item">
        <a href="#" class="category__link">Пижамы</a>
      </li>
    </ul>
  </div>
  `;
};
