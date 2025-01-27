
{
/*
const baseKeyword = "Base";
const firstKeyword = "1st";
const secondKeyword = "2nd";

let settings = 
{
    expansions: 
    {
        baseBase: true, base2nd: true, 
        intrigueBase: true, intrigue2nd: true, 
        seasideBase: true, seaside1st: true,
        prosperityBase: true, prosperity2nd: true,
        empires: true
    },
    cardExclusions: {}, //None of these cards should be included
    cardInclusions: {}, //These cards are added to the pool (even when their expansion is not selected)
    cardGuarantee: {}, //These cards will be included in the pool
    tagExclusions: {}, //No cards of this tag should be included
    tagGuarantee: {}, //At least one card of this tag will be included
    special: {} //Special options (such as "always include a defense with an attack" or "include a village given more than 5 terminals")
};

let sortBySet = false;
let cardPool = [];

let keywordToSetLookup = {};
function generateKeywordToSetLookup()
{
    for(let x = 0; x < sets.length; x++)
    {
        let setName = sets[x];
        keywordToSetLookup[setName + baseKeyword] = setName;
        keywordToSetLookup[setName + firstKeyword] = setName;
        keywordToSetLookup[setName + secondKeyword] = setName;
    }
}

function setButtonStates()
{
    for(let x = 0; x < sets.length; x++)
    {
        let setName = sets[x];
        let setCheckbox = document.getElementById(setName);
        let set1stRadio = document.getElementById(setName + firstKeyword);
        let set2ndRadio = document.getElementById(setName + secondKeyword);

        if(set1stRadio !== null) //Multiple Editions
        {
            if(!setCheckbox.checked) //Base set not selected
            {
                set1stRadio.checked = false;
                set2ndRadio.checked = false;
            }
            else if(!set1stRadio.checked && !set2ndRadio.checked) //Neither editions selected
            {
                //Set all possible to true
                if(!set1stRadio.disabled)
                {
                    set1stRadio.checked = true;
                }
                if(!set2ndRadio.disabled)
                {
                    set2ndRadio.checked = true;
                }
            }
        }

        //Set buttons for default selection
        if(set1stRadio === null) //One Edition Only
        {
            if(settings.expansions[setName] === true) //Set is selected by default
            {
                setCheckbox.checked = true;
            }
        }
        else //Multiple Editions
        {
            if(settings.expansions[setName + baseKeyword] === true) //Base is selected by default
            {
                setCheckbox.checked = true;
                if(settings.expansions[setName + firstKeyword] === true)
                {
                    set1stRadio.checked = true;
                }
                if(settings.expansions[setName + secondKeyword] === true)
                {
                    set2ndRadio.checked = true;
                }
            }
        }
    }
}
function getButtonStates()
{
    for(let x = 0; x < sets.length; x++)
    {
        let setName = sets[x];
        let setCheckbox = document.getElementById(setName);
        let set1stRadio = document.getElementById(setName + firstKeyword);
        let set2ndRadio = document.getElementById(setName + secondKeyword);

        if(set1stRadio === null) //Only one Edition
        {
            if(setCheckbox.checked) 
            {
                settings.expansions[setName] = true;
            }
            else
            {
                settings.expansions[setName] = false;
            }
        }
        else //Multiple Editions
        {
            if(setCheckbox.checked) //Base set
            {
                settings.expansions[setName + baseKeyword] = true;
                if(set1stRadio.checked)
                {
                    settings.expansions[setName + firstKeyword] = true;
                }
                else
                {
                    settings.expansions[setName + firstKeyword] = false;
                }
                if(set2ndRadio.checked)
                {
                    settings.expansions[setName + secondKeyword] = true;
                }
                else
                {
                    settings.expansions[setName + secondKeyword] = false;
                }
            }
            else
            {
                settings.expansions[setName + baseKeyword] = false;
                settings.expansions[setName + firstKeyword] = false;
                settings.expansions[setName + secondKeyword] = false;
            }
        }
    }
}
function updateButtons()
{
    getButtonStates();
    setButtonStates();
}


function generate()
{
    let finalSet = {};
    let resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = ""; //Reset set

    cardPool = generateMainPool(settings.expansions, settings.cardExclusions);
    let randomSet = getRandomSet(10, cardPool);

    if(randomSet == [])
    {
        return;
    }

    randomSet = sortSet(randomSet);
    drawResultSet(randomSet);

    //resultArea.hidden = "";
    resultArea.setAttribute("class", "container");
}

function drawResultSet(randomSet)
{
    let resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = ""; //Reset set
    for(let x = 0; x < randomSet.length; x++)
    {
        resultArea.appendChild(cards[randomSet[x]].image);
    }
}

function generateMainPool(expansions, cardExclusions)
{
    let pool = [];

    let cardList = Object.keys(cards);
    for(let x = 0; x < cardList.length; x++)
    {
        let cardName = cardList[x];
        let cardExpansion = cards[cardName].set;

        if(expansions[cardExpansion] === true && (cardExclusions[cardName] === undefined || cardExclusions[cardName] === false))
        {
            pool.push(cardName);
        }
    }

    return pool;
}

function getRandomSet(numCards, pool)
{
    //Empty pool
    if(pool.length < numCards)
    {
        alert("Insufficient Cards");
        return [];
    }

    let randomSet = [];
    for(let x = 0; x < numCards; x++)
    {
        let randomIndex = Math.floor(Math.random() * pool.length);
        randomSet.push(pool[randomIndex]);
        pool.splice(randomIndex, 1);
    }
    return randomSet;
}

function sortSet(set)
{
    let finalSet = [];
    let setLength = set.length;
    //Sort by set first, then cost
    if(sortBySet)
    {
        for(let x = 0; x < set.length; x++)
        {
            //TODO
        }

        return set;
    }
    else //Sort by cost 
    {
        for(let x = 0; x < setLength; x++)
        {
            let maxCostCard = set[0];
            let maxCostIndex = 0;
            for(let y = 0; y < set.length; y++)
            {
                if(cards[set[y]].cost > cards[maxCostCard].cost)
                {
                    maxCostCard = set[y];
                    maxCostIndex = y;
                }
            }

            finalSet.push(maxCostCard);
            set.splice(maxCostIndex, 1);
        }
    }

    return finalSet;
}

function toggleSort()
{
    if(cardPool.length === 0)
    {
        return;
    }
    
    sortBySet = !sortBySet;
    let newSet = sortSet(cardPool);
    drawResultSet(newSet);
}

*/
}

