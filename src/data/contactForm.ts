export const contactFormData = {
  title: "Parlons de votre projet",

  heroTitle: "Demande de devis",

  description:
    "Rénovation de tableau électrique, mise aux normes, dépannage et sécurisation de votre installation à Nantes et sa région.",

  requestTypes: [
    {
      value: "information",
      label: "Demande d'informations",
    },
    {
      value: "quote",
      label: "Demande de devis",
    },
    {
      value: "emergency",
      label: "Dépannage urgent",
    },
  ],

  buildingTypes: [
    "Maison individuelle",
    "Appartement",
    "Local professionnel",
    "Commerce",
    "Immeuble / Copropriété",
    "Autre",
  ],

  serviceTypes: [
    "Remplacement du tableau électrique",
    "Mise aux normes",
    "Dépannage électrique",
    "Rénovation complète",
    "Ajout de circuits",
    "Autre",
  ],

  budgetOptions: [
    "Moins de 1 000 €",
    "1 000 € à 2 000 €",
    "2 000 € à 5 000 €",
    "Plus de 5 000 €",
    "Je ne sais pas",
  ],
  propertyAgeOptions : [
  "Moins de 10 ans",
  "10 à 20 ans",
  "20 à 30 ans",
  "Plus de 30 ans",
  "Je ne sais pas",
  
],

electricalIssuesOptions : [
  "Disjoncteurs qui sautent",
  "Tableau ancien",
  "Absence de différentiel",
  "Rénovation du logement",
  "Diagnostic électrique défavorable",
  "Aucun problème particulier",
  "Autres"
],

delayOptions : [
  "Urgent",
  "Sous 1 mois",
  "Sous 3 mois",
  "Sous 6 mois",
  "Pas de contrainte",
],

  labels: {
    requestType: "Type de demande",
    name: "Nom",
    email: "Email",
    phone: "Téléphone",

    buildingType: "Type de bâtiment",

    serviceType: "Nature des travaux",

    panelAge: "Votre tableau électrique a-t-il plus de 15 ans ?",

    photos: "Vos photos (tableau, installation...)",

    electricalIssues: "L'installation présente-t-elle des dysfonctionnements ?",

    upToDateWish: "Souhaitez-vous une mise aux normes complète ?",

    addWish: "Souhaitez-vous ajouter de nouveaux équipements électriques ?",

    budget: "Budget estimé",

    delay: "Délai souhaité",

    descriptions:
      "Description de l'installation actuelle",

    specifications:
      "Précisions sur les travaux souhaités",

    message:
      "Informations complémentaires",

    submit: "Envoyer",

    sendPictures: "Envoyer les photos"
  },
};
