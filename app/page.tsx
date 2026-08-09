import Link from "next/link";

const topics = [
  { icon: "☀", title: "Ondas de calor", text: "O que são os fogachos, por que acontecem e como conversar sobre eles sem constrangimento.", color: "coral" },
  { icon: "☾", title: "Sono & energia", text: "Noites interrompidas, cansaço e caminhos para cuidar da rotina com mais gentileza.", color: "blue" },
  { icon: "♥", title: "Corpo & intimidade", text: "Libido, conforto, autoestima e relações — informação clara, sem tabu e sem julgamento.", color: "pink" },
  { icon: "✦", title: "Mente & emoções", text: "Humor, memória e concentração também fazem parte dessa conversa inteira.", color: "yellow" },
];

function Header() {
  return <header className="header"><Link className="logo" href="/"><span>menopausa</span><b>não tem cor</b></Link><nav><Link href="/#podcast">O podcast</Link><Link href="/#informacao">Informação</Link><Link href="/#apresentadoras">Apresentadoras</Link></nav><Link className="listen-pill" href="/episodios">▶ Ouvir agora</Link></header>;
}

export default function Home() {
  return <main>
    <Header />
    <section className="hero-new">
      <div className="hero-copy">
        <p className="kicker">UM PODCAST PARA TODAS NÓS</p>
        <h1><span>Menopausa</span><br />não tem <em>cor.</em></h1>
        <p className="hero-lead">Conversas reais, informação confiável e muito acolhimento para viver essa fase com liberdade — e sem tabu.</p>
        <div className="hero-actions"><Link className="primary-button" href="/episodios">▶ Ouça os episódios</Link><a className="text-button" href="#podcast">Conheça o podcast ↓</a></div>
        <div className="platform-row"><span>EM BREVE TAMBÉM NO</span><button type="button" disabled>YouTube</button><button type="button" disabled>Spotify</button></div>
      </div>
      <div className="hero-photo"><img src="/apresentadoras-studio.png" alt="As duas apresentadoras do podcast em um estúdio colorido" /><span className="sticker">CONVERSA<br />SEM TABU!</span></div>
    </section>

    <section className="marquee"><div>INFORMAÇÃO • ACOLHIMENTO • SAÚDE • AUTOESTIMA • DIVERSIDADE • VIDA REAL •&nbsp;</div></section>

    <section className="intro" id="podcast">
      <div><p className="kicker">POR QUE ESTE PODCAST?</p><h2>TODA MULHER TEM UMA HISTÓRIA. <span>TODA HISTÓRIA MERECE SER OUVIDA.</span></h2></div>
      <div className="intro-copy"><p>A menopausa não tem uma única idade, aparência ou experiência. Aqui, abrimos espaço para perguntas sinceras, especialistas, histórias de vida e boas risadas.</p><p>Um encontro para informar, acolher e lembrar: você não está sozinha.</p><Link href="/episodios">Explore todos os episódios <b>→</b></Link></div>
    </section>

    <section className="facts" id="informacao">
      <div className="facts-top"><p className="kicker">INFORMAÇÃO MUDA TUDO</p><h2>MENOPAUSA<br /><i>SEM MISTÉRIO</i></h2><p>Menopausa é uma fase natural da vida, não uma doença. Cada mulher pode vivê-la de um jeito diferente.</p></div>
      <div className="stat-grid">
        <article><strong>45–55</strong><span>anos</span><p>Faixa em que a menopausa geralmente ocorre, segundo o Ministério da Saúde.</p></article>
        <article><strong>12</strong><span>meses</span><p>Sem menstruação confirmam a menopausa; o climatério é toda a fase de transição.</p></article>
        <article className="wide"><strong>ÚNICA</strong><span>como você</span><p>Intensidade, duração e combinação de sintomas variam muito. Cuidado deve ser individualizado.</p></article>
      </div>
      <p className="source-note">Fontes: <a href="https://bvsms.saude.gov.br/menopausa-e-climaterio/" target="_blank" rel="noreferrer">Ministério da Saúde</a> e <a href="https://www.nia.nih.gov/health/menopause/what-menopause" target="_blank" rel="noreferrer">NIH</a>. Conteúdo educativo; não substitui consulta médica.</p>
    </section>

    <section className="topics">
      <div className="section-title"><p className="kicker">VAMOS FALAR SOBRE</p><h2>O CORPO INTEIRO.<br />A VIDA INTEIRA.</h2></div>
      <div className="topic-grid">{topics.map(t => <article className={t.color} key={t.title}><span>{t.icon}</span><h3>{t.title}</h3><p>{t.text}</p><b>SAIBA MAIS →</b></article>)}</div>
    </section>

    <section className="hosts" id="apresentadoras">
      <div className="hosts-heading"><p className="kicker">QUEM PUXA ESSA CONVERSA</p><h2>DUAS MULHERES.<br /><span>MUITAS VOZES.</span></h2><p>Encontros com curiosidade, leveza e coragem para fazer as perguntas que tantas mulheres guardam.</p></div>
      <div className="host-card host-one"><img src="/apresentadora-1.jpeg" alt="Primeira apresentadora do podcast" /><div><span>APRESENTADORA</span><h3>Voz, escuta<br />e representatividade.</h3></div></div>
      <div className="host-card host-two"><img src="/apresentadora-2.jpeg" alt="Segunda apresentadora do podcast" /><div><span>APRESENTADORA</span><h3>Experiência, leveza<br />e conversa franca.</h3></div></div>
    </section>

    <section className="cta-listen"><div className="disc">M</div><div><p className="kicker">DÊ O PLAY</p><h2>ESSA CONVERSA<br />TAMBÉM É SUA.</h2><p>Ouça no site, favorite seus episódios e volte quando quiser.</p></div><Link href="/episodios">OUVIR O PODCAST <span>▶</span></Link></section>
    <footer><Link className="logo light" href="/"><span>menopausa</span><b>não tem cor</b></Link><p>Informação, acolhimento e conversa real.</p><div><Link href="/episodios">Episódios</Link><a href="#informacao">Informação</a><a href="#apresentadoras">Apresentadoras</a></div><small>© 2026 • Conteúdo educativo. Procure profissionais de saúde para orientação individual.</small></footer>
  </main>;
}
