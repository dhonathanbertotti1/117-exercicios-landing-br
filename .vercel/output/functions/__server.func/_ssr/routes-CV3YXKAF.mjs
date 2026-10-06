import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as MapPin, c as Gift, d as ChevronLeft, f as ChevronDown, i as ShieldCheck, l as Clock, m as Ban, n as Star, o as Lock, p as Check, r as ShoppingCart, s as Layers, t as Zap, u as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CV3YXKAF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var names = [
	{
		name: "Ana Beatriz",
		gender: "female"
	},
	{
		name: "Bruno Silva",
		gender: "male"
	},
	{
		name: "Camila Souza",
		gender: "female"
	},
	{
		name: "Diego Pereira",
		gender: "male"
	},
	{
		name: "Larissa Lima",
		gender: "female"
	},
	{
		name: "Gustavo Costa",
		gender: "male"
	},
	{
		name: "Beatriz Rocha",
		gender: "female"
	},
	{
		name: "João Pedro",
		gender: "male"
	},
	{
		name: "Mariana Mendes",
		gender: "female"
	},
	{
		name: "Marcos Oliveira",
		gender: "male"
	},
	{
		name: "Rita Dias",
		gender: "female"
	},
	{
		name: "Rafael Fernandes",
		gender: "male"
	},
	{
		name: "Patrícia Cardoso",
		gender: "female"
	},
	{
		name: "Thiago Martins",
		gender: "male"
	},
	{
		name: "Carolina Araújo",
		gender: "female"
	},
	{
		name: "Miguel Almeida",
		gender: "male"
	},
	{
		name: "Fernanda Ribeiro",
		gender: "female"
	},
	{
		name: "Rodrigo Carvalho",
		gender: "male"
	},
	{
		name: "Vanessa Pinto",
		gender: "female"
	},
	{
		name: "Eduardo Santos",
		gender: "male"
	}
];
var regions = [
	"São Paulo",
	"Rio de Janeiro",
	"Belo Horizonte",
	"Curitiba",
	"Porto Alegre",
	"Salvador",
	"Fortaleza",
	"Recife",
	"Brasília",
	"Goiânia",
	"Campinas",
	"Florianópolis",
	"Manaus",
	"Belém",
	"Vitória"
];
var packages = ["Acesso Completo"];
var timesAgo = [
	"há 30 segundos",
	"há 1 minuto",
	"há 2 minutos",
	"há 3 minutos",
	"há 5 minutos",
	"há 7 minutos",
	"há 10 minutos",
	"há 12 minutos",
	"há 15 minutos",
	"há 18 minutos",
	"há 20 minutos",
	"há 25 minutos"
];
function getRandomItem(arr) {
	if (arr.length === 0) throw new Error("Empty array");
	return arr[Math.floor(Math.random() * arr.length)];
}
function generateNotification() {
	const { name, gender } = getRandomItem(names);
	return {
		name,
		gender,
		region: getRandomItem(regions),
		packageName: getRandomItem(packages),
		timeAgo: getRandomItem(timesAgo)
	};
}
function SalesNotification() {
	const [notification, setNotification] = (0, import_react.useState)(null);
	const [phase, setPhase] = (0, import_react.useState)("hidden");
	(0, import_react.useEffect)(() => {
		const cycle = () => {
			const next = generateNotification();
			setNotification(next);
			setPhase("entering");
			setTimeout(() => {
				setPhase("visible");
			}, 50);
			setTimeout(() => {
				setPhase("exiting");
			}, 4050);
			setTimeout(() => {
				setPhase("hidden");
			}, 4900);
		};
		const initialDelay = setTimeout(() => {
			cycle();
		}, 3e3);
		const interval = setInterval(() => {
			if (phase === "hidden" || phase === "exiting") cycle();
		}, 3e3);
		return () => {
			clearTimeout(initialDelay);
			clearInterval(interval);
		};
	}, [phase]);
	const translateClass = phase === "entering" || phase === "visible" ? "translate-x-0" : "-translate-x-[120%]";
	const opacityClass = phase === "hidden" ? "opacity-0" : "opacity-100";
	if (!notification || phase === "hidden") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed bottom-24 left-4 right-4 z-50 transition-all duration-[700ms] ease-in-out sm:bottom-auto sm:left-auto sm:right-4 sm:top-4 sm:max-w-xs ${translateClass} ${opacityClass}`,
		"aria-live": "polite",
		"aria-atomic": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3 rounded-2xl border border-hairline bg-elev-1/95 p-4 shadow-2xl backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "size-5 text-primary" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-bold text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: notification.name
						}), " acabou de comprar"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs font-extrabold text-primary",
						children: notification.packageName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3 text-primary" }), notification.timeAgo]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3 text-primary" }), notification.region]
						})]
					})
				]
			})]
		})
	});
}
/**
* Fonte unica dos precos.
*
* O checkout do Ticto e a verdade; estes numeros tem de o espelhar. Tudo o
* que a pagina diz sobre dinheiro — valor, ancora riscada, economia, total
* dos bonus e a percentagem de desconto — e derivado daqui, para nao voltar a
* haver dois numeros a discordar um do outro.
*
* Ao mudar o preco: muda-se so aqui.
*/
var PRICES = {
	/** A oferta principal: material completo mais os 3 bonus. */
	offer: 29.9,
	/** Valor de referencia riscado ao lado do preco. */
	offerAnchor: 97,
	/**
	* Oferta de entrada: so o cronograma de exercicios, sem os 117 exercicios e
	* sem bonus nenhum. Era o order bump do checkout; passou a ser uma escolha
	* dentro da propria pagina.
	*/
	schedule: 9.9
};
/**
* Quanto custa subir da oferta de entrada para a completa.
*
* E este numero que o pop-up de upsell mostra. Calculado, nunca escrito a
* mao: se um dos dois precos mudar, a frase do pop-up acompanha.
*/
var UPGRADE_DIFFERENCE = PRICES.offer - PRICES.schedule;
/** Valor de cada bonus. O total anunciado e a soma destes, nunca um numero a parte. */
var BONUS_PRICES = {
	emagrecimento: 25,
	core: 35,
	treinoPesado: 45
};
var BONUS_TOTAL = Object.values(BONUS_PRICES).reduce((a, b) => a + b, 0);
/**
* "R$ 29,90".
*
* Feito a mao em vez de Intl.NumberFormat: o formatador do pt-BR usa espaco
* nao separavel entre o simbolo e o numero, o que mudaria o texto ja
* publicado e partiria qualquer procura por "R$ 29,90" no projeto.
*/
function formatBRL(value) {
	return `R$ ${value.toFixed(2).replace(".", ",")}`;
}
/** Percentagem de desconto, arredondada. 29,90 sobre 97,00 da 69. */
function discountPercent(price, anchor) {
	return Math.round((1 - price / anchor) * 100);
}
/** Quanto se poupa face a ancora, em reais. */
function savings(price, anchor) {
	return anchor - price;
}
/** O desconto anunciado no topo e no selo da capa. */
var HEADLINE_DISCOUNT = discountPercent(PRICES.offer, PRICES.offerAnchor);
var faqs = [
	{
		q: "Como recebo o material após a compra?",
		a: "Assim que o pagamento é confirmado, você recebe o acesso imediato por WhatsApp e e-mail, com o link para baixar o material em PDF."
	},
	{
		q: "O pagamento é único ou mensal?",
		a: "É pagamento único. Você paga uma vez e fica com acesso vitalício ao material, sem mensalidades nem cobranças recorrentes."
	},
	{
		q: "Preciso de equipamento para fazer os exercícios?",
		a: "Não. A grande maioria dos exercícios usa apenas o peso do corpo e pode ser feita em casa, sem equipamento especial."
	},
	{
		q: "Serve para iniciantes?",
		a: "Sim. Os exercícios estão organizados por categoria e vêm com séries, repetições e intervalos indicados, o que facilita a execução mesmo para quem está começando."
	},
	{
		q: "Serve para qualquer idade ou se eu já tiver alguma lesão?",
		a: "Os exercícios são de baixo impacto e podem ser adaptados. Se você tem uma lesão específica, recomendamos que consulte um profissional de saúde antes de começar."
	},
	{
		q: "Quanto tempo por dia preciso dedicar?",
		a: "A maioria dos treinos leva entre 15 e 30 minutos, encaixando na rotina mesmo de quem tem pouco tempo livre."
	},
	{
		q: "O que exatamente vem no pacote?",
		a: "Vem o material completo com os 117 exercícios mais os 3 bônus: Plano de Emagrecimento e Definição, Guia de Treino para CORE e 40 Planos de Treino Pesado. Não há versão reduzida nem upgrade a pagar depois — é tudo num pagamento só."
	},
	{
		q: "E se eu não gostar do material?",
		a: "Você tem garantia incondicional de 7 dias. Se não ficar satisfeito, basta pedir o reembolso dentro desse prazo e devolvemos 100% do valor."
	}
];
function Faq() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 py-20 md:py-28",
		"aria-labelledby": "faq-titulo",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[10px] font-bold text-primary",
						children: "Dúvidas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "faq-titulo",
						className: "font-display mt-6 text-3xl font-extrabold leading-[1.08] text-foreground md:text-[2.75rem]",
						children: "Perguntas frequentes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base text-muted-foreground",
						children: "Tudo o que você precisa saber antes de começar."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 divide-y divide-hairline border-y border-hairline",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(isOpen ? null : i),
						"aria-expanded": isOpen,
						"aria-controls": `faq-resposta-${i}`,
						className: "flex w-full items-center justify-between gap-5 py-5 text-left transition-colors hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold text-foreground md:text-base",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-180 border-primary bg-primary text-primary-foreground" : "border-hairline text-primary"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: `faq-resposta-${i}`,
						className: `grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-2xl pb-6 pr-10 text-sm leading-relaxed text-muted-foreground",
								children: f.a
							})
						})
					})] }, f.q);
				})
			})]
		})
	});
}
var ebook_cover_3d_default = "/assets/ebook-cover-3d-DvAHKdCo.jpg";
/**
* Mockup animado do livro no hero.
*
* A imagem de origem é uma fotografia do livro sobre fundo quase preto, com a
* perspetiva já renderizada. Em vez de reconstruir o livro em CSS, tratamo-lo
* como um objeto 3D: `mix-blend-mode: screen` funde o fundo escuro da foto com
* o fundo da secção (que é mais claro), pelo que o livro parece recortado, e as
* camadas em redor dão-lhe halo, levitação e sombra no chão.
*/
function HeroBook() {
	const stageRef = (0, import_react.useRef)(null);
	const tiltRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const stage = stageRef.current;
		const tilt = tiltRef.current;
		if (!stage || !tilt) return;
		const coarse = window.matchMedia("(pointer: coarse)");
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
		if (coarse.matches || reduced.matches) return;
		let frame = 0;
		const clamp = (n) => Math.max(-1, Math.min(1, n));
		const onMove = (event) => {
			const rect = stage.getBoundingClientRect();
			const dx = clamp((event.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2));
			const dy = clamp((event.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2));
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				tilt.style.setProperty("--book-ry", `${(dx * 9).toFixed(2)}deg`);
				tilt.style.setProperty("--book-rx", `${(dy * -6).toFixed(2)}deg`);
			});
		};
		const reset = () => {
			cancelAnimationFrame(frame);
			tilt.style.setProperty("--book-ry", "0deg");
			tilt.style.setProperty("--book-rx", "0deg");
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		document.documentElement.addEventListener("pointerleave", reset);
		window.addEventListener("blur", reset);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("pointermove", onMove);
			document.documentElement.removeEventListener("pointerleave", reset);
			window.removeEventListener("blur", reset);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: stageRef,
		className: "hero-book mx-auto mt-10 max-w-[26rem]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: tiltRef,
			className: "hero-book__tilt",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-book__aura",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-book__float",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: ebook_cover_3d_default,
						alt: "Capa do material 117 Exercícios de Mobilidade e Estabilidade",
						width: 755,
						height: 1024,
						className: "hero-book__cover",
						fetchPriority: "high"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-book__badge",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl font-extrabold leading-none",
							children: [HEADLINE_DISCOUNT, "%"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase",
							children: "OFF"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-book__shadow",
					"aria-hidden": "true"
				})
			]
		})
	});
}
/**
* Revela o conteudo quando ele entra no ecra: fade curto com uma subida
* discreta. O elemento so fica escondido se o JavaScript estiver a correr
* (a classe `js` no <html>), para quem tenha JS desligado ver tudo na mesma.
*/
function Reveal({ children, delay = 0, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.classList.add("is-visible");
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				el.classList.add("is-visible");
				observer.disconnect();
			}
		}, {
			rootMargin: "0px 0px -10% 0px",
			threshold: .08
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `reveal ${className}`,
		style: delay ? { transitionDelay: `${delay}ms` } : void 0,
		children
	});
}
/**
* Conta de 0 ate ao valor final quando entra no ecra.
*
* O numero final e o estado inicial, de proposito: e ele que vai no HTML do
* servidor. Se o JavaScript nao correr, se o IntersectionObserver nao
* disparar, ou se o elemento nunca chegar a ser visto, o utilizador le o
* numero certo — nunca um 0.
*
* A animacao so entra quando ha margem para ela: ao montar, se o elemento
* ainda estiver fora do ecra, o valor cai para 0 (fora de vista, ninguem ve o
* reset) e sobe quando o elemento aparece. Se ja estiver visivel, fica como
* esta: animar aqui daria um salto de 117 para 0 e de volta, a pior das
* hipoteses.
*/
function CountUp({ to, duration = 1400, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [value, setValue] = (0, import_react.useState)(to);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const rect = el.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom > 0) return;
		setValue(0);
		let frame = 0;
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				observer.disconnect();
				const start = performance.now();
				const step = (now) => {
					const progress = Math.min((now - start) / duration, 1);
					const eased = 1 - Math.pow(1 - progress, 3);
					setValue(Math.round(to * eased));
					if (progress < 1) frame = requestAnimationFrame(step);
					else setValue(to);
				};
				frame = requestAnimationFrame(step);
			}
		}, { threshold: .4 });
		observer.observe(el);
		return () => {
			observer.disconnect();
			cancelAnimationFrame(frame);
			setValue(to);
		};
	}, [to, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className,
		children: value
	});
}
/**
* Barra de compra fixa no rodape, no celular.
*
* A pagina e longa: sem isto, quem esta no meio tem de rolar ate os planos
* para comprar. Aparece so depois do hero sair de vista, para nao tapar a
* primeira impressao, e desaparece quando a secao de planos esta na tela,
* onde ja ha botoes.
*/
function StickyCta() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const planos = document.getElementById("planos");
		const update = () => {
			const passouOHero = window.scrollY > window.innerHeight * .9;
			const planosAVista = planos ? planos.getBoundingClientRect().top < window.innerHeight * .9 : false;
			setVisible(passouOHero && !planosAVista);
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `sticky-cta ${visible ? "is-visible" : ""}`,
		"aria-hidden": !visible,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-[9px] font-bold text-primary",
				children: "Acesso Completo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-0.5 flex items-baseline gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl font-extrabold leading-none text-foreground",
					children: formatBRL(PRICES.offer)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold text-muted-foreground line-through",
					children: formatBRL(PRICES.offerAnchor)
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#planos",
			className: "cta-shine shrink-0 rounded-full bg-primary px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-primary-foreground",
			tabIndex: visible ? 0 : -1,
			children: "Quero acessar"
		})]
	});
}
var testimonials = [
	{
		name: "Mariana Lopes",
		role: "Professora",
		city: "Campinas",
		img: "data:image/jpeg;base64,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",
		stars: 5,
		text: "Estava procurando algo simples para melhorar a minha mobilidade e encontrei exatamente o que precisava. O material é bem visual e fácil de seguir, mesmo para quem nunca treinou isso antes."
	},
	{
		name: "Carlos Mendes",
		role: "Motorista de aplicativo",
		city: "São Paulo",
		img: "data:image/jpeg;base64,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",
		stars: 5,
		text: "Passo o dia dirigindo e as minhas costas viviam travadas. O que mais gostei foi a praticidade: abro o PDF no celular e já sei a série, as repetições e o descanso. Sem complicação."
	},
	{
		name: "Juliana Santos",
		role: "Estudante de enfermagem",
		city: "Belo Horizonte",
		img: "data:image/jpeg;base64,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",
		stars: 5,
		text: "Tive uma experiência muito positiva. Os exercícios estão organizados por categoria, então escolho o que faz sentido para o meu dia. Notei diferença na postura logo nas primeiras semanas."
	},
	{
		name: "Roberto Almeida",
		role: "Aposentado",
		city: "Curitiba",
		img: "data:image/jpeg;base64,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",
		stars: 5,
		text: "Antes de conhecer o material, tinha dúvidas se conseguiria acompanhar na minha idade. Hoje vejo que foi uma ótima decisão. Os movimentos são bem explicados e respeitam o meu ritmo."
	},
	{
		name: "Helena Ribeiro",
		role: "Contadora",
		city: "Porto Alegre",
		img: "/assets/avatar-5-C3omj9Kb.jpg",
		stars: 4,
		text: "Gostei da forma clara como tudo é apresentado. Trabalho sentada o dia inteiro e os exercícios de mobilidade articular passaram a fazer parte da minha rotina. Recomendo sem medo."
	},
	{
		name: "André Oliveira",
		role: "Personal trainer",
		city: "Rio de Janeiro",
		img: "data:image/jpeg;base64,/9j/2wBDAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/2wBDAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wgARCACAAIADASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAwIEBQYHAQAI/8QAGQEAAgMBAAAAAAAAAAAAAAAAAQQAAgMF/9oADAMBAAIQAxAAAACYKzIq48Uz9A8E3IABFa9JZlw8tWxepbAurjVtDtHPz08z4jVut11J1ASAaSjbnTenxt4jUO3l4bdUHeRovaxoOyc7mRMzM7WQi3ptK45S+kl2PWBbIZrXMm7MwkK1m3KQ/WGql2moa6bJ4dSr/nu1U8Sm81dQFKk3heEvDuunQ7szWggta1VFzFilq0Cu2l7j5Fjm/YHvkJCx3mrlkDLmFcmdCMZpg4VfIynY3HpsmMW6352tzlbsrfNqvzR9ZfJ1yNu5BpN5Mo2BiyL9UBjmMdXYkdY2C77Wmu4LocvTtMxKu7YfVXzInwLEEk1lt+Win4XVXYZ24o4vuP6en0H2ZQkeA9sdVM4iXwyWqorXsLt5EOZN2xzScxx1KDomMG3lR9LKJwsAedNI3UVpD3gjyFOIxP8A/8QAORAAAgEDAQYEAwQJBQAAAAAAAQIDAAQRBQYSEyExQSJSYXEyUZEQFEKBByNTYnKSobHBJER0otH/2gAIAQEAAT8AElK9CShJijKDTMMU32rQribtcYyMEB5mtHsFRASKnntrG1lubiQJFGuWY1tZtTc61d7/ADS3jyIYvl6n1NA0GAre9a3vWt71qV7a2i4lw5yVyqDkTVztXAkjqLdQCMYJJpNo7WTd5lWGcZ6Nmo9XhKKzjke686hmimQPGwIo1JJgVpNoZJQxqJ4ba3aSV1REXLMeQAFbXbVy6xPw4iyWcbfq17ufO1XEyqpLHAoSL5hXFHmFcUE9a36kvYbVDK6FsDKqM8zWj7MX+0NnPqN7dLbWYyV88p/wKbZrTYsrHCrc+p5mrvQ7Y5HAWr3TJYFY27Hl+An+1aZqM1rKHX4ejITUdzHNGrqeTDIqKAyyCtPgSGLebAAGST2Ara7attSc2lqxFoh6/tWHc+lXVykSFnNXFy8xyeQHQULpfLQuY/LQnhP4K4sHdRRtGvWMbMBBGFyqjG8W54JqGGae3Y/eOHEgwq9FGOwpRuZUZPrV5HLzwOdX2ceMYNXELrxJEJAPNh25VoUjG34Z/C/uMGrCEEgmtqtpTNvWFo+IRylcfjPyHpV5eRwIWY5J6DuanuJJ3LufYdhW9lTQkriUJKMnI0urWFndTQuxZkjBkVAWK+EAD0JrUtptccAwabGkCjAJ7CrTa5ACLqThNuHA51NtNqE7ZtY16AAsOtTanqoQffLOIr80bnQvo5nniVWEgXmpHTNaBCpjBX0zWtalJBD92iDKWXxvjt8hWsX0dqRyy7DwrUs8srl3bJNFqDUHoSUJRXF5VLZXLXeoOEccYxShfMAuM5+VXNnfSzeO5dhnxBByNaNoKBJ5Z0LhVCYbsetPpgzIruy8NyBjuvapdJubeQxw6kLkcuQB557VNZXcMhlTAdux6tgYrZCcyRyxuAsgIbc7gVeQK4GQCCK2+sY7eawlRAobiKfsNA0JTXFNcU1x2rQXWVF3j7HuB3FajPa2rAxW5MjMFQlgACfRai16wgheBXVwjEMf3uuaF/avMbiJi5LlWi9KgispIzI1uwUrnAbNaod6dVQggZx+XOtlYt+ee4AwpRVFSplEPpX6SIM6Xay+S6A/mU/Y1Cg8XnX6ihJF5loMrDK86z+7Wh3J4MqxsMhwR+YqKQvdNLMQAp3Uz/U1ex6ecmG5izk7wJwDVtLp8BLieLPyzzP1qC5lkZzbyb0JUt7Gsh7mLfOQTWi2wtrdEHXqfc0wzCtbfwb+zd237N43+jUwpqzS2UPkX6ChaReQfSrdSUJC4/rQjarFRbyZCAAggmjBaX5BmjDKq4wemalhW3O6lhE4x3UUbSO4YGW0RQPQVeXK2sTQRIE3yBgVpqS3F6WiHKJMj8iBVuu61IMwmtqrfj6BqiY/2zke686zlRTCmpYs0IqtohwhW4KVV3T7GrK9WCQJIMKRkH1o6vAM4IFXWt267wDD1qe/e4nZgvXkPSoNorXQo5WkgklaYBECYGMcySTWlXsN/aW13CcpKgYenzBqE+Bh6VfQia2uIvPEy/UYoDGV+XKm6U1IlbnI1BF4F9VHYCtylj5Z50hhvYpxC+8YX3W98VPCY2wWP5UyO7YVSfegghXLMM469lFaleC7nyM8NOSD/NbG61Jo+kXt1cl3tBcxRRxjrxHBZivsBWnbd7M3ERLXvAIU5SVSpqy1fS9SUtZXkU2OoU+Ie4rUoTBqd/Dj4LmRf+1GmPKkWsYU+xqLlGn8IouiAM7AAL1NarrUaWUogLEnKb/YVsMJWt7+VuayXAX6LV94XZSrBvagmFLkEKPnWqamZd6KM+D8R83p7UMk1tAwsrXStGX47aMz3X/IuADun1RQBSsM4qC6ktpVkhdo5FPJlJBFPcy3M0k0zlmkbeZj1YnuaaOE/MVNbFULqSR3yKUU5xG/8Jq916OBRHBhmCgFj0qKS+1O6ihDlndsLk4A/wDAK1u4t2VLa2f/AE8GVVu7k/E59W/tWwVgk2zkrjqbhzj5btbS3OlaYyG5LPPKP1UKc3atS2ra8Q28cIgiB92Pua6860KCG2SfWbpA0FmRwkbpNcn4E9h8TVLNNPNLPM5eWV2d3PVmY5Jro1MfCT6UrYwK4oU8hlqikkPXd9sZpa2l1hkzZwtj9of8UCWbJpb+4s4LkW6IXmj4ZY5yqH4gvv0NbySnLoA+ckdhX6O9UjhGpWsz4jVeP7ADDVrGoXGsardXrkjiOdweVByVRSW470LdBgAkUA24qGRyqsWVSxKgnqQK7gVnnmg2UHvTPgDHU9KRjjwDJ7saB80n5CpZlggklboiFj7AZqWd7iQu5yzsWNAhRmmcmrhSPGvxCodRkt0nMZI40DRN7NSx8h60q03Wuppj46ZsKTQPgT3rO81KM9cn26UrKB1C1tLOYdDvCPxKqfzGohyB+QqRqzUhyMVKPCw+QzQcboxS9KarK1lu7mOCIDfc4GeQrUbSWyungkI3kPUdCD3GakP6ui2IvY1GoVcml3m9vWlT2+lf/8QAIxEAAgICAQMFAQAAAAAAAAAAAQIAEQMhMQQQEgUgIkGBE//aAAgBAgEBPwCXLniYR2EGz3fKE1Vmocj3fmZgzFvi3YC4q13ZUZ91+xRh82FcRVxq/wBfk+4goD2OGGRhAgondxFIeyYgpREOu24eZnQ2HHMDZK4MxobArZlReIIYeZnQrhLHRsVFfUwYSPk3M/mrbgxUTueJERS7VFRVGhPUFLdOa+iDOn6RcaqWFtOfZgGiezAH3f/EACYRAAIBAwQCAQUBAAAAAAAAAAECAAMRMQQQEiEgQRMFIlFhgXH/2gAIAQMBAT8AltuQl9j4afTmqeRawBgoUrW+Nbf5NZplQ80FvyIDsTfYym1VKY48v5HfVfChvm+OjHeq9Pvla3uWIyJk7f3bTujUlYjsxqjEgEDiJVZGQADMrPyqsRjwGJoqo7ptjMbjbthaV6oKNY9CDY7epoyG1AUYIN49Lu01NcN9iYGYWKGw9T5f1OYMZgovCxY9nqfTHUascvYImq1z1XcIeKY6yRFIBv4Vj2BsCR2PL//Z",
		stars: 5,
		text: "Uso o material como referência para montar as sessões de mobilidade dos meus alunos. Ter 117 exercícios únicos, sem repetição, economiza muito tempo de planejamento. Valeu cada centavo."
	}
];
function Stars({ count }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-0.5",
		"aria-label": `Avaliação: ${count} de 5 estrelas`,
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-4 ${i < count ? "fill-gold text-gold" : "text-muted-foreground/40"}` }, i))
	});
}
function TestimonialCard({ t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "relative flex h-full flex-col rounded-2xl border border-hairline bg-elev-1 p-6 transition-colors duration-300 hover:border-primary/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "font-display pointer-events-none absolute right-5 top-2 select-none text-6xl font-extrabold leading-none text-primary/12",
				children: "”"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { count: t.stars }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 flex-1 text-sm leading-relaxed text-foreground/85",
				children: t.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center gap-3.5 border-t border-hairline pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: t.img,
					alt: `Foto de ${t.name}`,
					width: 128,
					height: 128,
					loading: "lazy",
					className: "size-11 shrink-0 rounded-full object-cover ring-2 ring-primary/30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm font-extrabold text-foreground",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-xs text-muted-foreground",
						children: [
							t.role,
							" • ",
							t.city
						]
					})]
				})]
			})
		]
	});
}
function Testimonials() {
	const trackRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	const scrollTo = (index) => {
		const track = trackRef.current;
		if (!track) return;
		const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
		track.children[clamped]?.scrollIntoView({
			behavior: "smooth",
			inline: "start",
			block: "nearest"
		});
		setActive(clamped);
	};
	const onScroll = () => {
		const track = trackRef.current;
		if (!track) return;
		const width = track.clientWidth;
		const index = Math.round(track.scrollLeft / (width * .85));
		setActive(Math.max(0, Math.min(index, testimonials.length - 1)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 py-20 md:py-28",
		"aria-labelledby": "depoimentos-titulo",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[10px] font-bold text-primary",
							children: "Depoimentos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "depoimentos-titulo",
							className: "font-display mt-6 text-3xl font-extrabold leading-[1.08] text-foreground md:text-[2.75rem]",
							children: ["Quem já está se movendo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "melhor"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground",
							children: "Experiências de pessoas que passaram a treinar mobilidade com um plano, em vez de improvisar."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCard, { t }, t.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: trackRef,
						onScroll,
						className: "flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
						children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-[85%] shrink-0 snap-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCard, { t })
						}, t.name))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => scrollTo(active - 1),
								"aria-label": "Depoimento anterior",
								className: "flex size-11 items-center justify-center rounded-full border border-hairline bg-elev-1 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								role: "tablist",
								"aria-label": "Indicadores de depoimentos",
								children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => scrollTo(i),
									"aria-label": `Ir para depoimento ${i + 1}`,
									className: `size-2.5 rounded-full transition-all ${i === active ? "w-6 bg-primary" : "bg-muted-foreground/40"}`
								}, t.name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => scrollTo(active + 1),
								"aria-label": "Próximo depoimento",
								className: "flex size-11 items-center justify-center rounded-full border border-hairline bg-elev-1 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
							})
						]
					})]
				})
			]
		})
	});
}
/**
* Pop-up de upsell da oferta de entrada.
*
* Quem clica no cronograma de R$ 9,90 nao vai direto ao checkout: primeiro ve
* o que fica de fora e quanto custa levar tudo. E o ultimo ponto em que da
* para subir o ticket, por isso o caminho de aceitar e um botao grande e o de
* recusar e uma linha discreta — mas a recusa esta sempre visivel e leva ao
* que a pessoa pediu, sem truques.
*
* Assente no Dialog do Radix por causa do que nao se ve: foco presenciado
* dentro do pop-up, Esc para fechar, scroll da pagina travado e os papeis de
* acessibilidade corretos.
*/
function UpsellDialog({ open, onOpenChange, fullHref, scheduleHref }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-black/75 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
			style: {
				maxHeight: "calc(100dvh - 2rem)",
				overflowY: "auto"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "plan-featured rounded-3xl p-7 text-center sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[10px] font-bold text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "text-sm leading-none",
								children: "🔥"
							}),
							" ",
							"Espere um instante"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "font-display mt-5 text-2xl font-extrabold leading-tight text-foreground sm:text-[1.75rem]",
						children: [
							"Quer levar os ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "117 exercícios"
							}),
							" por mais",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: formatBRL(UPGRADE_DIFFERENCE)
							}),
							"?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: "O cronograma diz o que treinar em cada dia. Os 117 exercícios são o conteúdo que preenche esses dias — e vêm com os 3 bônus inclusos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mx-auto mt-6 max-w-xs space-y-2.5 text-left",
						children: [
							"117 Exercícios de Mobilidade e Estabilidade",
							"Plano de Emagrecimento e Definição",
							"Guia de Treino para CORE",
							"40 Planos de Treino Pesado"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2.5 text-sm leading-snug",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-[17px] shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/90",
								children: item
							})]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex items-baseline justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-4xl font-extrabold leading-none text-foreground",
							children: formatBRL(PRICES.offer)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold text-muted-foreground line-through",
							children: formatBRL(PRICES.offerAnchor)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: fullHref,
						className: "cta-shine mt-6 block w-full rounded-full bg-primary px-5 py-5 text-center text-base font-extrabold uppercase tracking-[0.08em] text-primary-foreground shadow-[0_18px_40px_-12px] shadow-primary/60 transition-transform duration-300 hover:scale-[1.03]",
						children: "Adicionar os 117 exercícios"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: scheduleHref,
						className: "mx-auto mt-4 block w-fit px-2 py-1 text-[10px] text-destructive/40 underline underline-offset-2 transition-colors duration-200 hover:text-destructive/80",
						children: "Não quero, seguir só com o cronograma"
					})
				]
			})
		})] })
	});
}
var bonus_lowcarb_default = "/assets/bonus-lowcarb-B27Ghgvr.jpg";
var bonus_anabolica_default = "/assets/bonus-anabolica-DA5tNJWl.jpg";
var bonus_saudavel_default = "/assets/bonus-saudavel-COhhSNtc.jpg";
var heroBullets = [
	"117 exercícios prontos para usar para variar os seus treinos sem repetir o mesmo movimento durante meses",
	"Organizado por categoria — você sabe exatamente o que treinar hoje",
	"3 fases de evolução: da mobilidade básica ao desempenho",
	"Séries, repetições e descanso já calculados — excelente para iniciantes"
];
/** Numeros que sustentam a promessa. Todos saem do proprio material. */
var stats = [
	{
		icon: Layers,
		value: "117",
		countTo: 117,
		label: "exercícios únicos, sem repetição"
	},
	{
		icon: Zap,
		value: "3",
		countTo: 3,
		label: "fases, da base ao desempenho"
	},
	{
		icon: Clock,
		value: "15–30",
		label: "minutos por treino"
	},
	{
		icon: Ban,
		value: "0",
		label: "equipamentos necessários"
	}
];
var categorias = [
	{
		numeral: "01",
		title: "Mobilidade Articular",
		text: "Pare de sentir as articulações travadas. Devolva amplitude de movimento ao ombro, quadril e coluna com controle — para se mover sem dores no dia a dia e no treino."
	},
	{
		numeral: "02",
		title: "Estabilidade e Controle",
		text: "Mobilidade sem estabilidade dá lesão. Desenvolva o controle motor que sustenta cada movimento, melhorando o equilíbrio e a postura."
	},
	{
		numeral: "03",
		title: "Mobilidade e Desempenho",
		text: "A fase final: junte mobilidade e força para treinar mais pesado, com mais amplitude e menos risco de lesão."
	}
];
var bonus = [
	{
		tag: "Bônus #1",
		img: bonus_lowcarb_default,
		title: "Plano de Emagrecimento e Definição",
		text: "Um plano completo para acelerar a queima de gordura e definir o corpo, com orientações práticas de treino e alimentação.",
		price: BONUS_PRICES.emagrecimento
	},
	{
		tag: "Bônus #2",
		img: bonus_anabolica_default,
		title: "Guia de Treino para CORE",
		text: "Fortaleça o centro do seu corpo com treinos focados no CORE, melhorando a postura, o equilíbrio e o desempenho nos exercícios.",
		price: BONUS_PRICES.core
	},
	{
		tag: "Bônus #3",
		img: bonus_saudavel_default,
		title: "40 Planos de Treino Pesado",
		text: "40 planos de treino pesado prontos para usar para variar os seus treinos e continuar evoluindo em força e hipertrofia.",
		price: BONUS_PRICES.treinoPesado
	}
];
/** A oferta principal: material completo mais os 3 bonus. */
var offer = {
	name: "Acesso Completo",
	price: formatBRL(PRICES.offer),
	original: formatBRL(PRICES.offerAnchor),
	saving: `Economize ${formatBRL(savings(PRICES.offer, PRICES.offerAnchor))}`,
	href: "https://payment.ticto.app/OF82F3D36",
	cta: "Quero acessar agora",
	note: `Inclui os 3 bônus — ${formatBRL(BONUS_TOTAL)} em extras.`,
	included: [
		"117 Exercícios de Mobilidade e Estabilidade",
		"Plano de Emagrecimento e Definição",
		"Guia de Treino para CORE",
		"40 Planos de Treino Pesado",
		"Acesso imediato",
		"Garantia de 7 dias"
	]
};
/**
* Checkout da oferta de entrada (o cronograma, R$ 9,90).
*
* Enquanto estiver vazio, a oferta de entrada NAO aparece na pagina: um botao
* de compra a apontar para lado nenhum perde a venda e ainda queima a
* confianca de quem clicou. Preencher com o link do Ticto para a publicar.
*/
var SCHEDULE_CHECKOUT_URL = "https://payment.ticto.app/O786A2996";
/**
* Checkout do upsell, usado SO pelo botao do pop-up.
*
* E uma oferta a parte, que da acesso ao cronograma E aos 117 exercicios — e
* por isso nao e a mesma do cartao principal. Quem entra por aqui veio pelo
* caminho do cronograma e esta a acrescentar os exercicios por cima; quem
* clica no cartao de cima compra so o pacote completo, noutra oferta.
* Trocar um pelo outro vende a coisa errada, por isso sao duas constantes.
*/
var UPGRADE_CHECKOUT_URL = "https://payment.ticto.app/O274ED8C9";
/**
* A oferta de entrada.
*
* So o cronograma: os 117 exercicios e os 3 bonus ficam de fora, riscados, a
* mostrar o que nao vem. E o que sustenta o upsell no pop-up.
*/
var scheduleOffer = {
	name: "Cronograma Semanal de Mobilidade",
	price: formatBRL(PRICES.schedule),
	cta: "Quero o cronograma",
	href: SCHEDULE_CHECKOUT_URL,
	description: "A sua semana de mobilidade organizada: o que treinar em cada dia, sem ter de decidir nada. O cronograma monta a rotina — os 117 exercícios são o que preenche cada dia dela.",
	items: [
		{
			label: "Cronograma Semanal de Mobilidade",
			included: true
		},
		{
			label: "Acesso imediato",
			included: true
		},
		{
			label: "Garantia de 7 dias",
			included: true
		},
		{
			label: "117 Exercícios de Mobilidade e Estabilidade",
			included: false
		},
		{
			label: "Plano de Emagrecimento e Definição",
			included: false
		},
		{
			label: "Guia de Treino para CORE",
			included: false
		},
		{
			label: "40 Planos de Treino Pesado",
			included: false
		}
	]
};
var trustChips = [
	"Garantia de 7 dias",
	"Acesso imediato",
	"Pagamento único",
	"Abre no celular"
];
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[10px] font-bold text-primary",
		children
	});
}
function CtaButton({ children, href = "#planos", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: `cta-shine group inline-flex items-center justify-center rounded-full bg-primary px-9 py-5 text-sm font-extrabold uppercase tracking-[0.08em] text-primary-foreground shadow-[0_18px_40px_-12px] shadow-primary/60 transition-transform duration-300 hover:scale-[1.03] active:scale-100 sm:text-base ${className}`,
		children
	});
}
/** Linha de garantias curtas. Fecha cada bloco de CTA sem repetir o selo todo. */
function TrustRow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground",
		children: trustChips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "inline-flex items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 shrink-0 text-primary" }), chip]
		}, chip))
	});
}
function SectionHeading({ eyebrow, title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-6 text-3xl font-extrabold leading-[1.08] text-foreground md:text-[2.75rem]",
				children: title
			}),
			lead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base leading-relaxed text-muted-foreground",
				children: lead
			})
		]
	});
}
function Index() {
	const [upsellOpen, setUpsellOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "grain font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesNotification, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyCta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-glow overflow-hidden px-6 pb-16 pt-12 md:pb-24 md:pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center lg:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-1.5 rounded-full bg-primary" }),
								"Oferta especial · ",
								HEADLINE_DISCOUNT,
								"% de desconto"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display mt-7 text-[2.5rem] font-extrabold leading-[1.04] text-foreground sm:text-5xl lg:text-[3.5rem]",
								children: ["Recupere a mobilidade do seu corpo em poucas semanas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-3 block text-primary",
									children: "sem equipamento, sem academia"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0 md:text-lg",
								children: [
									"Um guia em PDF com",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-bold text-foreground",
										children: "117 exercícios"
									}),
									", séries, repetições e intervalos já definidos. É só abrir e seguir. Acesso imediato após a compra."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mx-auto mt-8 max-w-xl space-y-3.5 text-left lg:mx-0",
								children: heroBullets.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: i * 90,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-sm leading-relaxed text-foreground/90 md:text-base",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/25",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-primary" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
									})
								}, b))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col items-center gap-5 lg:items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center gap-4 sm:flex-row lg:items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, { children: "Quero acessar o material" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground",
										children: [
											"por",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "font-display text-lg font-extrabold text-foreground",
												children: formatBRL(PRICES.offer)
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "line-through",
												children: formatBRL(PRICES.offerAnchor)
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:[&>ul]:justify-start",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustRow, {})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:pl-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBook, {})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "rule-fade" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "grid grid-cols-2 gap-x-6 gap-y-9 py-10 md:grid-cols-4 md:py-12",
							children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center gap-2 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-5 text-primary/70" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-display text-3xl font-extrabold leading-none text-foreground md:text-4xl",
											children: "countTo" in s && s.countTo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { to: s.countTo }) : s.value
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "max-w-[9rem] text-xs leading-snug text-muted-foreground",
											children: s.label
										})
									]
								})
							}, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "rule-fade" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-glow px-6 py-20 md:py-28",
				style: {
					"--glow-top": "-6%",
					"--glow-size": "720px"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "O método",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Três fases, do travado ao ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "desempenho"
						})] }),
						lead: "Exercícios independentes, sem repetição, organizados por categoria — com séries, repetições e descanso reunidos num material visual. Você abre e sabe o que treinar hoje."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3",
						children: categorias.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 120,
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group relative h-full overflow-hidden rounded-2xl border border-hairline bg-elev-1 p-8 transition-colors duration-300 hover:border-primary/35",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ghost-numeral pointer-events-none absolute right-5 top-4 text-[4.5rem] transition-transform duration-500 group-hover:-translate-y-1",
										children: c.numeral
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "eyebrow relative text-[10px] font-bold text-primary",
										children: ["Fase ", c.numeral]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display relative mt-4 max-w-[11rem] text-xl font-extrabold leading-snug text-foreground",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "relative mt-4 text-sm leading-relaxed text-muted-foreground",
										children: c.text
									})
								]
							})
						}, c.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 flex flex-col items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, { children: "Quero acessar o material" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustRow, {})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 py-20 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "size-3.5" }), " Bônus exclusivos"] }),
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["+3 bônus para quem adquirir ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "hoje"
						})] }),
						lead: "Além do material principal, você recebe acesso imediato a estes bônus — todos inclusos, sem custo extra."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3",
						children: bonus.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 120,
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-elev-1 transition-transform duration-300 hover:-translate-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: b.img,
											alt: b.title,
											width: 760,
											height: 570,
											loading: "lazy",
											className: "h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-elev-1 via-elev-1/25 to-transparent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-[10px] font-bold text-primary-foreground",
											children: b.tag
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col px-6 pb-7 pt-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg font-extrabold leading-snug text-foreground",
											children: b.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-xs font-semibold text-muted-foreground",
											children: [
												"Valor: ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "line-through",
													children: formatBRL(b.price)
												}),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary",
													children: "grátis"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm leading-relaxed text-muted-foreground",
											children: b.text
										})
									]
								})]
							})
						}, b.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-primary/25 bg-primary/10 px-6 py-5 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-base font-extrabold text-foreground md:text-lg",
							children: [formatBRL(BONUS_TOTAL), " em bônus — inclusos no preço."]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "planos",
				className: "section-glow scroll-mt-8 px-6 py-20 md:py-28",
				style: {
					"--glow-top": "-4%",
					"--glow-size": "800px"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "A oferta",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Tudo incluído, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "num pagamento único"
						})] }),
						lead: "O material completo mais os 3 bônus. Acesso imediato após a confirmação e garantia de 7 dias."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-16 max-w-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "plan-featured relative flex flex-col rounded-3xl p-7 text-left sm:p-9",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "eyebrow absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold text-primary-foreground shadow-lg shadow-primary/30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-gold text-gold" }), " Tudo incluído"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-[11px] font-bold text-primary",
									children: offer.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[3.4rem] font-extrabold leading-none text-foreground",
										children: offer.price
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-bold text-muted-foreground line-through",
										children: offer.original
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-bold text-primary",
									children: offer.saving
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-7 space-y-3.5 border-t border-hairline pt-7",
									children: offer.included.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-sm leading-snug",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-[18px] shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground/90",
											children: label
										})]
									}, label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-4 text-center text-xs font-bold text-primary",
										children: offer.note
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: offer.href,
										className: "cta-shine block w-full rounded-full bg-primary px-5 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-primary-foreground shadow-[0_18px_40px_-12px] shadow-primary/60 transition-transform duration-300 hover:scale-[1.03] sm:text-base",
										children: offer.cta
									})]
								})
							]
						}) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-10 max-w-xl text-center text-base text-muted-foreground",
						children: [
							"São ",
							formatBRL(BONUS_TOTAL),
							" só em bônus, inclusos no preço — e o material principal por",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-bold text-primary",
								children: formatBRL(PRICES.offer)
							}),
							", uma vez só, com acesso vitalício."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-14 max-w-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-hairline bg-elev-1/60 p-7 text-left sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-[11px] font-bold text-muted-foreground",
									children: scheduleOffer.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap items-baseline gap-x-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-4xl font-extrabold leading-none text-foreground",
										children: scheduleOffer.price
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "pagamento único"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-muted-foreground",
									children: scheduleOffer.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-3 border-t border-hairline pt-6",
									children: scheduleOffer.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-sm leading-snug",
										children: [
											item.included ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-[18px] shrink-0 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
												className: "mt-0.5 size-[18px] shrink-0 text-muted-foreground/40",
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: item.included ? "text-foreground/90" : "text-muted-foreground/45 line-through",
												children: item.label
											}),
											!item.included && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "sr-only",
												children: "(não incluído)"
											})
										]
									}, item.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setUpsellOpen(true),
									className: "mt-8 block w-full rounded-full border border-hairline bg-elev-2 px-5 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-foreground transition-colors duration-300 hover:border-primary/40",
									children: scheduleOffer.cta
								})
							]
						}) })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpsellDialog, {
				open: upsellOpen,
				onOpenChange: setUpsellOpen,
				fullHref: UPGRADE_CHECKOUT_URL,
				scheduleHref: SCHEDULE_CHECKOUT_URL
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 pb-20 md:pb-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-4xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-6 rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/12 to-transparent px-8 py-10 text-center md:flex-row md:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/25",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-8 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-extrabold text-foreground",
							children: "Garantia incondicional de 7 dias"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed text-muted-foreground",
							children: "Não gostou? Peça o reembolso dentro do prazo e devolvemos 100% do valor, sem perguntas. O risco é todo nosso."
						})] })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-hairline px-6 py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center gap-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-extrabold tracking-tight text-foreground",
							children: "117 Exercícios de Mobilidade e Estabilidade"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-xs leading-relaxed text-muted-foreground",
							children: "Este material é informativo e não substitui acompanhamento profissional. Em caso de lesão ou condição de saúde, consulte um profissional antes de começar."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground/70",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Todos os direitos reservados."
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
