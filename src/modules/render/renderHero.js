export const renderHero = () => {
  const hero = document.querySelector('.hero');

  hero.innerHTML = `
    <div class="container">
      <div class="hero__content">
        <h2 class="hero__title">Новая коллекция Бюстгальтер-балконет</h2>

        <a href="#" class="hero__link">Перейти</a>
      </div>
  </div>
  `;
};
