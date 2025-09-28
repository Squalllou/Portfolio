const projects = [
  {
    title: "Booki",
    screenshot: "./img/Booki_Miniature.png",
    description: "Premier site en HTML/CSS que j'ai réalisé au cours de ma formation. J'ai ainsi découvert l'HTML et le CSS pour construire un site de location de logement en suivant rigoureusement un cahier des charges. Nous avons donc une maquette de site consultable en ligne grâce à GitHub Pages.",
    src: "https://squalllou.github.io/ProjetBooki/",
    details: null
  },
  {
    title: "Projet JS Sophie Bluel",
    screenshot: "./img/Sophie_Bluel_Miniature.png",
    description: "Ce site représente ma découverte de JavaScript. J’ai pu utiliser une API pour la première fois, rendant ainsi le site dynamique. Les utilisateurs peuvent, à travers une modale, ajouter, modifier ou supprimer des œuvres contenues dans une galerie.",
    src: null,
    details:
    <div className="modal-details">
      <div className="modal-row">
        <p>Le site de Sophie Bluel est une galeries des oeuvres de l'architecte</p>
        <img src="./img/Login_Sophie_Bluel.png" alt="Login screen" className="screen"/>
        <p>Sur ce site j'ai du apprendre a connecter un utilisateur via formulaire et donc verrifier les actions de l'utilisateur afin de pouvoir le connecter et evité tout mauvais comportement.</p>
      </div>

      <div className="modal-row">
        <img src="./img/Filtres_Sophie_Bluel.png" alt="Recherche des appartements" className="screen"/>
        <p>Dans un premier temps j'ai du rendre dynamique les site en "brut" notamment pour gere le filtres de recherche dans la galleries qui affiches les oeuvres sans rafraichir la page</p>
        <img src="/img/Filtres_Bis_Sophie_Bluel.png" alt="Recherche des objets" className="screen"/>
      </div>

      <div className="modal-row">
        <p>J'ai également appris a créer des modales dynamiquent.</p>
        <div className="Bluel-bottom">
          <img src="./img/Modale_Sophie_Bluel.png" alt="Modale de modification" className="screen"/>
          <img src="./img/Ajout_Sophie_Bluel.png" alt="Modale de d'ajout" className="screen"/>
        </div>
        <p>La notion d'ajouts ou de suppression et gere par token d'utilisateur ce qui permet de certifier que la personne qui souhaite modifier la gallerie soit bien son posseseur.</p>
      </div>
    </div>
  },
  {
    title: "Projet React",
    screenshot: "./img/Kasa_Miniature.png",
    description: "Première utilisation de React pour créer un site de location. Ce projet m’a permis de découvrir React et plusieurs de ses composants, afin d’obtenir une interface dynamique et modulable grâce à la réutilisation des composants qui constituent le site.",
    src: null,
    details:
        <div className="modal-details">
      <div className="modal-row-kasa">
        <img src="./img/Apropo_Kasa.png" alt="A propos" className="screen"/>
        <p>J'ai donc decouvert la notion de composant reutilisable tel que la baniere ou les collapse utilisés sur ce site.</p>
      </div>

      <div className="middle-kasa"><img src="./img/Collapse_Kasa.png" alt="Collapse ouverte" className="screen"/></div>

      <div className="kasa-bottom">
        <p className="kasa-text-bottom">Des éléments dynamique réutilisables aussi sur les fiches des logements</p>
        <img src="./img/Fiche_Logement_Kasa.png" alt="fiches des appartements" className="screen"/>
      </div>
    </div>
  }
];

export default projects;
