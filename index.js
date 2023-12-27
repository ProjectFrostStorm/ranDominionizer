const maxResultCards = 10;
const resultCardsContainers = [];
let currentSelection = [];

const bruteForceLimit = 5000;
const verboseDebug = false;

function setup()
{
    if(!validateCardList() == "") //Function in cardList.js
    {
        console.log("!!! Errors in cardList.js !!!");
    }

    generateElements();

    preloadImages();
}

//
//Dynamic Generation of DOM Elements
function generateElements()
{
    //
    createExpansionList(expansions);
    createResultCardsContainers(maxResultCards, resultCardsContainers);
}
//Generate Expansion Settings List
function createExpansionList(supportedExpansions)
{
    //data-setting = expansion ==> object is an input object that indicates expansion settings
    //data-expansion-selector-type = base/1ed/2ed ==> toggles base/first edition/second edition expansion inclusion

    let ulWrapper = document.getElementById("expansionSettingsList");

    for(const [expansion, properties] of Object.entries(supportedExpansions))
    {
        let entry = document.createElement("li");
        ulWrapper.appendChild(entry);

        //Expansion Toggle
        let expansionSpan = document.createElement("span");
        entry.appendChild(expansionSpan);

        let expansionToggle = document.createElement("input");
        expansionSpan.appendChild(expansionToggle);
        expansionToggle.setAttribute("id", "base-" + expansion);
        expansionToggle.setAttribute("type", "checkbox");
        expansionToggle.setAttribute("data-setting", "expansion");
        expansionToggle.setAttribute("data-expansion-selector-type", "base");
        expansionToggle.setAttribute("data-expansion-selector-for", expansion);

        let expansionToggleLabel = document.createElement("label");
        expansionSpan.appendChild(expansionToggleLabel);
        expansionToggleLabel.setAttribute("for", "base-" + expansion);
        expansionToggleLabel.innerHTML = properties.displayName;

        //Edition Toggles
        if(properties.secondEd)
        {
            //First Edition
            let firstEditionToggle = document.createElement("input");
            expansionSpan.appendChild(firstEditionToggle);
            firstEditionToggle.setAttribute("id", "firsted-" + expansion);
            firstEditionToggle.setAttribute("type", "checkbox");
            firstEditionToggle.setAttribute("data-setting", "expansion");
            firstEditionToggle.setAttribute("data-expansion-selector-type", "firsted");
            firstEditionToggle.setAttribute("data-expansion-selector-for", expansion);

            let firstEditionToggleLabel = document.createElement("label");
            expansionSpan.appendChild(firstEditionToggleLabel);
            firstEditionToggleLabel.setAttribute("for", "firsted-" + expansion);
            firstEditionToggleLabel.innerHTML = "1st Edition";

            //Second Edition
            let secondEditionToggle = document.createElement("input");
            expansionSpan.appendChild(secondEditionToggle);
            secondEditionToggle.setAttribute("id", "seconded-" + expansion);
            secondEditionToggle.setAttribute("type", "checkbox");
            secondEditionToggle.setAttribute("data-setting", "expansion");
            secondEditionToggle.setAttribute("data-expansion-selector-type", "seconded");
            secondEditionToggle.setAttribute("data-expansion-selector-for", expansion);

            let secondEditionToggleLabel = document.createElement("label");
            expansionSpan.appendChild(secondEditionToggleLabel);
            secondEditionToggleLabel.setAttribute("for", "seconded-" + expansion);
            secondEditionToggleLabel.innerHTML = "2nd Edition";

            
            //Unavailable sets
            if(properties.nofirst === true)
            {
                firstEditionToggle.setAttribute("disabled", "disabled");
            }
            if(properties.nosecond === true)
            {
                secondEditionToggle.setAttribute("disabled", "disabled");
            }
        }

        //Unavailable sets
        if(properties.nobase === true)
        {
            expansionToggle.setAttribute("disabled", "disabled");
        }
    }
}
//Create Result Card Containers
function createResultCardsContainers(numCards, containerArray)
{
    let resultCardsArea = document.getElementById("resultCards");

    for(let x = 0; x < numCards; x++)
    {
        containerArray[x] = document.createElement("span");
        resultCardsArea.appendChild(containerArray[x]);
        containerArray[x].setAttribute("id", "resultCard" + x);

        let imageDiv = document.createElement("span"); //Holds the image object
        containerArray[x].appendChild(imageDiv);
        imageDiv.setAttribute("id", "resultCardImageContainer" + x);
        
        /*
        let rerollDiv = document.createElement("span"); //Holds the reroll button object
        containerArray[x].appendChild(rerollDiv);
        rerollDiv.innerHTML = "Reroll";
        */
    }
}

//
//Image Loading Functions
let loadedImages = 0;
let totalImages = Object.keys(cards).length;
function preloadImages()
{
    let onloadFunction = function()
    {
        loadedImages++;

        console.log("Images loaded: " + loadedImages + "/" + totalImages);

        if(loadedImages >= totalImages)
        {
            imagesLoadComplete();
        }
    }

    let cardNames = Object.keys(cards);
    for(let x = 0; x < totalImages; x++)
    {
        let cardName = cardNames[x];

        cards[cardName].image = new Image();
        cards[cardName].image.onload = onloadFunction;
        cards[cardName].image.src = cardImageSrc(cardName, cards[cardName].expansion, cards[cardName].edition);
        cards[cardName].image.alt = cardName;

        document.getElementById("preload").appendChild(cards[cardName].image);

        cards[cardName].image.setAttribute("width", "200px"); //Temp
    }
}
function imagesLoadComplete()
{
    console.log("load complete.");
}
function cardImageSrc(cardName, expansion, edition)
{
    //console.log("images/cards/" + set + "/" + cardName + ".jpg");
    return "images/cards/" + expansion + "-" + edition + "/" + cardName + ".jpg";
}

