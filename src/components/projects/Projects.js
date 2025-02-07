import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import { projectOne } from '../../assets/index'
import { projectTwo } from '../../assets/index'
import { projectThree } from '../../assets/index'
import { projectFour } from '../../assets/index'
import { projectFive } from '../../assets/index'
import { projectSix } from '../../assets/index'

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="Projets"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="StarLetters"
          des="StarLetters est un jeu en ligne à un ou plusieurs joueurs basé sur les similarités entre mots. Chauqe joueur reçoit un mot de départ et un mot cible et propose des mots proches afin de créer une chaine de mots simialires."
          src={projectOne}
          githubLink="https://github.com/but2-sae-2023/StarLetters"
          websiteLink="https://perso-etudiant.u-pem.fr/~lucas.merlin/StarLetters/frontend/pages/index.php"

        />
        <ProjectsCard
          title="EuroEtoiles"
          des="Que vous voyagiez en solo, en famille ou en groupe, notre site de réservation de billets de train est là pour rendre votre expérience de voyage agréable et sans tracas. Réservez dès maintenant et profitez de l'efficacité et du confort du voyage en train ! "
          src={projectTwo}
          githubLink="https://github.com/StarLetters/EuroEtoiles"
          websiteLink="https://euroetoiles-5dbac4b5c3d8.herokuapp.com/pages/index.php"
        />
        <ProjectsCard
          title="Portfolio V1"
          des="Voici la première version de mon portfolio. Il a été crée lors de ma première année de BUT Informatique. Il a été crée en utilisant HTML, CSS et JavaScript pour le coté front, et PHP pour la partie formulaire."
          src={projectThree}
          githubLink="https://github.com/Eliaslhl/Portfolio"
          websiteLink="http://perso-etudiant.u-pem.fr/~elias.lahlouh/portfolio/index.html"
        />
        <ProjectsCard
          title="Tic Tac Toe"
          des="Le Tic Tac Toe est un jeu de société classique qui se joue sur une grille de 3x3 cases. Le jeu oppose deux joueurs, l'un utilisant des 'X' et l'autre des 'O'. Les joueurs alternent pour placer leur symbole dans une case vide de la grille. Le but du jeu est d'aligner trois symboles identiques horizontalement, verticalement ou en diagonale."
          src={projectFour}
          githubLink="https://github.com/Eliaslhl"
          websiteLink="https://github.com/Eliaslhl"
        />
        <ProjectsCard
          title="DSD Bank"
          des="DSD Bank est un projet réalisé en deuxième année de BUT Informatique. Il a été crée en HTML, CSS et JavaScript pour le front, MySQL pour la base de données et PHP pour le coté serveur. Il s'agit d'un site de gestion de compte bancaire. "
          src={projectFive}
          githubLink="https://github.com/StarLetters/DSDBank"
          websiteLink="http://perso-etudiant.u-pem.fr/~lucas.merlin/DSDBank/pages/welcome.php"
        />
        <ProjectsCard
          title="Bataille De Boules"
          des="Ce projet de première année de BUT Informatique, réalisé en binôme avait pour but de créer un jeu vidéo. Les critères importants dans ce projet sont le respect des différentes règles et options du jeu, avoir un jeu fluide menant donc à de l'optimisation algorithmique. Ce projet a été réalisé sur une période de 6 mois."
          src={projectSix}
          githubLink="https://github.com/Eliaslhl/SAE_Python"
          websiteLink="https://github.com/Eliaslhl/SAE_Python"
        />
      </div>
    </section>
  );
}

export default Projects