let games_collection = [
{ 
name : "Dark Souls",
year_release : 2012,
develloper : "FromSoftware",
genre : "RPG",
style : ["dark-fantasy"],
imgFile: 'darksoul.jfif', 
link : 'https://en.wikipedia.org/wiki/Dark_Souls',
},
{ 
name : "Stellaris", 
year_release : 2016,
develloper : "Paradox",
genre : "Great strategy",
style : ["science-fiction","science-fantasy"],
imgFile: 'stellaris.jfif', 
link : 'https://en.wikipedia.org/wiki/Stellaris_(video_game)',
    },
    { 
name : "Europa Universalis",
year_release : 2013,
develloper : "paradox",
genre : "Great strategy",
style : ["History"],
imgFile: 'eu4.jfif', 
link : 'https://en.wikipedia.org/wiki/Europa_Universalis_IV',
        },
        { 
name : "Neverwinter Nights",
year_release : 2002,
develloper : "BioWare",
genre : "RPG",
style : ["fantasy"],
imgFile: 'nwn.jfif', 
link : 'https://en.wikipedia.org/wiki/Neverwinter_Nights_(2002_video_game)',
            },
            { 
name : "Pathfinder II",
year_release : 2021,
develloper : "Owlcat",
genre : "RPG",
style : ["dark fantasy","high-fantasy"],
imgFile: 'pathinder.jfif', 
link : 'https://en.wikipedia.org/wiki/Pathfinder:_Wrath_of_the_Righteouss',
                },
                { 
name : "Elden Ring",
year_release : 2022,
develloper : "FromSoftware",
genre : "RPG",
style : ["dark fantasy"],
imgFile: 'eldenring.jfif', 
link : 'https://en.wikipedia.org/wiki/Elden_Ring',
                    },
                    { 
name : "Silver",
year_release : 1999,
develloper : "Infogrames",
genre : "RPG",
style : ["fantasy","Aventure"],
imgFile: 'silver.jfif', 
link : 'https://en.wikipedia.org/wiki/Silver_(video_game)',
                        },
                        { 
name : "Skyrim",
year_release : 2011,
develloper : "Bethesda",
genre : "RPG",
style : ["fantasy","Aventure"],
imgFile: 'skyrim.jfif', 
link : 'https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim',
                            },
                            { 
name : "Half-Life",
year_release : 1998,
develloper : "Valve",
genre : "FPS",
style : ["science-fiction","horror"],
imgFile: 'half-life.jfif', 
link : 'https://en.wikipedia.org/wiki/Half-Life_(video_game)',
                                },
                                { 
name : "Bioshock infinite",
year_release : 2013,
develloper : "Irrational Games",
genre : "FPS",
style : ["Science-fantasy","Aventure"],
imgFile: 'bioshock.jfif', 
link : 'https://en.wikipedia.org/wiki/BioShock_Infinite',
                                    },
]

function rgbRandom() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return "rgb(" + x + "," + y + "," + z + ")";
}

function getContrastColor(rgbColor) {

    let rgbValues = rgbColor.match(/\d+/g);
    let [r, g, b] = rgbValues;
    console.log(r)
  
    const brightness = (parseInt(r) * 299 + parseInt(g)* 587 + parseInt(b) * 114) / 1000;
  
    if (brightness >= 128){
     return ("black")}
    else{
    return ("white")
   }
}

function clean_collection (){
    let main_collection = document.querySelector('main');
    main_collection.innerHTML = '';
    create_cards();
}

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
        let game_img = document.createElement("img");
        let game_titre = document.createElement("h2");
        let game_info_release = document.createElement("p");
        let game_info_studio = document.createElement("p");
        let game_info_genre = document.createElement("p");
        let game_link = document.createElement("a");
        let wiki_icon = document.createElement("img");
        let game_style_div= document.createElement("div");
    
        game_article.setAttribute("class", "game_"+ index + " glowing");
        game_img.src = game.imgFile;
        game_img.alt = "image de " + game.name;
        game_img.title = "bla bla bla";

        game_link.href = game.link;
        wiki_icon.src = 'wikipedia.svg';
        wiki_icon.alt = "Link to wikipedia";
        wiki_icon.setAttribute("class", "icone_wiki");

        game_titre.textContent = game.name;
        game_info_release.textContent = "Année de sortie : " + game.year_release;
        game_info_studio.textContent = "Développé par : " + game.develloper;
        game_info_genre.textContent = "Genre : " + game.genre;

        game_article.appendChild(game_img);
        game_article.appendChild(game_titre);
        for (let style of game.style) {
            let game_info_style = document.createElement("h3");
            game_info_style.textContent = style;
            game_style_div.appendChild(game_info_style);
            game_info_style.style.backgroundColor = rgbRandom();
            game_info_style.style.color = getContrastColor(game_info_style.style.backgroundColor);
        }
        game_article.appendChild(game_style_div);
        game_article.appendChild(game_info_release);
        game_article.appendChild(game_info_studio);
        game_article.appendChild(game_info_genre);
        game_article.appendChild(game_link);
        game_link.appendChild(wiki_icon);

        document.querySelector('main').appendChild(game_article);
    });
}

create_cards();

function complete_header() {
    let header_titre = document.createElement("h1");
    header_titre.textContent = "Collection des Jeux qui m'ont le plus marqués";
    document.querySelector("header").appendChild(header_titre);
  
    let header_sous_titre = document.createElement("h2");
    header_sous_titre.textContent = "( Liste non-exhaustive, sujette à révision) ";
    document.querySelector("header").appendChild(header_sous_titre);
  
    let choice_button = document.createElement("button");
    choice_button.textContent = "Choice order";
    choice_button.className = "choice_button";
    document.querySelector("header").appendChild(choice_button);
  
    let choice_button_content = document.createElement("div");
    choice_button_content.className = "choice_button_content"; 
    choice_button_content.style.display = 'none';
    document.querySelector("header").appendChild(choice_button_content);
  
    let options = ["Alphabetic ", " Chronologic ", " CHAOTIC !!! ", " Normal "];
    options.forEach(function (optionText) {
      let optionLink = document.createElement('a');
      optionLink.href = '#';
      optionLink.textContent = optionText;
      optionLink.addEventListener('click', function (event) {
        event.preventDefault();
        switch (optionText.trim().toLowerCase()) {
            case 'alphabetic':
              clean_collection();
              games_collection.sort((a, b) => a.name.localeCompare(b.name));
              clean_collection();
              break;
            case 'chronologic':
              clean_collection();
              games_collection.sort((a, b) => a.year_release - b.year_release);
              clean_collection();
              
              break;
            case 'chaotic !!!':
              clean_collection();
              games_collection.sort((a, b) => 0.5 - Math.random());
              clean_collection();
              break;
            case 'normal':
              window.location.reload();
              break;
              default:
              break;
          }
      });
      choice_button_content.appendChild(optionLink);
    });
  
    function make_drop() {
      choice_button_content.style.display = (choice_button_content.style.display === 'block') ? 'none' : 'block';
    }
    window.addEventListener('click', function (event) {
      if (event.target !== choice_button && !choice_button_content.contains(event.target)) {
        choice_button_content.style.display = 'none';
      }
    });
   
    choice_button.addEventListener('click', make_drop);
  }
  complete_header();

/*
 games_collection.sort((a, b) => {
    let game.nameA = a.game.name.toUpperCase(); 
    let game.nameB = b.game.name.toUpperCase(); // ignore upper and lowercase
    if (game.nameA < game.nameB) {
      return -1;
    }
    if (game.nameA > game.nameB) {
      return 1;
    }
    return 0;
});   
*/

