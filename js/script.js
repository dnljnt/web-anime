const api = "https://api.jikan.moe/v4/top/anime";
const anime = fetch(api);
anime
  .then((response) => {
    if (!response.ok) {
      throw new Error("error bro!");
    }
    return response.json();
  })
  .then((result) => {
    let animeList = result.data;
    let mainCard = document.querySelector(".main-card");
    let loopCard = ""
    animeList.forEach(card => {
      loopCard +=`
      <div class="card">
          <img class="img" src="${card.images.webp.image_url}" alt="${card.title}" loading="lazy">
          <div class="small-card">
            <span class="rating">${card.score || "N/A"}</span>
            <h3 class="title-anime">${card.title}</h3>
            <span class="episode">${card.episodes} episode</span>
            <p class="description">${card.synopsis ? card.synopsis.substring(0, 100) + "..."
              : "No description available"}</p>
            <a href="#" class="btn">Watch now</a>
          </div>
        </div>
      `
      mainCard.innerHTML = loopCard
    })
  });
