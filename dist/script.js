const episodes = [
  {id:1,n:"01",title:"Menopausa não tem uma só história",guest:"Estreia com Dr. João Luiz Arantes",theme:"Vida real",duration:"42 min",description:"Fabrícia Alecrim e Dra. Vanessa Weber abrem a conversa sobre experiências, cuidado e o motivo para criar este espaço.",audio:""},
  {id:2,n:"02",title:"Fogachos: quando o corpo muda a temperatura",guest:"Com especialista convidada",theme:"Sintomas",duration:"38 min",description:"Ondas de calor, sono e estratégias de cuidado explicadas com clareza e acolhimento.",audio:""},
  {id:3,n:"03",title:"Desejo, intimidade e autoestima",guest:"Conversa sem tabu",theme:"Sexualidade",duration:"51 min",description:"Um papo franco sobre mudanças, conforto, relações e novas formas de se reconhecer.",audio:""},
  {id:4,n:"04",title:"Trabalho, memória e aquela névoa mental",guest:"Com especialista convidada",theme:"Mente",duration:"36 min",description:"Como falar sobre foco, cansaço e emoções no trabalho e em casa.",audio:""}
];

const list = document.querySelector("#episodes-list");
if (list) {
  let favorites = JSON.parse(localStorage.getItem("mntc-favorites") || "[]");
  let selected = episodes[0]; let favoritesOnly = false; let order = "recent";
  const search = document.querySelector("#episode-search"); const filter = document.querySelector("#favorites-filter");
  const saveFavorites = () => { localStorage.setItem("mntc-favorites", JSON.stringify(favorites)); document.querySelector("#favorites-count").textContent = favorites.length; };
  const toggleFavorite = id => { favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites,id]; saveFavorites(); render(); updatePlayer(); };
  const selectEpisode = id => { selected = episodes.find(item => item.id === id); updatePlayer(); };
  const updatePlayer = () => {
    document.querySelector("#player-number").textContent = selected.n; document.querySelector("#player-title").textContent = selected.title; document.querySelector("#player-description").textContent = selected.description;
    document.querySelector("#player-favorite").textContent = favorites.includes(selected.id) ? "♥ Favoritado" : "♡ Favoritar";
    const audio = document.querySelector("#audio-player"); const button = document.querySelector("#main-play"); const download = document.querySelector("#download-button");
    if (selected.audio) { audio.src = selected.audio; audio.hidden = false; button.hidden = true; download.href = selected.audio; download.download = ""; download.removeAttribute("aria-disabled"); } else { audio.removeAttribute("src"); audio.hidden = true; button.hidden = false; button.disabled = true; download.removeAttribute("href"); download.setAttribute("aria-disabled","true"); }
  };
  const render = () => {
    const term = search.value.toLowerCase(); let items = episodes.filter(ep => (!favoritesOnly || favorites.includes(ep.id)) && `${ep.title} ${ep.theme} ${ep.guest}`.toLowerCase().includes(term)); if (order === "recent") items = [...items].reverse();
    document.querySelector("#results-count").textContent = `${items.length} episódio${items.length === 1 ? "" : "s"}`;
    list.innerHTML = items.length ? items.map((ep,index) => `<article class="library-card"><div class="cover cover-${index%4}"><small>PODCAST</small><strong>${ep.n}</strong><i>menopausa<br>não tem cor</i></div><button class="card-play" data-select="${ep.id}" aria-label="Selecionar ${ep.title}"><i class="icon-play" aria-hidden="true"></i></button><div class="card-copy"><div><span>${ep.theme}</span><span>${ep.duration}</span></div><h2>${ep.title}</h2><p>${ep.description}</p><small>${ep.guest}</small></div><div class="card-actions"><button class="fav ${favorites.includes(ep.id)?"active":""}" data-favorite="${ep.id}" aria-label="Favoritar episódio">♥</button><button ${ep.audio?`data-download="${ep.id}"`:"disabled"} title="Disponível quando o áudio for publicado"><i class="icon-download" aria-hidden="true"></i></button></div></article>`).join("") : `<div class="empty-state"><b>♡</b><h2>Nenhum episódio por aqui</h2><p>Tente outra busca ou favorite uma conversa para encontrá-la depois.</p></div>`;
  };
  document.addEventListener("click", event => { const select = event.target.closest("[data-select]"); const favorite = event.target.closest("[data-favorite]"); if(select) selectEpisode(Number(select.dataset.select)); if(favorite) toggleFavorite(Number(favorite.dataset.favorite)); });
  search.addEventListener("input",render); filter.addEventListener("click",()=>{favoritesOnly=!favoritesOnly;filter.classList.toggle("active",favoritesOnly);render();}); document.querySelector("#episode-order").addEventListener("change",e=>{order=e.target.value;render();}); document.querySelector("#player-favorite").addEventListener("click",()=>toggleFavorite(selected.id));
  saveFavorites(); render(); updatePlayer();
}
