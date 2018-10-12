const main = document.querySelector(".main");
const card = {
  w: 100,
  h: 90,
  t: 46,
  disp: "block",
  z: 5
};

let { w, h, t, disp, z } = card;

const movies = [
  {
    name: "Alien: Covenant",
    rating: {
      provider: "OMG",
      score: 6.5
    },
    tags: ["Action", "Adventure", "Sci-Fi"],
    description: ''
  },
  {
    name: "Blade Runner",
    rating: {
      provider: "OMG",
      score: 8.1
    },
    tags: ["Action", "Thriller", "Sci-Fi"],
    description: ''
  },
  {
    name: "Priest",
    rating: {
      provider: "OMG",
      score: 9
    },
    tags: ["Fantasy", "Action", "Thriller"],
    description: ''
  },
  {
    name: "Mad max",
    rating: {
      provider: "OMG",
      score: 9.0
    },
    tags: ["Action", "Adventure", "Sci-Fi"],
    description: ''
  }
];
movies.forEach((movie, index) => {
  //TODO: remove or clarify logic
  disp = index < 3 ? `block` : `none`;
  console.log(index, disp);

  main.innerHTML += `
    <figure id="card-${index}" class="card" style="--cw: calc(${w}% - var(--padside) * 2); --z: ${z}; --t: ${t}%; --display: ${disp};">
        <img src="653ed165329941.5af0cc860130f.jpg" alt="Alien Covenant poster image" class="card__image image">
        <figcaption class="card__content">
            <div class="content__head">
                <h1 class="card__title">${movie.name}</h1>
                <span class="cen-type">3D</span><span class="rating"><span class="rating__provider">${
                  movie.rating.provider
                }</span><span
                        class="rating__score">${
                          movie.rating.score
                        }</span></span>
            </div>
            <ul class="tags">
            ${movie.tags.map(tag => `<li class="tag">${tag}</li>`)} &nbsp;
            </ul>
            <div class="synopsis collapsed">
                <p class="synopsis__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo minus distinctio sint
                    delectus laboriosam? Culpa expedita voluptatum quas error labore fugit, magnam
                    doloribus
                    dolorem ipsa quidem aliquam, obcaecati rerum officiis.
                </p>
                <div class="synopsis__overlay"></div>
            </div>
        </figcaption>
        <div class="expanded more">
            <button class="btn btn--collapse"></button>
        </div>
    </figure>
`;
  //Decrease width, z-index, top-offset per index
  w -= 5;
  z -= 1;
  t += 1;
});
const btn_more = document.querySelector(".expanded");
const collapse = event => {
  const curr_card = event.target.parentNode;
  curr_card.classList.toggle("card--open");
};
btn_more.addEventListener("click", collapse);

//TODO: shift the perspective
