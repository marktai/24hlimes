let imageServer = 'https://dwet0u44zujs6.cloudfront.net/public';
if (
  typeof window !== 'undefined' &&
  window &&
  window.location &&
  window.location.hostname === 'localhost'
) {
  imageServer = '';
}

export type DrinkType = {
  name: string;
  link: string;
  cardIngredients: string;
  flavorText: string;
  fontStyle: string;
  relatedDrinks: CardInterface[];
  tags?: string[];
  flavorBody: string;
  ingredients: string[];
  preparationList: string[];
  about: string[];
};
export interface CardInterface {
  name: string;
  link: string;
  cardIngredients: string;
  flavorText: string;
  fontStyle: string;
  relatedDrinks: CardInterface[];
  tags?: string[];
  about: string[];
}

export const tags: { [key: string]: string } = {
  sweet: 'Sweet',
  sour: 'Sour',
  strong: 'Strong',
  mocktail: 'Mocktail',
  delicious: 'Delicious',
  markFavorite: 'Mark Favorite',
};

export const cards: { [key: string]: DrinkType | CardInterface } = {
  mootropolisMilkMunch: {
    name: 'Mootropolis Milk Munch',
    link: `${imageServer}/menu/drinks/Mootropolis Milk Munch.svg`,
    cardIngredients:
      'Complicated Milk, Rum, Cognac, Lemon (Rind + Juice), Pandan',
    flavorText: 'Guaranteed to win on Netflix',
    fontStyle: 'neatHandwritten',
    relatedDrinks: [],
    tags: [tags.sweet, tags.delicious, tags.markFavorite],
    flavorBody: 'Milk with a kick, rich oak notes with a bit of citrus',
    ingredients: ['1 oz water', '1 oz alcohol'],
    preparationList: [
      'Milk the cow',
      'Rummage for rum',
      'Catch the cognac',
      'Zest ze lemon',
      'Pick some pandan',
      'Drink',
    ],
    about: [
      'This idea has been a longstanding request from Winnie for pandan in a cocktail. As part of the Charity Casino Night, all of the cocktail names were "MMM" initials, so I threw in a reference to my board game Mootropolis since it\'s a milk derived drink.',
      'The flavor text of this drink "Guaranteed to win on Netflix" references the show Drink Masters on Netflix that I watched with Jai, where a milk punch always seemed to win the round. After making a milk punch myself to commemorate the finale, we understood why they always won.',
      'If you want to do 2-3 hours of preparation and overnight straining to make a delicious, fancy drink I highly recommend the Mootropolis Milk Munch!',
    ],
  },
  marksMezcalMakgeolli: {
    name: "Mark's Mezcal Makgeolli",
    link: `${imageServer}/menu/drinks/Mark's Mezcal Makgeolli.svg`,
    cardIngredients: 'Mezcal, Dark Rum, Makgeolli, Bubbles, Some Filler Text',
    flavorText: 'My travels in a glass',
    fontStyle: 'neatHandwritten',
    relatedDrinks: [],
    tags: [tags.strong, tags.delicious, tags.markFavorite],
    flavorBody: 'Milk with a kick, rich oak notes with a bit of citrus',
    ingredients: ['1 oz water', '1 oz alcohol'],
    preparationList: [
      'Milk the cow',
      'Rummage for rum',
      'Catch the cognac',
      'Zest ze lemon',
      'Pick some pandan',
      'Drink',
    ],
    about: [
      'This drink is by far my most creative drink. Mezcal is a smokier variant of tequila from Oaxaca, and makgeolli is a Korean rice wine with origins from 1000 BC. When combined, the graininess and sweetness of the makgeolli combine perfectly with the mezcal, resulting in a smooth and delightfully complex combo.',
      'I actually shared this recipe with the owners of Bar Soon in Seoul, and they were absolutely amazed! They told me they only had makgeolli when they were younger and wanted cheap, sweet alcohol. I picked up the cheapest makgeolli from a nearby convenience store, told them the ingredient ratios, and they loved it. A week later, they shared with me their version with whiskey and makgeolli.',
      "If you want a strong, complex drink that combines cultures from around the world, Mark's Mezcal Makgeolli is for you too.",
    ],
  },
  mangoMimosaMocktail: {
    name: 'Mango Mimosa Mocktail',
    link: `${imageServer}/menu/drinks/Mango Mimosa Mocktail.svg`,
    cardIngredients: 'Mango, Ginger Beer,Dealcoholized White Wine',
    flavorText: 'You don’t need drinks to have fun, Ken',
    fontStyle: 'neatHandwritten',
    relatedDrinks: [],
    tags: [tags.mocktail, tags.sweet, tags.delicious],
    flavorBody: 'Milk with a kick, rich oak notes with a bit of citrus',
    ingredients: ['1 oz water', '1 oz alcohol'],
    preparationList: [
      'Milk the cow',
      'Rummage for rum',
      'Catch the cognac',
      'Zest ze lemon',
      'Pick some pandan',
      'Drink',
    ],
    about: ['about'],
  },
  lindIslandIcedTea: {
    name: 'Lind Island Iced Tea',
    link: `${imageServer}/menu/drinks/Lind Island Iced Tea.svg`,
    cardIngredients: 'Lychee, Gin, Vodka, Rum, Triple Sec',
    flavorText: 'Guaranteed to get your mom drunk',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.strong, tags.sweet, tags.sour],
    flavorBody: 'Milk with a kick, rich oak notes with a bit of citrus',
    ingredients: ['1 oz water', '1 oz alcohol'],
    preparationList: [
      'Milk the cow',
      'Rummage for rum',
      'Catch the cognac',
      'Zest ze lemon',
      'Pick some pandan',
      'Drink',
    ],
    about: ['about'],
  },
  comeFlyWithMark: {
    name: 'Come Fly with Mark',
    link: `${imageServer}/menu/drinks/Come Fly with Mark.svg`,
    cardIngredients: 'Cachaça, Chartreuse, Lime',
    flavorText: 'You can use some exotic booze',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.sour, tags.sweet, tags.markFavorite],
    flavorBody: 'Milk with a kick, rich oak notes with a bit of citrus',
    ingredients: ['1 oz water', '1 oz alcohol'],
    preparationList: [
      'Milk the cow',
      'Rummage for rum',
      'Catch the cognac',
      'Zest ze lemon',
      'Pick some pandan',
      'Drink',
    ],
    about: ['about'],
  },
  darkAndZhangy: {
    name: 'Dark and Zhangy',
    link: `${imageServer}/menu/drinks/Dark and Zhangy.svg`,
    cardIngredients: 'Spiced Rum, Ginger Beer',
    flavorText: 'Big, bold, and beautiful',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.sour],
    flavorBody: 'Milk with a kick, rich oak notes with a bit of citrus',
    ingredients: ['1 oz water', '1 oz alcohol'],
    preparationList: [
      'Milk the cow',
      'Rummage for rum',
      'Catch the cognac',
      'Zest ze lemon',
      'Pick some pandan',
      'Drink',
    ],
    about: ['about'],
  },
  pizzaSour: {
    name: 'Pizza Sour',
    link: `${imageServer}/menu/drinks/Pizza Sour.svg`,
    cardIngredients: 'Pisco, Egg White, Seasonal Fruit, Hibiscus',
    flavorText: 'Only served in the classiest of glasses',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.strong, tags.sour, tags.markFavorite],
    flavorBody: 'Milk with a kick, rich oak notes with a bit of citrus',
    ingredients: ['1 oz water', '1 oz alcohol'],
    preparationList: [
      'Milk the cow',
      'Rummage for rum',
      'Catch the cognac',
      'Zest ze lemon',
      'Pick some pandan',
      'Drink',
    ],
    about: ['about'],
  },
  jaisTwoFacedTea: {
    name: "Jai's Two Faced Tea",
    link: `${imageServer}/menu/drinks/Jai's Two Faced Tea.svg`,
    cardIngredients: 'Soju, Elderflower, Hibiscus Tea, Bubbles',
    flavorText: 'I will never forget',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.sweet, tags.strong],
    flavorBody: 'Milk with a kick, rich oak notes with a bit of citrus',
    ingredients: ['1 oz water', '1 oz alcohol'],
    preparationList: [
      'Milk the cow',
      'Rummage for rum',
      'Catch the cognac',
      'Zest ze lemon',
      'Pick some pandan',
      'Drink',
    ],
    about: ['about'],
  },
  burbankBonkey: {
    name: 'Burbank Bonkey',
    link: `${imageServer}/menu/drinks/Burbank Bonkey.svg`,
    cardIngredients: 'Ginger Beer, Hibiscus Tea, Pomegranate',
    flavorText: 'Bears, Beets, Burbank Bonkey',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.mocktail, tags.sweet, tags.sour, tags.delicious],
    flavorBody: 'Milk with a kick, rich oak notes with a bit of citrus',
    ingredients: ['1 oz water', '1 oz alcohol'],
    preparationList: [
      'Milk the cow',
      'Rummage for rum',
      'Catch the cognac',
      'Zest ze lemon',
      'Pick some pandan',
      'Drink',
    ],
    about: ['about'],
  },
  sweet: {
    name: 'Sweet',
    link: `${imageServer}/menu/modifiers/Sweet.svg`,
    cardIngredients: 'Sugar',
    flavorText: 'Sweet, sweet calories',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: ['about', 'this', 'modifier'],
  },
  sour: {
    name: 'Sour',
    link: `${imageServer}/menu/modifiers/Sour.svg`,
    cardIngredients: 'Limes / Lemon / Citrus',
    flavorText: 'Refreshing! - Alan',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: ['about'],
  },
  strong: {
    name: 'Strong',
    link: `${imageServer}/menu/modifiers/Strong.svg`,
    cardIngredients: 'More Alcohol',
    flavorText: 'Faster fun',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: ['about'],
  },
  sugarFree: {
    name: 'Sugar Free',
    link: `${imageServer}/menu/modifiers/Sugar Free.svg`,
    cardIngredients: 'Sugar alternative (best attempt)',
    flavorText: 'Marginally guilt-free',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: ['about'],
  },
  light: {
    name: 'Light',
    link: `${imageServer}/menu/modifiers/Light.svg`,
    cardIngredients: 'Less alcohol',
    flavorText: 'Marginally guilt-free',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: ['about'],
  },
  markTwist: {
    name: 'Mark Twist',
    link: `${imageServer}/menu/modifiers/Mark Twist.svg`,
    cardIngredients: 'Whatever I feel like',
    flavorText: 'Colloquially known as a Marktail',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: ['about'],
  },
  spicy: {
    name: 'Spicy',
    link: `${imageServer}/menu/modifiers/Spicy.svg`,
    cardIngredients: 'Jalapeño infused liquor',
    flavorText: 'Mild, medium, or S P I C Y',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: ['about'],
  },
  alcoholFree: {
    name: 'Alcohol Free',
    link: `${imageServer}/menu/modifiers/Alcohol Free.svg`,
    cardIngredients: 'May include alcohol removed wine',
    flavorText: 'Just the tasty ingredients',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: ['about'],
  },
  dummy: {
    name: 'Dummy',
    link: `${imageServer}/menu/drinks/Mootropolis Milk Munch.svg`,
    cardIngredients: 'Dummy, dummy, dummy, dummy',
    flavorText: 'This is a dummy good drink',
    fontStyle: 'neatHandwritten',
    relatedDrinks: [],
    tags: [tags.sweet, tags.delicious, tags.markFavorite],
    flavorBody: 'Dummy',
    ingredients: ['dummy\n\ndummy'],
    preparationList: ['Dummy', 'Dummy', 'Dummy', 'Dummy', 'Dummy', 'Drink'],
    about: ['dummy'],
  },
};