//Rules: 
//at least one X        = place one of X in final selection first
//if one X, then one Y  = after each pick, check if its an X: if so, check if there's an Y and add it if not; if no Y when picking final card, don't add X

//let cardPool = [];

let failedGenerations = 0; //Counter for bruteForceGenerate

//
//Helpers
//RNG
function getRandomInt(upperbound) //Returns a random int in [0,upperbound)
{
    return Math.floor(Math.random() * upperbound);
}

//
//Sorters (sorts everything in a selection object)
//Sort by Cost
function sortByCost(selection)
{
    selection.kingdom.sort(function(a, b) //Sort cards
    {
        return -(cards[a].cost - cards[b].cost);
    });

    selection.landscapes.sort(function(a, b) //Sort landscapes
    {
        return -(landscapes[a].cost - landscapes[b].cost);
    });

    return selection;
}
//Sort by expansion
function sortByExpansion(selection)
{
    selection.kingdom.sort(function(a, b) //Sort cards
    {
        let expansionIndexA = expansions[cards[a].expansion].index;
        let expansionIndexB = expansions[cards[b].expansion].index;
        let cardCostA = cards[a].cost;
        let cardCostB = cards[b].cost;
        return -((expansionIndexA * 100 + cardCostA) - (expansionIndexB * 100 + cardCostB));
    });

    selection.landscapes.sort(function(a, b) //Sort landscapes
    {
        let expansionIndexA = expansions[landscapes[a].expansion].index;
        let expansionIndexB = expansions[landscapes[b].expansion].index;
        let landscapeCostA = landscapes[a].cost;
        let landscapeCostB = landscapes[b].cost;
        return -((expansionIndexA * 100 + landscapeCostA) - (expansionIndexB * 100 + landscapeCostB));
    });

    return selection;
}
//Sort by name
function sortByName(selection)
{
    selection.kingdom.sort(); //Sort cards
    
    selection.landscapes.sort(); //Sort landscapes

    return selection;
}

