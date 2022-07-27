let tags = 
[
    //Card terminality
    "cantrip",
    "terminal",
    "conditionalTerminal",

    //Resource bonus
    "drawer",
    "drawToX",
    "virtualCoin",
    "plusBuy",

    "discarder",

    //Card categories
    "village",
    "peddler",
    "throneRoom",
    "remodel",
    "bridge",
    "workshop",
    "warehouse",
    "gainer",
    "trasher",
    "sifter",
    "digger",
    "defender",
    "vanilla",
    "topDecker",
    "extraTurn",
    "altvp",
    "choice",
    "inspector",
    "gainFromTrash",
    "trashFromSupply",

    //Exchange
    "discardForBenefit",
    "trashForBenefit",

    //Attack variants
    "curserAttack",
    "otherJunkerAttack",
    "handSizeAttack",
    "trashingAttack",
    "deckOrderAttack",
    "deckInspectionAttack",
    "turnWorseningAttack",

    //Other
    "oneshot",
    "splitPile",
    "nonAttackerAttack",
    "positiveInteraction",

    //"useCurses"
];

let expansions = 
{
    base: {secondEd: true},
};

let cards = 
{
    /*
    : {cost: , set: "", types: [""], tags: [""]},
    */

    /*** 
     * BASE (BASE)
     ***/
    Cellar:         {cost: 2,   set: "baseBase",    types: ["action"],              tags: ["sifter", "discarder"]},
    Chapel:         {cost: 2,   set: "baseBase",    types: ["action"],              tags: ["terminal", "trasher"]},
    Moat:           {cost: 2,   set: "baseBase",    types: ["action", "reaction"],  tags: ["terminal", "drawer", "defender"]},
    Village:        {cost: 3,   set: "baseBase",    types: ["action"],              tags: ["cantrip", "village", "vanilla"]},
    Workshop:       {cost: 3,   set: "baseBase",    types: ["action"],              tags: ["terminal", "workshop", "gainer"]},
    Bureaucrat:     {cost: 4,   set: "baseBase",    types: ["action", "attack"],    tags: ["terminal", "gainer", "handSizeAttack", "turnWorseningAttack"]},
    Gardens:        {cost: 4,   set: "baseBase",    types: ["victory"],             tags: ["altvp"]},
    Militia:        {cost: 4,   set: "baseBase",    types: ["action", "attack"],    tags: ["terminal", "virtualCoin", "handSizeAttack"]},
    Moneylender:    {cost: 4,   set: "baseBase",    types: ["action"],              tags: ["terminal", "virtualCoin", "trashForBenefit"]},
    Remodel:        {cost: 4,   set: "baseBase",    types: ["action"],              tags: ["terminal", "remodel", "trasher", "trashForBenefit"]},
    Smithy:         {cost: 4,   set: "baseBase",    types: ["action"],              tags: ["terminal", "drawer"]},
    ThroneRoom:     {cost: 4,   set: "baseBase",    types: ["action"],              tags: ["throneRoom"]},
    CouncilRoom:    {cost: 5,   set: "baseBase",    types: ["action"],              tags: ["terminal", "drawer", "plusBuy", "positiveInteraction"]},
    Festival:       {cost: 5,   set: "baseBase",    types: ["action"],              tags: ["village", "plusBuy", "virtualCoin", "vanilla"]},
    Laboratory:     {cost: 5,   set: "baseBase",    types: ["action"],              tags: ["cantrip", "drawer", "vanilla"]},
    Library:        {cost: 5,   set: "baseBase",    types: ["action"],              tags: ["terminal", "drawer", "drawToX"]},
    Market:         {cost: 5,   set: "baseBase",    types: ["action"],              tags: ["cantrip", "plusBuy", "virtualCoin", "peddler", "vanilla"]},
    Mine:           {cost: 5,   set: "baseBase",    types: ["action"],              tags: ["terminal", "remodel", "trashForBenefit"]},
    Witch:          {cost: 5,   set: "baseBase",    types: ["action", "attacker"],  tags: ["terminal", "drawer", "curserAttack"]},

    /*** 
     * BASE (1ST EDITION)
     ***/

    /*** 
     * BASE (2ND EDITION)
     ***/
    Harbinger:      {cost: 3,   set: "base2nd",     types: ["action"],              tags: ["cantrip", "topDecker"]},
    Merchant:       {cost: 3,   set: "base2nd",     types: ["action"],              tags: ["cantrip", "virtualCoin", "peddler"]},
    Vassal:         {cost: 3,   set: "base2nd",     types: ["action"],              tags: ["conditionalTerminal", "virtualCoin", "discarder"]},
    Poacher:        {cost: 4,   set: "base2nd",     types: ["action"],              tags: ["cantrip", "virtualCoin", "peddler", "discarder"]},
    Bandit:         {cost: 5,   set: "base2nd",     types: ["action", "attack"],    tags: ["terminal", "gainer", "trashingAttack"]},
    Sentry:         {cost: 5,   set: "base2nd",     types: ["action"],              tags: ["cantrip", "trasher", "sifter", "discarder", "inspector"]},
    Artisan:        {cost: 6,   set: "base2nd",     types: ["action"],              tags: ["terminal", "workshop", "gainer", "topDecker"]},

    /*** 
     * INTRIGUE (BASE)
     ***/
    Courtyard:      {cost: 2,   set: "intrigueBase", types: ["action"],             tags: ["terminal", "drawer", "topDecker"]},
    Pawn:           {cost: 2,   set: "intrigueBase", types: ["action"],             tags: ["conditionalTerminal", "plusBuy", "virtualCoin", "choice"]},
    Masquerade:     {cost: 3,   set: "intrigueBase", types: ["action"],             tags: ["terminal", "drawer", "trasher", "nonAttackerAttack"]},
    ShantyTown:     {cost: 3,   set: "intrigueBase", types: ["action"],             tags: ["village"]},
    Steward:        {cost: 3,   set: "intrigueBase", types: ["action"],             tags: ["terminal", "drawer", "virtualCoin", "trasher", "choice"]},
    Swindler:       {cost: 3,   set: "intrigueBase", types: ["action", "attack"],   tags: ["terminal", "virtualCoin", "trashingAttack", "curserAttack", "otherJunkerAttack"]},
    WishingWell:    {cost: 3,   set: "intrigueBase", types: ["action"],             tags: ["cantrip", "drawer", "inspector"]},
    Baron:          {cost: 4,   set: "intrigueBase", types: ["action"],             tags: ["terminal", "plusBuy", "gainer", "discardForBenefit", "virtualCoin"]},
    Bridge:         {cost: 4,   set: "intrigueBase", types: ["action"],             tags: ["terminal", "plusBuy", "virtualCoin", "bridge"]},
    Conspirator:    {cost: 4,   set: "intrigueBase", types: ["action"],             tags: ["conditionalTerminal", "virtualCoin"]},
    Ironworks:      {cost: 4,   set: "intrigueBase", types: ["action"],             tags: ["conditionalTerminal", "workshop", "gainer", "virtualCoin"]},
    MiningVillage:  {cost: 4,   set: "intrigueBase", types: ["action"],             tags: ["cantrip", "village", "virtualCoin", "oneshot"]},
    Duke:           {cost: 5,   set: "intrigueBase", types: ["victory"],            tags: ["altvp"]},
    Minion:         {cost: 5,   set: "intrigueBase", types: ["action", "attack"],   tags: ["virtualCoin", "sifter", "handSizeAttack", "choice"]},
    Torturer:       {cost: 5,   set: "intrigueBase", types: ["action", "attack"],   tags: ["terminal", "drawer", "curserAttack", "handSizeAttack", "choice"]},
    TradingPost:    {cost: 5,   set: "intrigueBase", types: ["action"],             tags: ["terminal", "trasher", "trashForBenefit", "gainer"]},
    Upgrade:        {cost: 5,   set: "intrigueBase", types: ["action"],             tags: ["cantrip", "remodel", "trasher", "trashForBenefit"]},
    Harem:          {cost: 6,   set: "intrigueBase", types: ["treasure", "victory"], tags: []},
    Nobles:         {cost: 6,   set: "intrigueBase", types: ["action", "victory"],  tags: ["conditionalTerminal", "village", "drawer", "choice"]},

    /*** 
     * INTRIGUE (1ST EDITION)
     ***/

    /*** 
     * INTRIGUE (2ND EDITION)
     ***/
    Lurker:         {cost: 2,   set: "intrigue2nd", types: ["action"],              tags: ["trashFromSupply", "gainFromTrash", "gainer", "choice"]},
    Diplomat:       {cost: 4,   set: "intrigue2nd", types: ["action", "reaction"],  tags: ["conditionalTerminal", "drawer", "village", "sifter", "defender"]},
    Mill:           {cost: 4,   set: "intrigue2nd", types: ["action", "victory"],   tags: ["cantrip", "discardForBenefit", "virtualCoin", "discarder"]},
    SecretPassage:  {cost: 4,   set: "intrigue2nd", types: ["action"],              tags: ["cantrip", "sifter", "warehouse", "inspector", "topDecker"]},
    Courtier:       {cost: 5,   set: "intrigue2nd", types: ["action"],              tags: ["conditionalTerminal", "plusBuy", "virtualCoin", "gainer", "choice"]},
    Patrol:         {cost: 5,   set: "intrigue2nd", types: ["action"],              tags: ["terminal", "drawer", "inspector"]},
    Replace:        {cost: 5,   set: "intrigue2nd", types: ["action", "attack"],    tags: ["terminal", "remodel", "trasher", "trashForBenefit", "topDecker", "curserAttack"]},

    /*** 
     * SEASIDE (BASE)
     ***/

    /*** 
     * SEASIDE (1ST EDITION)
     ***/

    /*** 
     * SEASIDE (2ND EDITION)
     ***/

    /*** 
     * PROSPERITY (BASE)
     ***/

    /*** 
     * PROSPERITY (1ST EDITION)
     ***/

    /*** 
     * PROSPERITY (2ND EDITION)
     ***/

    /*** 
     * HINTERLANDS (BASE)
     ***/

    /*** 
     * HINTERLANDS (1ST EDITION)
     ***/

    /*** 
     * HINTERLANDS (2ND EDITION)
     ***/

    /*** 
     * EMPIRES
     ***/
};