cards.mootropolisMilkMunch.relatedDrinks = [
  cards.pizzaSour,
  cards.comeFlyWithMark,
  cards.lindIslandIcedTea,
  cards.jaisTwoFacedTea,
];

cards.marksMezcalMakgeolli.relatedDrinks = [
  cards.pizzaSour,
  cards.darkAndZhangy,
  cards.jaisTwoFacedTea,
  cards.comeFlyWithMark,
];

cards.mangoMimosaMocktail.relatedDrinks = [
  cards.burbankBonkey,
  cards.mootropolisMilkMunch,
  cards.jaisTwoFacedTea,
  cards.comeFlyWithMark,
];

cards.lindIslandIcedTea.relatedDrinks = [
  cards.burbankBonkey,
  cards.darkAndZhangy,
  cards.jaisTwoFacedTea,
  cards.comeFlyWithMark,
];

cards.comeFlyWithMark.relatedDrinks = [
  cards.marksMezcalMakgeolli,
  cards.pizzaSour,
  cards.mootropolisMilkMunch,
  cards.lindIslandIcedTea,
];

cards.darkAndZhangy.relatedDrinks = [
  cards.marksMezcalMakgeolli,
  cards.lindIslandIcedTea,
  cards.comeFlyWithMark,
  cards.pizzaSour,
];