//
//Card Pool and Restrictions
function buildCardPool()
{
    //Reset card pool
    cardPool = {cards: [], landscapes: []};

    //Query card settings
    let expansionSelections = queryExpansionSettings();
    for(const card of Object.keys(cards))
    {
        if(expansionSelections[cards[card].expansion][cards[card].edition])
        {
            cardPool.cards.push(card);
        }
    }

    //Query landscape settings
    let landscapeSelections = queryLandscapeSettings();
    for(const landscape of Object.keys(landscapes))
    {
        if(landscapeSelections[landscapes[landscape].expansion][landscapes[landscape].types[0]]) //NOTE Assuming no multi-typed landscapes
        {
            cardPool.landscapes.push(landscape);
        }
    }

    return cardPool;
}
//Rules
const rules = 
{
    //Helper rules (cannot be invoked from queryGenerationRules())
    enforceTrait1AddingTrait2: function(selection, trait1, trait1Value, trait2, trait2Value) //If the selection contains a card with trait1, it must also contain a card with trait2
    {
        //A ==> B <=> ~A || B
        if(!this.min(selection, trait1, trait1Value, 1) || this.min(selection, trait2, trait2Value, 1))
        {
            return true;
        }
        return false;
    },

    //General rules
    min: function(selection, trait, traitValue, parameter) //Parameter is an integer n, where the final set will contain >= n cards of X traitValue
    {
        let count = 0;
        for(const cardName of selection.kingdom)
        {
            //Match
            if((cards[cardName][trait] == traitValue) || (Array.isArray(cards[cardName][trait]) && cards[cardName][trait].includes(traitValue))) //Some traits are single "" while some are [""]
            {
                if(verboseDebug) {console.log("MIN - For " + trait + "=" + traitValue + " matching card is " + cardName);}
                count++;
            }
        }
        for(const landscapeName of selection.landscapes)
        {
            //Match
            if((landscapes[landscapeName][trait] == traitValue) || (Array.isArray(landscapes[landscapeName][trait]) && landscapes[landscapeName][trait].includes(traitValue))) //Some traits are single "" while some are [""]
            {
                if(verboseDebug) {console.log("MIN - For " + trait + "=" + traitValue + " matching card is " + landscapeName);}
                count++;
            }
        }
        for(const extraType of Object.keys(selection.extras))
        {
            const extraName = selection.extras[extraType];
            //Match (extras could be both cards or landscapes)
            if(cards[extraName] !== undefined) //Cards
            {
                if((cards[extraName][trait] == traitValue) || (Array.isArray(cards[extraName][trait]) && cards[extraName][trait].includes(traitValue))) //Some traits are single "" while some are [""]
                {
                    if(verboseDebug) {console.log("MIN - For " + trait + "=" + traitValue + " matching card is " + extraName);}
                    count++;
                }
            }
            else if(landscapes[extraName] !== undefined) //Landscapes
            {
                if((landscapes[extraName][trait] == traitValue) || (Array.isArray(landscapes[extraName][trait]) && landscapes[extraName][trait].includes(traitValue))) //Some traits are single "" while some are [""]
                {
                    if(verboseDebug) {console.log("MIN - For " + trait + "=" + traitValue + " matching card is " + extraName);}
                    count++;
                }
            }
        }

        if(count < parameter) //Min rule
        {
            return false;
        }
        return true;
    },
    max: function(selection, trait, traitValue, parameter) //Parameter is an integer n, where the final set will contain <= n cards of X traitValue
    {
        let count = 0;
        for(const cardName of selection.kingdom)
        {
            //Match
            if((cards[cardName][trait] == traitValue) || (Array.isArray(cards[cardName][trait]) && cards[cardName][trait].includes(traitValue))) //Some traits are single "" while some are [""]
            {
                count++;
                if(verboseDebug) {console.log("MAX - For " + trait + "=" + traitValue + " matching card is " + cardName + ", this is number " + count);}
            }
        }
        for(const landscapeName of selection.landscapes)
        {
            //Match
            if((landscapes[landscapeName][trait] == traitValue) || (Array.isArray(landscapes[landscapeName][trait]) && landscapes[landscapeName][trait].includes(traitValue))) //Some traits are single "" while some are [""]
            {
                count++;
                if(verboseDebug) {console.log("MAX - For " + trait + "=" + traitValue + " matching card is " + landscapeName + ", this is number " + count);}
            }
        }
        for(const extraType of Object.keys(selection.extras))
        {
            const extraName = selection.extras[extraType];
            //Match (extras could be both cards or landscapes)
            if(cards[extraName] !== undefined) //Cards
            {
                if((cards[extraName][trait] == traitValue) || (Array.isArray(cards[extraName][trait]) && cards[extraName][trait].includes(traitValue))) //Some traits are single "" while some are [""]
                {
                    count++;
                    if(verboseDebug) {console.log("MAX - For " + trait + "=" + traitValue + " matching card is " + extraName + ", this is number " + count);}
                }
            }
            else if(landscapes[extraName] !== undefined) //Landscapes
            {
                if((landscapes[extraName][trait] == traitValue) || (Array.isArray(landscapes[extraName][trait]) && landscapes[extraName][trait].includes(traitValue))) //Some traits are single "" while some are [""]
                {
                    count++;
                    if(verboseDebug) {console.log("MAX - For " + trait + "=" + traitValue + " matching card is " + extraName + ", this is number " + count);}
                }
            }
        }

        if(count > parameter) //Max rule
        {
            return false;
        }
        return true;
    },

    //Specific rules
    oneCardRemover: function(selection, trait, traitValue, parameter) //Contains at least 1 card that can remove cards (i.e. trash, exile, etc.)
    {
        if(this.min(selection, "tags", "trasher", 1) || this.min(selection, "tags", "nonTrashingTrasher", 1) || this.min(selection, "tags", "nonExileExile", 1) || this.min(selection, "tags", "exile", 1))
        {
            return true;
        }
        return false;
    },
    oneNonAttackInteraction: function(selection, trait, traitValue, parameter) //Contains at least 1 card that requires opponent input (but is not an Attack)
    {
        if(this.min(selection, "tags", "positiveInteraction", 1) || this.min(selection, "tags", "neutralInteraction", 1))
        {
            return true;
        }
        return false;
    },

    //Vanilla rules (these rules are always true regardless of player settings)
    vanillaRules: 
    {
        //Allies
        enforceLiaisonsAndAllies: function(selection) //Liaisons always spawn an ally and vice versa
        {
            return rules.enforceTrait1AddingTrait2(selection, "types", "liaison", "types", "ally") && rules.enforceTrait1AddingTrait2(selection, "types", "ally", "types", "liaison");
        },
        //Rising Sun
        enforceOmensAndProphecies: function(selection) //Omens always spawn a prophecy and vice versa
        {
            return rules.enforceTrait1AddingTrait2(selection, "types", "omen", "types", "prophecy") && rules.enforceTrait1AddingTrait2(selection, "types", "prophecy", "types", "omen");
        },
        //Name template for one direction implications: enforceXAddingY, for both directions: enforceXsAndYs
        /* //If only prophecies were selected in the landscape pool, then all generations fail (ideally, it should just generate with one landscape instead of two)
        limitPropheciesToOne: function(selection)
        {
            return rules.max(selection, "types", "prophecy", 1);
        }
        */
    }
};
//Builds a subpool of valid extra cards for a card that adds extra
const buildSubPool = 
{
    //Main function
    build: function(pool, filter)
    {
        //Non-existant filter
        if(filter === undefined)
        {
            return null;
        }

        let finalPool = {cards: [], landscapes: []};
        for(let x = 0; x < pool.cards.length; x++)
        {
            let cardInfoObj = buildSubPool.retrieveCardInfo(pool.cards[x]);
            if(cardInfoObj !== null && filter(cardInfoObj))
            {
                finalPool.cards.push(pool.cards[x]);
            }
        }
        for(let x = 0; x < pool.landscapes.length; x++)
        {
            let cardInfoObj = buildSubPool.retrieveCardInfo(pool.landscapes[x]);
            if(cardInfoObj !== null && filter(cardInfoObj))
            {
                finalPool.landscapes.push(pool.landscapes[x]);
            }
        }
        return finalPool;
    },
    //Helper, returns an object containing the card info from cards or landscapes and some properties that contain extra info; or null if the name is invalid
    retrieveCardInfo: function(name)
    {
        if(cards[name] !== undefined)
        {
            return {
                info: cards[name],
                type: "card"
            };
        }
        if(landscapes[name] !== undefined)
        {
            return {
                info: landscapes[name],
                type: "landscape"
            };
        }
        return null;
    },

    filters: 
    {
        //Cornucopia
        YoungWitch: function(cardInfo)
        {
            //Unused 2 or 3 cost kingdom pile
            if(cardInfo.type === "card" && (cardInfo.info["cost"] === 2 || cardInfo.info["cost"] === 3))
            {
                return true;
            }
            return false;
        },
        //Guilds and Cornucopia 2E
        Ferryman: function(cardInfo)
        {
            //Unused 3 or 4 cost kingdom pile
            if(cardInfo.type === "card" && (cardInfo.info["cost"] === 3 || cardInfo.info["cost"] === 4))
            {
                return true;
            }
            return false;
        },
        //Menagerie
        WayOfTheMouse: function(cardInfo)
        {
            //Unused 2 or 3 cost action pile
            if(cardInfo.type === "card" && (cardInfo.info["cost"] === 2 || cardInfo.info["cost"] === 3) && cardInfo.info["types"].includes("action"))
            {
                return true;
            }
            return false;
        },
        //Rising Sun
        Riverboat: function(cardInfo)
        {
            //Unused 5 cost non-duration action pile
            if(cardInfo.type === "card" && cardInfo.info["cost"] === 5 && cardInfo.info["types"].includes("action") && !cardInfo.info["types"].includes("duration"))
            {
                return true;
            }
            return false;
        },
        ApproachingArmy: function(cardInfo)
        {
            //Unused 2 or 3 cost action pile
            if(cardInfo.type === "card" && cardInfo.info["types"].includes("action") && cardInfo.info["types"].includes("attack"))
            {
                return true;
            }
            return false;
        }
    }
};

