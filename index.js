const maxResultCards = 10;
const maxResultLandscapes = 2;

const resultCardsContainers = []; //additional pointer to the card result containers (span wrappers that contains card images)
const resultLandscapesContainers = []; //additional pointer to the landscape result containers (span wrappers that contains landscape images)
const resultExtrasContainers = []; //additional pointer to the extra cards result containers (span wrappers that contains card images)

let currentSelection = {};
/* Selection object:
 * .kingdom = [] of ""s of card names (where cards[""] is a valid card obj); maxResultCards long (10 typically)
 * .landscapes = [] of ""s of landscape names; maxResultLandscapes long (2 typically)
 * .extras = {} containing any additional kingdom requirements (i.e. Way of the Mouse, Young Witch), can also contain extra cards needed in setup (e.g. curses, travellers, prizes, etc.)
 */

const defaultBlacklistOutputText = "No cards currently blacklisted";
const defaultWhitelistCardsOutputText = "No cards currently forced";
const defaultWhitelistLandscapesOutputText = "No landscapes currently forced";
let currentBlacklist = [];
let currentWhitelist = 
{
    kingdom: [],
    landscapes: []
};

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

    document.getElementById("blacklistOutputArea").value = defaultBlacklistOutputText;
    document.getElementById("whitelistAreaCards").value = defaultWhitelistCardsOutputText;
    document.getElementById("whitelistAreaLandscapes").value = defaultWhitelistLandscapesOutputText;
}

