let games_collection = [
{ 
name : "Dark Souls",
year_release : 2016,
develloper : "FromSoftware",
genre : "RPG",
style : "dark-fantasy",
imgFile: 'darksoul.jfif', 
link : 'https://en.wikipedia.org/wiki/Dark_Souls',
},
{ 
name : "Stellaris", 
year_release : 2012,
develloper : "Paradox",
genre : "Great strategy",
style : "science-fiction",
imgFile: 'stellaris.jfif', 
link : 'https://en.wikipedia.org/wiki/Stellaris_(video_game)',
    },
    { 
name : "Europa Universalis 4",
year_release : 2013,
develloper : "paradox",
genre : "Great strategy",
style : "History",
imgFile: 'eu4.jfif', 
link : 'https://en.wikipedia.org/wiki/Europa_Universalis_IV',
        },
        { 
name : "Neverwinter Nights",
year_release : 2002,
develloper : "BioWare",
genre : "RPG",
style : "fantasy",
imgFile: 'nwn.jfif', 
link : 'https://en.wikipedia.org/wiki/Neverwinter_Nights_(2002_video_game)',
            },
            { 
name : "Pathfinder II",
year_release : 2021,
develloper : "Owlcat",
genre : "RPG",
style : "dark fantasy",
imgFile: 'pathinder.jfif', 
link : 'https://en.wikipedia.org/wiki/Pathfinder:_Wrath_of_the_Righteouss',
                },
                { 
name : "Elden Ring",
year_release : 2022,
develloper : "FromSoftware",
genre : "RPG",
style : "dark fantasy",
imgFile: 'eldenring.jfif', 
link : 'https://en.wikipedia.org/wiki/Elden_Ring',
                    },
                    { 
name : "Silver",
year_release : 1999,
develloper : "Infogrames",
genre : "RPG",
style : "fantasy",
imgFile: 'silver.jfif', 
link : 'https://en.wikipedia.org/wiki/Silver_(video_game)',
                        },
                        { 
name : "Skyrim",
year_release : 2011,
develloper : "Bethesda",
genre : "RPG",
style : "fantasy",
imgFile: 'skyrim.jfif', 
link : 'https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim',
                            },
                            { 
name : "Half-Life",
year_release : 1998,
 develloper : "Valve",
genre : "FPS",
style : "science-fiction",
imgFile: 'half-life.jfif', 
link : 'https://en.wikipedia.org/wiki/Half-Life_(video_game)',
                                },
                                { 
name : "Bioshock infinite",
year_release : 2013,
develloper : "Irrational Games",
genre : "Aventure",
style : "Science-fantasy",
imgFile: 'bioshock.jfif', 
link : 'https://en.wikipedia.org/wiki/BioShock_Infinite',
                                    },
]

function divise_body() {
    let header = document.createElement("HEADER");
    document.body.appendChild(header);

    let main = document.createElement("MAIN");
    document.body.appendChild(main);

    let footer = document.createElement("FOOTER");
    document.body.appendChild(footer);
    return {footer,main,header}
}

divise_body()

function create_cards() {
    games_collection.forEach((game, index) => {
        let game_article = document.createElement("article");
        let game_titre = document.createElement("h2");
        let game_img = document.createElement("img");
        let game_info_release = document.createElement("p");
        let game_info_studio = document.createElement("p");
        let game_info_genre = document.createElement("p");
        let game_info_style = document.createElement("p");
        let game_link = document.createElement("a"); 
        let wiki_icon = document.createElement("img");

        game_article.setAttribute("class", "game_" + index);
        game_img.src = game.imgFile;
        game_img.alt = "image de " + game.name;
        game_img.title = "bla bla bla";

        game_link.href = game.link; 
        wiki_icon.src = 'wikipedia.svg';
        wiki_icon.alt ="Link to wikipedia";
        wiki_icon.setAttribute("class","icone_wiki");
        
        game_titre.textContent = game.name;
        game_info_release.textContent = "Année de sortie : " + game.year_release;
        game_info_studio.textContent = "Développé par : " + game.develloper;
        game_info_genre.textContent = "Genre : " + game.genre;
        game_info_style.textContent = "Style de fiction : " + game.style;

        game_article.appendChild(game_img);
        game_article.appendChild(game_titre);
        game_article.appendChild(game_info_release);
        game_article.appendChild(game_info_studio);
        game_article.appendChild(game_info_genre);
        game_article.appendChild(game_info_style);
        game_article.appendChild(game_link);
        game_link.appendChild(wiki_icon);

        document.querySelector('main').appendChild(game_article);
    })
}

create_cards();

function complete_header() {
    let header_titre = document.createElement("h1");
    header_titre.textContent = "Collection des Jeux qui m'ont le plus marqués";
    document.querySelector("header").appendChild(header_titre);

    let header_sous_titre = document.createElement("h2");
    header_sous_titre.textContent = "Liste semi-complète, sujette à révision";
    document.querySelector("header").appendChild(header_sous_titre);
}

complete_header();