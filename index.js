function setup()
{
    preloadImages();
    setButtonStates();
}

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
        cards[cardName].image.src = cardImageSrc(cardName, cards[cardName].set);

        document.getElementById("preload").appendChild(cards[cardName].image);

        cards[cardName].image.setAttribute("width", "200px"); //Temp
    }
}

function imagesLoadComplete()
{
    console.log("load complete.");
}

function cardImageSrc(cardName, set)
{
    //console.log("images/cards/" + set + "/" + cardName + ".jpg");
    return "images/cards/" + set + "/" + cardName + ".jpg";
}

function toggleSettings()
{
    let settingsDiv = document.getElementById("settings");

    if(settingsDiv.hasAttribute("hidden"))
    {
        hideSettings();
    }
    else
    {
        settingsDiv.setAttribute("hidden", "hidden");
    }
}

function hideSettings()
{
    let settingsDiv = document.getElementById("settings");
    if(settingsDiv.hasAttribute("hidden"))
    {
        settingsDiv.removeAttribute("hidden");
    }
}