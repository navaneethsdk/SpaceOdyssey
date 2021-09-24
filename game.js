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
  {
    id: 22,
    text: 'Interesting the options seems to be in some unknown language. Ready to make a guess?',
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
        nextText: 32
      },
      {
        // WDwarf
        text: '⍙⊑⟟⏁⟒ ⎅⍙⏃⍀⎎',
        nextText: 33
      },
      {
        text: '⍙⊑⟟⏁⟒ ⎅⍙⏃⍀⎎',
        nextText: 34
      },
    ]
  },
  {
    id: 23,
    text: 'Once your sensors begin to recover from the sudden change from teleportation, you notice extremely high magnetic field readings, about a million times that of the sun\'s. You also detect strong periodic pulses of electromagnetic radiation. But luckily your ship was quite over-engineered and has heavy radiation protection, but you still can\'t open the windows. This is how the intensity of radiation from the object looks like. What is this object causing this?',
    image: 'def.jpg',
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
    image: 'def.jpeg',
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
    image: 'def.jpeg',
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
  {
    id: 29,
    text: 'He continues geeking out. “The data from these seemed so crazy that initially researchers thought they were from extraterrestrial civilizations!  The signal from the first of these, CP1919, recorded in ___ was even dubbed LGM-1 for little green men!”',
    image: 'def.jpg',
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
    image: 'def.jpeg',
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