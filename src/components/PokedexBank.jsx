const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    id: "1",
    desc: "Fleur sur le dos. Plante/Venin",
    pkmnTypes: ["Plante", "Venin"],
  },
  {
    name: "Herbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    id: "2",
    desc: "Gigantesque plante sur le dos. Plante/Venin",
    pkmnTypes: ["Plante", "Venin"],
  },
  {
    name: "Florizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    id: "3",
    desc: "Arbre sur le dos. Plante/Venin",
    pkmnTypes: ["Plante", "Venin"],
  },
  {
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    id: "4",
    desc: "Flamme sur la queue. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Reptincel",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    id: "5",
    desc: "Queue flamboyante. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Dracaufeu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    id: "6",
    desc: "Souffle de feu. Feu/Vol",
    pkmnTypes: ["Feu", "Vol"],
  },
  {
    name: "Carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    id: "7",
    desc: "Coquille sur le dos. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Carabaffe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    id: "8",
    desc: "Écailles sur le dos. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Tortank",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    id: "9",
    desc: "Jet d'eau puissant. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Chenipan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    id: "10",
    desc: "Chenille vorace. Insecte",
    pkmnTypes: ["Insecte"],
  },
  {
    name: "Chrysacier",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    id: "11",
    desc: "Chrysalide rigide. Insecte",
    pkmnTypes: ["Insecte"],
  },
  {
    name: "Papilusion",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    id: "12",
    desc: "Papillon en vol. Insecte/Vol",
    pkmnTypes: ["Insecte", "Vol"],
  },
  {
    name: "Aspicot",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    id: "13",
    desc: "Venin dangereux. Insecte/Poison",
    pkmnTypes: ["Insecte", "Poison"],
  },
  {
    name: "Coconfort",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    id: "14",
    desc: "Dans une coquille. Insecte/Poison",
    pkmnTypes: ["Insecte", "Poison"],
  },
  {
    name: "Dardargnan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    id: "15",
    desc: "Dard acéré. Insecte/Poison",
    pkmnTypes: ["Insecte", "Poison"],
  },
  {
    name: "Roucool",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    id: "16",
    desc: "Oiseau en vol. Normal/Vol",
    pkmnTypes: ["Normal", "Vol"],
  },
  {
    name: "Roucoups",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    id: "17",
    desc: "Oiseau élégant. Normal/Vol",
    pkmnTypes: ["Normal", "Vol"],
  },
  {
    name: "Roucarnage",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    id: "18",
    desc: "Oiseau royal. Normal/Vol",
    pkmnTypes: ["Normal", "Vol"],
  },
  {
    name: "Rattata",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    id: "19",
    desc: "Rongeur rapide. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Rattatac",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    id: "20",
    desc: "Rongeur féroce. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Piafabec",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    id: "21",
    desc: "Oiseau criard. Normal/Vol",
    pkmnTypes: ["Normal", "Vol"],
  },
  {
    name: "Rapasdepic",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    id: "22",
    desc: "Rapide et agressif. Normal/Vol",
    pkmnTypes: ["Normal", "Vol"],
  },
  {
    name: "Abo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    id: "23",
    desc: "Serpent venimeux. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Arbok",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    id: "24",
    desc: "Cobra féroce. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    id: "25",
    desc: "Souris électrique. Électrique",
    pkmnTypes: ["Électrique"],
  },
  {
    name: "Raichu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    id: "26",
    desc: "Électrique et puissant. Électrique",
    pkmnTypes: ["Électrique"],
  },
  {
    name: "Sabelette",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    id: "27",
    desc: "Fouisseur. Sol",
    pkmnTypes: ["Sol"],
  },
  {
    name: "Sablaireau",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    id: "28",
    desc: "Fouisseur féroce. Sol",
    pkmnTypes: ["Sol"],
  },
  {
    name: "Nidoran♀",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    id: "29",
    desc: "Féminin. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Nidorina",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    id: "30",
    desc: "Féminin et venimeux. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Nidoqueen",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    id: "31",
    desc: "Reine venimeuse. Poison/Terre",
    pkmnTypes: ["Poison", "Terre"],
  },
  {
    name: "Nidoran♂",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    id: "32",
    desc: "Masculin. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Nidorino",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    id: "33",
    desc: "Masculin et venimeux. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Nidoking",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    id: "34",
    desc: "Roi venimeux. Poison/Terre",
    pkmnTypes: ["Poison", "Terre"],
  },
  {
    name: "Mélofée",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    id: "35",
    desc: "Fée lunaire. Fée",
    pkmnTypes: ["Fée"],
  },
  {
    name: "Mélodelfe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    id: "36",
    desc: "Fée lunaire majestueuse. Fée",
    pkmnTypes: ["Fée"],
  },
  {
    name: "Goupix",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    id: "37",
    desc: "Renard à neuf queues. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Feunard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    id: "38",
    desc: "Esprit malin. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Rondoudou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    id: "39",
    desc: "Chant mélodieux. Normal/Fée",
    pkmnTypes: ["Normal", "Fée"],
  },
  {
    name: "Grodoudou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    id: "40",
    desc: "Chant majestueux. Normal/Fée",
    pkmnTypes: ["Normal", "Fée"],
  },
  {
    name: "Nosferapti",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    id: "41",
    desc: "Chauve-souris. Poison/Vol",
    pkmnTypes: ["Poison", "Vol"],
  },
  {
    name: "Nosferalto",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    id: "42",
    desc: "Chauve-souris diabolique. Poison/Vol",
    pkmnTypes: ["Poison", "Vol"],
  },
  {
    name: "Mystherbe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    id: "43",
    desc: "Plante toxique. Plante/Poison",
    pkmnTypes: ["Plante", "Poison"],
  },
  {
    name: "Ortide",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    id: "44",
    desc: "Plante sauvage. Plante/Poison",
    pkmnTypes: ["Plante", "Poison"],
  },
  {
    name: "Rafflesia",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    id: "45",
    desc: "Fleur géante. Plante/Poison",
    pkmnTypes: ["Plante", "Poison"],
  },
  {
    name: "Paras",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    id: "46",
    desc: "Champignon parasite. Insecte/Plante",
    pkmnTypes: ["Insecte", "Plante"],
  },
  {
    name: "Parasect",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    id: "47",
    desc: "Fongus géant. Insecte/Plante",
    pkmnTypes: ["Insecte", "Plante"],
  },
  {
    name: "Mimitoss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    id: "48",
    desc: "Cicada. Insecte/Poison",
    pkmnTypes: ["Insecte", "Poison"],
  },
  {
    name: "Aéromite",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    id: "49",
    desc: "Moustique. Insecte/Poison",
    pkmnTypes: ["Insecte", "Poison"],
  },
  {
    name: "Taupiqueur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    id: "50",
    desc: "Taupe. Sol",
    pkmnTypes: ["Sol"],
  },
  {
    name: "Triopikeur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    id: "51",
    desc: "Taupe triple. Sol",
    pkmnTypes: ["Sol"],
  },
  {
    name: "Miaouss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    id: "52",
    desc: "Chat malicieux. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Persian",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    id: "53",
    desc: "Chat élégant. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Psykokwak",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    id: "54",
    desc: "Canard psychique. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Akwakwak",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    id: "55",
    desc: "Canard mélodieux. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Férosinge",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    id: "56",
    desc: "Singe fougueux. Combat",
    pkmnTypes: ["Combat"],
  },
  {
    name: "Colossinge",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    id: "57",
    desc: "Guerrier puissant. Combat",
    pkmnTypes: ["Combat"],
  },
  {
    name: "Caninos",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    id: "58",
    desc: "Chien enflammé. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Arcanin",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    id: "59",
    desc: "Légendaire. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Ptitard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    id: "60",
    desc: "Têtard. Eau",
    pkmnTypes: ["Eau"],
  },

  {
    name: "Ptitard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    id: "60",
    desc: "Têtard. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Têtarte",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    id: "61",
    desc: "Tortue aquatique. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Tartard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    id: "62",
    desc: "Grenouille géante. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Abra",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    id: "63",
    desc: "Téléporteur. Psy",
    pkmnTypes: ["Psy"],
  },
  {
    name: "Kadabra",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    id: "64",
    desc: "Lecture mentale. Psy",
    pkmnTypes: ["Psy"],
  },
  {
    name: "Alakazam",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    id: "65",
    desc: "Évolution psy. Psy",
    pkmnTypes: ["Psy"],
  },
  {
    name: "Machoc",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    id: "66",
    desc: "Superpuissant. Combat",
    pkmnTypes: ["Combat"],
  },
  {
    name: "Machopeur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    id: "67",
    desc: "Encore plus puissant. Combat",
    pkmnTypes: ["Combat"],
  },
  {
    name: "Mackogneur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    id: "68",
    desc: "Le summum de la puissance. Combat",
    pkmnTypes: ["Combat"],
  },
  {
    name: "Chétiflor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    id: "69",
    desc: "Fleur. Plante/Poison",
    pkmnTypes: ["Plante", "Poison"],
  },
  {
    name: "Boustiflor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    id: "70",
    desc: "Gobe tout. Plante/Poison",
    pkmnTypes: ["Plante", "Poison"],
  },
  {
    name: "Empiflor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    id: "71",
    desc: "Fleur géante. Plante/Poison",
    pkmnTypes: ["Plante", "Poison"],
  },
  {
    name: "Tentacool",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    id: "72",
    desc: "Méduses marines. Eau/Poison",
    pkmnTypes: ["Eau", "Poison"],
  },
  {
    name: "Tentacruel",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    id: "73",
    desc: "Méduses géantes. Eau/Poison",
    pkmnTypes: ["Eau", "Poison"],
  },
  {
    name: "Racaillou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    id: "74",
    desc: "Roches. Roche/Sol",
    pkmnTypes: ["Roche", "Sol"],
  },
  {
    name: "Gravalanch",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    id: "75",
    desc: "Roches en fusion. Roche/Sol",
    pkmnTypes: ["Roche", "Sol"],
  },
  {
    name: "Grolem",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    id: "76",
    desc: "Colosse rocheux. Roche/Sol",
    pkmnTypes: ["Roche", "Sol"],
  },
  {
    name: "Ponyta",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    id: "77",
    desc: "Poney enflammé. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Galopa",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    id: "78",
    desc: "Destrier enflammé. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Ramoloss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    id: "79",
    desc: "Somnolent. Eau/Psy",
    pkmnTypes: ["Eau", "Psy"],
  },
  {
    name: "Flagadoss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    id: "80",
    desc: "Créatif en rêves. Eau/Psy",
    pkmnTypes: ["Eau", "Psy"],
  },
  {
    name: "Magneti",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    id: "81",
    desc: "Magnétique. Électrique/Acier",
    pkmnTypes: ["Électrique", "Acier"],
  },
  {
    name: "Magneton",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    id: "82",
    desc: "Magnétique en groupe. Électrique/Acier",
    pkmnTypes: ["Électrique", "Acier"],
  },
  {
    name: "Canarticho",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    id: "83",
    desc: "Le canard fou. Normal/Vol",
    pkmnTypes: ["Normal", "Vol"],
  },
  {
    name: "Doduo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    id: "84",
    desc: "Oiseau à deux têtes. Normal/Vol",
    pkmnTypes: ["Normal", "Vol"],
  },
  {
    name: "Dodrio",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    id: "85",
    desc: "Oiseau à trois têtes. Normal/Vol",
    pkmnTypes: ["Normal", "Vol"],
  },
  {
    name: "Otaria",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    id: "86",
    desc: "Otarie. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Lamantine",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    id: "87",
    desc: "Lamantin. Eau/Glace",
    pkmnTypes: ["Eau", "Glace"],
  },
  {
    name: "Tadmorv",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    id: "88",
    desc: "Vapeurs toxiques. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Grotadmorv",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    id: "89",
    desc: "Plus grand et toxique. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Kokiyas",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    id: "90",
    desc: "Crabe. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Crustabri",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    id: "91",
    desc: "Crabe géant. Eau/Glace",
    pkmnTypes: ["Eau", "Glace"],
  },
  {
    name: "Fantominus",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    id: "92",
    desc: "Fantôme. Spectre/Poison",
    pkmnTypes: ["Spectre", "Poison"],
  },
  {
    name: "Spectrum",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    id: "93",
    desc: "Spectre supérieur. Spectre/Poison",
    pkmnTypes: ["Spectre", "Poison"],
  },
  {
    name: "Ectoplasma",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    id: "94",
    desc: "Mange les rêves. Spectre/Poison",
    pkmnTypes: ["Spectre", "Poison"],
  },
  {
    name: "Onix",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    id: "95",
    desc: "Serpent de roche. Roche/Sol",
    pkmnTypes: ["Roche", "Sol"],
  },
  {
    name: "Soporifik",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    id: "96",
    desc: "Hypnose. Psy",
    pkmnTypes: ["Psy"],
  },
  {
    name: "Hypnomade",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    id: "97",
    desc: "Somnambule. Psy",
    pkmnTypes: ["Psy"],
  },
  {
    name: "Krabby",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    id: "98",
    desc: "Crabe. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Krabboss",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    id: "99",
    desc: "Crabe pinceur. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Voltorbe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    id: "100",
    desc: "Boule électrique. Électrique",
    pkmnTypes: ["Électrique"],
  },
  {
    name: "Electrode",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
    id: "101",
    desc: "Boule énergétique. Électrique",
    pkmnTypes: ["Électrique"],
  },
  {
    name: "Noeunoeuf",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
    id: "102",
    desc: "Œuf de palme. Plante/Psy",
    pkmnTypes: ["Plante", "Psy"],
  },
  {
    name: "Noadkoko",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
    id: "103",
    desc: "Noix de coco. Plante/Psy",
    pkmnTypes: ["Plante", "Psy"],
  },
  {
    name: "Osselait",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    id: "104",
    desc: "Crâne de bébé. Sol",
    pkmnTypes: ["Sol"],
  },
  {
    name: "Ossatueur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
    id: "105",
    desc: "Crâne. Sol/Feu",
    pkmnTypes: ["Sol", "Feu"],
  },
  {
    name: "Kicklee",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
    id: "106",
    desc: "Coup de pied. Combat",
    pkmnTypes: ["Combat"],
  },
  {
    name: "Tygnon",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
    id: "107",
    desc: "Coup de poing. Combat",
    pkmnTypes: ["Combat"],
  },
  {
    name: "Excelangue",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
    id: "108",
    desc: "Langue étonnante. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Smogo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
    id: "109",
    desc: "Toxique. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Smogogo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
    id: "110",
    desc: "Gaz toxique. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Rhinocorne",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
    id: "111",
    desc: "Cornes puissantes. Sol/Roche",
    pkmnTypes: ["Sol", "Roche"],
  },
  {
    name: "Rhinoféros",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
    id: "112",
    desc: "Encore plus puissant. Sol/Roche",
    pkmnTypes: ["Sol", "Roche"],
  },
  {
    name: "Leveinard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
    id: "113",
    desc: "Chanceux. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Saquedeneu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
    id: "114",
    desc: "Épineux. Plante",
    pkmnTypes: ["Plante"],
  },
  {
    name: "Kangourex",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    id: "115",
    desc: "Marsupial géant. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Hypotrempe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    id: "116",
    desc: "Bébé dragon. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Hypocéan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
    id: "117",
    desc: "Requin dragon. Eau/Vol",
    pkmnTypes: ["Eau", "Vol"],
  },
  {
    name: "Poissirène",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    id: "118",
    desc: "Sirène de mer. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Poissoroy",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
    id: "119",
    desc: "Royauté marine. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Stari",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    id: "120",
    desc: "Étoile de mer. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Staross",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    id: "121",
    desc: "Étoile de mer géante. Eau/Psy",
    pkmnTypes: ["Eau", "Psy"],
  },
  {
    name: "M. Mime",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    id: "122",
    desc: "Clown mime. Psy/Fée",
    pkmnTypes: ["Psy", "Fée"],
  },
  {
    name: "Insécateur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
    id: "123",
    desc: "Mante religieuse. Insecte/Vol",
    pkmnTypes: ["Insecte", "Vol"],
  },
  {
    name: "Lippoutou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
    id: "124",
    desc: "Fée des glaces. Glace/Psy",
    pkmnTypes: ["Glace", "Psy"],
  },
  {
    name: "Élektek",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
    id: "125",
    desc: "Électricité. Électrique",
    pkmnTypes: ["Électrique"],
  },
  {
    name: "Magmar",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
    id: "126",
    desc: "Magma. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Scarabrute",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
    id: "127",
    desc: "Scarabée géant. Insecte",
    pkmnTypes: ["Insecte"],
  },
  {
    name: "Tauros",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
    id: "128",
    desc: "Taureau. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Magicarpe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    id: "129",
    desc: "Poisson inutile. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Léviator",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    id: "130",
    desc: "Dragon des mers. Eau/Vol",
    pkmnTypes: ["Eau", "Vol"],
  },
  {
    name: "Lokhlass",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
    id: "131",
    desc: "Nageoire en spirale. Eau/Glace",
    pkmnTypes: ["Eau", "Glace"],
  },
  {
    name: "Métamorph",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    id: "132",
    desc: "Métamorphe. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Évoli",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    id: "133",
    desc: "Évolution variée. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Aquali",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    id: "134",
    desc: "Évolution eau. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Voltali",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    id: "135",
    desc: "Évolution électrique. Électrique",
    pkmnTypes: ["Électrique"],
  },
  {
    name: "Pyroli",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
    id: "136",
    desc: "Évolution feu. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Porygon",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
    id: "137",
    desc: "Programme. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Amonita",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
    id: "138",
    desc: "Fossile vivant. Roche/Eau",
    pkmnTypes: ["Roche", "Eau"],
  },
  {
    name: "Amonistar",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
    id: "139",
    desc: "Fossile réanimé. Roche/Eau",
    pkmnTypes: ["Roche", "Eau"],
  },
  {
    name: "Kabuto",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    id: "140",
    desc: "Fossile carapace. Roche/Eau",
    pkmnTypes: ["Roche", "Eau"],
  },
  {
    name: "Kabutops",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
    id: "141",
    desc: "Fossile carapace aiguisée. Roche/Eau",
    pkmnTypes: ["Roche", "Eau"],
  },
  {
    name: "Ptera",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    id: "142",
    desc: "Fossile volant. Roche/Vol",
    pkmnTypes: ["Roche", "Vol"],
  },
  {
    name: "Ronflex",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    id: "143",
    desc: "Sommeil éternel. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Artikodin",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    id: "144",
    desc: "Oiseau glacial. Glace/Vol",
    pkmnTypes: ["Glace", "Vol"],
  },
  {
    name: "Électhor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    id: "145",
    desc: "Oiseau électrique. Électrique/Vol",
    pkmnTypes: ["Électrique", "Vol"],
  },
  {
    name: "Sulfura",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
    id: "146",
    desc: "Oiseau enflammé. Feu/Vol",
    pkmnTypes: ["Feu", "Vol"],
  },
  {
    name: "Minidraco",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    id: "147",
    desc: "Dragon juvénile. Dragon",
    pkmnTypes: ["Dragon"],
  },
  {
    name: "Draco",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    id: "148",
    desc: "Dragon en croissance. Dragon",
    pkmnTypes: ["Dragon"],
  },
  {
    name: "Dracolosse",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    id: "149",
    desc: "Dragon de légende. Dragon/Vol",
    pkmnTypes: ["Dragon", "Vol"],
  },
  {
    name: "Mewtwo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    id: "150",
    desc: "Génétiquement modifié. Psy",
    pkmnTypes: ["Psy"],
  },
  {
    name: "Mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    id: "151",
    desc: "Génétiquement unique. Psy",
    pkmnTypes: ["Psy"],
  },
];

export default pokemonList