//*****************************************************************************************************
//Dynamic Generation of DOM Elements
function generateElements()
{
    //Dynamically created elements
    createExpansionList(expansions);
    createLandscapeList(expansions);
    createResultCardsContainers(maxResultCards, resultCardsContainers);
    createResultLandscapesContainers(maxResultLandscapes, resultLandscapesContainers);
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
            if(properties.noIndividual2E !== true) //Special case for Guilds and Cornucopia 2E, since they have a combined 2E there should not be an individual 2E toggle
            {
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
            }

            
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
//Generate Landscape Settings List
function createLandscapeList(supportedExpansions) //Input is expansions object, same as createExpansionList
{
    //data-setting = landscape ==> object is an input object that indicates landscape settings
    //data-landscape-selector-type = event/way/project/etc. ==> toggles landscape inclusion

    let ulWrapper = document.getElementById("landscapeSettingsList");

    for(const [expansion, properties] of Object.entries(supportedExpansions))
    {
        //Skip any expansions without landscapes
        if(properties.landscapes === undefined) {continue;}

        let entry = document.createElement("li");
        ulWrapper.appendChild(entry);

        //Expansion Entry
        let expansionSpan = document.createElement("span");
        entry.appendChild(expansionSpan);
        expansionSpan.innerHTML = properties.displayName + ": ";
        for(const type of properties.landscapes)
        {
            let landscapeToggle = document.createElement("input");
            expansionSpan.appendChild(landscapeToggle);
            landscapeToggle.setAttribute("id", expansion + "-" + type);
            landscapeToggle.setAttribute("type", "checkbox");
            landscapeToggle.setAttribute("data-setting", "landscape");
            landscapeToggle.setAttribute("data-landscape-selector-type", type);
            landscapeToggle.setAttribute("data-landscape-selector-expansion", expansion);

            let landscapeToggleLabel = document.createElement("label");
            expansionSpan.appendChild(landscapeToggleLabel);
            landscapeToggleLabel.setAttribute("for", expansion + "-" + type);
            landscapeToggleLabel.innerHTML = type.charAt(0).toUpperCase() + type.slice(1) + "s";
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
//Create Landscape Card Containers
function createResultLandscapesContainers(numCards, containerArray)
{
    let resultLandscapesArea = document.getElementById("resultLandscapes");

    for(let x = 0; x < numCards; x++)
    {
        containerArray[x] = document.createElement("span");
        resultLandscapesArea.appendChild(containerArray[x]);
        containerArray[x].setAttribute("id", "resultLandscape" + x);

        let imageDiv = document.createElement("span"); //Holds the image object
        containerArray[x].appendChild(imageDiv);
        imageDiv.setAttribute("id", "resultLandscapeImageContainer" + x);
        
        /*
        let rerollDiv = document.createElement("span"); //Holds the reroll button object
        containerArray[x].appendChild(rerollDiv);
        rerollDiv.innerHTML = "Reroll";
        */
    }
}

//*****************************************************************************************************
//Image Loading Functions
let cardNames = Object.keys(cards);
let landscapeNames = Object.keys(landscapes);

let loadedImages = 0;
let numCards = cardNames.length;
let numLandscapes = landscapeNames.length;
let totalImages = numCards + numLandscapes;

function preloadImages()
{
    let onloadFunction = function()
    {
        loadedImages++;

        if(verboseDebug) {console.log("Images loaded: " + loadedImages + "/" + totalImages);}

        if(loadedImages >= totalImages)
        {
            imagesLoadComplete();
        }
    }

    //Load cards
    for(let x = 0; x < numCards; x++)
    {
        let cardName = cardNames[x];

        cards[cardName].image = new Image();
        cards[cardName].image.onload = onloadFunction;
        cards[cardName].image.src = cardImageSrc(cardName, cards[cardName].expansion, cards[cardName].edition);
        cards[cardName].image.alt = cardName;

        //For whitelisting
        cards[cardName].image.onclick = function() 
        {
            addToKingdomWhitelist(cardName);
        };

        document.getElementById("preload").appendChild(cards[cardName].image);

        cards[cardName].image.setAttribute("width", "200px"); //Temp
    }

    //Load landscapes
    for(let x = 0; x < numLandscapes; x++)
    {
        let landscapeName = landscapeNames[x];

        landscapes[landscapeName].image = new Image();
        landscapes[landscapeName].image.onload = onloadFunction;
        landscapes[landscapeName].image.src = landscapeImageSrc(landscapeName, landscapes[landscapeName].expansion, landscapes[landscapeName].edition);
        landscapes[landscapeName].image.alt = landscapeName;

        //For whitelisting
        landscapes[landscapeName].image.onclick = function() 
        {
            addToLandscapesWhitelist(landscapeName);
        };

        document.getElementById("preload").appendChild(landscapes[landscapeName].image);

        landscapes[landscapeName].image.setAttribute("width", "325px"); //Temp
    }
}
function imagesLoadComplete()
{
    console.log("Image loading complete.");
}
function cardImageSrc(cardName, expansion, edition)
{
    //console.log("images/cards/" + set + "/" + cardName + ".jpg");
    return "images/cards/" + expansion + "-" + edition + "/" + cardName + ".jpg";
}
function landscapeImageSrc(cardName, expansion, edition)
{
    //console.log("images/cards/" + set + "/" + cardName + ".jpg");
    return "images/cards/" + expansion + "-" + edition + "/landscapes/" + cardName + ".jpg";
}

//*****************************************************************************************************
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
function togglePresets()
{
    let presetsContainer = document.getElementById("presetsContainer");

    if(presetsContainer.hasAttribute("hidden"))
    {
        presetsContainer.removeAttribute("hidden");
    }
    else
    {
        presetsContainer.setAttribute("hidden", "hidden");
    }
}

//*****************************************************************************************************
//Query Elements
//Expansions
function queryExpansionSettings()
{
    let settingSelection = {};
    
    for(const expansion of Object.keys(expansions))
    {
        settingSelection[expansion] = {base: false, first: false, second: false};
        let currentSetting = querySingleExpansionSetting(expansion);
        if(currentSetting.base)
        {
            settingSelection[expansion].base = true;
        }
        if(currentSetting.firstEd)
        {
            settingSelection[expansion].first = true;
        }
        if(currentSetting.secondEd)
        {
            settingSelection[expansion].second = true;
        }
    }

    return settingSelection;
}
function querySingleExpansionSetting(expansionName)
{
    if(!(expansionName in expansions)) {return null;} //Validation

    let settingSelection = 
    {
        base: false,
        firstEd: false,
        secondEd: false
    };
    let generalCheckbox = document.getElementById("base-" + expansionName);
    settingSelection.base = generalCheckbox.checked;
    if(expansions[expansionName].secondEd)
    {
        let firstEdCheckbox = document.getElementById("firsted-" + expansionName);
        settingSelection.firstEd = firstEdCheckbox.checked;

        if(expansions[expansionName].noIndividual2E !== true)
        {
            let secondEdCheckbox = document.getElementById("seconded-" + expansionName);
            settingSelection.secondEd = secondEdCheckbox.checked;
        }
    }

    return settingSelection;
}
//Landscapes
function queryLandscapeSettings()
{
    let landscapeSelection = {}; //Set => {event: true, project: true, way: true, etc.}
    //Prepopulate dictionary
    for(const expansion of Object.keys(expansions))
    {
        landscapeSelection[expansion] = {};
    }

    let landscapeSettingsContainer = document.getElementById("landscapeSettingsList");
    let settings = landscapeSettingsContainer.querySelectorAll("[data-setting='landscape']");
    for(let x = 0; x < settings.length; x++)
    {
        let node = settings[x];

        //Landscape enabled
        if(node.checked)
        {
            let expansion = node.dataset.landscapeSelectorExpansion;
            let type = node.dataset.landscapeSelectorType;

            if(landscapeSelection[expansion] === undefined)
            {
                landscapeSelection[expansion] = {};
            }

            landscapeSelection[expansion][type] = true;
        }
    }

    return landscapeSelection;
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

//*****************************************************************************************************
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
            if(secondEdCheckbox !== null && !secondEdCheckbox.disabled) //Ignore 2e box if only has 1e box
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
function setAllLandscapes(state)
{
    let landscapeSettingsContainer = document.getElementById("landscapeSettingsList");
    let settings = landscapeSettingsContainer.querySelectorAll("[data-setting='landscape']");
    for(let x = 0; x < settings.length; x++)
    {
        let node = settings[x];

        node.checked = state;
    }
}
function enableAllLandscapes()
{
    setAllLandscapes(true);
}
function disableAllLandscapes()
{
    setAllLandscapes(false);
}
//Draw cards
function unhideResults()
{
    let resultLandscapesArea = document.getElementById("resultLandscapes");
    let resultCardsArea = document.getElementById("resultCards");
    if(resultLandscapesArea.hasAttribute("hidden"))
    {
        resultLandscapesArea.removeAttribute("hidden");
    }
    if(resultCardsArea.hasAttribute("hidden"))
    {
        resultCardsArea.removeAttribute("hidden");
    }
    //TODO Result Extras 
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
function clearResultLandscapes(num)
{
    for(let x = 0; x < num; x++)
    {
        let landscapeImageContainer = resultLandscapesContainers[x].firstChild;
        if(landscapeImageContainer.firstChild !== null) //Image Container is not empty
        {
            //NOTE: Assume no other elements
            landscapeImageContainer.removeChild(landscapeImageContainer.firstChild);
        }
    }
}
function drawResultCards(resultCards) //Input is array of card names corresponding to their object name in cards
{
    for(let x = 0; x < resultCards.length; x++)
    {
        if(!(resultCards[x] in cards)) {return;} //Validate

        //Add card image
        let cardImageContainer = resultCardsContainers[x].firstChild;
        cardImageContainer.appendChild(cards[resultCards[x]].image);
    }
}
function drawResultLandscapes(resultLandscapes) //Input is array of landscapes names corresponding to their object name in landscapes
{
    if(resultLandscapes === undefined) {return;} //No landscapes

    for(let x = 0; x < resultLandscapes.length; x++)
    {
        if(!(resultLandscapes[x] in landscapes)) {return;} //Validate

        //Add card image
        let landscapeImageContainer = resultLandscapesContainers[x].firstChild;
        landscapeImageContainer.appendChild(landscapes[resultLandscapes[x]].image);
    }
}
function drawResults(selection) //Draws all results (cards, landscapes, etc.)
{
    //Clear results
    clearResultCards(maxResultCards);
    clearResultLandscapes(maxResultLandscapes);
    //TODO Result Extras 

    //Draw results
    drawResultCards(selection.kingdom);
    drawResultLandscapes(selection.landscapes);
    //TODO Result Extras 

    unhideResults(); //Unhide if hidden
}
function resortResults(sortMethod, selection) 
{
    if(selection.kingdom.length === 0) {return;}

    //Resort
    clearResultCards(maxResultCards);
    clearResultLandscapes(maxResultLandscapes);
    if(sortMethod === "cost")
    {
        sortByCost(selection);
    }
    else if(sortMethod === "expansion")
    {
        sortByExpansion(selection);
    }
    else if(sortMethod === "name")
    {
        sortByName(selection);
    }

    drawResults(selection);
}

//*****************************************************************************************************
//Blacklisting
function processBlacklist(inputString) //Converts string from blacklist area to array of only valid card names
{
    let blacklist = inputString.split("\n");

    //Cards and Landscapes
    let lowercaseCards = Object.keys(cards).map(function(name) {return name.toLowerCase();});
    let lowercaseLandscapes = Object.keys(landscapes).map(function(name) {return name.toLowerCase();});

    for(let x = 0; x < blacklist.length; x++)
    {
        blacklist[x] = blacklist[x].replace(/\s/g, "").toLowerCase(); //Remove all whitespace
        let currentString = blacklist[x];

        if(!(lowercaseCards.includes(currentString) || lowercaseLandscapes.includes(currentString))) //Name is not a valid card or landscape
        {
            blacklist.splice(x, 1); //Remove
            x--;
        }
    }

    return blacklist;
}
function applyBlacklist()
{
    let blacklistedCards = processBlacklist(document.getElementById("blacklistInputArea").value);

    //Update current list
    let currentList = document.getElementById("blacklistOutputArea");
    currentList.value = "";
    for(const name of blacklistedCards)
    {
        currentList.value += name + "\n";
    }
    
    currentBlacklist = blacklistedCards;
}

//Whitelisting
function addToKingdomWhitelist(cardName)
{
    if(currentWhitelist.kingdom.indexOf(cardName) !== -1) //Only add to list if not already in whitelist
    {
        return;
    }
    currentWhitelist.kingdom.push(cardName);

    //Update current list
    let currentList = document.getElementById("whitelistAreaCards");
    currentList.value = "";
    for(const name of currentWhitelist.kingdom)
    {
        currentList.value += name + "\n";
    }
}
function addToLandscapesWhitelist(landscapeName)
{
    if(currentWhitelist.landscapes.indexOf(landscapeName) !== -1) //Only add to list if not already in whitelist
    {
        return;
    }
    currentWhitelist.landscapes.push(landscapeName);

    //Update current list
    let currentList = document.getElementById("whitelistAreaLandscapes");
    currentList.value = "";
    for(const name of currentWhitelist.landscapes)
    {
        currentList.value += name + "\n";
    }
}
function clearWhitelist()
{
    currentWhitelist.kingdom = [];
    currentWhitelist.landscapes = [];
    document.getElementById("whitelistAreaCards").value = defaultWhitelistCardsOutputText;
    document.getElementById("whitelistAreaLandscapes").value = defaultWhitelistLandscapesOutputText;
}

//*****************************************************************************************************
//Randomizer Interface
function generate()
{
    console.log("----------");
    let selection = bruteForceGenerate(10, 2, buildCardPool(), queryGenerationRules(), bruteForceLimit);
    console.log("Failed generations: " + failedGenerations);

    if(selection === null)
    {
        console.log("Failed to generate set.");
        if(failedGenerations === 0) //Not enough cards, no generations attempted
        {
            alert("Error: Not enough cards in generation pool. \n\nThis may be caused by not selecting enough expansions.");
        }
        else //Ran out of attempts
        {
            alert("Error: Failed to generate a new kingdom after " + bruteForceLimit + " attempts. \n\nThis may be caused by an impossible set of generation rules (e.g. forcing a 7 cost without an expansion that contains a 7).");
        }
        return;
    }

    currentSelection = selection;

    sortByCost(selection);
    drawResults(selection);

    /*
    selection = uniformGenerate(10, 2, buildCardPool());
    sortByCost(selection);
    drawResultCards(selection);
    */

    //drawResultCards(testGenerate());
}