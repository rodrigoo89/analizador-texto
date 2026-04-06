import { useState } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0a0a0f;
    min-height: 100vh;
    font-family: 'Space Mono', monospace;
  }

  .wrapper {
    min-height: 100vh;
    background: #0a0a0f;
    color: #e8e4d9;
    padding: 48px 24px;
    position: relative;
    overflow: hidden;
  }

  .wrapper::before {
    content: '';
    position: fixed;
    top: -200px;
    right: -200px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255,90,31,0.12) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .wrapper::after {
    content: '';
    position: fixed;
    bottom: -150px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(100,60,220,0.10) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .container {
    max-width: 760px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .header {
    margin-bottom: 48px;
  }

  .tag {
    display: inline-block;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ff5a1f;
    border: 1px solid rgba(255,90,31,0.3);
    padding: 4px 12px;
    margin-bottom: 16px;
  }

  h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 800;
    line-height: 1.0;
    color: #e8e4d9;
    letter-spacing: -2px;
  }

  h1 span {
    color: #ff5a1f;
  }

  .subtitle {
    margin-top: 12px;
    font-size: 13px;
    color: #666;
    letter-spacing: 0.05em;
  }

  .card {
    background: #111118;
    border: 1px solid #1f1f2e;
    padding: 28px;
    margin-bottom: 20px;
  }

  .card-label {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #555;
    margin-bottom: 12px;
  }

  textarea, input[type="text"] {
    width: 100%;
    background: #0a0a0f;
    border: 1px solid #1f1f2e;
    color: #e8e4d9;
    font-family: 'Space Mono', monospace;
    font-size: 14px;
    padding: 14px 16px;
    outline: none;
    resize: none;
    transition: border-color 0.2s;
    line-height: 1.6;
  }

  textarea:focus, input[type="text"]:focus {
    border-color: #ff5a1f;
  }

  textarea::placeholder, input::placeholder {
    color: #333;
  }

  .letters-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  .letter-input-wrap {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .letter-num {
    font-size: 10px;
    color: #ff5a1f;
    letter-spacing: 0.15em;
  }

  input.letter {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    padding: 10px;
    text-transform: lowercase;
  }

  .btn {
    width: 100%;
    background: #ff5a1f;
    color: #0a0a0f;
    border: none;
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 16px;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
    margin-top: 8px;
  }

  .btn:hover { background: #e04c10; }
  .btn:active { transform: scale(0.99); }
  .btn:disabled { background: #2a2a2a; color: #555; cursor: not-allowed; }

  .results {
    animation: fadeIn 0.4s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .results-title {
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #555;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .results-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #1f1f2e;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: #1f1f2e;
    margin-bottom: 1px;
  }

  .stat {
    background: #111118;
    padding: 20px 16px;
    text-align: center;
  }

  .stat-val {
    font-family: 'Syne', sans-serif;
    font-size: 36px;
    font-weight: 800;
    color: #ff5a1f;
    line-height: 1;
    margin-bottom: 6px;
  }

  .stat-label {
    font-size: 10px;
    color: #555;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .stat-sub {
    font-size: 11px;
    color: #888;
    margin-top: 4px;
  }

  .info-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: #1f1f2e;
    margin-bottom: 1px;
  }

  .info-block {
    background: #111118;
    padding: 16px;
  }

  .info-key {
    font-size: 10px;
    color: #555;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .info-val {
    font-size: 15px;
    color: #e8e4d9;
  }

  .badge {
    display: inline-block;
    padding: 3px 10px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  .badge-yes { background: rgba(100,220,100,0.12); color: #64dc64; border: 1px solid rgba(100,220,100,0.25); }
  .badge-no  { background: rgba(255,90,31,0.12);  color: #ff5a1f;  border: 1px solid rgba(255,90,31,0.25);  }

  .inverted-block {
    background: #111118;
    border: 1px solid #1f1f2e;
    border-top: none;
    padding: 16px;
  }

  .inverted-text {
    font-size: 14px;
    color: #a09d94;
    line-height: 1.6;
    word-break: break-word;
  }

  .error {
    background: rgba(255,90,31,0.08);
    border: 1px solid rgba(255,90,31,0.2);
    color: #ff5a1f;
    font-size: 12px;
    padding: 10px 14px;
    margin-top: 12px;
    letter-spacing: 0.05em;
  }
`;

export default function App() {
  const [texto, setTexto] = useState("");
  const [letras, setLetras] = useState(["", "", ""]);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const handleLetra = (i, val) => {
    const nuevo = [...letras];
    nuevo[i] = val
      .replace(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/g, "")
      .slice(0, 1)
      .toLowerCase();
    setLetras(nuevo);
  };

  const analizar = () => {
    setError("");
    if (!texto.trim()) {
      setError("Escribí algo en el texto.");
      return;
    }
    if (letras.some((l) => !l)) {
      setError("Ingresá las 3 letras.");
      return;
    }

    const txt = texto.toLowerCase();
    const palabras = texto.trim().split(/\s+/);

    setResultado({
      conteos: letras.map((l) => ({
        letra: l,
        count: txt.split(l).length - 1,
      })),
      palabras: palabras.length,
      primera: texto[0],
      ultima: texto[texto.length - 1],
      tienePython: /python/i.test(texto),
      invertido: palabras.slice().reverse().join(" "),
    });
  };

  const listo = texto.trim() && letras.every((l) => l);

  return (
    <>
      <style>{style}</style>
      <div className="wrapper">
        <div className="container">
          <div className="header">
            <div className="tag">herramienta de texto</div>
            <h1>
              ANALIZADOR
              <br />
              DE <span>TEXTO</span>
            </h1>
            <p className="subtitle">
              // conteo de letras · estadísticas · inversión
            </p>
          </div>

          <div className="card">
            <div className="card-label">01 — Tu texto</div>
            <textarea
              rows={5}
              placeholder="Escribí todo lo que quieras..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />
          </div>

          <div className="card">
            <div className="card-label">02 — Tres letras para buscar</div>
            <div className="letters-row">
              {[0, 1, 2].map((i) => (
                <div className="letter-input-wrap" key={i}>
                  <span className="letter-num">LETRA {i + 1}</span>
                  <input
                    className="letter"
                    type="text"
                    value={letras[i]}
                    onChange={(e) => handleLetra(i, e.target.value)}
                    placeholder="a"
                  />
                </div>
              ))}
            </div>
            {error && <div className="error">⚠ {error}</div>}
          </div>

          <button className="btn" onClick={analizar} disabled={!listo}>
            → Analizar texto
          </button>

          {resultado && (
            <div className="results" style={{ marginTop: 40 }}>
              <div className="results-title">Resultados</div>

              {/* Conteo de letras */}
              <div className="stats-grid">
                {resultado.conteos.map(({ letra, count }) => (
                  <div className="stat" key={letra}>
                    <div className="stat-val">{count}</div>
                    <div className="stat-label">apariciones</div>
                    <div className="stat-sub">letra «{letra}»</div>
                  </div>
                ))}
              </div>

              {/* Palabras, primera, última */}
              <div className="info-row">
                <div className="info-block">
                  <div className="info-key">Total de palabras</div>
                  <div
                    className="info-val"
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: 28,
                      fontWeight: 800,
                      color: "#ff5a1f",
                    }}
                  >
                    {resultado.palabras}
                  </div>
                </div>
                <div className="info-block">
                  <div className="info-key">¿Contiene «Python»?</div>
                  <div className="info-val" style={{ marginTop: 4 }}>
                    <span
                      className={
                        resultado.tienePython
                          ? "badge badge-yes"
                          : "badge badge-no"
                      }
                    >
                      {resultado.tienePython ? "✓ SÍ" : "✗ NO"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="info-row">
                <div className="info-block">
                  <div className="info-key">Primera letra</div>
                  <div
                    className="info-val"
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: 28,
                      fontWeight: 800,
                    }}
                  >
                    «{resultado.primera}»
                  </div>
                </div>
                <div className="info-block">
                  <div className="info-key">Última letra</div>
                  <div
                    className="info-val"
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: 28,
                      fontWeight: 800,
                    }}
                  >
                    «{resultado.ultima}»
                  </div>
                </div>
              </div>

              {/* Texto invertido */}
              <div
                className="info-block"
                style={{ borderTop: "1px solid #1f1f2e" }}
              >
                <div className="info-key">Texto con palabras invertidas</div>
              </div>
              <div className="inverted-block">
                <div className="inverted-text">{resultado.invertido}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
