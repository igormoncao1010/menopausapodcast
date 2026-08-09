import { C as __toESM, t as require_jsx_runtime, y as require_react } from "../index.js";
import Link from "./link-BNXrdaOM.js";
//#region app/episodios/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var episodes = [
	{
		id: 1,
		n: "01",
		title: "Menopausa não tem uma só história",
		guest: "Episódio de estreia",
		theme: "Vida real",
		duration: "42 min",
		description: "As apresentadoras abrem a conversa: experiências, perguntas e o motivo para criar este espaço.",
		available: false
	},
	{
		id: 2,
		n: "02",
		title: "Fogachos: quando o corpo muda a temperatura",
		guest: "Com especialista convidada",
		theme: "Sintomas",
		duration: "38 min",
		description: "Ondas de calor, sono e estratégias de cuidado explicadas com clareza e acolhimento.",
		available: false
	},
	{
		id: 3,
		n: "03",
		title: "Desejo, intimidade e autoestima",
		guest: "Conversa sem tabu",
		theme: "Sexualidade",
		duration: "51 min",
		description: "Um papo franco sobre mudanças, conforto, relações e novas formas de se reconhecer.",
		available: false
	},
	{
		id: 4,
		n: "04",
		title: "Trabalho, memória e aquela névoa mental",
		guest: "Com especialista convidada",
		theme: "Mente",
		duration: "36 min",
		description: "Como falar sobre foco, cansaço e emoções no trabalho e em casa.",
		available: false
	}
];
function EpisodesPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [favorites, setFavorites] = (0, import_react.useState)([]);
	const [onlyFavorites, setOnlyFavorites] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(episodes[0]);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("mntc-favorites");
		if (saved) setFavorites(JSON.parse(saved));
	}, []);
	const toggleFavorite = (id) => setFavorites((current) => {
		const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
		localStorage.setItem("mntc-favorites", JSON.stringify(next));
		return next;
	});
	const filtered = (0, import_react.useMemo)(() => episodes.filter((e) => (!onlyFavorites || favorites.includes(e.id)) && `${e.title} ${e.theme} ${e.guest}`.toLowerCase().includes(query.toLowerCase())), [
		query,
		onlyFavorites,
		favorites
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "library-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "header library-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "logo",
					href: "/",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "menopausa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "não tem cor" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					className: "back-home",
					href: "/",
					children: "← Voltar ao início"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "library-hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "SUA ÁREA DE ESCUTA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "EPISÓDIOS" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Encontre uma conversa, salve seus favoritos e ouça no seu tempo." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "library-tools",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⌕" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Busque por tema, título ou convidada...",
					"aria-label": "Buscar episódios"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: onlyFavorites ? "active" : "",
					onClick: () => setOnlyFavorites(!onlyFavorites),
					children: ["♥ Meus favoritos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: favorites.length })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "episode-library",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "episode-results",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "results-head",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [filtered.length, " episódios"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							"aria-label": "Ordenar episódios",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mais recentes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mais antigos" })]
						})]
					}), filtered.length ? filtered.map((ep, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "library-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `cover cover-${index % 4}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "PODCAST" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: ep.n }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: [
										"menopausa",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"não tem cor"
									] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "card-play",
								onClick: () => setSelected(ep),
								"aria-label": `Selecionar ${ep.title}`,
								children: "▶"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ep.theme }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ep.duration })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: ep.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: ep.description }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: ep.guest })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: favorites.includes(ep.id) ? "fav active" : "fav",
									onClick: () => toggleFavorite(ep.id),
									"aria-label": "Favoritar episódio",
									children: "♥"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									disabled: !ep.available,
									title: "Disponível quando o áudio for publicado",
									children: "↓"
								})]
							})
						]
					}, ep.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "empty-state",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "♡" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Nenhum episódio por aqui" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tente outra busca ou favorite uma conversa para encontrá-la depois." })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "now-playing",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "SELECIONADO"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "big-cover",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selected.n }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
								"MENOPAUSA",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"NÃO TEM COR"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: selected.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: selected.description }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "audio-progress",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { children: "00:00" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { children: selected.duration })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "main-play",
							disabled: !selected.available,
							children: "▶ ÁUDIO EM BREVE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "player-buttons",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggleFavorite(selected.id),
								children: favorites.includes(selected.id) ? "♥ Favoritado" : "♡ Favoritar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: true,
								children: "↓ Baixar"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Assim que os arquivos forem enviados, ouvir e baixar serão liberados aqui." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "platform-banner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EM BREVE EM OUTRAS PLATAFORMAS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "LEVE A CONVERSA COM VOCÊ." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: true,
						children: "YouTube"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: true,
						children: "Spotify"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: true,
						children: "RSS"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mini-footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "logo light",
					href: "/",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "menopausa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "não tem cor" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Conteúdo educativo. Não substitui orientação profissional." })]
			})
		]
	});
}
//#endregion
export { EpisodesPage as default };
