const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const qImgElement = document.getElementById('qpic')


let state = {}

function startGame() {
  state = {}
  showTextNode(1)
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
    text: 'Astral Space Club GECT',
    image: 'Earth.png',
    options: [
      {
        text: 'Start',
        nextText: 2
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
        text: 'Are you curious? Let\'s see where it takes us',
        nextText: 2
      },
      {
        text: '← Back',
        nextText: 0
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
    image: 'default-image.jpg',
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
    text: 'Astronauts have boarded the ship to Object X. What is the minimum velocity required by the rocket to gravitaional pull of Earth? ',
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
    text: 'You got this! Thanks to you now we are leaving Earth successfully ',
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
    text: 'You got this! Thanks to you now we are leaving Earth successfully ',
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
  
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()