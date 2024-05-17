function setCheckbox(id, bool)
{
    if(!document.getElementById(id).disabled)
    {
        document.getElementById(id).checked = bool;
    }
}

function resetAllSettings()
{
    let settings = document.getElementById("settings");
    let allSettingInputs = settings.querySelectorAll("input");

    for(let x = 0; x < allSettingInputs.length; x++)
    {
        allSettingInputs[x].checked = false;
    }

    //Reset blacklist
    currentBlacklist = [];
    document.getElementById("blacklistInputArea").value = "";
    document.getElementById("blacklistOutputArea").value = defaultBlacklistOutputText;
}

function loadPreset(presetName)
{
    switch(presetName)
    {
        case "reset":
            resetAllSettings();
            break;

        case "alfa":
            resetAllSettings();
            //Expansion
            setCheckbox("base-base", true);
            setCheckbox("seconded-base", true);
            setCheckbox("base-intrigue", true);
            setCheckbox("seconded-intrigue", true);
            setCheckbox("base-seaside", true);
            setCheckbox("firsted-seaside", true);
            setCheckbox("seconded-seaside", true);
            setCheckbox("base-prosperity", true);
            setCheckbox("firsted-prosperity", true);
            setCheckbox("seconded-prosperity", true);
            setCheckbox("base-cornucopia", true);
            setCheckbox("firsted-cornucopia", true);
            setCheckbox("base-hinterlands", true);
            setCheckbox("seconded-hinterlands", true);
            setCheckbox("base-darkages", true);
            setCheckbox("base-guilds", true);
            setCheckbox("firsted-guilds", true);
            setCheckbox("base-guildscornucopia2e", true);
            setCheckbox("base-adventures", true);
            setCheckbox("base-empires", true);
            setCheckbox("base-renaissance", true);
            setCheckbox("base-plunder", true);
            //Landscapes
            setCheckbox("adventures-event", true);
            setCheckbox("empires-event", true);
            setCheckbox("empires-landmark", true);
            setCheckbox("renaissance-project", true);
            setCheckbox("menagerie-event", true);
            setCheckbox("menagerie-way", true);
            setCheckbox("plunder-event", true);
            setCheckbox("plunder-trait", true);
            //Rules
            setCheckbox("includeCost2", true);
            setCheckbox("includeCost3", true);
            setCheckbox("include2Cost3", true);
            setCheckbox("includeCost4", true);
            setCheckbox("include2Cost4", true);
            setCheckbox("includeCost5", true);
            setCheckbox("include2Cost5", true);
            setCheckbox("includeCardRemover", true);
            setCheckbox("includeVillage", true);
            setCheckbox("includePlusBuy", true);
            setCheckbox("limitTerminal", true);
            //Blacklist
            currentBlacklist = 
            [
                //Intrigue
                "Duke",
                "Harem",
                //Seaside
                "PearlDiver",
                "PirateShip",
                "SeaHag",
                //Prosperity
                "RoyalSeal",
                //Cornucopia
                "Harvest",
                //Dark Ages
                "Beggar",
                //Guilds
                "Masterpiece",
                //Empire
                "Annex",
                //Menagerie (horses)
                "Ride",
                "Bargain",
                "Demand",
                "Stampede",
            ];
            document.getElementById("blacklistOutputArea").value = currentBlacklist.join("\n");
            break;

        case "quebec":
            resetAllSettings();
            //Expansion
            setCheckbox("base-base", true);
            setCheckbox("firsted-base", true);
            setCheckbox("seconded-base", true);
            setCheckbox("base-intrigue", true);
            setCheckbox("seconded-intrigue", true);
            setCheckbox("base-hinterlands", true);
            setCheckbox("seconded-hinterlands", true);
            setCheckbox("base-empires", true);
            //Landscapes
            setCheckbox("adventures-event", true);
            setCheckbox("empires-event", true);
            setCheckbox("empires-landmark", true);
            setCheckbox("renaissance-project", true);
            //Rules
            setCheckbox("includeCost2", true);
            setCheckbox("includeCost3", true);
            setCheckbox("include2Cost3", true);
            setCheckbox("includeCost4", true);
            setCheckbox("include2Cost4", true);
            setCheckbox("includeCost5", true);
            setCheckbox("include2Cost5", true);
            setCheckbox("includeCardRemover", true);
            setCheckbox("includeVillage", true);
            setCheckbox("includePlusBuy", true);
            setCheckbox("limitTerminal", true);
            //Blacklist
            currentBlacklist = 
            [
                //Adventures (tokens)
                "Borrow",
                "Ferry",
                "Plan",
                "Pilgrimage",
                "Ball",
                "Raid",
                "Seaway",
                "LostArts",
                "Training",
                "Inheritance",
                "Pathfinding",
                /*
                //Menagerie (horses)
                "Ride",
                "Bargain",
                "Demand",
                "Stampede",
                */
            ];
            document.getElementById("blacklistOutputArea").value = currentBlacklist.join("\n");
            break;

            case "quebec-online":
                resetAllSettings();
                //Expansion
                setCheckbox("base-base", true);
                setCheckbox("seconded-base", true);
                setCheckbox("base-intrigue", true);
                setCheckbox("seconded-intrigue", true);
                //Landscapes
                //Rules
                setCheckbox("includeCost2", true);
                setCheckbox("includeCost3", true);
                setCheckbox("include2Cost3", true);
                setCheckbox("includeCost4", true);
                setCheckbox("include2Cost4", true);
                setCheckbox("includeCost5", true);
                setCheckbox("include2Cost5", true);
                setCheckbox("includeCardRemover", true);
                setCheckbox("includeVillage", true);
                setCheckbox("includePlusBuy", true);
                setCheckbox("limitTerminal", true);
                //Blacklist
                currentBlacklist = 
                [
                    //Intrigue
                    "Duke",
                ];
                document.getElementById("blacklistOutputArea").value = currentBlacklist.join("\n");
                break;
    }
}