const types = 
[
    "action",
    "treasure",
    "victory",
    "attack",
    "reaction",
    "duration",
    "command",
    "castle",
    "gathering"
]

const tags = 
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
    "plusVP",

    "delayedDrawer",
    "setAside",
    //"delayedCoin",
    
    "exile",
    "nonExileExile",

    "plusCoffers",
    "plusVillagers",

    //Synergy potential
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
    "nonTrashingTrasher",
    "reviveFromDiscard",        //Takes a card from discard (into hand, deck, or play)

    "discardFodder", 
    "trashFodder",

    "staysInPlay",              //Stays beyond "relevant" turns (can theoretically stay forever)
    "lootGainer",               //Can gain a loot, Plunder specific

    //Exchange
    "discardForBenefit",
    "trashForBenefit",

    //Attack variants
    "curserAttack",
    "otherJunkerAttack",
    "handSizeAttack",
    "trashingAttack",
    "deckLitterAttack",         //Cards are placed onto/into the deck
    "deckInspectionAttack",
    "turnWorseningAttack",

    //Other
    "oneshot",
    "splitPile",
    "gainCondition",            //Has a conditional for gaining or buying (e.g. Siren or Grand Market)

    "gameChanger",              //Affects base game rules (e.g. Baker's starting coffer, Shaman's gain from trash each turn, etc.)

    "nonAttackerAttack",
    "positiveInteraction",
    "neutralInteraction",

    //"useCurses"
];

const expansions = 
{
    base:           {secondEd: true,    displayName: "Base Game",   index: 0,   nofirst: true},
    intrigue:       {secondEd: true,    displayName: "Intrigue",    index: 1,   nofirst: true},
    seaside:        {secondEd: true,    displayName: "Seaside",     index: 2},
    //alchemy:        {secondEd: true,    displayName: "Alchemy",     index: 3},
    prosperity:     {secondEd: true,    displayName: "Prosperity",  index: 4},
    cornucopia:     {secondEd: false,   displayName: "Cornucopia",  index: 5},
    hinterlands:    {secondEd: true,    displayName: "Hinterlands", index: 6,   nofirst: true},
    darkages:       {secondEd: false,   displayName: "Dark Ages",   index: 7,   nobase: true},
    guilds:         {secondEd: false,   displayName: "Guilds",      index: 8},
    adventures:     {secondEd: false,   displayName: "Adventures",  index: 9},
    empires:        {secondEd: false,   displayName: "Empires",     index: 10},
    //nocturne:       {secondEd: true,    displayName: "Nocturne",    index: 11},
    renaissance:    {secondEd: false,   displayName: "Renaissance", index: 12},
    //meangerie:      {secondEd: false,   displayName: "Meangerie",   index: 13},
    //allies:         {secondEd: false,   displayName: "Allies",      index: 14},
    plunder:        {secondEd: false,   displayName: "Plunder",     index: 15},
    //risingsun:      {secondEd: false,   displayName: "Rising Sun",  index: 16},
};

