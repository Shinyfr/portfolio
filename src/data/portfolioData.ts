import type { Community, Experience, NavItem, Stat } from "../types/portfolio";

export const navItems: NavItem[] = [
  { label: "Expérience", href: "#experience" },
  { label: "Communautés", href: "#communities" },
  { label: "Froggy's Land", href: "#froggys-land" }
];

export const stats: Stat[] = [
  { label: "Pseudo", value: "Shiny" },
  { label: "Username", value: "Shinyfr" },
  { label: "Spécialité", value: "Modération" },
  { label: "Serveur perso", value: "Froggy's Land" }
];

export const experiences: Experience[] = [
  {
    title: "Modération Discord",
    subtitle: "Communautés de grande ampleur",
    description:
      "Je modère des serveurs de grande ampleur. Mon rôle est d’aider à garder une ambiance saine et agréable pour les membres."
  },
  {
    title: "Modération de lives",
    subtitle: "Grands événements",
    description:
      "Lors de certains événements, je peux aussi intervenir sur les lives pour aider à garder le chat lisible, sécurisé et fluide."
  },
  {
    title: "Tutrice",
    subtitle: "Accompagnement et transmission",
    description:
      "Je suis également tutrice. J’aide, j’accompagne et je transmets des bonnes pratiques aux nouveaux modérateurs."
  }
];

export const communities: Community[] = [
  {
    name: "Inoxtag",
    badge: "Modératrice & Tutrice",
    description:
      "Je participe à la modération du serveur d’Inoxtag pour aider à maintenir une ambiance saine, claire et agréable pour la communauté.",
    href: "https://discord.gg/inoxtag",
    buttonLabel: "Rejoindre Inoxtag",
    buttonVariant: "primary"
  },
  {
    name: "Michou",
    badge: "Modératrice & Tutrice",
    description:
      "J’interviens aussi sur le serveur de Michou, avec la même volonté de garder un espace fluide, respectueux et bien encadré.",
    href: "https://discord.gg/wZW5wDrcCM",
    buttonLabel: "Rejoindre Michou",
    buttonVariant: "secondary"
  },
  {
    name: "La Vallée",
    badge: "Manager",
    description:
      "Sur la Vallée, je m'occupe de la gestion des équipes et de l'avancement du serveur.",
    href: "https://discord.gg/dU976Tb4Y3",
    buttonLabel: "Rejoindre La Vallée",
    buttonVariant: "primary"
  }
];