cards.pizzaSour.relatedDrinks = [
  cards.marksMezcalMakgeolli,
  cards.mootropolisMilkMunch,
  cards.darkAndZhangy,
  cards.comeFlyWithMark,
];

cards.jaisTwoFacedTea.relatedDrinks = [
  cards.burbankBonkey,
  cards.lindIslandIcedTea,
  cards.comeFlyWithMark,
  cards.mootropolisMilkMunch,
];

cards.burbankBonkey.relatedDrinks = [
  cards.mangoMimosaMocktail,
  cards.jaisTwoFacedTea,
  cards.mootropolisMilkMunch,
  cards.lindIslandIcedTea,
];

cards.sweet.relatedDrinks = [
  cards.mootropolisMilkMunch,
  cards.burbankBonkey,
  cards.jaisTwoFacedTea,
  cards.comeFlyWithMark,
];

cards.sour.relatedDrinks = [
  cards.burbankBonkey,
  cards.comeFlyWithMark,
  cards.darkAndZhangy,
  cards.jaisTwoFacedTea,
];

cards.strong.relatedDrinks = [
  cards.marksMezcalMakgeolli,
  cards.pizzaSour,
  cards.lindIslandIcedTea,
  cards.comeFlyWithMark,
];

cards.sugarFree.relatedDrinks = [
  cards.comeFlyWithMark,
  cards.jaisTwoFacedTea,
  cards.lindIslandIcedTea,
  cards.darkAndZhangy,
];