const cards = 
{
    /*
    : {cost: , set: "", types: [""], tags: [""]},
    */

    /*** 
     * BASE (BASE)
     ***/
    Cellar:         {cost: 2,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["sifter", "discarder"]},
    Chapel:         {cost: 2,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["terminal", "trasher"]},
    Moat:           {cost: 2,   expansion: "base",          edition: "base",    types: ["action", "reaction"],              tags: ["terminal", "drawer", "defender"]},
    Village:        {cost: 3,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "vanilla"]},
    Workshop:       {cost: 3,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["terminal", "workshop", "gainer"]},
    Bureaucrat:     {cost: 4,   expansion: "base",          edition: "base",    types: ["action", "attack"],                tags: ["terminal", "gainer", "handSizeAttack", "turnWorseningAttack"]},
    Gardens:        {cost: 4,   expansion: "base",          edition: "base",    types: ["victory"],                         tags: ["altvp"]},
    Militia:        {cost: 4,   expansion: "base",          edition: "base",    types: ["action", "attack"],                tags: ["terminal", "virtualCoin", "handSizeAttack"]},
    Moneylender:    {cost: 4,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "trashForBenefit"]},
    Remodel:        {cost: 4,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["terminal", "remodel", "trasher", "trashForBenefit"]},
    Smithy:         {cost: 4,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["terminal", "drawer"]},
    ThroneRoom:     {cost: 4,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["throneRoom"]},
    CouncilRoom:    {cost: 5,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "plusBuy", "positiveInteraction"]},
    Festival:       {cost: 5,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["village", "plusBuy", "virtualCoin", "vanilla"]},
    Laboratory:     {cost: 5,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["cantrip", "drawer", "vanilla"]},
    Library:        {cost: 5,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "drawToX"]},
    Market:         {cost: 5,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["cantrip", "plusBuy", "virtualCoin", "peddler", "vanilla"]},
    Mine:           {cost: 5,   expansion: "base",          edition: "base",    types: ["action"],                          tags: ["terminal", "remodel", "trashForBenefit"]},
    Witch:          {cost: 5,   expansion: "base",          edition: "base",    types: ["action", "attack"],                tags: ["terminal", "drawer", "curserAttack"]},

    /*** 
     * BASE (1ST EDITION)
     ***/

    /*** 
     * BASE (2ND EDITION)
     ***/
    Harbinger:      {cost: 3,   expansion: "base",          edition: "second",  types: ["action"],                          tags: ["cantrip", "topDecker", "reviveFromDiscard"]},
    Merchant:       {cost: 3,   expansion: "base",          edition: "second",  types: ["action"],                          tags: ["cantrip", "virtualCoin", "peddler"]},
    Vassal:         {cost: 3,   expansion: "base",          edition: "second",  types: ["action"],                          tags: ["conditionalTerminal", "virtualCoin", "discarder"]},
    Poacher:        {cost: 4,   expansion: "base",          edition: "second",  types: ["action"],                          tags: ["cantrip", "virtualCoin", "peddler", "discarder"]},
    Bandit:         {cost: 5,   expansion: "base",          edition: "second",  types: ["action", "attack"],                tags: ["terminal", "gainer", "trashingAttack"]},
    Sentry:         {cost: 5,   expansion: "base",          edition: "second",  types: ["action"],                          tags: ["cantrip", "trasher", "sifter", "discarder", "inspector"]},
    Artisan:        {cost: 6,   expansion: "base",          edition: "second",  types: ["action"],                          tags: ["terminal", "workshop", "gainer", "topDecker"]},
    
    /*** 
     * INTRIGUE (BASE)
     ***/
    Courtyard:      {cost: 2,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "topDecker"]},
    Pawn:           {cost: 2,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["conditionalTerminal", "plusBuy", "virtualCoin", "choice"]},
    Masquerade:     {cost: 3,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "trasher", "nonTrashingTrasher", "nonAttackerAttack"]},
    ShantyTown:     {cost: 3,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["village"]},
    Steward:        {cost: 3,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "virtualCoin", "trasher", "choice"]},
    Swindler:       {cost: 3,   expansion: "intrigue",      edition: "base",    types: ["action", "attack"],                tags: ["terminal", "virtualCoin", "trashingAttack", "curserAttack", "otherJunkerAttack"]},
    WishingWell:    {cost: 3,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["cantrip", "drawer", "inspector"]},
    Baron:          {cost: 4,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["terminal", "plusBuy", "gainer", "discardForBenefit", "virtualCoin"]},
    Bridge:         {cost: 4,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["terminal", "plusBuy", "virtualCoin", "bridge"]},
    Conspirator:    {cost: 4,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["conditionalTerminal", "virtualCoin"]},
    Ironworks:      {cost: 4,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["conditionalTerminal", "workshop", "gainer", "virtualCoin"]},
    MiningVillage:  {cost: 4,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "virtualCoin", "oneshot"]},
    Duke:           {cost: 5,   expansion: "intrigue",      edition: "base",    types: ["victory"],                         tags: ["altvp"]},
    Minion:         {cost: 5,   expansion: "intrigue",      edition: "base",    types: ["action", "attack"],                tags: ["virtualCoin", "sifter", "handSizeAttack", "choice"]},
    Torturer:       {cost: 5,   expansion: "intrigue",      edition: "base",    types: ["action", "attack"],                tags: ["terminal", "drawer", "curserAttack", "handSizeAttack", "choice"]},
    TradingPost:    {cost: 5,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["terminal", "trasher", "trashForBenefit", "gainer"]},
    Upgrade:        {cost: 5,   expansion: "intrigue",      edition: "base",    types: ["action"],                          tags: ["cantrip", "remodel", "trasher", "trashForBenefit"]},
    Harem:          {cost: 6,   expansion: "intrigue",      edition: "base",    types: ["treasure", "victory"],             tags: []},
    Nobles:         {cost: 6,   expansion: "intrigue",      edition: "base",    types: ["action", "victory"],               tags: ["conditionalTerminal", "village", "drawer", "choice"]},

    /*** 
     * INTRIGUE (1ST EDITION)
     ***/

    /*** 
     * INTRIGUE (2ND EDITION)
     ***/
    Lurker:         {cost: 2,   expansion: "intrigue",      edition: "second",  types: ["action"],                          tags: ["trashFromSupply", "gainFromTrash", "gainer", "choice"]},
    Diplomat:       {cost: 4,   expansion: "intrigue",      edition: "second",  types: ["action", "reaction"],              tags: ["conditionalTerminal", "drawer", "village", "sifter", "defender"]},
    Mill:           {cost: 4,   expansion: "intrigue",      edition: "second",  types: ["action", "victory"],               tags: ["cantrip", "discardForBenefit", "virtualCoin", "discarder"]},
    SecretPassage:  {cost: 4,   expansion: "intrigue",      edition: "second",  types: ["action"],                          tags: ["cantrip", "sifter", "warehouse", "inspector", "topDecker"]},
    Courtier:       {cost: 5,   expansion: "intrigue",      edition: "second",  types: ["action"],                          tags: ["conditionalTerminal", "plusBuy", "virtualCoin", "gainer", "choice"]},
    Patrol:         {cost: 5,   expansion: "intrigue",      edition: "second",  types: ["action"],                          tags: ["terminal", "drawer", "inspector"]},
    Replace:        {cost: 5,   expansion: "intrigue",      edition: "second",  types: ["action", "attack"],                tags: ["terminal", "remodel", "trasher", "trashForBenefit", "topDecker", "curserAttack"]},

    /*** 
     * SEASIDE (BASE)
     ***/
    Haven:          {cost: 2,   expansion: "seaside",       edition: "base",    types: ["action", "duration"],              tags: ["setAside", "delayedDrawer"]},
    Lighthouse:     {cost: 2,   expansion: "seaside",       edition: "base",    types: ["action", "duration"],              tags: ["virtualCoin", "defender"]},
    NativeVillage:  {cost: 2,   expansion: "seaside",       edition: "base",    types: ["action"],                          tags: ["village", "nonExileExile"]},
    FishingVillage: {cost: 3,   expansion: "seaside",       edition: "base",    types: ["action", "duration"],              tags: ["village", "virtualCoin"]},
    Lookout:        {cost: 3,   expansion: "seaside",       edition: "base",    types: ["action"],                          tags: ["trasher", "sifter", "inspector", "discarder"]},
    Smugglers:      {cost: 3,   expansion: "seaside",       edition: "base",    types: ["action"],                          tags: ["terminal", "workshop", "gainer"]},
    Warehouse:      {cost: 3,   expansion: "seaside",       edition: "base",    types: ["action"],                          tags: ["sifter", "warehouse", "discarder"]},
    Caravan:        {cost: 4,   expansion: "seaside",       edition: "base",    types: ["action", "duration"],              tags: ["cantrip", "delayedDrawer"]},
    Cutpurse:       {cost: 4,   expansion: "seaside",       edition: "base",    types: ["action", "attack"],                tags: ["terminal", "virtualCoin", "handSizeAttack"]},
    Island:         {cost: 4,   expansion: "seaside",       edition: "base",    types: ["action", "victory"],               tags: ["terminal", "nonExileExile"]},
    Salvager:       {cost: 4,   expansion: "seaside",       edition: "base",    types: ["action"],                          tags: ["terminal", "plusBuy", "trasher", "trashForBenefit", "virtualCoin"]},
    TreasureMap:    {cost: 4,   expansion: "seaside",       edition: "base",    types: ["action"],                          tags: ["terminal", "oneshot", "gainer"]},
    Bazaar:         {cost: 5,   expansion: "seaside",       edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "virtualCoin", "vanilla"]},
    MerchantShip:   {cost: 5,   expansion: "seaside",       edition: "base",    types: ["action", "duration"],              tags: ["terminal", "virtualCoin"]},
    Outpost:        {cost: 5,   expansion: "seaside",       edition: "base",    types: ["action", "duration"],              tags: ["terminal", "extraTurn"]},
    Tactician:      {cost: 5,   expansion: "seaside",       edition: "base",    types: ["action", "duration"],              tags: ["terminal", "delayedDrawer", "plusBuy", "village", "discarder"]},
    Treasury:       {cost: 5,   expansion: "seaside",       edition: "base",    types: ["action"],                          tags: ["cantrip", "virtualCoin", "peddler", "topDecker"]},
    Wharf:          {cost: 5,   expansion: "seaside",       edition: "base",    types: ["action", "duration"],              tags: ["terminal", "drawer", "plusBuy", "delayedDrawer"]},

    /*** 
     * SEASIDE (1ST EDITION)
     ***/
    Embargo:        {cost: 2,   expansion: "seaside",       edition: "first",   types: ["action"],                          tags: ["terminal", "oneshot", "curserAttack"]}, //No full resolution image
    PearlDiver:     {cost: 2,   expansion: "seaside",       edition: "first",   types: ["action"],                          tags: ["cantrip", "topDecker"]},
    Ambassador:     {cost: 3,   expansion: "seaside",       edition: "first",   types: ["action", "attack"],                tags: ["terminal", "nonTrashingTrasher", "otherJunkerAttack"]},
    Navigator:      {cost: 4,   expansion: "seaside",       edition: "first",   types: ["action"],                          tags: ["terminal", "virtualCoin", "inspector"]},
    PirateShip:     {cost: 4,   expansion: "seaside",       edition: "first",   types: ["action", "attack"],                tags: ["terminal", "virtualCoin", "trashingAttack", "positiveInteraction", "choice"]}, //Resized full resolution
    SeaHag:         {cost: 4,   expansion: "seaside",       edition: "first",   types: ["action", "attack"],                tags: ["terminal", "curserAttack", "deckLitterAttack"]},
    Explorer:       {cost: 5,   expansion: "seaside",       edition: "first",   types: ["action"],                          tags: ["terminal", "gainer"]},
    GhostShip:      {cost: 5,   expansion: "seaside",       edition: "first",   types: ["action", "attack"],                tags: ["terminal", "drawer", "handSizeAttack", "deckLitterAttack"]},

    /*** 
     * SEASIDE (2ND EDITION)
     ***/
    Astrolabe:      {cost: 3,   expansion: "seaside",       edition: "second",  types: ["treasure", "duration"],            tags: ["plusBuy"]},
    Monkey:         {cost: 3,   expansion: "seaside",       edition: "second",  types: ["action", "duration"],              tags: ["terminal", "delayedDrawer"]},
    SeaChart:       {cost: 3,   expansion: "seaside",       edition: "second",  types: ["action"],                          tags: ["cantrip", "inspector", "drawer"]},
    Blockade:       {cost: 4,   expansion: "seaside",       edition: "second",  types: ["action", "duration"],              tags: ["terminal", "workshop", "gainer", "curserAttack"]},
    Sailor:         {cost: 4,   expansion: "seaside",       edition: "second",  types: ["action", "duration"],              tags: ["virtualCoin", "trasher"]},
    TidePools:      {cost: 4,   expansion: "seaside",       edition: "second",  types: ["action", "duration"],              tags: ["cantrip", "drawer", "discarder"]},
    Corsair:        {cost: 5,   expansion: "seaside",       edition: "second",  types: ["action", "duration", "attack"],    tags: ["terminal", "virtualCoin", "delayedDrawer", "trashingAttack"]},
    Pirate:         {cost: 5,   expansion: "seaside",       edition: "second",  types: ["action", "duration", "reaction"],  tags: ["conditionalTerminal", "gainer"]},
    SeaWitch:       {cost: 5,   expansion: "seaside",       edition: "second",  types: ["action", "duration", "attack"],    tags: ["terminal", "drawer", "curserAttack", "sifter"]},

    /*** 
     * PROSPERITY (BASE)
     ***/
    Watchtower:     {cost: 3,   expansion: "prosperity",    edition: "base",    types: ["action", "reaction"],              tags: ["terminal", "drawer", "drawToX", "topDecker", "trasher"]},
    Bishop:         {cost: 4,   expansion: "prosperity",    edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "plusVP", "trasher", "trashForBenefit", "positiveInteraction"]},
    Monument:       {cost: 4,   expansion: "prosperity",    edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "plusVP"]},
    Quarry:         {cost: 4,   expansion: "prosperity",    edition: "base",    types: ["treasure"],                        tags: ["bridge"]},
    WorkersVillage: {cost: 4,   expansion: "prosperity",    edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "plusBuy"]},
    City:           {cost: 5,   expansion: "prosperity",    edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "drawer", "virtualCoin", "plusBuy"]},
    Mint:           {cost: 5,   expansion: "prosperity",    edition: "base",    types: ["action"],                          tags: ["terminal", "gainer", "trasher"]},
    Rabble:         {cost: 5,   expansion: "prosperity",    edition: "base",    types: ["action", "attack"],                tags: ["terminal", "drawer", "deckInspectionAttack"]},
    Vault:          {cost: 5,   expansion: "prosperity",    edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "discardForBenefit", "virtualCoin", "positiveInteraction"]},
    GrandMarket:    {cost: 6,   expansion: "prosperity",    edition: "base",    types: ["action"],                          tags: ["cantrip", "plusBuy", "virtualCoin", "peddler", "gainCondition"]},
    Hoard:          {cost: 6,   expansion: "prosperity",    edition: "base",    types: ["treasure"],                        tags: ["gainer"]},
    Bank:           {cost: 7,   expansion: "prosperity",    edition: "base",    types: ["treasure"],                        tags: ["virtualCoin"]},
    Expand:         {cost: 7,   expansion: "prosperity",    edition: "base",    types: ["action"],                          tags: ["terminal", "remodel", "trasher", "trashForBenefit"]},
    Forge:          {cost: 7,   expansion: "prosperity",    edition: "base",    types: ["action"],                          tags: ["terminal", "trasher", "trashForBenefit", "gainer", "remodel"]},
    KingsCourt:     {cost: 7,   expansion: "prosperity",    edition: "base",    types: ["action"],                          tags: ["throneRoom"]},
    Peddler:        {cost: 8,   expansion: "prosperity",    edition: "base",    types: ["action"],                          tags: ["cantrip", "virtualCoin", "peddler"]},

    /*** 
     * PROSPERITY (1ST EDITION) 
     ***/
    Loan:           {cost: 3,   expansion: "prosperity",    edition: "first",   types: ["treasure"],                        tags: ["trasher", "digger", "discarder"]}, //Resized full resolution, slightly older card version (2016)
    TradeRoute:     {cost: 3,   expansion: "prosperity",    edition: "first",   types: ["action"],                          tags: ["terminal", "plusBuy", "virtualCoin", "trasher"]},
    Talisman:       {cost: 4,   expansion: "prosperity",    edition: "first",   types: ["treasure"],                        tags: ["gainer"]}, //Resized full resolution, slightly older card version (2016)
    Contraband:     {cost: 5,   expansion: "prosperity",    edition: "first",   types: ["treasure"],                        tags: ["plusBuy"]}, //Resized full resolution, slightly older card version (2016)
    CountingHouse:  {cost: 5,   expansion: "prosperity",    edition: "first",   types: ["action"],                          tags: ["terminal"]},
    Mountebank:     {cost: 5,   expansion: "prosperity",    edition: "first",   types: ["action", "attack"],                tags: ["terminal", "virtualCoin", "curserAttack", "otherJunkerAttack"]},
    RoyalSeal:      {cost: 5,   expansion: "prosperity",    edition: "first",   types: ["treasure"],                        tags: ["topDecker"]}, //Resized full resolution, slightly older card version (2016)
    Venture:        {cost: 5,   expansion: "prosperity",    edition: "first",   types: ["treasure"],                        tags: ["digger", "discarder"]}, //Resized full resolution, slightly older card version (2016)
    Goons:          {cost: 6,   expansion: "prosperity",    edition: "first",   types: ["action", "attack"],                tags: ["terminal", "plusBuy", "virtualCoin", "handSizeAttack", "plusVP"]},

    /*** 
     * PROSPERITY (2ND EDITION)
     ***/
    Anvil:          {cost: 3,   expansion: "prosperity",    edition: "second",  types: ["treasure"],                        tags: ["discardForBenefit", "workshop", "gainer"]},
    Clerk:          {cost: 4,   expansion: "prosperity",    edition: "second",  types: ["action", "reaction", "attack"],    tags: ["conditionalTerminal", "virtualCoin", "handSizeAttack", "turnWorseningAttack"]},
    Investment:     {cost: 4,   expansion: "prosperity",    edition: "second",  types: ["treasure"],                        tags: ["trasher", "virtualCoin", "oneshot", "plusVP", "choice"]},
    Tiara:          {cost: 4,   expansion: "prosperity",    edition: "second",  types: ["treasure"],                        tags: ["plusBuy", "topDecker", "throneRoom"]},
    Charlatan:      {cost: 5,   expansion: "prosperity",    edition: "second",  types: ["action", "attack"],                tags: ["terminal", "virtualCoin", "curserAttack"]},
    Collection:     {cost: 5,   expansion: "prosperity",    edition: "second",  types: ["treasure"],                        tags: ["plusBuy", "plusVP"]},
    CrystalBall:    {cost: 5,   expansion: "prosperity",    edition: "second",  types: ["treasure"],                        tags: ["inspector", "trasher", "discarder"]},
    Magnate:        {cost: 5,   expansion: "prosperity",    edition: "second",  types: ["action"],                          tags: ["terminal", "drawer"]},
    WarChest:       {cost: 5,   expansion: "prosperity",    edition: "second",  types: ["treasure"],                        tags: ["workshop", "gainer"]},

    /*** 
     * CORNUCOPIA 
     ***/
    Hamlet:         {cost: 2,   expansion: "cornucopia",    edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "plusBuy", "discarder"]},
    FortuneTeller:  {cost: 3,   expansion: "cornucopia",    edition: "base",    types: ["action", "attack"],                tags: ["terminal", "virtualCoin", "deckInspectionAttack", "discarder"]},
    Menagerie:      {cost: 3,   expansion: "cornucopia",    edition: "base",    types: ["action"],                          tags: ["cantrip", "drawer"]},
    FarmingVillage: {cost: 4,   expansion: "cornucopia",    edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "digger", "discarder"]},
    HorseTraders:   {cost: 4,   expansion: "cornucopia",    edition: "base",    types: ["action", "reaction"],              tags: ["terminal", "plusBuy", "virtualCoin", "discarder", "defender"]},
    Remake:         {cost: 4,   expansion: "cornucopia",    edition: "base",    types: ["action"],                          tags: ["terminal", "remodel", "trasher", "trashForBenefit"]},
    Tournament:     {cost: 4,   expansion: "cornucopia",    edition: "base",    types: ["action"],                          tags: ["peddler", "gainer", "neutralInteraction", "virtualCoin"]},
    YoungWitch:     {cost: 4,   expansion: "cornucopia",    edition: "base",    types: ["action", "attack"],                tags: ["terminal", "sifter", "curserAttack"]}, //No full resolution
    Harvest:        {cost: 5,   expansion: "cornucopia",    edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin"]},
    HornOfPlenty:   {cost: 5,   expansion: "cornucopia",    edition: "base",    types: ["treasure"],                        tags: ["gainer"]},
    HuntingParty:   {cost: 5,   expansion: "cornucopia",    edition: "base",    types: ["action"],                          tags: ["cantrip", "drawer"]},
    Jester:         {cost: 5,   expansion: "cornucopia",    edition: "base",    types: ["action", "attack"],                tags: ["terminal", "virtualCoin", "discarder", "curserAttack", "otherJunkerAttack", "gainer"]},
    Fairgrounds:    {cost: 6,   expansion: "cornucopia",    edition: "base",    types: ["victory"],                         tags: ["altvp"]},

    /*** 
     * HINTERLANDS (BASE)
     ***/
    Crossroads:     {cost: 2,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["drawer", "village"]},
    FoolsGold:      {cost: 2,   expansion: "hinterlands",   edition: "base",    types: ["treasure", "reaction"],            tags: ["virtualCoin", "gainer", "oneshot"]}, 
    Develop:        {cost: 3,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["terminal", "remodel", "trasher", "trashForBenefit", "gainer", "topDecker"]},
    Oasis:          {cost: 3,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["cantrip", "virtualCoin", "discarder"]},
    Scheme:         {cost: 3,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["cantrip", "topDecker"]},
    Tunnel:         {cost: 3,   expansion: "hinterlands",   edition: "base",    types: ["victory", "reaction"],             tags: ["discardForBenefit", "gainer"]},
    JackOfAllTrades:{cost: 4,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["terminal", "gainer", "inspector", "discarder", "drawToX", "trasher", "defender"]},
    SpiceMerchant:  {cost: 4,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["conditionalTerminal", "trasher", "trashForBenefit", "village", "virtualCoin", "plusBuy", "choice"]},
    Trader:         {cost: 4,   expansion: "hinterlands",   edition: "base",    types: ["action", "reaction"],              tags: ["terminal", "trasher", "gainer", "defender"]}, 
    Cartographer:   {cost: 5,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["cantrip", "inspector", "sifter", "discarder"]}, 
    Haggler:        {cost: 5,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "gainer"]}, 
    Highway:        {cost: 5,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["cantrip", "bridge"]}, 
    Inn:            {cost: 5,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "sifter", "discarder"]}, 
    Margrave:       {cost: 5,   expansion: "hinterlands",   edition: "base",    types: ["action", "attack"],                tags: ["terminal", "drawer", "plusBuy", "handSizeAttack"]},
    Stables:        {cost: 5,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["conditionalTerminal", "discardForBenefit", "drawer"]},
    BorderVillage:  {cost: 6,   expansion: "hinterlands",   edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "workshop", "gainer"]},
    Farmland:       {cost: 6,   expansion: "hinterlands",   edition: "base",    types: ["victory"],                         tags: ["remodel", "trasher", "trashForBenefit"]},

    /*** 
     * HINTERLANDS (1ST EDITION)
     ***/

    /*** 
     * HINTERLANDS (2ND EDITION)
     ***/
    GuardDog:       {cost: 3,   expansion: "hinterlands",   edition: "second",  types: ["action", "reaction"],              tags: ["terminal", "drawer"]}, 
    Nomads:         {cost: 4,   expansion: "hinterlands",   edition: "second",  types: ["action"],                          tags: ["terminal", "virtualCoin", "plusBuy", "trashFodder"]}, 
    Trail:          {cost: 4,   expansion: "hinterlands",   edition: "second",  types: ["action", "reaction"],              tags: ["cantrip", "discardFodder", "trashFodder"]}, 
    Weaver:         {cost: 4,   expansion: "hinterlands",   edition: "second",  types: ["action", "reaction"],              tags: ["terminal", "workshop", "gainer", "discardFodder"]}, 
    Berserker:      {cost: 5,   expansion: "hinterlands",   edition: "second",  types: ["action", "attack"],                tags: ["terminal", "workshop", "gainer", "handSizeAttack"]},
    Cauldron:       {cost: 5,   expansion: "hinterlands",   edition: "second",  types: ["treasure", "attack"],              tags: ["plusBuy", "curserAttack"]},
    Souk:           {cost: 5,   expansion: "hinterlands",   edition: "second",  types: ["action"],                          tags: ["terminal", "plusBuy", "virtualCoin"]}, 
    Wheelwright:    {cost: 5,   expansion: "hinterlands",   edition: "second",  types: ["action"],                          tags: ["cantrip", "discardForBenefit", "workshop", "gainer"]}, 
    WitchsHut:      {cost: 5,   expansion: "hinterlands",   edition: "second",  types: ["action", "attack"],                tags: ["terminal", "drawer", "curserAttack", "discarder"]}, 

    /*** 
     * DARK AGES TODO
     ***/

    /*** 
     * GUILDS
     ***/
    CandlestickMaker:{cost: 2,  expansion: "guilds",        edition: "base",    types: ["action"],                          tags: ["plusBuy", "plusCoffers", "vanilla"]},
    Stonemason:     {cost: 2,   expansion: "guilds",        edition: "base",    types: ["action"],                          tags: ["terminal", "trasher", "trashForBenefit", "gainer"]}, //No full resolution
    Doctor:         {cost: 3,   expansion: "guilds",        edition: "base",    types: ["action"],                          tags: ["terminal", "trasher", "inspector"]}, //No full resolution
    Masterpiece:    {cost: 3,   expansion: "guilds",        edition: "base",    types: ["treasure"],                        tags: ["gainer"]},
    Advisor:        {cost: 4,   expansion: "guilds",        edition: "base",    types: ["action"],                          tags: ["cantrip", "drawer", "neutralInteraction"]},
    Herald:         {cost: 4,   expansion: "guilds",        edition: "base",    types: ["action"],                          tags: ["cantrip", "inspector"]}, //No full resolution
    Plaza:          {cost: 4,   expansion: "guilds",        edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "discarder", "discardForBenefit", "plusCoffers"]},
    Taxman:         {cost: 4,   expansion: "guilds",        edition: "base",    types: ["action", "attack"],                tags: ["terminal", "trasher", "handSizeAttack", "remodel", "trashForBenefit"]},
    Baker:          {cost: 5,   expansion: "guilds",        edition: "base",    types: ["action"],                          tags: ["cantrip", "plusCoffers", "vanilla", "gameChanger"]},
    Butcher:        {cost: 5,   expansion: "guilds",        edition: "base",    types: ["action"],                          tags: ["terminal", "plusCoffers", "trasher", "trashForBenefit", "remodel"]},
    Journeyman:     {cost: 5,   expansion: "guilds",        edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "digger", "discarder"]},
    MerchantGuild:  {cost: 5,   expansion: "guilds",        edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "plusBuy", "plusCoffers"]}, //Resized full resolution, much older card version (2013)
    Soothsayer:     {cost: 5,   expansion: "guilds",        edition: "base",    types: ["action", "attack"],                tags: ["terminal", "gainer", "curserAttack", "positiveInteraction"]},

    /*** 
     * ADVENTURES
     ***/
    CoinOfTheRealm: {cost: 2,   expansion: "adventures",    edition: "base",    types: ["action", "reserve"],               tags: ["village"]},
    Page:           {cost: 2,   expansion: "adventures",    edition: "base",    types: ["action", "traveller"],             tags: ["cantrip", "drawer", "trashingAttack", "virtualCoin", "gainer", "village", "defender"]}, //Includes traveller cards
    Peasant:        {cost: 2,   expansion: "adventures",    edition: "base",    types: ["action", "traveller"],             tags: ["terminal", "plusBuy", "virtualCoin"]}, //NOTE Add more tags for travellers
    Ratcatcher:     {cost: 2,   expansion: "adventures",    edition: "base",    types: ["action", "reserve"],               tags: ["cantrip", "trasher"]},
    Raze:           {cost: 2,   expansion: "adventures",    edition: "base",    types: ["action"],                          tags: ["cantrip", "trasher", "inspector", "discarder"]},
    Amulet:         {cost: 3,   expansion: "adventures",    edition: "base",    types: ["action", "duration"],              tags: ["terminal", "trasher", "gainer", "virtualCoin", "delayedCoin", "oneshot"]},
    CaravanGuard:   {cost: 3,   expansion: "adventures",    edition: "base",    types: ["action", "duration", "reaction"],  tags: ["cantrip", "peddler", "delayedCoin", "defender"]}, //NOTE Defender for attack synergy, maybe make new tag for this
    Dungeon:        {cost: 3,   expansion: "adventures",    edition: "base",    types: ["action", "duration"],              tags: ["sifter", "discarder"]},
    Gear:           {cost: 3,   expansion: "adventures",    edition: "base",    types: ["action", "duration"],              tags: ["terminal", "drawer", "setAside", "delayedDrawer"]},
    Guide:          {cost: 3,   expansion: "adventures",    edition: "base",    types: ["action", "reserve"],               tags: ["cantrip", "sifter", "discarder"]}, //NOTE Not quite a sifter
    Duplicate:      {cost: 4,   expansion: "adventures",    edition: "base",    types: ["action", "reserve"],               tags: ["terminal", "gainer"]},
    Magpie:         {cost: 4,   expansion: "adventures",    edition: "base",    types: ["action"],                          tags: ["cantrip", "drawer", "inspector", "gainer"]},
    Messenger:      {cost: 4,   expansion: "adventures",    edition: "base",    types: ["action"],                          tags: ["terminal", "plusBuy", "virtualCoin", "workshop", "gainer", "positiveInteraction"]},  //No full resolution
    Miser:          {cost: 4,   expansion: "adventures",    edition: "base",    types: ["action"],                          tags: ["terminal", "nonExileExile", "virtualCoin"]},  //No full resolution
    Port:           {cost: 4,   expansion: "adventures",    edition: "base",    types: ["action"],                          tags: ["cantrip", "villager", "gainer"]},
    Ranger:         {cost: 4,   expansion: "adventures",    edition: "base",    types: ["action"],                          tags: ["terminal", "plusBuy", "drawer"]},
    Transmogrify:   {cost: 4,   expansion: "adventures",    edition: "base",    types: ["action", "reserve"],               tags: ["remodel", "trasher", "trashForBenefit"]},
    Artificer:      {cost: 5,   expansion: "adventures",    edition: "base",    types: ["action"],                          tags: ["cantrip", "virtualCoin", "discardForBenefit", "gainer"]},
    BridgeTroll:    {cost: 5,   expansion: "adventures",    edition: "base",    types: ["action", "duration", "attack"],    tags: ["terminal", "turnWorseningAttack", "bridge", "plusBuy"]}, //No full resolution
    DistantLands:   {cost: 5,   expansion: "adventures",    edition: "base",    types: ["action", "reserve", "victory"],    tags: ["terminal", "altvp"]},
    Giant:          {cost: 5,   expansion: "adventures",    edition: "base",    types: ["action", "attack"],                tags: ["terminal", "virtualCoin", "trashingAttack"]}, 
    HauntedWoods:   {cost: 5,   expansion: "adventures",    edition: "base",    types: ["action", "duration", "attack"],    tags: ["terminal", "delayedDrawer", "deckLitterAttack"]}, //No full resolution
    LostCity:       {cost: 5,   expansion: "adventures",    edition: "base",    types: ["action"],                          tags: ["cantrip", "drawer", "village", "vanilla", "positiveInteraction"]},
    Relic:          {cost: 5,   expansion: "adventures",    edition: "base",    types: ["treasure", "attack"],              tags: ["handSizeAttack", "turnWorseningAttack"]}, //No full resolution
    RoyalCarriage:  {cost: 5,   expansion: "adventures",    edition: "base",    types: ["action", "reserve"],               tags: ["throneRoom"]},
    Storyteller:    {cost: 5,   expansion: "adventures",    edition: "base",    types: ["action"],                          tags: ["cantrip", "drawer"]}, //No full resolution
    SwampHag:       {cost: 5,   expansion: "adventures",    edition: "base",    types: ["action", "duration", "attack"],    tags: ["terminal", "virtualCoin", "curserAttack"]}, //No full resolution
    TreasureTrove:  {cost: 5,   expansion: "adventures",    edition: "base",    types: ["treasure"],                        tags: ["gainer"]}, //No full resolution
    WineMerchant:   {cost: 5,   expansion: "adventures",    edition: "base",    types: ["action", "reserve"],               tags: ["terminal", "virtualCoin", "plusBuy"]},
    Hireling:       {cost: 6,   expansion: "adventures",    edition: "base",    types: ["action", "duration"],              tags: ["terminal", "drawer", "staysInPlay", "oneshot"]}, //No full resolution

    /*** 
     * EMPIRES
     ***/
    Engineer:       {cost: -4,  expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["terminal", "workshop", "gainer", "oneshot"]},
    CityQuarter:    {cost: -8,  expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["village", "drawer"]},
    Overlord:       {cost: -8,  expansion: "empires",       edition: "base",    types: ["action", "command"],               tags: ["conditionalTerminal"]}, //No full resolution
    RoyalBlacksmith:{cost: -8,  expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "discarder"]},
    Encampment:     {cost: 2,   expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "drawer", "oneshot", "splitPile"]}, //Resized full resolution, slightly older card version (2016)
    Patrician:      {cost: 2,   expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["cantrip", "drawer", "inspector"]},
    Settlers:       {cost: 2,   expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["cantrip", "peddler"]},
    Castles:        {cost: 3,   expansion: "empires",       edition: "base",    types: ["victory", "castle"],               tags: ["altvp", "plusVP", "gainer", "trasher", "discardForBenefit", "virtualCoin"]},
    Catapult:       {cost: 3,   expansion: "empires",       edition: "base",    types: ["action", "attack"],                tags: ["terminal", "virtualCoin", "trashForBenefit", "handSizeAttack", "curserAttack"]}, //Rocks has no full resolution
    ChariotRace:    {cost: 3,   expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["cantrip", "virtualCoin", "plusVP", "neutralInteraction"]},
    Enchantress:    {cost: 3,   expansion: "empires",       edition: "base",    types: ["action", "attack", "duration"],    tags: ["terminal", "turnWorseningAttack", "delayedDrawer"]},
    FarmersMarket:  {cost: 3,   expansion: "empires",       edition: "base",    types: ["action", "gathering"],             tags: ["terminal", "plusBuy", "virtualCoin", "plusVP", "oneshot"]}, //Resized full resolution, slightly older card version (2016)
    Gladiator:      {cost: 3,   expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "trashFromSupply"]},
    Sacrifice:      {cost: 4,   expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["conditionalTerminal", "village", "drawer", "virtualCoin", "plusVP"]},
    Temple:         {cost: 4,   expansion: "empires",       edition: "base",    types: ["action", "gathering"],             tags: ["terminal", "plusVP", "trasher"]}, //Resized full resolution, slightly older card version (2016)
    Villa:          {cost: 4,   expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["village", "plusBuy", "virtualCoin"]},
    Archive:        {cost: 5,   expansion: "empires",       edition: "base",    types: ["action", "duration"],              tags: ["cantrip", "setAside", "delayedDrawer"]},
    Capital:        {cost: 5,   expansion: "empires",       edition: "base",    types: ["treasure"],                        tags: ["plusBuy"]},
    Charm:          {cost: 5,   expansion: "empires",       edition: "base",    types: ["treasure"],                        tags: ["plusBuy", "workshop", "gainer", "choice"]}, //No full resolution
    Crown:          {cost: 5,   expansion: "empires",       edition: "base",    types: ["action", "treasure"],              tags: ["throneRoom"]},
    Forum:          {cost: 5,   expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["cantrip", "sifter", "discarder"]}, //No full resolution
    Groundskeeper:  {cost: 5,   expansion: "empires",       edition: "base",    types: ["action"],                          tags: ["cantrip", "plusVP"]}, //No full resolution
    Legionary:      {cost: 5,   expansion: "empires",       edition: "base",    types: ["action", "attack"],                tags: ["terminal", "virtualCoin", "handSizeAttack"]},
    WildHunt:       {cost: 5,   expansion: "empires",       edition: "base",    types: ["action", "gathering"],             tags: ["terminal", "drawer", "gainer", "plusVP"]}, //Resized full resolution, slightly older card version (2016)

    /*** 
     * RENAISSANCE
     ***/
    BorderGuard:    {cost: 2,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["cantrip", "sifter", "discarder"]},
    Ducat:          {cost: 2,   expansion: "renaissance",   edition: "base",    types: ["treasure"],                        tags: ["plusCoffers", "plusBuy", "trasher"]},
    Lackeys:        {cost: 2,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "plusVillagers"]},
    ActingTroupe:   {cost: 3,   expansion: "renaissance",   edition: "base",    types: ["action", "duration"],              tags: ["conditionalTerminal", "plusVillagers", "oneshot"]},
    CargoShip:      {cost: 3,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "setAside"]},
    Experiment:     {cost: 3,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["cantrip", "drawer", "oneshot", "gainer"]}, //Resized full resolution, slightly older card version (2016)
    Improve:        {cost: 3,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "remodel", "trasher", "trashForBenefit"]},
    FlagBearer:     {cost: 4,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "drawer", "trashFodder"]}, //NOTE Drawer from Flag
    Hideout:        {cost: 4,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "trasher"]},
    Inventor:       {cost: 4,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "workshop", "gainer", "bridge"]}, //Slightly older card version (2018)
    MountainVillage:{cost: 4,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "reviveFromDiscard"]},
    Patron:         {cost: 4,   expansion: "renaissance",   edition: "base",    types: ["action", "reaction"],              tags: ["conditionalTerminal", "plusVillagers", "virtualCoin", "plusCoffers"]}, //No full resolution
    Priest:         {cost: 4,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "trasher", "trashForBenefit"]},
    Research:       {cost: 4,   expansion: "renaissance",   edition: "base",    types: ["action", "duration"],              tags: ["trasher", "delayedDrawer"]},
    SilkMerchant:   {cost: 4,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "plusBuy", "trashFodder", "plusCoffers", "plusVillagers"]},
    OldWitch:       {cost: 5,   expansion: "renaissance",   edition: "base",    types: ["action", "attack"],                tags: ["terminal", "drawer", "curserAttack"]},
    Recruiter:      {cost: 5,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "trasher", "trashForBenefit", "plusVillagers"]},
    Scepter:        {cost: 5,   expansion: "renaissance",   edition: "base",    types: ["treasure"],                        tags: ["choice", "throneRoom"]}, //Slightly older card version (2018)
    Scholar:        {cost: 5,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "discarder"]},
    Sculptor:       {cost: 5,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "workshop", "gainer", "plusVillagers"]},
    Seer:           {cost: 5,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["cantrip", "inspector", "drawer"]},
    Spices:         {cost: 5,   expansion: "renaissance",   edition: "base",    types: ["treasure"],                        tags: ["plusBuy", "plusCoffers"]},
    Swashbuckler:   {cost: 5,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "plusCoffers", "gainer"]},
    Treasurer:      {cost: 5,   expansion: "renaissance",   edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "trasher", "gainFromTrash"]},
    Villain:        {cost: 5,   expansion: "renaissance",   edition: "base",    types: ["action", "attack"],                tags: ["terminal", "plusCoffers", "handSizeAttack"]},

    /*** 
     * PLUNDER
     ***/
    Cage:           {cost: 2,   expansion: "plunder",       edition: "base",    types: ["treasure", "duration"],            tags: ["setAside", "oneshot", "staysInPlay"]},
    Grotto:         {cost: 2,   expansion: "plunder",       edition: "base",    types: ["action", "duration"],              tags: ["discarder", "discardForBenefit", "delayedDrawer"]},
    JewelledEgg:    {cost: 2,   expansion: "plunder",       edition: "base",    types: ["treasure"],                        tags: ["plusBuy", "trashFodder", "lootGainer"]},
    Search:         {cost: 2,   expansion: "plunder",       edition: "base",    types: ["action", "duration"],              tags: ["terminal", "virtualCoin", "discarder", "oneshot", "gainer", "lootGainer"]},
    Shaman:         {cost: 2,   expansion: "plunder",       edition: "base",    types: ["action"],                          tags: ["virtualCoin", "trasher", "gainFromTrash", "gameChanger"]},
    SecludedShrine: {cost: 3,   expansion: "plunder",       edition: "base",    types: ["action", "duration"],              tags: ["terminal", "virtualCoin", "staysInPlay", "trasher"]},
    Siren:          {cost: 3,   expansion: "plunder",       edition: "base",    types: ["action", "duration", "attack"],    tags: ["terminal", "curserAttack", "drawToX", "gainCondition"]},
    Stowaway:       {cost: 3,   expansion: "plunder",       edition: "base",    types: ["action", "duration", "reaction"],  tags: ["terminal", "delayedDrawer"]},
    Taskmaster:     {cost: 3,   expansion: "plunder",       edition: "base",    types: ["action", "duration"],              tags: ["virtualCoin", "staysInPlay"]},
    Abundance:      {cost: 4,   expansion: "plunder",       edition: "base",    types: ["treasure", "duration"],            tags: ["staysInPlay", "plusBuy"]},
    CabinBoy:       {cost: 4,   expansion: "plunder",       edition: "base",    types: ["action", "duration"],              tags: ["cantrip", "virtualCoin", "oneshot", "remodel"]}, //NOTE Remodel for self replacing effect
    Crucible:       {cost: 4,   expansion: "plunder",       edition: "base",    types: ["treasure"],                        tags: ["trasher", "trashForBenefit", "virtualCoin"]},
    Flagship:       {cost: 4,   expansion: "plunder",       edition: "base",    types: ["action", "duration", "command"],   tags: ["terminal", "virtualCoin", "throneRoom"]},
    FortuneHunter:  {cost: 4,   expansion: "plunder",       edition: "base",    types: ["action"],                          tags: ["terminal", "virtualCoin", "inspector"]},
    Gondola:        {cost: 4,   expansion: "plunder",       edition: "base",    types: ["treasure", "duration"],            tags: []},
    HarborVillage:  {cost: 4,   expansion: "plunder",       edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "virtualCoin"]},
    LandingParty:   {cost: 4,   expansion: "plunder",       edition: "base",    types: ["action", "duration"],              tags: ["cantrip", "drawer", "village", "staysInPlay"]},
    Mapmaker:       {cost: 4,   expansion: "plunder",       edition: "base",    types: ["action", "reaction"],              tags: ["terminal", "sifter", "drawer", "discarder"]},
    Maroon:         {cost: 4,   expansion: "plunder",       edition: "base",    types: ["action"],                          tags: ["terminal", "trasher", "trashForBenefit", "drawer"]},
    Rope:           {cost: 4,   expansion: "plunder",       edition: "base",    types: ["treasure", "duration"],            tags: ["plusBuy", "delayedDrawer", "trasher"]},
    SwampShacks:    {cost: 4,   expansion: "plunder",       edition: "base",    types: ["action"],                          tags: ["village", "drawer"]},
    Tools:          {cost: 4,   expansion: "plunder",       edition: "base",    types: ["treasure"],                        tags: ["gainer"]},
    BuriedTreasure: {cost: 5,   expansion: "plunder",       edition: "base",    types: ["treasure", "duration"],            tags: ["plusBuy"]},
    Crew:           {cost: 5,   expansion: "plunder",       edition: "base",    types: ["action", "duration"],              tags: ["terminal", "drawer", "topDecker"]},
    Cutthroat:      {cost: 5,   expansion: "plunder",       edition: "base",    types: ["action", "duration", "attack"],    tags: ["terminal", "handSizeAttack", "staysInPlay", "lootGainer"]},
    Enlarge:        {cost: 5,   expansion: "plunder",       edition: "base",    types: ["action", "duration"],              tags: ["terminal", "remodel", "trasher", "trashForBenefit"]},
    Figurine:       {cost: 5,   expansion: "plunder",       edition: "base",    types: ["treasure"],                        tags: ["drawer", "discarder", "plusBuy", "virtualCoin"]},
    FirstMate:      {cost: 5,   expansion: "plunder",       edition: "base",    types: ["action"],                          tags: ["terminal", "drawToX"]},
    Frigate:        {cost: 5,   expansion: "plunder",       edition: "base",    types: ["action", "duration", "attack"],    tags: ["terminal", "virtualCoin", "handSizeAttack"]},
    Longship:       {cost: 5,   expansion: "plunder",       edition: "base",    types: ["action", "duration"],              tags: ["village", "delayedDrawer"]},
    MiningRoad:     {cost: 5,   expansion: "plunder",       edition: "base",    types: ["action"],                          tags: ["plusBuy", "virtualCoin"]},
    Pendant:        {cost: 5,   expansion: "plunder",       edition: "base",    types: ["treasure"],                        tags: []},
    Pickaxe:        {cost: 5,   expansion: "plunder",       edition: "base",    types: ["treasure"],                        tags: ["trasher", "lootGainer"]},
    Pilgrim:        {cost: 5,   expansion: "plunder",       edition: "base",    types: ["action"],                          tags: ["terminal", "drawer", "topDecker"]},
    Quartermaster:  {cost: 5,   expansion: "plunder",       edition: "base",    types: ["action", "duration"],              tags: ["terminal", "workshop", "gainer", "staysInPlay"]},
    SilverMine:     {cost: 5,   expansion: "plunder",       edition: "base",    types: ["treasure"],                        tags: ["workshop", "gainer"]},
    Trickster:      {cost: 5,   expansion: "plunder",       edition: "base",    types: ["action", "attack"],                tags: ["terminal", "curserAttack", "setAside"]},
    WealthyVillage: {cost: 5,   expansion: "plunder",       edition: "base",    types: ["action"],                          tags: ["cantrip", "village", "lootGainer"]},
    SackOfLoot:     {cost: 6,   expansion: "plunder",       edition: "base",    types: ["treasure"],                        tags: ["plusBuy", "lootGainer"]},
    KingsCache:     {cost: 7,   expansion: "plunder",       edition: "base",    types: ["treasure"],                        tags: ["throneRoom"]},
};

