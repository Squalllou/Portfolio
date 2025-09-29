const projects = [
  {
    title: "Booki",
    screenshot: "./img/Booki_Miniature.webp",
    description: "Premier site en HTML/CSS que j'ai réalisé au cours de ma formation. J'ai ainsi découvert l'HTML et le CSS pour construire un site de location de logement en suivant rigoureusement un cahier des charges. Nous avons donc une maquette de site consultable en ligne grâce à GitHub Pages.",
    src: "https://squalllou.github.io/ProjetBooki/",
    details: null
  },
  {
    title: "Projet JS Sophie Bluel",
    screenshot: "./img/Sophie_Bluel_Miniature.webp",
    description: "Ce site représente ma découverte de JavaScript. J’ai pu utiliser une API pour la première fois, rendant ainsi le site dynamique. Les utilisateurs peuvent, à travers une modale, ajouter, modifier ou supprimer des œuvres contenues dans une galerie.",
    src: null,
    details:
    <div className="modal-details">
      <div className="modal-row">
        <div className="img-wrapper">
        <img src="./img/Login_Sophie_Bluel.webp" alt="Login screen" className="screen"/>
        <img src="./img/Filtres_Sophie_Bluel.webp" alt="Recherche des appartements" className="screen"/>
        </div>
        <div className="img-wrapper">
        <img src="./img/Modale_Sophie_Bluel.webp" alt="Modale de modification" className="screen"/>
        <img src="./img/Ajout_Sophie_Bluel.webp" alt="Modale de d'ajout" className="screen"/>
        </div>
        <div className="modal-text">
          <p>
            Le site de Sophie Bluel est une galerie présentant les œuvres de l’architecte.
            J’ai d’abord travaillé à le rendre dynamique, notamment en mettant en place un système de filtres permettant d’afficher les œuvres sans recharger la page.
          </p>
          <p>
            J’ai ensuite appris à créer des modales afin d’améliorer l’expérience utilisateur et de rendre la navigation plus fluide.
            Une autre étape importante a été la mise en place de la connexion via formulaire, avec une vérification des actions de l’utilisateur pour garantir un usage sécurisé.
          </p>
          <p>
            Enfin, les fonctionnalités d’ajout et de suppression des œuvres sont protégées par un système de token. Cela permet de s’assurer que seules les personnes autorisées puissent modifier la galerie.
          </p>
        </div>
      </div>
    </div>
  },
  {
    title: "Projet React",
    screenshot: "./img/Kasa_Miniature.webp",
    description: "Première utilisation de React pour créer un site de location. Ce projet m’a permis de découvrir React et plusieurs de ses composants, afin d’obtenir une interface dynamique et modulable grâce à la réutilisation des composants qui constituent le site.",
    src: null,
    details:
      <div className="modal-details">
        <div className="modal-row">
          <div className="img-wrapper kasa">
            <div className="img-wrapper">
              <img src="./img/Kasa_Miniature.webp" alt="Accueil" className="screen"/>
              <img src="./img/Fiche_Logement_Kasa.webp" alt="fiches des appartements" className="screen"/>
            </div>
            <div className="img-wrapper">
              <img src="./img/Collapse_Kasa.webp" alt="Collapse ouverte" className="screen"/>
              <img src="./img/Apropo_Kasa.webp" alt="A propos" className="screen"/>
            </div>
          </div>
          <div className="modal-text">
            <p>
              J’ai donc découvert la notion de composants réutilisables, comme la bannière ou les sections “collapse” présentes sur ce site.
              Ces éléments dynamiques sont également employés sur les fiches des logements, ce qui permet de gagner en cohérence et en efficacité lors du développement.
            </p>
          </div>
        </div>
        
      </div>

  }
];

export default projects;