cards.light.relatedDrinks = [
  cards.burbankBonkey,
  cards.jaisTwoFacedTea,
  cards.darkAndZhangy,
  cards.comeFlyWithMark,
];

cards.markTwist.relatedDrinks = [
  cards.pizzaSour,
  cards.comeFlyWithMark,
  cards.lindIslandIcedTea,
  cards.jaisTwoFacedTea,
];

cards.spicy.relatedDrinks = [
  cards.pizzaSour,
  cards.marksMezcalMakgeolli,
  cards.darkAndZhangy,
  cards.burbankBonkey,
];

cards.alcoholFree.relatedDrinks = [
  cards.burbankBonkey,
  cards.jaisTwoFacedTea,
  cards.darkAndZhangy,
  cards.comeFlyWithMark,
];

export const charityCasinoNightDrinks = [
  cards.mootropolisMilkMunch,
  cards.marksMezcalMakgeolli,
  cards.mangoMimosaMocktail,
];

export const speakeasyNightDrinks = [
  cards.lindIslandIcedTea,
  cards.comeFlyWithMark,
  cards.darkAndZhangy,
  cards.pizzaSour,
  cards.jaisTwoFacedTea,
  cards.burbankBonkey,
];

export const modifiers = [
  cards.sweet,
  cards.sour,
  cards.spicy,
  cards.sugarFree,
  cards.strong,
  cards.light,
  cards.alcoholFree,
  cards.markTwist,
];
