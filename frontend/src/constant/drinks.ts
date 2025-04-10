export type DrinkType = {
  name: string;
  link: string;
  cardIngredients: string;
  flavorText: string;
  relatedDrinks: DrinkType[];
};

export const drinks: { [key: string]: DrinkType } = {
  mootropolisMilkMunch: {
    name: 'Mootropolis Milk Munch',
    link: '/menu/drinks/Mootropolis Milk Munch.svg',
    cardIngredients:
      'Complicated Milk, Rum, Cognac, Lemon (Rind + Juice), Pandan',
    flavorText: 'Guaranteed to win on Netflix',
    relatedDrinks: [],
  },
  marksMezcalMakgeolli: {
    name: "Mark's Mezcal Makgeolli",
    link: "/menu/drinks/Mark's Mezcal Makgeolli.svg",
    cardIngredients: 'Mezcal, Dark Rum, Makgeolli, Bubbles, Some Filler Text',
    flavorText: 'My Travels in a Glass',
    relatedDrinks: [],
  },
  mangoMimosaMocktail: {
    name: 'Mango Mimosa Mocktail',
    link: '/menu/drinks/Mango Mimosa Mocktail.svg',
    cardIngredients: 'Mango, Ginger Beer,Dealcoholized White Wine',
    flavorText: 'You don’t need Drinks to Have fun, Ken',
    relatedDrinks: [],
  },
  lindIslandIcedTea: {
    name: 'Lind Island Iced Tea',
    link: '/menu/drinks/Lind Island Iced Tea.svg',
    cardIngredients: 'Lychee, Gin, Vodka, Rum, Triple Sec',
    flavorText: 'Guaranteed to get your mom drunk',
    relatedDrinks: [],
  },
  comeFlyWithMark: {
    name: 'Come Fly with Mark',
    link: '/menu/drinks/Come Fly with Mark.svg',
    cardIngredients: 'Cachaça, Chartreuse, Lime',
    flavorText: 'You can use some exotic booze',
    relatedDrinks: [],
  },
  darkAndZhangy: {
    name: 'Dark and Zhangy',
    link: '/menu/drinks/Dark and Zhangy.svg',
    cardIngredients: 'Spiced Rum, Ginger Beer',
    flavorText: 'Big, bold, and beautiful',
    relatedDrinks: [],
  },
  pizzaSour: {
    name: 'Pizza Sour',
    link: '/menu/drinks/Pizza Sour.svg',
    cardIngredients: 'Pisco, Egg White, Seasonal Fruit, Hibiscus',
    flavorText: 'Only served in the classiest of glasses',
    relatedDrinks: [],
  },
  jaisTwoFacedTea: {
    name: "Jai's Two Faced Tea",
    link: "/menu/drinks/Jai's Two Faced Tea.svg",
    cardIngredients: 'Soju, Elderflower, Hibiscus Tea, Bubbles',
    flavorText: 'I will never forget',
    relatedDrinks: [],
  },
  burbankBonkey: {
    name: 'Burbank Bonkey',
    link: '/menu/drinks/Burbank Bonkey.svg',
    cardIngredients: 'Ginger Beer, Hibiscus Tea, Pomegranate',
    flavorText: 'Bears, Beets, Burbank Bonkey',
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
