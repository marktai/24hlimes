export type DrinkType = {
  name: string;
  link: string;
  cardIngredients: string;
  flavorText: string;
  fontStyle: string;
  relatedDrinks: DrinkType[];
};

export const drinks: { [key: string]: DrinkType } = {
  mootropolisMilkMunch: {
    name: 'Mootropolis Milk Munch',
    link: '/menu/drinks/Mootropolis Milk Munch.svg',
    cardIngredients:
      'Complicated Milk, Rum, Cognac, Lemon (Rind + Juice), Pandan',
    flavorText: 'Guaranteed to win on Netflix',
    fontStyle: 'neatHandwritten',
    relatedDrinks: [],
  },
  marksMezcalMakgeolli: {
    name: "Mark's Mezcal Makgeolli",
    link: "/menu/drinks/Mark's Mezcal Makgeolli.svg",
    cardIngredients: 'Mezcal, Dark Rum, Makgeolli, Bubbles, Some Filler Text',
    flavorText: 'My Travels in a Glass',
    fontStyle: 'neatHandwritten',
    relatedDrinks: [],
  },
  mangoMimosaMocktail: {
    name: 'Mango Mimosa Mocktail',
    link: '/menu/drinks/Mango Mimosa Mocktail.svg',
    cardIngredients: 'Mango, Ginger Beer,Dealcoholized White Wine',
    flavorText: 'You don’t need Drinks to Have fun, Ken',
    fontStyle: 'neatHandwritten',
    relatedDrinks: [],
  },
  lindIslandIcedTea: {
    name: 'Lind Island Iced Tea',
    link: '/menu/drinks/Lind Island Iced Tea.svg',
    cardIngredients: 'Lychee, Gin, Vodka, Rum, Triple Sec',
    flavorText: 'Guaranteed to get your mom drunk',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  comeFlyWithMark: {
    name: 'Come Fly with Mark',
    link: '/menu/drinks/Come Fly with Mark.svg',
    cardIngredients: 'Cachaça, Chartreuse, Lime',
    flavorText: 'You can use some exotic booze',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  darkAndZhangy: {
    name: 'Dark and Zhangy',
    link: '/menu/drinks/Dark and Zhangy.svg',
    cardIngredients: 'Spiced Rum, Ginger Beer',
    flavorText: 'Big, bold, and beautiful',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  pizzaSour: {
    name: 'Pizza Sour',
    link: '/menu/drinks/Pizza Sour.svg',
    cardIngredients: 'Pisco, Egg White, Seasonal Fruit, Hibiscus',
    flavorText: 'Only served in the classiest of glasses',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  jaisTwoFacedTea: {
    name: "Jai's Two Faced Tea",
    link: "/menu/drinks/Jai's Two Faced Tea.svg",
    cardIngredients: 'Soju, Elderflower, Hibiscus Tea, Bubbles',
    flavorText: 'I will never forget',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  burbankBonkey: {
    name: 'Burbank Bonkey',
    link: '/menu/drinks/Burbank Bonkey.svg',
    cardIngredients: 'Ginger Beer, Hibiscus Tea, Pomegranate',
    flavorText: 'Bears, Beets, Burbank Bonkey',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  sweet: {
    name: 'Sweet',
    link: '/menu/modifiers/Sweet_modifier.svg',
    cardIngredients: 'Sugar',
    flavorText: 'Sweet, sweet calories',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  sour: {
    name: 'Sour',
    link: '/menu/modifiers/Sour_modifier.svg',
    cardIngredients: 'Limes / Lemon / Citrus',
    flavorText: 'Refreshing! - Alan',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  strong: {
    name: 'Strong',
    link: '/menu/modifiers/Strong_modifier.svg',
    cardIngredients: 'More Alcohol',
    flavorText: 'Just the way I like it',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  sugarFree: {
    name: 'Sugar Free',
    link: '/menu/modifiers/Sugar Free_modifier.svg',
    cardIngredients: 'Sugar alternative (best attempt)',
    flavorText: 'Marginally guilt-free',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  light: {
    name: 'Light',
    link: '/menu/modifiers/Light_modifier.svg',
    cardIngredients: 'Less alcohol',
    flavorText: 'Marginally guilt-free',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  markTwist: {
    name: 'Mark Twist',
    link: '/menu/modifiers/Mark Twist_modifier.svg',
    cardIngredients: 'Whatever I feel like',
    flavorText: 'Colloquially known as a Marktail',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  spicy: {
    name: 'Spicy',
    link: '/menu/modifiers/Spicy_modifier.svg',
    cardIngredients: 'Jalapeño infused liquor',
    flavorText: 'Mild, medium, or S P I C Y',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  alcoholFree: {
    name: 'Alcohol Free',
    link: '/menu/modifiers/Alcohol Free_modifier.svg',
    cardIngredients: 'May include alcohol removed wine',
    flavorText: 'Just the tasty ingredients',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
  null: {
    name: 'null',
    link: '/menu/modifiers/Alcohol Free_modifier.svg',
    cardIngredients: 'May include alcohol removed wine',
    flavorText: 'Just the tasty ingredients',
    fontStyle: 'funSerif',
    relatedDrinks: [],
  },
};

drinks.mootropolisMilkMunch.relatedDrinks = [
  drinks.pizzaSour,
  drinks.comeFlyWithMark,
  drinks.lindIslandIcedTea,
  drinks.jaisTwoFacedTea,
];

drinks.marksMezcalMakgeolli.relatedDrinks = [
  drinks.pizzaSour,
  drinks.darkAndZhangy,
  drinks.jaisTwoFacedTea,
  drinks.comeFlyWithMark,
];

drinks.mangoMimosaMocktail.relatedDrinks = [
  drinks.burbankBonkey,
  drinks.mootropolisMilkMunch,
  drinks.jaisTwoFacedTea,
  drinks.comeFlyWithMark,
];

drinks.lindIslandIcedTea.relatedDrinks = [
  drinks.burbankBonkey,
  drinks.darkAndZhangy,
  drinks.jaisTwoFacedTea,
  drinks.comeFlyWithMark,
];

drinks.comeFlyWithMark.relatedDrinks = [
  drinks.marksMezcalMakgeolli,
  drinks.pizzaSour,
  drinks.mootropolisMilkMunch,
  drinks.lindIslandIcedTea,
];

drinks.darkAndZhangy.relatedDrinks = [
  drinks.marksMezcalMakgeolli,
  drinks.lindIslandIcedTea,
  drinks.comeFlyWithMark,
  drinks.pizzaSour,
];

drinks.pizzaSour.relatedDrinks = [
  drinks.marksMezcalMakgeolli,
  drinks.mootropolisMilkMunch,
  drinks.darkAndZhangy,
  drinks.comeFlyWithMark,
];

drinks.jaisTwoFacedTea.relatedDrinks = [
  drinks.burbankBonkey,
  drinks.lindIslandIcedTea,
  drinks.comeFlyWithMark,
  drinks.mootropolisMilkMunch,
];

drinks.burbankBonkey.relatedDrinks = [
  drinks.mangoMimosaMocktail,
  drinks.jaisTwoFacedTea,
  drinks.mootropolisMilkMunch,
  drinks.lindIslandIcedTea,
];

drinks.sweet.relatedDrinks = [
  drinks.mootropolisMilkMunch,
  drinks.burbankBonkey,
  drinks.jaisTwoFacedTea,
  drinks.comeFlyWithMark,
];

drinks.sour.relatedDrinks = [
  drinks.burbankBonkey,
  drinks.comeFlyWithMark,
  drinks.darkAndZhangy,
  drinks.jaisTwoFacedTea,
];

drinks.strong.relatedDrinks = [
  drinks.marksMezcalMakgeolli,
  drinks.pizzaSour,
  drinks.lindIslandIcedTea,
  drinks.comeFlyWithMark,
];

drinks.sugarFree.relatedDrinks = [
  drinks.comeFlyWithMark,
  drinks.jaisTwoFacedTea,
  drinks.lindIslandIcedTea,
  drinks.darkAndZhangy,
];

drinks.light.relatedDrinks = [
  drinks.burbankBonkey,
  drinks.jaisTwoFacedTea,
  drinks.darkAndZhangy,
  drinks.comeFlyWithMark,
];

drinks.markTwist.relatedDrinks = [
  drinks.pizzaSour,
  drinks.comeFlyWithMark,
  drinks.lindIslandIcedTea,
  drinks.jaisTwoFacedTea,
];

drinks.spicy.relatedDrinks = [
  drinks.pizzaSour,
  drinks.marksMezcalMakgeolli,
  drinks.darkAndZhangy,
  drinks.burbankBonkey,
];

drinks.alcoholFree.relatedDrinks = [
  drinks.burbankBonkey,
  drinks.jaisTwoFacedTea,
  drinks.darkAndZhangy,
  drinks.comeFlyWithMark,
];

export const charityCasinoNightDrinks = [
  drinks.mootropolisMilkMunch,
  drinks.marksMezcalMakgeolli,
  drinks.mangoMimosaMocktail,
];

export const speakeasyNightDrinks = [
  drinks.lindIslandIcedTea,
  drinks.comeFlyWithMark,
  drinks.darkAndZhangy,
  drinks.pizzaSour,
  drinks.jaisTwoFacedTea,
  drinks.burbankBonkey,
];

export const modifiers = [
  drinks.sweet,
  drinks.sour,
  drinks.sugarFree,
  drinks.strong,
  drinks.light,
  drinks.markTwist,
  drinks.spicy,
  drinks.alcoholFree,
];
