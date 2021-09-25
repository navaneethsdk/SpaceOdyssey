const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const qImgElement = document.getElementById('qpic')


let state = {}

function startGame() {
  state = {}
  showTextNode(0)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text;
  var ritem = qImgElement.childNodes[0];
  var img = document.createElement('img');
  let img_dir = "images/";
  img.src = img_dir.concat(textNode.image);
  img.width = 300;
  qImgElement.replaceChild(img, ritem);
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 0,
    text: 'Space Odyssey: Online Treasure Hunt',
    image: 'astral1.png',
    options: [
      {
        text: 'Start',
        nextText: 1
      },
      {
        text: 'May be later!',
        nextText: 0
      }
    ]
  },
  {
    id: 1,
    text: 'It is 2035 and humanity is thriving under the shelter of the pale blue dot. It has been only a few months since NASA had spotted a wierd object floating through the space.',
    image: 'Earth.png',
    options: [
      {
        text: '← Back',
        nextText: 0
      },
      {
        text: 'Are you curious? Let\'s see where it takes us',
        nextText: 2
      },
    ]
  },
  {
    id: 2,
    text: 'The object seems to be nothing like humanity has ever seen. Its unusual trajectory seems to intrigue a lot of researchers. But what\'s even more mysterious is its striking resemblence with ʻOumuamua. They seem to call it \'Object X\'',
    image: 'mystery.gif',
    options: [
      {
        text: '← Back',
        nextText: 1
      },
      {
        text: 'ʻOumuamua! Hmm seems interesting',
        nextText: 3
      },
    ]
  },
  {
    id: 3,
    text: 'ʻOumuamua is the first known interstellar object detected passing through the Solar System. Do you know who discovered it?',
    image: 'ou.jpeg',
    options: [
      {
        text: 'Karen Jean Meech',
        nextText: 4
      },
      {
        text: 'Robert Weryk',
        nextText: 5
      },
      {
        text: 'Robert Jedicke',
        nextText: 4
      },
      {
        text: 'Marco Micheli',
        nextText: 4
      },
    ]
  },
  {
    id: 4,
    text: 'Oops don\'t think that\'s correct. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 3
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },
  {
    id: 5,
    text: 'Oh yes that\'s correct! Now back to the story.\n Thanks to the advanced technology, NASA is all geared up to send a group of researchers to Object X. Their motive is to study the object and it\'s extra-terrestrial orgins.',
    image: 'AstMining.jpeg',
    options: [
      {
        text: '← Back',
        nextText: 3
      },
      {
        text: 'Help NASA crack the math!',
        nextText: 6
      },
    ]
  },
  {
    id: 6,
    text: 'Let\'s start with some space flight performance! \n What would be the nature of the effect of the propellant mass fraction on the vehicle velocity?',
    image: 'rocket.jpeg',
    options: [
      {
        text: 'Exponential',
        nextText: 8
      },
      {
        text: 'Logarithmic',
        nextText: 7
      },
      {
        text: 'Linear',
        nextText: 8
      },
      {
        text: 'Parabolic',
        nextText: 8
      },
    ]
  },
  {
    id: 7,
    text: 'Woah! You are right. ',
    image: 'req.png',
    options: [
      {
        text: '← Back',
        nextText: 6
      },
      {
        text: 'Let\'s crack the next one',
        nextText: 9
      },
    ]
  },
  {
    id: 8,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 6
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },
  {
    id: 9,
    text: 'Astronauts have boarded the ship to Object X. What is the minimum velocity required by the rocket to escape the gravitaional pull of Earth? ',
    image: 'ev.jpeg',
    options: [
      {
        text: '11.19 km/s',
        nextText: 10
      },
      {
        text: '10.18 km/s',
        nextText: 11
      },
      {
        text: '10.38 km/s',
        nextText: 11
      },
      {
        text: '11.29 km/s',
        nextText: 11
      },
    ]
  },
  {
    id: 10,
    text: 'You got this! Thanks to you, now we are leaving Earth successfully ',
    image: 'rocket_leaving.gif',
    options: [
      {
        text: '← Back',
        nextText: 9
      },
      {
        text: 'Let\'s crack the next one',
        nextText: 12
      },
    ]
  },
  {
    id: 11,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 9
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },
  {
    id: 12,
    text: 'Its a long distance journey ahead. Object X is located somewhere near Uranus at the outskirts of Solar System. But ofcourse there is plenty to explore.',
    image: 'uranus.jpg',
    options: [
      {
        text: '← Back',
        nextText: 9
      },
      {
        text: 'Explore',
        nextText: 13
      },
    ]
  },
  {
    id: 13,
    text: 'Oh wow! We have reached Asteriod belt, the smallest and innermost known circumstellar disc in the Solar System. Do you know that about half its mass is contained in the four largest asteroids: Ceres, Vesta, Pallas, and Hygiea. Speaking of which can you guess the mass of the Asteriod belt?',
    image: 'asteroid-belt.png',
    options: [
      {
        text: '4% mass of the Sun',
        nextText: 15
      },
      {
        text: '4% mass of the Earth',
        nextText: 15
      },
      {
        text: '4% mass of the Moon',
        nextText: 14
      },
      {
        text: '4% mass of the Jupiter',
        nextText: 15
      },
    ]
  },
  {
    id: 14,
    text: 'Perfection! Bye Bye Asterid belt. Next stop Jupiter',
    image: 'asteroid-belt.png',
    options: [
      {
        text: '← Back',
        nextText: 13
      },
      {
        text: 'Go to Jupiter',
        nextText: 16
      },
    ]
  },
  {
    id: 15,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 13
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },
  {
    id: 16,
    text: 'Jupiter, the fifth and the largest planet in the solar system. Isn\'t it beautful? It has 80 known moons but do you know which is the largest?',
    image: 'jupiter.jpeg',
    options: [
      {
        text: 'Callisto',
        nextText: 18
      },
      {
        text: 'Europa',
        nextText: 18
      },
      {
        text: 'lo',
        nextText: 18
      },
      {
        text: 'Ganymede',
        nextText: 17
      },
    ]
  },
  {
    id: 17,
    text: 'Perfection! Time to bid farewell to Jupiter',
    image: 'jupiter.jpeg',
    options: [
      {
        text: '← Back',
        nextText: 16
      },
      {
        text: 'Close to destination?',
        nextText: 19
      },
    ]
  },
  {
    id: 18,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 16
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },
  {
    id: 19,
    text: 'We are closing in on Object X. But the crew members are quite in a perplexed state right now. Object X looks nothing like the researchers had speculated. Infact it looks more like .... an advanced spacecraft attached to a rock',
    image: 'alienAst.jpg',
    options: [
      {
        text: 'Abandon mission. Go back ',
        nextText: 16
      },
      {
        text: 'Explore the ship.',
        nextText: 20
      },
    ]
  },
  {
    id: 20,
    text: 'The researchers land on Object X in the hopes of finding something relevant, but to their dismay and relief at the same time, the spaceship seems to be abandoned. The Object has been controlled automatically by some kind of advanced space race.',
    image: 'alienAst.jpg',
    options: [
      {
        text: 'Go back ',
        nextText: 19
      },
      {
        text: 'Continue',
        nextText: 21
      },
    ]
  },
  {
    id: 21,
    text: 'Unfortunately one of the crew members presses a button on the ship out of curiosity causing the ship to override. All the doors in the ship gets sealed and an alien hologram like technology pops up and presents them with 4 options to choose from. They have no other choice but go with the flow.',
    image: 'alienAst.jpg',
    options: [
      {
        text: ' Go back ',
        nextText: 20
      },
      {
        text: 'Show options',
        nextText: 22
      },
    ]
  },
  // // Meeting point 1
  // {
  //   id: 75,
  //   text: 'Lets call this point \'The Great Turn 1\'. Do you think an option is missing? Try completing the rest of the journey and uncover all the clues. May be the last option would be present then.',
  //   image: 'alienAst.jpg',
  //   options: [
  //     {
  //       // exo planets
  //       text: '⟒⌖⍜⌿⌰⏃⋏⟒⏁⌇',
  //       nextText: 23
  //     },
  //     {
  //       // BSS
  //       text: '⏚⟟⋏⏃⍀⊬ ⌇⏁⏃⍀ ⌇⊬⌇⏁⟒⋔',
  //       nextText: 38
  //     },
  //     {
  //       // Set of options
  //       text: 'Move to the next rendezvous point',
  //       nextText: 50
  //     },
  //     {
  //       // Nebula
  //       text: '⋏⟒⏚⎍⌰⏃',
  //       nextText: 62
  //     },
  //   ]
  // },
  // Meeting point 2
  {
    id: 22,
    text: ' Hmm.. the instruction semms to be in some unknow language. Ready to make a guess?',
    image: 'alienAst.jpg',
    options: [
      {
        // pulsar
        text: '⌿⎍⌰⌇⏃⍀',
        nextText: 23
      },
      {
        // BSS
        text: '⏚⟟⋏⏃⍀⊬ ⌇⏁⏃⍀ ⌇⊬⌇⏁⟒⋔',
        nextText: 38
      },
      {
        // WDwarf
        text: '⍙⊑⟟⏁⟒ ⎅⍙⏃⍀⎎',
        nextText: 50
      },
      {
        // Nebula
        text: '⋏⟒⏚⎍⌰⏃',
        nextText: 62
      },
    ]
  },

  // pulsar 1
  {
    id: 23,
    text: 'Once your sensors begin to recover from the sudden change from teleportation, you notice extremely high magnetic field readings, about a million times that of the sun\'s. You also detect strong periodic pulses of electromagnetic radiation. But luckily your ship was quite over-engineered and has heavy radiation protection, but you still can\'t open the windows. This is how the intensity of radiation from the object looks like. What is this object causing this?',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Pulsar',
        nextText: 25
      },
      {
        text: 'Red supergiants',
        nextText: 24
      },
      {
        text: 'White Dwarfs',
        nextText: 24
      },
      {
        text: 'Black holes',
        nextText: 24
      },
    ]
  },
  {
    id: 25,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 23
      },
      {
        text: 'Next',
        nextText: 26
      },
    ]
  },
  {
    id: 24,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 23
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // pulsar 2
  {
    id: 26,
    text: 'The physicist on-board says “This is a pulsar, these are the clocks of the universe. Their bursts are as accurate as atomic clocks. They rotate extremely fast and emit powerful radiation from their magnetic poles. They are like a lighthouse and this one happens to point straight at us! Most of the time, they are ___”',
    image: 'def.jpg',
    options: [
      {
        text: 'White dwarfs',
        nextText: 27
      },
      {
        text: 'Red supergiants',
        nextText: 27
      },
      {
        text: 'Neutron stars',
        nextText: 28
      },
      {
        text: 'Red Dwarf',
        nextText: 27
      },
    ]
  },
  {
    id: 28,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 26
      },
      {
        text: 'Next',
        nextText: 29
      },
    ]
  },
  {
    id: 27,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 26
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // pulsar 3
  {
    id: 29,
    text: 'He continues geeking out. “The data from these seemed so crazy that initially researchers thought they were from extraterrestrial civilizations!  The signal from the first of these, CP1919, recorded in ___ was even dubbed LGM-1 for little green men!”',
    image: 'default-image.jpg',
    options: [
      {
        text: '1923',
        nextText: 31
      },
      {
        text: '1947',
        nextText: 31
      },
      {
        text: '1967',
        nextText: 30
      },
      {
        text: '1986',
        nextText: 31
      },
    ]
  },
  {
    id: 30,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 29
      },
      {
        text: 'Next',
        nextText: 32
      },
    ]
  },
  {
    id: 31,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 29
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // pulsar 4
  {
    id: 32,
    text: 'Being neutron stars, they are incredibly dense and small, and rotate incredibly fast for something of this scale.This generates electric fields from strong varying magnetic fields, resulting in the acceleration of charged particles on the star surface, generating strong electromagnetic fields from the poles. The electromagnetic energy released is obtained from the rotational energy, so they eventually slow down. Pulsars last about ___ years before being too slow and “turning off”.',
    image: 'default-image.jpg',
    options: [
      {
        text: '10-100 billion',
        nextText: 34
      },
      {
        text: '1-10 billion',
        nextText: 34
      },
      {
        text: '100,000 - 1 million',
        nextText: 34
      },
      {
        text: '10-100 million',
        nextText: 33
      },
    ]
  },
  {
    id: 33,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 32
      },
      {
        text: 'Next',
        nextText: 35
      },
    ]
  },
  {
    id: 34,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 32
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // pulsar 5
  {
    id: 35,
    text: 'White dwarfs can also be pulsars, the physicist says. But, since they are much less dense, their moment of inertia is much larger and so their rotation period is ___ than neutron star pulsars and are much rarer. The first one was found in ___.    ',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Higher, 1997',
        nextText: 37
      },
      {
        text: 'Higher, 2016',
        nextText: 36
      },
      {
        text: 'Lower, 1997',
        nextText: 37
      },
      {
        text: 'Lower, 2016',
        nextText: 37
      },
    ]
  },
  {
    id: 36,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 35
      },
      {
        text: 'Next',
        nextText: 22
      },
    ]
  },
  {
    id: 37,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 35
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // BSS 1
  {
    id: 38,
    text: 'Wow! I guess we have reached a Binar Star System. \n Do you know that a binary star system is formed when the distance between the the 2 stars is less than ____',
    image: 'BS1.jpg',
    options: [
      {
        text: '600 Au',
        nextText: 39
      },
      {
        text: '3.2 light years',
        nextText: 40
      },
      {
        text: '1 parsec',
        nextText: 40
      },
      {
        text: '7 million Kilometres',
        nextText: 40
      },
    ]
  },
  {
    id: 39,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 38
      },
      {
        text: 'Next',
        nextText: 41
      },
    ]
  },
  {
    id: 40,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 38
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // BSS 2
  {
    id: 41,
    text: 'The star system gravitational bound together ,  rotates around a common centre of mass referred to as',
    image: 'BS2.jpg',
    options: [
      {
        text: 'Barycentre',
        nextText: 42
      },
      {
        text: 'Metacentre',
        nextText: 43
      },
      {
        text: 'Centre of gravity',
        nextText: 43
      },
      {
        text: 'Singularity',
        nextText: 43
      },
    ]
  },
  {
    id: 42,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 41
      },
      {
        text: 'Next',
        nextText: 44
      },
    ]
  },
  {
    id: 43,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 41
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // BSS 3
  {
    id: 44,
    text: 'The binary star system you are witnessing is 4U 1820-30 composed of neutron star and white dwarf with neutron  and electron degeneracy pressures. The white dwarf gains in size through mass transfer forming an accretion disc and finally explodes releasing binding energy converting into K.E and lunlminosity . This is called as',
    image: 'BS23.gif',
    options: [
      {
        text: 'Carbon explosion',
        nextText: 45
      },
      {
        text: 'Supernova',
        nextText: 45
      },
      {
        text: 'Stellar Novae',
        nextText: 46
      },
      {
        text: 'Neutrino bomb',
        nextText: 45
      },
    ]
  },
  {
    id: 46,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 44
      },
      {
        text: 'Next',
        nextText: 47
      },
    ]
  },
  {
    id: 45,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 44
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },
  // BSS 4
  {
    id: 47,
    text: 'An important region in the system , where the gravitational potential is zero, called _____, the path for mass transfer between the stars are connected at a point called Inner Lagrange point .',
    image: 'BS3.jpg',
    options: [
      {
        text: 'Barycentre',
        nextText: 48
      },
      {
        text: 'Focal point',
        nextText: 48
      },
      {
        text: 'Centre of mass',
        nextText: 48
      },
      {
        text: 'Roche lobe',
        nextText: 49
      },
    ]
  },
  {
    id: 49,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 47
      },
      {
        text: 'Next',
        nextText: 22
      },
    ]
  },
  {
    id: 48,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 47
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // white dwarf -1
  {
    id: 50,
    text: '"This is the final stage of a star whose nuclear fuel is completely exhausted and slowly nearing its end."\n Others are curious to know more about that object and now let\'s explore! what do you think they saw ?',
    image: 'WD1.jpeg',
    options: [
      {
        text: 'White dwarf',
        nextText: 52
      },
      {
        text: 'Black dwarf',
        nextText: 51
      },
      {
        text: 'Red giant',
        nextText: 51
      },
      {
        text: 'Neutron star',
        nextText: 51
      },
    ]
  },
  {
    id: 52,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 50
      },
      {
        text: 'Next',
        nextText: 53
      },
    ]
  },
  {
    id: 51,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 50
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // white dwarf -2
  {
    id: 53,
    text: 'Now that the crew members know it\'s name, and most of them doesn\'t know about the existence of such things in the solar system and somebody asked when was it first discovered and who discoverd the first white dwarf?',
    image: 'WD2.jpeg',
    options: [
      {
        text: '1810, Henry Norris Russel',
        nextText: 54
      },
      {
        text: '1783, William Herschel',
        nextText: 55
      },
      {
        text: '1795, Williamina Fleming',
        nextText: 54
      },
      {
        text: '1801, Charles Pickering',
        nextText: 54
      },
    ]
  },
  {
    id: 55,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 53
      },
      {
        text: 'Next',
        nextText: 56
      },
    ]
  },
  {
    id: 54,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 53
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // white dwarf -3
  {
    id: 56,
    text: 'On the way some one asked about the nearest white dwarf to planet earth and at what distance is it from earth ',
    image: 'WD3.jpeg',
    options: [
      {
        text: 'Eridani B, 8.3 light years',
        nextText: 57
      },
      {
        text: 'Procyon B, 7.2 light years',
        nextText: 57
      },
      {
        text: 'Eridani B, 8.3 light years',
        nextText: 57
      },
      {
        text: 'Sirius B, 8.6 light years',
        nextText: 58
      },
    ]
  },
  {
    id: 58,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 56
      },
      {
        text: 'Next',
        nextText: 59
      },
    ]
  },
  {
    id: 57,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 56
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },
  // white dwarf - 4
  {
    id: 59,
    text: 'Even though the nuclear fuel is entirely burned out and only a faint light comes out of it from the stored thermal energy, its core is still at some temperature range and its temperature is preserved from sudden cooling with the opacity to radiation by its outer layers',
    image: 'WD2.jpeg',
    options: [
      {
        text: '3000000K ',
        nextText: 60
      },
      {
        text: '5000-10000000K',
        nextText: 60
      },
      {
        text: '100000000K-2000000000K',
        nextText: 60
      },
      {
        text: 'depends on when it actually run out of fuel',
        nextText: 61
      },
    ]
  },
  {
    id: 61,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 59
      },
      {
        text: 'Next',
        nextText: 22
      },
    ]
  },
  {
    id: 60,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 59
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // Nebula 1
  {
    id: 62,
    text: 'Wow its a Nebula. The great phenomenon that you see before your eyes, the remnants of the final stages of stellar evolution for lower-mass stars was discovered by.',
    image: 'Neb1.png',
    options: [
      {
        text: 'Caroline Herschel ',
        nextText: 63
      },
      {
        text: 'Sir Mathew Maury',
        nextText: 63
      },
      {
        text: 'Sir Robert Bunsen',
        nextText: 63
      },
      {
        text: 'Charles Messier',
        nextText: 64
      },
    ]
  },
  {
    id: 64,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 62
      },
      {
        text: 'Next',
        nextText: 65
      },
    ]
  },
  {
    id: 63,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 62
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },
  // Nebula 2
  {
    id: 66,
    text: 'It is an expanding, glowing shell of hot gas (plasma) that is cast off towards the end of a low-mass star\'s life. Despite the name, they have nothing to do with planets, and were so named because early astronomers thought they looked a bit like planets through a small telescope.what is it',
    image: 'Neb2.png',
    options: [
      {
        text: 'Planetary Nebula',
        nextText: 68
      },
      {
        text: 'Messier objects',
        nextText: 67
      },
      {
        text: 'Comet',
        nextText: 67
      },
      {
        text: 'Asteroid',
        nextText: 67
      },
    ]
  },
  {
    id: 68,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 66
      },
      {
        text: 'Next',
        nextText: 69
      },
    ]
  },
  {
    id: 67,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 66
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // Nebula 3
  {
    id: 69,
    text: 'The brightest nebulae visible to the naked eye is ',
    image: 'Ne3.jpg',
    options: [
      {
        text: 'Bow tie nebula',
        nextText: 70
      },
      {
        text: 'Carina nebula',
        nextText: 70
      },
      {
        text: 'Orion nebula',
        nextText: 71
      },
      {
        text: 'Crab nebula',
        nextText: 70
      },
    ]
  },
  {
    id: 71,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 69
      },
      {
        text: 'Next',
        nextText: 72
      },
    ]
  },
  {
    id: 70,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 69
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },

  // Nebula 4
  {
    id: 72,
    text: 'The most prominent gas in filaments of crab nebula is ',
    image: 'Neb4.png',
    options: [
      {
        text: 'Nitrogen',
        nextText: 73
      },
      {
        text: 'Helium',
        nextText: 74
      },
      {
        text: 'Oxygen',
        nextText: 73
      },
      {
        text: 'Carbon Dioxide',
        nextText: 73
      },
    ]
  },
  {
    id: 74,
    text: 'That\'s right. Let\'s move on',
    image: 'default-image.jpg',
    options: [
      {
        text: '← Back',
        nextText: 69
      },
      {
        text: 'Next',
        nextText: 75
      },
    ]
  },
  {
    id: 73,
    text: 'Oops! That did not go as planned. Let\'s give it one more shot',
    image: 'default-image.jpg',
    options: [
      {
        text: 'Try Again',
        nextText: 69
      },
      {
        text: 'Start from the beginning',
        nextText: 1
      },
    ]
  },
























  {
    id: 2,
    text: 'But before they venture forth they have to solve a set of problems. Let\'s address them one by one.',
    options: [
      {
        text: 'Trade the goo for a sword',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Trade the goo for a shield',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: 'Ignore the merchant',
        nextText: 3
      }
    ]
  },  
]

startGame()