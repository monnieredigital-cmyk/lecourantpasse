import normesImage from "../assets/news/normes.jpg";
import tableauImage from "../assets/news/tableau.jpg";
import miseauxnormesImage from "../assets/news/miseauxnormes.jpg";
import irveImage from "../assets/news/irve.jpg";
import diagnosticImage from "../assets/news/diagnostic.jpg";
import securiteImage from "../assets/news/securite.jpg";

export const newsPage = {
  title: "Conseils & actualités électriques",

  subtitle:
    "Normes, sécurité, rénovation et informations utiles pour votre installation électrique",

  intro:
    "Découvrez nos conseils pour sécuriser votre logement, comprendre les normes électriques et réussir vos projets de rénovation."
};

export const news = [
  {
    title: "Tableau électrique : quand faut-il le remplacer ?",
    description:
      "Un tableau électrique ancien peut rapidement devenir un risque pour la sécurité de votre logement. \n" +
      "Les signes les plus courants sont des disjoncteurs qui sautent fréquemment, un manque de protection différentielle ou encore un tableau qui chauffe. \n" +
      "Avec le temps, les installations ne sont plus adaptées aux besoins modernes (électroménager, chauffage, domotique). \n" +
      "Un remplacement permet de sécuriser l’ensemble du logement et de se mettre en conformité avec les normes actuelles. \n" +
      "Une installation moderne réduit fortement les risques d’incendie ou d’électrocution.",
    links: [
      "https://www.legrand.fr/pro/normes/norme-NFC-15-100-installation-electrique-habitations",
      "https://particuliers.engie.fr/electricite/conseils-electricite/conseils-installation-electrique/norme-tableau-electrique.html"
    ],
    image: tableauImage
  },

  {
    title: "Norme NF C 15-100 : ce qu’il faut absolument savoir",
    description:
      "La norme NF C 15-100 définit toutes les règles de sécurité pour les installations électriques en France. \n" +
      "Elle encadre la conception des tableaux électriques, le nombre de prises, les circuits spécialisés et la mise à la terre. \n" +
      "Elle est obligatoire pour toute construction neuve et lors de rénovations importantes. \n" +
      "Son objectif principal est d’assurer la sécurité des occupants et la bonne répartition des circuits électriques. \n" +
      "Elle évolue régulièrement pour s’adapter aux nouveaux usages comme la domotique ou les véhicules électriques. \n" +
      "Respecter cette norme permet d’éviter les risques de surcharge, d’incendie ou de dysfonctionnement électrique.",
    links: [
      "https://www.fournisseurs-electricite.com/compteur/linky/normes-electriques",
      "https://www.legrand.fr/questions-frequentes/quelle-est-la-norme-qui-sapplique-a-un-tableau-electrique-legrand"
    ],
    image: normesImage
  },

  {
    title: "Diagnostic électrique : est-il obligatoire ?",
    description:
      "Le diagnostic électrique est un contrôle obligatoire dans certains cas, notamment lors de la vente ou de la location d’un logement. \n" +
      "Il concerne les installations de plus de 15 ans et permet d’identifier les risques potentiels pour les occupants. \n" +
      "Le diagnostic vérifie la présence de protections différentielles, la conformité du tableau et l’état général de l’installation. \n" +
      "En cas d’anomalies, des travaux peuvent être recommandés pour sécuriser le logement. \n" +
      "Il ne rend pas le logement non habitable mais informe clairement l’acheteur ou le locataire. \n" +
      "C’est un élément important dans la prévention des risques électriques domestiques.",
    links: [
      "https://www.service-public.fr/particuliers/vosdroits/F18692",
      "https://www.legrand.fr/pro/normes/norme-NFC-15-100-installation-electrique-habitations"
    ],
    image: diagnosticImage
  },

  {
    title: "Mise aux normes électriques : prix et obligations",
    description:
      "La mise aux normes électriques consiste à adapter une installation ancienne aux exigences actuelles de sécurité. \n" +
      "Elle devient souvent nécessaire dans les logements anciens ou lors de rénovations importantes. \n" +
      "Le coût varie selon la surface du logement, l’état de l’installation et les travaux à réaliser. \n" +
      "Elle peut inclure le remplacement du tableau électrique, la mise à la terre et la création de nouveaux circuits. \n" +
      "Cette intervention permet d’améliorer la sécurité et d’éviter les risques de surcharge ou d’incendie. \n" +
      "Elle est aussi un atout lors d’une vente immobilière.",
    links: [
      "https://www.fournisseurs-electricite.com/compteur/linky/normes-electriques",
      "https://www.travauxbtp.fr/guides/guide-renovation-electrique"
    ],
    image: miseauxnormesImage
  },

  {
    title: "Installation d’une borne de recharge IRVE",
    description:
      "L’installation d’une borne de recharge IRVE permet de recharger un véhicule électrique directement à domicile. \n" +
      "Elle nécessite une installation sécurisée et conforme aux normes électriques en vigueur. \n" +
      "Un professionnel qualifié évalue la puissance disponible et adapte le tableau électrique si nécessaire. \n" +
      "Ce type d’installation améliore le confort et réduit les coûts de recharge par rapport aux bornes publiques. \n" +
      "Elle peut également être éligible à certaines aides financières ou crédits d’impôt. \n" +
      "C’est une solution de plus en plus demandée avec le développement des véhicules électriques.",
    links: [
      "https://www.ademe.fr/",
      "https://www.service-public.fr/particuliers/vosdroits/F34014"
    ],
    image: irveImage
  },

  {
    title: "Les risques d’une installation électrique vétuste",
    description:
      "Une installation électrique ancienne peut représenter un danger important pour les occupants d’un logement. \n" +
      "Les principaux risques sont les courts-circuits, les incendies et les électrocutions. \n" +
      "Les équipements vétustes ne sont souvent plus adaptés aux besoins actuels en électricité. \n" +
      "Un manque de protection différentielle ou une mise à la terre insuffisante augmente fortement les risques. \n" +
      "Une rénovation ou une mise aux normes permet de sécuriser durablement l’installation. \n" +
      "C’est une étape essentielle pour garantir la sécurité du logement et de ses habitants.",
    links: [
      "https://www.legrand.fr/pro/normes/norme-NFC-15-100-installation-electrique-habitations",
      "https://www.schneider-electric.fr/fr/work/solutions/for-your-business/solutions-for-homes/"
    ],
    image: securiteImage
  }
];