const landscapes = 
{
    /*** 
     * EVENTS
     ***/
    Alms:           {cost: 0,   expansion: "adventures",    edition: "base",    types: ["event"],               tags: ["workshop", "gainer"]},
    Borrow:         {cost: 0,   expansion: "adventures",    edition: "base",    types: ["event"],               tags: ["virtualCoin"]},
    Quest:          {cost: 0,   expansion: "adventures",    edition: "base",    types: ["event"],               tags: ["discarder", "gainer"]},



    Bonfire:        {cost: 2,   expansion: "adventures",    edition: "base",    types: ["event"],               tags: ["trasher"]}, //Older version (2017)
};

function validateCardList()
{
    for(const [cardName, properties] of Object.entries(cards))
    {
        //Validate expansions
        let invalidExpansion = false;
        let invalidEdition = false;

        //Validate types
        let invalidTypes = false;
        for(const type in properties.types)
        {
            if(!(type in types)) 
            {
                invalidTypes = true;
                console.log(type);
                break;
            }
        }

        //Validate tags
        let invalidTags = false;
        for(const tag in properties.tags)
        {
            if(!(tag in tags)) 
            {
                invalidTags = true;
                console.log(tag);
                break;
            }
        }

        if(invalidTypes || invalidTags)
        {
            return "invalid";
        }
        return "";
    }
}