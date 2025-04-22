let imageServer = 'https://dwet0u44zujs6.cloudfront.net/public';

const env = process.env.NODE_ENV;
if (env === 'development') {
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
  spiced: 'Spiced',
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
    ingredients: [
      '10 lemons',
      '2 tablespoons sugar',
      '8 cups whole milk',
      '1.75 cups simple syrup',
      '2 cups cognac',
      '4 cups rum',
      'Pandan extract',
    ],
    preparationList: [
      'Milk the cow',
      'Rummage for rum',
      'Catch the cognac',
      'Zest ze lemon',
      'Pick some pandan',
    ],
    about: [
      'This idea has been a longstanding request from Winnie for pandan in a cocktail. As part of the [Charity Casino Night](https://casino.marktai.com), all of the cocktail names were "MMM" initials, so I threw in a reference to my board game Mootropolis since it\'s a milk derived drink.',
      'The flavor text of this drink "Guaranteed to win on Netflix" references the show Drink Masters on Netflix that I watched with Jai, where a milk punch always seemed to win the round. After making a milk punch myself to commemorate the finale, we understood why they always won.',
      'If you want to do 2-4 hours of preparation and overnight straining to make a delicious, fancy drink I highly recommend the Mootropolis Milk Munch!',
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
    flavorBody: 'Smoky, slightly sweet, satisfying',
    ingredients: [
      '1 oz mezcal (400 Conejos Reposado)',
      '.5 oz dark rum (Diplomatico)',
      '10 oz makgeolli (preferably cheap and carbonated)',
      '1 lime squeezed',
      '3 drops bitters',
      'Simple syrup to taste',
    ],
    preparationList: [
      'Mix mezcal, makgeolli, lime juice, and ice',
      'Add dark rum / more makgeolli / syrup to taste',
      'Lightly rim the glass with lime juice for aromatics',
      'Top with bitters',
    ],
    about: [
      'This drink is by far my most creative drink. Mezcal is a smokier variant of tequila from Oaxaca, and makgeolli is a Korean rice wine with origins from 100 BC. When combined, the graininess and sweetness of the makgeolli combine perfectly with the mezcal, resulting in a smooth and delightfully complex combo.',
      'I actually shared this recipe with 소영 and 상현, the owners of [Bar Soon](https://maps.app.goo.gl/K3TtB9v47XgNc1Ls7) in Seoul, and they were absolutely amazed! They told me they only drank makgeolli when they were younger and wanted cheap, sweet alcohol. I picked up the cheapest makgeolli from a nearby convenience store, told them the ingredient ratios, and they loved it. A week later, they shared with me their version with whiskey and makgeolli.',
      'When designing the card for this drink, I put in "Some Filler Text" to fill out the description, but then completely forgot to fix it! Only one person commented on it the entire night, so I left it in as a fun Easter egg, since it didn\'t seem like people noticed.',
      "If you want a strong, complex drink that combines cultures from around the world, Mark's Mezcal Makgeolli is for you too.",
    ],
  },
  mangoMimosaMocktail: {
    name: 'Mango Mimosa Mocktail',
    link: `${imageServer}/menu/drinks/Mango Mimosa Mocktail.svg`,
    cardIngredients: 'Mango, Ginger Beer, Dealcoholized White Wine',
    flavorText: 'You don’t need drinks to have fun, Ken',
    fontStyle: 'neatHandwritten',
    relatedDrinks: [],
    tags: [tags.mocktail, tags.sweet, tags.delicious],
    flavorBody: 'Fruity sweet with a bit of sour and bitter',
    ingredients: [
      'Mangos (or other seasonal fruit)',
      'Ginger beer',
      'Lime',
      'Mocktail tincture',
      'Optional dealcoholized wine',
    ],
    preparationList: [
      'Figure out what the customer wants',
      'Make up something on the spot',
      'Adjust to preferences',
      'Everyone gets to have fun',
    ],
    about: [
      'Once upon a time, junior high school Mark used to make smoothies for friends after we all went biking around. This mocktail is the 15 year evolution, made a bit fancier.',
      'Surprisingly, I think mocktails are much more difficult than cocktails. People have start with very low expectations of cocktails because they accept that alcohol does not taste good. However, with mocktails, people compare them to delicious juice, sodas, etc. To address this, I like to use and showcase a more unique ingredient, such as the mocktail tinctures you can find at alcohol stores, dealcoholized wine, a homemade hibiscus tea, or a homemade ginger beer.',
      'Mocktails are actually very trendy with bars and Gen Z, so 24hlimes is part of the new wave!',
    ],
  },
  lindIslandIcedTea: {
    name: 'Lind Island Iced Tea',
    link: `${imageServer}/menu/drinks/Lind Island Iced Tea.svg`,
    cardIngredients: 'Lychee, Gin, Vodka, Rum, Triple Sec',
    flavorText: 'Guaranteed to get your mom drunk',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.strong, tags.sweet, tags.sour],
    flavorBody:
      'Ideally should taste like soda, with a strong smell of alcohol',
    ingredients: [
      '.38 oz lychee liquor (Soho)',
      ".75 oz gin (Hendrick's)",
      '.75 oz vodka (Costco French)',
      '.75 oz rum (Bacardi)',
      '.75 oz triple sec',
      'optional .75 oz tequila (Costco blanco)',
      '.75 oz freshly squeezed lemon juice',
      '.75 oz simple syrup (equal water + sugar by volume)',
      'Ginger beer (Fever Tree)',
    ],
    preparationList: [
      'Mix ingredients',
      'Add ginger beer to taste',
      'Lightly rim the glass with lemon juice for aromatics',
      'Drink carefully',
    ],
    about: [
      'This was one of my first cocktails, when I used to prepare the punch bowl for Tau Beta Pi quarterly retreats. For the longest time, this used to be my most creative cocktail since I always needed to adapt it to the ingredients we had, the people enjoying it, and how late into the night it was.',
      '"Lind Island Iced Tea" refers to my mom, Linda Tai. This is her go to drink right before dinner so she can minimize the calories for drinking.',
    ],
  },
  comeFlyWithMark: {
    name: 'Come Fly with Mark',
    link: `${imageServer}/menu/drinks/Come Fly with Mark.svg`,
    cardIngredients: 'Cachaça, Chartreuse, Lime',
    flavorText: 'You can use some exotic booze',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.sour, tags.sweet, tags.markFavorite],
    flavorBody: 'Exotic, sour, refreshing',
    ingredients: [
      '3 oz cachaça, room temperature (Leblon)',
      '1 oz yellow Chartreuse',
      '1 lime',
      '4 tsp sugar',
    ],
    preparationList: [
      'Roll, cut, and squeeze lime into cup',
      'Add in sugar and cachaça',
      'Thoroughly muddle lime rind in cup',
      'Remove lime rind',
      'Top off with ice',
      'Stir vigorously (15 seconds)',
    ],
    about: [
      "This is my take on the Caipirinha, the national cocktail of Brazil. I've chosen yellow Chartreuse to add complexity while still maintaining the original identity of the cocktail.",
      'The name "Come Fly with Mark" references the song "[Come Fly with Me](https://www.marktai.com/download/music/Come_Fly_With_Me.pdf)", famously sung by Frank Sinatra (and less famously sung by Mark Tai), and one lyric "If you can use some exotic booze." ',
      'This cocktail is the easiest to make sugar free, as there is no simple syrup.',
    ],
  },
  darkAndZhangy: {
    name: 'Dark and Zhangy',
    link: `${imageServer}/menu/drinks/Dark and Zhangy.svg`,
    cardIngredients: 'Spiced Rum, Ginger Beer',
    flavorText: 'Big, bold, and beautiful',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.sour, tags.spiced],
    flavorBody: 'Ginger and other spices distract you from the alcohol',
    ingredients: ['3 oz spiced rum (Kraken)', '1 lime', 'Ginger beer'],
    preparationList: ['Mix ingredients', 'Add ginger beer to taste'],
    about: [
      "This is Nathan Zhang's favorite cocktail, and it's executed simply here.",
      'If I have the time and effort, I add a personal twist to this by making a homemade ginger beer that I infuse with seasonal fruit. However, this is extremely time intensive and inconsistent due to the fermentation process. But when made properly, a homemade strawberry ginger beer is delicious without adding any excessive sweetness!',
    ],
  },
  pizzaSour: {
    name: 'Pizza Sour',
    link: `${imageServer}/menu/drinks/Pizza Sour.svg`,
    cardIngredients: 'Pisco, Egg White, Seasonal Fruit, Hibiscus',
    flavorText: 'Only served in the classiest of glasses',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.strong, tags.sour, tags.markFavorite],
    flavorBody: 'When executed properly, tastes like nothing',
    ingredients: [
      '2-3 oz pisco',
      '1 oz lime juice',
      '.75 oz syrup (seasonal fruit infused)',
      '1 egg white',
      'Bitters',
      'Ground dried hibiscus',
    ],
    preparationList: [
      'Mix pisco, lime juice, syrup, egg white, and 6 drops of bitters to a cobbler shaker',
      'Vigorously shake for 15 seconds',
      'Add plenty of ice',
      'Vigorously shake for 30 seconds',
      'Pour into a Costco tiramisu glass',
      'Gently top with ground hibiscus',
      'Lightly rim the glass with lime juice for aromatics',
      'Add 3 drops of bitters over hibiscus as pepperoni',
    ],
    about: [
      "One of my favorite Covid projects, the Pizza Sour is my take on the famous Peruvian cocktail Pisco Sour. I actually learned how to make this drink on a virtual Airbnb experience with my coworkers, but I've now had a hundred pisco sours in Lima. The Pizza Sour is specifically based on the Pizza Sour Catedral, by adding the bitters before shaking as well as after.",
      "As the first drink shown on this website, I think this is the most polished drink I've made, where I specifically made a 60 degree tool to grate the hibiscus over for the pizza slice cutout effect.",
      'To my surprise, I found out that Pisco is a very San Francisco ingredient, with bartenders even asking if I am from SF just when I order a drink with Pisco.',
      "Before Mark's Mezcal Makgeolli, this was my signature drink, but I have now moved on to more complicated drinks.",
    ],
  },
  jaisTwoFacedTea: {
    name: "Jai's Two Faced Tea",
    link: `${imageServer}/menu/drinks/Jai's Two Faced Tea.svg`,
    cardIngredients: 'Soju, Elderflower, Hibiscus Tea, Bubbles',
    flavorText: 'I will never forget',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.sweet, tags.strong],
    flavorBody: 'A flexible drink that can be personalized to your palette!',
    ingredients: [
      'Soju (Chum Churum rich)',
      'Elderflower liquor (St. Germain)',
      '1 lemon',
      'Champagne / Trooly / Soda',
      'Syrup',
      'Hibiscus tea',
    ],
    preparationList: [
      'Assess sweet/sour/strong preference',
      'Mix ingredients',
      'Adjust to taste',
    ],
    about: [
      "This is the most flexible drink on my menu where the sweetness, sourness, or strength of the cocktail can be easily adjusted to the customer's palette. The hibiscus tea can be very sour though, so use with caution.",
      "Jai's Two Faced Tea references the show \"Selling Sunset\", where Christine makes the Chrishell's Two Faced Tonic. Jai did the unspeakable act of breaking our apartment's 4 weekend travel streak by going to Hawaii with his brother, and I created this drink when playing board games with his coworkers while he was gone.",
    ],
  },
  burbankBonkey: {
    name: 'Burbank Bonkey',
    link: `${imageServer}/menu/drinks/Burbank Bonkey.svg`,
    cardIngredients: 'Ginger Beer, Hibiscus Tea, Pomegranate',
    flavorText: 'Bears, Beets, Burbank Bonkey',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    tags: [tags.mocktail, tags.sweet, tags.sour, tags.delicious],
    flavorBody: 'Sour with a bit of sweetness',
    ingredients: [
      '1 key lime',
      '1.5 oz hibiscus tea',
      '.38 oz pomegranate syrup',
      'Optional .38 oz dealcoholized white wine',
      '5 oz ginger beer',
    ],
    preparationList: [
      'Add ginger beer, lime juice, and clear ice to glass',
      'Carefully layer syrup on top',
      'Carefully layer hibiscus tea on top',
      'Lightly rim the glass with lime juice for aromatics',
    ],
    about: [
      'The Burbank Bonkey is my first mocktail I added to my menu, and I really put a lot of effort into the presentation to make it feel special. Some considerations include the layering, the color palette, and the homemade clear ice.',
      "I personally love this drink as is, but if you're looking for alcohol, you can add 1.5 oz of vodka to make it a Moscow Mule.",
    ],
  },
  sweet: {
    name: 'Sweet',
    link: `${imageServer}/menu/modifiers/Sweet.svg`,
    cardIngredients: 'Sugar',
    flavorText: 'Sweet, sweet calories',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: [
      "This used to be what my drinks were known for, but I've since branched out. There is nothing wrong with liking a sweet drink though!",
    ],
  },
  sour: {
    name: 'Sour',
    link: `${imageServer}/menu/modifiers/Sour.svg`,
    cardIngredients: 'Limes / Lemon / Citrus',
    flavorText: 'Refreshing! - Alan',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: [
      'Nowadays, this is the main flavor in my menus, and even the bar is named after this.',
    ],
  },
  strong: {
    name: 'Strong',
    link: `${imageServer}/menu/modifiers/Strong.svg`,
    cardIngredients: 'More Alcohol',
    flavorText: 'Faster fun',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: [
      'An open secret of 24hlimes cocktails is that you can hide a lot of alcohol in drinks if you balance it well. I always let my friends know how much to expect in terms of equivalent shots of alcohol.',
    ],
  },
  sugarFree: {
    name: 'Sugar Free',
    link: `${imageServer}/menu/modifiers/Sugar Free.svg`,
    cardIngredients: 'Sugar alternative (best attempt)',
    flavorText: 'Marginally guilt-free',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: [
      'This can mean either imitation sugar such as monkfruit sugar, or a completely different cocktail that avoids sweetness at all such as a mezcal soda.',
    ],
  },
  light: {
    name: 'Light',
    link: `${imageServer}/menu/modifiers/Light.svg`,
    cardIngredients: 'Less alcohol',
    flavorText: 'Marginally guilt-free',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: [
      'Cocktails can taste even more delicious with less alcohol! Some drinks need their alcohols for their flavors though, so this can be situational.',
    ],
  },
  markTwist: {
    name: 'Mark Twist',
    link: `${imageServer}/menu/modifiers/Mark Twist.svg`,
    cardIngredients: 'Whatever I feel like',
    flavorText: 'Colloquially known as a Marktail',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: [
      'Even though I made the menu, there is almost always something I can do to make the drink a little more exciting or specially tailored to you. If you know you want something different, but are not sure what, feel free to add this modifier!',
    ],
  },
  spicy: {
    name: 'Spicy',
    link: `${imageServer}/menu/modifiers/Spicy.svg`,
    cardIngredients: 'Jalapeño infused liquor',
    flavorText: 'Mild, medium, or S P I C Y',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: [
      "One of my favorite ingredients to mix with is a jalapeño spiced Hendrick's, which can really add a lot of identity to a cocktail.",
      'However, I always seem to get some of the jalapeño juice on my fingers and my contacts burn my eyes the next morning.',
    ],
  },
  alcoholFree: {
    name: 'Alcohol Free',
    link: `${imageServer}/menu/modifiers/Alcohol Free.svg`,
    cardIngredients: 'May include alcohol removed wine',
    flavorText: 'Just the tasty ingredients',
    fontStyle: 'funSerif',
    relatedDrinks: [],
    about: [
      'I try to make my cocktail menu as inclusive as possible, so feel free to ask for a mocktail version of any of my drinks! Some drinks need their alcohols for their flavors though, so this can be situational.',
    ],
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
  cards.marksMezcalMakgeolli,
  cards.mootropolisMilkMunch,
  cards.mangoMimosaMocktail,
];

export const speakeasyNightDrinks = [
  cards.pizzaSour,
  cards.comeFlyWithMark,
  cards.jaisTwoFacedTea,
  cards.darkAndZhangy,
  cards.lindIslandIcedTea,
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

export const tagsToModifier = {
  [tags.sweet]: cards.sweet,
  [tags.sour]: cards.sour,
  [tags.strong]: cards.strong,
  [tags.spiced]: cards.spicy,
  [tags.mocktail]: cards.alcoholFree,
  [tags.delicious]: cards.sweet,
  [tags.markFavorite]: cards.markTwist,
};
