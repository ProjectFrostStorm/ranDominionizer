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
    "plusVP",

    "discarder",
    "delayedDrawer",
    "setAside",
    
    "nonExileExile",

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
    Masquerade:     {cost: 3,   set: "intrigueBase", types: ["action"],             tags: ["terminal", "drawer", "trasher", "nonTrashingTrasher", "nonAttackerAttack"]},
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
    Haven:          {cost: 2,   set: "seasideBase", types: ["action", "duration"],  tags: ["setAside", "delayedDrawer"]},
    Lighthouse:     {cost: 2,   set: "seasideBase", types: ["action", "duration"],  tags: ["virtualCoin", "defender"]},
    NativeVillage:  {cost: 2,   set: "seasideBase", types: ["action"],              tags: ["village", "nonExileExile"]},
    FishingVillage: {cost: 3,   set: "seasideBase", types: ["action", "duration"],  tags: ["village", "virtualCoin"]},
    Lookout:        {cost: 3,   set: "seasideBase", types: ["action"],              tags: ["trasher", "sifter", "inspector", "discarder"]},
    Smugglers:      {cost: 3,   set: "seasideBase", types: ["action"],              tags: ["terminal", "workshop", "gainer"]},
    Warehouse:      {cost: 3,   set: "seasideBase", types: ["action"],              tags: ["sifter", "warehouse", "discarder"]},
    Caravan:        {cost: 4,   set: "seasideBase", types: ["action", "duration"],  tags: ["cantrip", "delayedDrawer"]},
    Cutpurse:       {cost: 4,   set: "seasideBase", types: ["action", "attack"],    tags: ["terminal", "virtualCoin", "handSizeAttack"]},
    Island:         {cost: 4,   set: "seasideBase", types: ["action", "victory"],   tags: ["terminal", "nonExileExile"]},
    Salvager:       {cost: 4,   set: "seasideBase", types: ["action"],              tags: ["terminal", "plusBuy", "trasher", "trashForBenefit", "virtualCoin"]},
    TreasureMap:    {cost: 4,   set: "seasideBase", types: ["action"],              tags: ["terminal", "oneshot", "gainer"]},
    Bazaar:         {cost: 5,   set: "seasideBase", types: ["action"],              tags: ["cantrip", "village", "virtualCoin", "vanilla"]},
    MerchantShip:   {cost: 5,   set: "seasideBase", types: ["action", "duration"],  tags: ["terminal", "virtualCoin"]},
    Outpost:        {cost: 5,   set: "seasideBase", types: ["action", "duration"],  tags: ["terminal", "extraTurn"]},
    Tactician:      {cost: 5,   set: "seasideBase", types: ["action", "duration"],  tags: ["terminal", "delayedDrawer", "plusBuy", "village", "discarder"]},
    Treasury:       {cost: 5,   set: "seasideBase", types: ["action"],              tags: ["cantrip", "virtualCoin", "peddler", "topDecker"]},
    Wharf:          {cost: 5,   set: "seasideBase", types: ["action", "duration"],  tags: ["terminal", "drawer", "plusBuy", "delayedDrawer"]},

    /*** 
     * SEASIDE (1ST EDITION)
     ***/
    Embargo:        {cost: 2,   set: "seaside1st",  types: ["action"],              tags: ["terminal", "oneshot", "curserAttack"]}, //No full resolution image
    PearlDiver:     {cost: 2,   set: "seaside1st",  types: ["action"],              tags: ["cantrip", "topDecker"]},
    Ambassador:     {cost: 3,   set: "seaside1st",  types: ["action", "attack"],    tags: ["terminal", "nonTrashingTrasher", "otherJunkerAttack"]},
    Navigator:      {cost: 4,   set: "seaside1st",  types: ["action"],              tags: ["terminal", "virtualCoin", "inspector"]},
    PirateShip:     {cost: 4,   set: "seaside1st",  types: ["action", "attack"],    tags: ["terminal", "virtualCoin", "trashingAttack", "positiveInteraction", "choice"]}, //No full resolution image
    SeaHag:         {cost: 4,   set: "seaside1st",  types: ["action", "attack"],    tags: ["terminal", "curserAttack", "turnWorseningAttack"]},
    Explorer:       {cost: 5,   set: "seaside1st",  types: ["action"],              tags: ["terminal", "gainer"]},
    GhostShip:      {cost: 5,   set: "seaside1st",  types: ["action", "attack"],    tags: ["terminal", "drawer", "handSizeAttack", "turnWorseningAttack"]},

    /*** 
     * SEASIDE (2ND EDITION)
     ***/
    Astrolabe:      {cost: 3,   set: "seaside2nd",  types: ["treasure", "duration"],        tags: ["plusBuy"]},
    Monkey:         {cost: 3,   set: "seaside2nd",  types: ["action", "duration"],          tags: ["terminal", "delayedDrawer"]},
    SeaChart:       {cost: 3,   set: "seaside2nd",  types: ["action"],                      tags: ["cantrip", "inspector", "drawer"]},
    Blockade:       {cost: 4,   set: "seaside2nd",  types: ["action", "duration"],          tags: ["terminal", "workshop", "gainer", "curserAttack"]},
    Sailor:         {cost: 4,   set: "seaside2nd",  types: ["action", "duration"],          tags: ["virtualCoin", "trasher"]},
    TidePools:      {cost: 4,   set: "seaside2nd",  types: ["action", "duration"],          tags: ["cantrip", "drawer", "discarder"]},
    Corsair:        {cost: 5,   set: "seaside2nd",  types: ["action", "duration", "attack"],tags: ["terminal", "virtualCoin", "delayedDrawer", "trashingAttack"]},
    Pirate:         {cost: 5,   set: "seaside2nd",  types: ["action", "duration", "reaction"],tags: ["conditionalTerminal", "gainer"]},
    SeaWitch:       {cost: 5,   set: "seaside2nd",  types: ["action", "duration", "attack"],tags: ["terminal", "drawer", "curserAttack", "sifter"]},

    /*** 
     * PROSPERITY (BASE)
     ***/
    Watchtower:     {cost: 3,   set: "prosperityBase",  types: ["action", "reaction"],  tags: ["terminal", "drawer", "drawToX", "topDecker", "trasher"]},
    Bishop:         {cost: 4,   set: "prosperityBase",  types: ["action"],              tags: ["terminal", "virtualCoin", "plusVP", "trasher", "trashForBenefit", "positiveInteraction"]},
    Monument:       {cost: 4,   set: "prosperityBase",  types: ["action"],              tags: ["terminal", "virtualCoin", "plusVP"]},
    Quarry:         {cost: 4,   set: "prosperityBase",  types: ["treasure"],            tags: ["bridge"]},
    WorkersVillage: {cost: 4,   set: "prosperityBase",  types: ["action"],              tags: ["cantrip", "village", "plusBuy"]},
    City:           {cost: 5,   set: "prosperityBase",  types: ["action"],              tags: ["cantrip", "village", "drawer", "virtualCoin", "plusBuy"]},
    Mint:           {cost: 5,   set: "prosperityBase",  types: ["action"],              tags: ["terminal", "gainer", "trasher"]},
    Rabble:         {cost: 5,   set: "prosperityBase",  types: ["action", "attack"],    tags: ["terminal", "drawer", "deckInspectionAttack"]},
    Vault:          {cost: 5,   set: "prosperityBase",  types: ["action"],              tags: ["terminal", "drawer", "discardForBenefit", "virtualCoin", "positiveInteraction"]},
    GrandMarket:    {cost: 6,   set: "prosperityBase",  types: ["action"],              tags: ["cantrip", "plusBuy", "virtualCoin", "peddler"]},
    Hoard:          {cost: 6,   set: "prosperityBase",  types: ["treasure"],            tags: ["gainer"]},
    Bank:           {cost: 7,   set: "prosperityBase",  types: ["treasure"],            tags: ["virtualCoin"]},
    Expand:         {cost: 7,   set: "prosperityBase",  types: ["action"],              tags: ["terminal", "remodel", "trasher", "trashForBenefit"]},
    Forge:          {cost: 7,   set: "prosperityBase",  types: ["action"],              tags: ["terminal", "trasher", "trashForBenefit", "gainer", "remodel"]},
    KingsCourt:     {cost: 7,   set: "prosperityBase",  types: ["action"],              tags: ["throneRoom"]},
    Peddler:        {cost: 8,   set: "prosperityBase",  types: ["action"],              tags: ["cantrip", "virtualCoin", "peddler"]},

    /*** 
     * PROSPERITY (1ST EDITION)
     ***/

    /*** 
     * PROSPERITY (2ND EDITION)
     ***/
    Anvil:          {cost: 3,   set: "prosperity2nd",   types: ["treasure"],            tags: ["discardForBenefit", "workshop", "gainer"]},
    Clerk:          {cost: 4,   set: "prosperity2nd",   types: ["action", "reaction", "attack"], tags: ["conditionalTerminal", "virtualCoin", "handSizeAttack", "turnWorseningAttack"]},
    Investment:     {cost: 4,   set: "prosperity2nd",   types: ["treasure"],            tags: ["trasher", "virtualCoin", "oneshot", "plusVP", "choice"]},
    Tiara:          {cost: 4,   set: "prosperity2nd",   types: ["treasure"],            tags: ["plusBuy", "topDecker", "throneRoom"]},
    Charlatan:      {cost: 5,   set: "prosperity2nd",   types: ["action", "attack"],    tags: ["terminal", "virtualCoin", "curserAttack"]},
    Collection:     {cost: 5,   set: "prosperity2nd",   types: ["treasure"],            tags: ["plusBuy", "plusVP"]},
    CrystalBall:    {cost: 5,   set: "prosperity2nd",   types: ["treasure"],            tags: ["inspector", "trasher", "discarder"]},
    Magnate:        {cost: 5,   set: "prosperity2nd",   types: ["action"],              tags: ["terminal", "drawer"]},
    WarChest:       {cost: 5,   set: "prosperity2nd",   types: ["treasure"],            tags: ["workshop", "gainer"]},

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
    Engineer:       {cost: -1,  set: "empires",     types: ["action"],              tags: ["terminal", "workshop", "gainer", "oneshot"]},
    CityQuarter:    {cost: 0,   set: "empires",     types: ["action"],              tags: ["village", "drawer"]},
    Overlord:       {cost: 0,   set: "empires",     types: ["action", "command"],   tags: ["conditionalTerminal"]},
    RoyalBlacksmith:{cost: 0,   set: "empires",     types: ["action"],              tags: ["terminal", "drawer", "discarder"]},
    Encampment:     {cost: 2,   set: "empires",     types: ["action"],              tags: ["cantrip", "village", "drawer", "oneshot", "splitPile"]},
    Patrician:      {cost: 2,   set: "empires",     types: ["action"],              tags: ["cantrip", "drawer", "inspector"]},
    Settlers:       {cost: 2,   set: "empires",     types: ["action"],              tags: ["cantrip", "peddler"]},
    Castles:        {cost: 3,   set: "empires",     types: ["victory", "castle"],   tags: ["altvp", "plusVP", "gainer", "trasher", "discardForBenefit", "virtualCoin"]},
    Catapult:       {cost: 3,   set: "empires",     types: ["action", "attack"],    tags: ["terminal", "virtualCoin", "trashForBenefit", "handSizeAttack", "curserAttack"]},
    ChariotRace:    {cost: 3,   set: "empires",     types: ["action"],              tags: ["cantrip", "virtualCoin", "plusVP"]},
    Enchantress:    {cost: 3,   set: "empires",     types: ["action", "attack", "duration"], tags: ["terminal", "turnWorseningAttack", "delayedDrawer"]},
    FarmersMarket:  {cost: 3,   set: "empires",     types: ["action", "gathering"], tags: ["terminal", "plusBuy", "virtualCoin", "plusVP", "oneshot"]},
    Gladiator:      {cost: 3,   set: "empires",     types: ["action"],              tags: ["terminal", "virtualCoin", "trashFromSupply"]},
    Sacrifice:      {cost: 4,   set: "empires",     types: ["action"],              tags: ["conditionalTerminal", "village", "drawer", "virtualCoin", "plusVP"]},
    Temple:         {cost: 4,   set: "empires",     types: ["action", "gathering"], tags: ["terminal", "plusVP", "trasher"]},
    Villa:          {cost: 4,   set: "empires",     types: ["action"],              tags: ["village", "plusBuy", "virtualCoin"]},
    Archive:        {cost: 5,   set: "empires",     types: ["action", "duration"],  tags: ["cantrip", "setAside", "delayedDrawer"]},
    Capital:        {cost: 5,   set: "empires",     types: ["treasure"],            tags: ["plusBuy"]},
    Charm:          {cost: 5,   set: "empires",     types: ["treasure"],            tags: ["plusBuy", "workshop", "gainer", "choice"]}, //No full resolution image
    Crown:          {cost: 5,   set: "empires",     types: ["action", "treasure"],  tags: ["throneRoom"]},
    Forum:          {cost: 5,   set: "empires",     types: ["action"],              tags: ["cantrip", "sifter", "discarder"]}, //No full resolution image
    Groundskeeper:  {cost: 5,   set: "empires",     types: ["action"],              tags: ["cantrip", "plusVP"]}, //No full resolution image
    Legionary:      {cost: 5,   set: "empires",     types: ["action", "attack"],    tags: ["terminal", "virtualCoin", "handSizeAttack"]},
    WildHunt:       {cost: 5,   set: "empires",     types: ["action", "gathering"], tags: ["terminal", "drawer", "gainer", "plusVP"]},
};