//
//Visual Elements
function toggleSettings()
{
    let settingsDiv = document.getElementById("settings");

    if(settingsDiv.hasAttribute("hidden"))
    {
        settingsDiv.removeAttribute("hidden");
    }
    else
    {
        settingsDiv.setAttribute("hidden", "hidden");
    }
}

//
//Query Elements
//Expansions
function queryExpansionSettings()
{
    let selection = {};
    
    for(const expansion of Object.keys(expansions))
    {
        selection[expansion] = {base: false, first: false, second: false};
        let currentSetting = querySingleExpansionSetting(expansion);
        if(currentSetting.base)
        {
            selection[expansion].base = true;
        }
        if(currentSetting.firstEd)
        {
            selection[expansion].first = true;
        }
        if(currentSetting.secondEd)
        {
            selection[expansion].second = true;
        }
    }

    return selection;
}
function querySingleExpansionSetting(expansionName)
{
    if(!(expansionName in expansions)) {return null;} //Validation

    let selection = 
    {
        base: false,
        firstEd: false,
        secondEd: false
    };
    let generalCheckbox = document.getElementById("base-" + expansionName);
    selection.base = generalCheckbox.checked;
    if(expansions[expansionName].secondEd)
    {
        let firstEdCheckbox = document.getElementById("firsted-" + expansionName);
        let secondEdCheckbox = document.getElementById("seconded-" + expansionName);
        selection.firstEd = firstEdCheckbox.checked;
        selection.secondEd = secondEdCheckbox.checked;
    }

    return selection;
}
//Generation Rules
function queryGenerationRules()
{
    let rules = [];

    let generationSettingsContainer = document.getElementById("generationSettings");
    let settings = generationSettingsContainer.querySelectorAll("[data-setting='rule']");
    for(let x = 0; x < settings.length; x++)
    {
        let node = settings[x];

        //Rule enabled
        if(node.checked)
        {
            rules.push({"trait": node.dataset.ruleTrait, "traitValue": node.dataset.ruleTraitValue, "rule": node.dataset.rule, "parameter": node.dataset.ruleParameter});
        }
    }

    return rules;
}

//
//Modify Elements
function setAllExpansions(state)
{
    for(const expansion of Object.keys(expansions))
    {
        let generalCheckbox = document.getElementById("base-" + expansion);
        let firstEdCheckbox = document.getElementById("firsted-" + expansion);
        let secondEdCheckbox = document.getElementById("seconded-" + expansion);

        if(!generalCheckbox.disabled) //Set main set
        {
            generalCheckbox.checked = state; 
        }

        if(firstEdCheckbox !== null) //Multiple Editions
        {
            //Set editions
            if(!firstEdCheckbox.disabled)
            {
                firstEdCheckbox.checked = state; 
            }
            if(!secondEdCheckbox.disabled)
            {
                secondEdCheckbox.checked = state;
            }
        }
    }
}
function enableAllExpansions()
{
    setAllExpansions(true);
}
function disableAllExpansions()
{
    setAllExpansions(false);
}
//Draw cards
function unhideResults()
{
    resultLandscapesArea = document.getElementById("resultLandscapes");
    resultCardsArea = document.getElementById("resultCards");
    if(resultLandscapesArea.hasAttribute("hidden"))
    {
        resultLandscapesArea.removeAttribute("hidden");
    }
    if(resultCardsArea.hasAttribute("hidden"))
    {
        resultCardsArea.removeAttribute("hidden");
    }
}
function clearResultCards(num)
{
    for(let x = 0; x < num; x++)
    {
        let cardImageContainer = resultCardsContainers[x].firstChild;
        if(cardImageContainer.firstChild !== null) //Image Container is not empty
        {
            //NOTE: Assume no other elements
            cardImageContainer.removeChild(cardImageContainer.firstChild);
        }
    }
}
function drawResultCards(resultCards) //Input is array of card names corresponding to their object name in cardList
{
    clearResultCards(maxResultCards);

    for(let x = 0; x < resultCards.length; x++)
    {
        if(!(resultCards[x] in cards)) {return;} //Validate

        //Add card image
        let cardImageContainer = resultCardsContainers[x].firstChild;
        cardImageContainer.appendChild(cards[resultCards[x]].image);
    }

    unhideResults();
}
function resortResultCards(sortMethod, cards)
{
    if(cards.length === 0) {return;}

    clearResultCards(maxResultCards);
    if(sortMethod === "cost")
    {
        sortByCost(cards);
    }
    else if(sortMethod === "expansion")
    {
        sortByExpansion(cards);
    }
    else if(sortMethod === "name")
    {
        sortByName(cards);
    }
    drawResultCards(cards);
}

//
//Randomizer Interface
function generate()
{
    console.log("----------");
    let selection = bruteForceGenerate(10, buildCardPool(), queryGenerationRules(), bruteForceLimit);
    console.log("Failed generations: " + failedGenerations);

    if(selection === null)
    {
        console.log("Failed to generate set.");
        return;
    }

    currentSelection = selection;

    sortByCost(selection);
    drawResultCards(selection);

    /*
    let selection = uniformGenerate(10, buildCardPool());
    sortByCost(selection);
    drawResultCards(selection);
    */

    //drawResultCards(testGenerate());
}