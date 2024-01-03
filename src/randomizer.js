
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

    if(numCards > cardPoolSize)
    {
        console.log("!!! Pool Size Too Small !!!");
        return null;
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

        //Process Rules
        for(let y = 0; y < activeRules.length; y++)
        {
            let currentRule = activeRules[y];
            
            if(!rules[currentRule.rule](candidate, currentRule.trait, currentRule.traitValue, currentRule.parameter))
            {
                pass = false;
                if(verboseDebug) {console.log("   Fails rule selection.");}
                failedGenerations++;
                break;
            }
        }
        if(!pass) {continue;}

        //Process Blacklist
        for(const cardName of candidate.kingdom)
        {
            if(currentBlacklist.includes(cardName.toLowerCase()))
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
            if(currentBlacklist.includes(landscapeName.toLowerCase()))
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