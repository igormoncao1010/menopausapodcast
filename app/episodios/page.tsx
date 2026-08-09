"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const episodes = [
  { id: 1, n: "01", title: "Menopausa não tem uma só história", guest: "Episódio de estreia", theme: "Vida real", duration: "42 min", description: "As apresentadoras abrem a conversa: experiências, perguntas e o motivo para criar este espaço.", available: false },
  { id: 2, n: "02", title: "Fogachos: quando o corpo muda a temperatura", guest: "Com especialista convidada", theme: "Sintomas", duration: "38 min", description: "Ondas de calor, sono e estratégias de cuidado explicadas com clareza e acolhimento.", available: false },
  { id: 3, n: "03", title: "Desejo, intimidade e autoestima", guest: "Conversa sem tabu", theme: "Sexualidade", duration: "51 min", description: "Um papo franco sobre mudanças, conforto, relações e novas formas de se reconhecer.", available: false },
  { id: 4, n: "04", title: "Trabalho, memória e aquela névoa mental", guest: "Com especialista convidada", theme: "Mente", duration: "36 min", description: "Como falar sobre foco, cansaço e emoções no trabalho e em casa.", available: false },
];

export default function EpisodesPage() {
  const [query, setQuery] = useState(""); const [favorites, setFavorites] = useState<number[]>([]); const [onlyFavorites, setOnlyFavorites] = useState(false); const [selected, setSelected] = useState(episodes[0]);
  useEffect(() => { const saved = localStorage.getItem("mntc-favorites"); if (saved) setFavorites(JSON.parse(saved)); }, []);
  const toggleFavorite = (id:number) => setFavorites(current => { const next = current.includes(id) ? current.filter(x => x !== id) : [...current,id]; localStorage.setItem("mntc-favorites", JSON.stringify(next)); return next; });
  const filtered = useMemo(() => episodes.filter(e => (!onlyFavorites || favorites.includes(e.id)) && `${e.title} ${e.theme} ${e.guest}`.toLowerCase().includes(query.toLowerCase())), [query, onlyFavorites, favorites]);
  return <main className="library-page">
    <header className="header library-header"><Link className="logo" href="/"><span>menopausa</span><b>não tem cor</b></Link><Link className="back-home" href="/">← Voltar ao início</Link></header>
    <section className="library-hero"><p className="kicker">SUA ÁREA DE ESCUTA</p><h1>EPISÓDIOS</h1><p>Encontre uma conversa, salve seus favoritos e ouça no seu tempo.</p></section>
    <section className="library-tools"><label><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Busque por tema, título ou convidada..." aria-label="Buscar episódios" /></label><button className={onlyFavorites ? "active" : ""} onClick={() => setOnlyFavorites(!onlyFavorites)}>♥ Meus favoritos <b>{favorites.length}</b></button></section>
    <section className="episode-library">
      <div className="episode-results"><div className="results-head"><span>{filtered.length} episódios</span><select aria-label="Ordenar episódios"><option>Mais recentes</option><option>Mais antigos</option></select></div>
        {filtered.length ? filtered.map((ep, index) => <article className="library-card" key={ep.id}>
          <div className={`cover cover-${index % 4}`}><small>PODCAST</small><strong>{ep.n}</strong><i>menopausa<br />não tem cor</i></div>
          <button className="card-play" onClick={() => setSelected(ep)} aria-label={`Selecionar ${ep.title}`}>▶</button>
          <div className="card-copy"><div><span>{ep.theme}</span><span>{ep.duration}</span></div><h2>{ep.title}</h2><p>{ep.description}</p><small>{ep.guest}</small></div>
          <div className="card-actions"><button className={favorites.includes(ep.id) ? "fav active" : "fav"} onClick={() => toggleFavorite(ep.id)} aria-label="Favoritar episódio">♥</button><button disabled={!ep.available} title="Disponível quando o áudio for publicado">↓</button></div>
        </article>) : <div className="empty-state"><b>♡</b><h2>Nenhum episódio por aqui</h2><p>Tente outra busca ou favorite uma conversa para encontrá-la depois.</p></div>}
      </div>
      <aside className="now-playing"><p className="kicker">SELECIONADO</p><div className="big-cover"><span>{selected.n}</span><b>MENOPAUSA<br />NÃO TEM COR</b></div><h2>{selected.title}</h2><p>{selected.description}</p><div className="audio-progress"><span /><div><time>00:00</time><time>{selected.duration}</time></div></div><button className="main-play" disabled={!selected.available}>▶ ÁUDIO EM BREVE</button><div className="player-buttons"><button onClick={() => toggleFavorite(selected.id)}>{favorites.includes(selected.id) ? "♥ Favoritado" : "♡ Favoritar"}</button><button disabled>↓ Baixar</button></div><small>Assim que os arquivos forem enviados, ouvir e baixar serão liberados aqui.</small></aside>
    </section>
    <section className="platform-banner"><div><span>EM BREVE EM OUTRAS PLATAFORMAS</span><h2>LEVE A CONVERSA COM VOCÊ.</h2></div><button disabled>YouTube</button><button disabled>Spotify</button><button disabled>RSS</button></section>
    <footer className="mini-footer"><Link className="logo light" href="/"><span>menopausa</span><b>não tem cor</b></Link><p>Conteúdo educativo. Não substitui orientação profissional.</p></footer>
  </main>;
}
