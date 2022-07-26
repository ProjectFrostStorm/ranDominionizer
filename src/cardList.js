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
    Sentry:         {cost: 5,   set: "base2nd",     types: ["action"],              tags: ["cantrip", "trasher", "sifter", "discarder"]},
    Artisan:        {cost: 6,   set: "base2nd",     types: ["action"],              tags: ["terminal", "workshop", "gainer", "topDecker"]},

    /*** 
     * INTRIGUE (BASE)
     ***/

    /*** 
     * INTRIGUE (1ST EDITION)
     ***/

    /*** 
     * INTRIGUE (2ND EDITION)
     ***/

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