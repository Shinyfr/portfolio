function FroggysLandSection(): JSX.Element {
  return (
    <section className="section" id="froggys-land">
      <div className="glass panel">
        <p className="mini-label">Projet communautaire</p>
        <h2 className="panel-title">Froggy&apos;s Land</h2>

        <div className="froggy-box">
          <p>
            J’ai aussi mon propre serveur communautaire : <strong> Froggy&apos;s Land</strong>
          </p>
          <p>
            Ce serveur a été créé autour de mes emojis grenouilles avec une ambiance fun et chill 🐸
          </p>

          <p style={{ marginTop: "12px" }}>
            Il existe aussi un site dédié :
            <strong> froggyland.fr</strong>
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