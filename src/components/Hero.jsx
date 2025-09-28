import '../styles/Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-photo-wrapper">
          <img src="img/Ma_Photo.jpg" alt="Adrien" className="hero-photo" />
        </div>
        <div className="hero-text">
          <h1>
            Bonjour, je suis <span className="special-name">Adrien</span>
          </h1>
          <p>Issu d’un parcours en sciences du numérique et réseaux, j’ai choisi de me tourner vers le développement web pour mettre à profit mes compétences techniques et ma capacité d’adaptation.
        Mes expériences variées, de l’assistance logicielle à des secteurs comme la restauration ou l’agriculture, m’ont appris à être autonome tout en sachant collaborer efficacement en équipe.
        Curieux et rapide à apprendre, je prends plaisir à résoudre des problèmes et à relever de nouveaux défis. Ce portfolio reflète mon envie de construire des projets concrets et de continuer à progresser dans ce domaine.
      </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
