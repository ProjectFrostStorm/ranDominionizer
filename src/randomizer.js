
const sets = 
[
    "base",
    "intrigue",
    "seaside"
];
const baseKeyword = "Base";
const firstKeyword = "1st";
const secondKeyword = "2nd";

let settings = 
{
    expansions: {baseBase: true, base2nd: true, intrigueBase: true, intrigue2nd: true, seasideBase: true, seaside1st: true},
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
                set2ndRadio.checked = true;
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
                else if(settings.expansions[setName + secondKeyword] === true)
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

    if(randomSet === [])
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