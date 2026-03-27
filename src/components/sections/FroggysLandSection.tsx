function FroggysLandSection(): JSX.Element {
  return (
    <section className="section" id="froggys-land">
      <div className="glass panel">
        <p className="mini-label">Projet communautaire</p>
        <h2 className="panel-title">Froggy&apos;s Land</h2>

        <div className="froggy-box">
          <p>
            J’ai aussi mon propre univers communautaire :
            <strong> Froggy&apos;s Land</strong>. C’est un serveur communautaire
            autour de mes emojis grenouilles avec une ambiance douce, fun et
            conviviale.
          </p>

          <p style={{ marginTop: "12px" }}>
            Il existe aussi un site dédié au serveur :
            <strong> froggyland.fr</strong>.
          </p>

          <p className="highlight-line">
            Un espace créatif, chaleureux et plein de petites grenouilles.
          </p>

          <div className="hero-buttons" style={{ marginTop: "18px" }}>
            <a
              className="btn btn-primary"
              href="https://discord.gg/froggy"
              target="_blank"
              rel="noreferrer"
            >
              Rejoindre le serveur
            </a>

            <a
              className="btn btn-secondary"
              href="https://froggyland.fr"
              target="_blank"
              rel="noreferrer"
            >
              Voir le site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FroggysLandSection;