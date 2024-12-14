const languages = {
  ru: "Русский",
  en: "English",
} as const;

const defaultLang = "ru";

const ui = {
  en: {
    "nav.home": "Home",
    "nav.classes": "Classes",
    "meta.strength": "Strength",
    "meta.dexterity": "Dexterity",
    "meta.intelligence": "Intelligence",
    "meta.weapon": "Weapon",
    "meta.trait": "Trait",
    "class.ranger": "Ranger",
    "class.deadeye": "Deadeye",
    "class.pathfinder": "Pathfinder",
    "class.witch": "Witch",
    "class.blood-mage": "Blood Mage",
    "class.infernalist": "Infernalist",
  },
  ru: {
    "nav.home": "Главная",
    "nav.classes": "Классы",
    "meta.strength": "Сила",
    "meta.dexterity": "Ловкость",
    "meta.intelligence": "Интеллект",
    "meta.weapon": "Оружие",
    "meta.trait": "Трактовка",
    "class.ranger": "Охотница",
    "class.deadeye": "Снайпер",
    "class.pathfinder": "Следопыт",
    "class.witch": "Ведьма",
    "class.blood-mage": "Маг Крови",
    "class.infernalist": "Инферналист",
  },
} as const;

export { languages, defaultLang, ui };