//
//Random Generation
function uniformGenerate(numCards, numLandscapes, pool) //Pick with uniform randomness, ignoring tags and other restrictions
{
    let cardPool = pool.cards;
    let landscapePool = pool.landscapes;

    let cardPoolSize = cardPool.length;
    let landscapePoolSize = landscapePool.length;
    let currentCardPool = cardPool.slice(); //Copy pool array
    let currentlandscapePool = landscapePool.slice(); //Copy pool array
    let selection = {};
    selection.kingdom = [];
    selection.landscapes = [];
    selection.extras = {};

    if(numCards > cardPoolSize)
    {
        console.log("!!! Pool Size Too Small !!!");
        return null;
    }

    //Pre-add the whitelist
    for(let x = 0; x < currentWhitelist.kingdom.length; x++)
    {
        let currentCard = currentWhitelist.kingdom[x];

        //Add to selection
        selection.kingdom.push(currentCard);
        numCards--;

        //Remove from cardPool if present
        let index = currentCardPool.indexOf(currentCard);
        if(index !== -1) //Is in the card pool
        {
            currentCardPool.splice(index, 1);
        }
        cardPoolSize--;
    }
    for(let x = 0; x < currentWhitelist.landscapes.length; x++)
    {
        let currentLandscape = currentWhitelist.landscapes[x];

        //Add to selection
        selection.landscapes.push(currentLandscape);
        numLandscapes--;

        //Remove from cardPool if present
        let index = currentlandscapePool.indexOf(currentLandscape);
        if(index !== -1) //Is in the card pool
        {
            currentlandscapePool.splice(index, 1);
        }
        landscapePoolSize--;
    }

    //Select cards
    for(let x = 0; x < numCards; x++)
    {
        let nextIndex = getRandomInt(cardPoolSize);
        selection.kingdom.push(currentCardPool[nextIndex]);
        currentCardPool.splice(nextIndex, 1);
        cardPoolSize--;
    }

    //Select landscapes
    for(let x = 0; x < numLandscapes; x++)
    {
        if(landscapePoolSize <= 0) //No landscapes
        {
            break;
        }

        let nextIndex = getRandomInt(landscapePoolSize);
        selection.landscapes.push(currentlandscapePool[nextIndex]);
        currentlandscapePool.splice(nextIndex, 1);
        landscapePoolSize--;
    }

    //Add extras (e.g. Way of the Mouse's extra 2 or 3 cost)
    for(let x = 0; x < selection.kingdom.length; x++) //Check for extras in the kingdom
    {
        let currentName = selection.kingdom[x];
        let subpool = buildSubPool.build({cards: currentCardPool, landscapes: currentlandscapePool}, buildSubPool.filters[currentName]);
        if(subpool !== null) //This is a card that adds extras
        {
            //NOTE: Currently only pulls one card from subpool or one landscape from subpool; if subpool has cards, it will not pull from landscapes (i.e. only ever pulls from cards or landscapes, not both)
            if(subpool.cards.length !== 0) //Pull a card
            {
                selection.extras[currentName] = subpool.cards[getRandomInt(subpool.cards.length)];
            }
            else if(subpool.landscapes.length !== 0) //Pull a landscape
            {
                selection.extras[currentName] = subpool.landscapes[getRandomInt(subpool.landscapes.length)];
            }
        }
    }
    for(let x = 0; x < selection.landscapes.length; x++) //Check for extras in the landscapes
    {
        let currentName = selection.landscapes[x];
        let subpool = buildSubPool.build({cards: currentCardPool, landscapes: currentlandscapePool}, buildSubPool.filters[currentName]);
        
        if(subpool !== null) //This is a card that adds extras
        {
            //NOTE: Currently only pulls one card from subpool or one landscape from subpool; if subpool has cards, it will not pull from landscapes (i.e. only ever pulls from cards or landscapes, not both)
            if(subpool.cards.length !== 0) //Pull a card
            {
                selection.extras[currentName] = subpool.cards[getRandomInt(subpool.cards.length)];
                //TODO if there is no valid cards for an extra (e.g. all the valid 5 cost cards are used already), the randomizer currently does nothing (it should skip to next iteration instead)
            }
            else if(subpool.landscapes.length !== 0) //Pull a landscape
            {
                selection.extras[currentName] = subpool.landscapes[getRandomInt(subpool.landscapes.length)];
            }
        }
    }

    return selection;
}
function bruteForceGenerate(numCards, numLandscapes, pool, activeRules, limit) //Uniform generate sets until one adheres with all rules
{
    failedGenerations = 0;
    for(let x = 0; x < limit; x++)
    {
        let candidate = uniformGenerate(numCards, numLandscapes, pool);
        if(candidate === null) {return null;}

        let pass = true;

        //Process Vanilla (always true) Rules
        let vanillaRuleNames = Object.keys(rules.vanillaRules);
        for(let y = 0; y < vanillaRuleNames.length; y++)
        {
            if(!rules.vanillaRules[vanillaRuleNames[y]](candidate))
            {
                pass = false;
                if(verboseDebug) {console.log("   Fails vanilla rule selection: " + vanillaRuleNames[y]);}
                failedGenerations++;
                break;
            }
        }
        if(!pass) {continue;}
        //Process Rules
        for(let y = 0; y < activeRules.length; y++)
        {
            let currentRule = activeRules[y];
            
            if(!pass || !rules[currentRule.rule](candidate, currentRule.trait, currentRule.traitValue, currentRule.parameter))
            {
                pass = false;
                if(verboseDebug) {console.log("   Fails rule selection: " + currentRule.rule);}
                failedGenerations++;
                break;
            }
        }
        if(!pass) {continue;}

        //Process Blacklist
        let lowercaseBlacklist = currentBlacklist.map(function(x) {return x.toLowerCase();});
        for(const cardName of candidate.kingdom)
        {
            if(lowercaseBlacklist.includes(cardName.toLowerCase()))
            {
                pass = false;
                if(verboseDebug) {console.log("BLACKLIST - " + cardName + " fails blacklist selection.");}
                failedGenerations++;
                break;
            }
        }
        if(!pass) {continue;}
        for(const landscapeName of candidate.landscapes)
        {
            if(lowercaseBlacklist.includes(landscapeName.toLowerCase()))
            {
                pass = false;
                if(verboseDebug) {console.log("BLACKLIST - " + landscapeName + " fails blacklist selection.");}
                failedGenerations++;
                break;
            }
        }
        if(!pass) {continue;}

        if(pass)
        {
            return candidate;
        }
    }

    return null;
}

function testGenerate()
{
   return {
        kingdom: [
            "Cellar",
            "Chapel",
            "Moat",
            "Village",
            "Workshop",
            "Bureaucrat",
            "Gardens",
            "Militia",
            "Moneylender",
            "Remodel"
        ],
        landscapes: [
            "Quest",
            "Bonfire"
        ]
   };
}