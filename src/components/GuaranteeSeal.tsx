/**
 * Selo de garantia em SVG: medalha dourada com borda serrilhada, texto em
 * circulo, "7 DIAS" no centro e duas fitas. Desenhado por codigo para ficar
 * nitido em qualquer tela e nao depender de imagem.
 *
 * So o anel de texto gira, devagar; o centro fica parado para se ler.
 */
export function GuaranteeSeal({ className = "" }: { className?: string }) {
  // Borda serrilhada: 32 pontas alternando entre dois raios.
  const points = Array.from({ length: 64 }, (_, i) => {
    const r = i % 2 === 0 ? 96 : 89;
    const a = (i / 64) * Math.PI * 2 - Math.PI / 2;
    return `${(100 + r * Math.cos(a)).toFixed(2)},${(100 + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 200 250"
      className={className}
      role="img"
      aria-label="Selo de garantia incondicional de 7 dias"
    >
      <defs>
        <linearGradient id="seal-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FCE7A2" />
          <stop offset="0.45" stopColor="#E3B34C" />
          <stop offset="1" stopColor="#A9741F" />
        </linearGradient>
        <linearGradient id="seal-gold-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C8922F" />
          <stop offset="1" stopColor="#8A5C17" />
        </linearGradient>
        <radialGradient id="seal-center" cx="0.4" cy="0.35" r="0.75">
          <stop offset="0" stopColor="#1B2A3A" />
          <stop offset="1" stopColor="#0B1420" />
        </radialGradient>
        <path id="seal-text-path" d="M100,100 m-63,0 a63,63 0 1,1 126,0 a63,63 0 1,1 -126,0" />
      </defs>

      {/* Fitas */}
      <path d="M62 160 L44 238 L64 226 L78 244 L92 170 Z" fill="url(#seal-gold-dark)" />
      <path d="M138 160 L156 238 L136 226 L122 244 L108 170 Z" fill="url(#seal-gold-dark)" />

      {/* Medalha */}
      <polygon points={points} fill="url(#seal-gold)" />
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="#7A5114"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="100" r="75" fill="url(#seal-gold)" />
      <circle cx="100" cy="100" r="52" fill="url(#seal-center)" stroke="#FCE7A2" strokeWidth="2" />

      {/* Texto em circulo, a girar devagar */}
      <g className="seal-ring">
        <text
          fill="#3B2606"
          fontSize="11.5"
          fontWeight="800"
          letterSpacing="3.3"
          style={{ fontFamily: "var(--font-display, sans-serif)" }}
        >
          <textPath href="#seal-text-path" startOffset="0">
            GARANTIA INCONDICIONAL ★ RISCO ZERO ★
          </textPath>
        </text>
      </g>

      {/* Centro */}
      <text
        x="100"
        y="104"
        textAnchor="middle"
        fill="#F6D27A"
        fontSize="44"
        fontWeight="900"
        style={{ fontFamily: "var(--font-display, sans-serif)" }}
      >
        7
      </text>
      <text
        x="100"
        y="125"
        textAnchor="middle"
        fill="#F6D27A"
        fontSize="13"
        fontWeight="800"
        letterSpacing="3"
        style={{ fontFamily: "var(--font-display, sans-serif)" }}
      >
        DIAS
      </text>
      <text x="100" y="70" textAnchor="middle" fill="#F6D27A" fontSize="10">
        ★ ★ ★
      </text>
    </svg>
  );
}
