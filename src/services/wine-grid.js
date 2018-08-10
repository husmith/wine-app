const gridSectionData = [{
    id: 0,
    section: 'visual',
    attributes: [{
        id: 0,
        name: 'clarity',
        type: 'MULTI_CHOICE',
        options: [{
            id: 0,
            name: 'clear',
            selected: true
          },
          {
            id: 1,
            name: 'slight haze',
            selected: false
          },
          {
            id: 2,
            name: 'murky',
            selected: false
          },
          {
            id: 3,
            name: 'presence of sediment',
            selected: false
          },
          {
            id: 4,
            name: 'gas (bubbles)',
            selected: false
          }
        ]
      },
      {
        id: 1,
        name: 'brightness',
        type: 'MULTI_CHOICE',
        options: [{
            id: 0,
            name: 'dull',
            selected: true
          },
          {
            id: 1,
            name: 'bright',
            selected: false
          },
          {
            id: 2,
            name: 'day bright',
            selected: false
          },
          {
            id: 3,
            name: 'star bright',
            selected: false
          },
          {
            id: 4,
            name: 'brilliant',
            selected: false
          }
        ]
      },
      {
        id: 2,
        name: 'intensity',
        type: 'SCALE',
        options: [{
            id: 0,
            name: 'low',
            selected: true
          },
          {
            id: 1,
            name: 'medium-minus',
            selected: false
          },
          {
            id: 2,
            name: 'medium',
            selected: false
          },
          {
            id: 3,
            name: 'medium-plus',
            selected: false
          },
          {
            id: 4,
            name: 'high',
            selected: false
          }
        ]
      },
      {
        id: 3,
        name: 'color',
        type: 'MUlTI_CHOICE',
        options: [{
            id: 0,
            name: 'red',
            selected: true
          },
          {
            id: 1,
            name: 'white',
            selected: false
          }
        ],
        nestedOptions: [{
            id: 0,
            parentId: 0,
            type: 'MULTI_CHOICE',
            name: 'primary color',
            description: 'The color of red wines can indicate pH. More acidic wines with low pH tend to be on the bright cherry red end of the red spectrum, while those with higher pH are more purple/blue. Color will also vary with the level of initial extraction, presence or absence of oak during ageing, and level of sulfur dioxide additions (which can have bleaching effect/loss of color). It also tells you about the oxygen history of the wine: how much oxygen it has encountered during the winemaking process and ageing. Young wines are typically vividly, brightly coloured with fresh red and purple colours dominating. As they see more oxygen the colour shifts more in the orange/brick red spectrum, tending towards brown with excessive oxygen exposure. Cooler vintages tend to produce deeper coloured red wines.',
            options: [{
                id: 0,
                name: 'garnet',
                selected: false
              },
              {
                id: 1,
                name: 'ruby',
                selected: false
              },
              {
                id: 2,
                name: 'purple',
                selected: false
              }
            ]
          },
          {
            id: 1,
            parentId: 1,
            type: 'MULTI_CHOICE',
            description: '',
            name: 'primary color',
            options: [{
                id: 0,
                name: 'straw',
                selected: false
              },
              {
                id: 1,
                name: 'yellow',
                selected: false
              },
              {
                id: 2,
                name: 'gold',
                selected: false
              }
            ]
          },
          {
            id: 2,
            parentId: 0,
            name: 'secondary color',
            type: 'MULTI_CHOICE',
            options: [{
                id: 0,
                name: 'red base',
                selected: true
              },
              {
                id: 1,
                name: 'blue base',
                selected: false
              }
            ]
          },
          {
            id: 3,
            parentId: 1,
            name: 'secondary color',
            type: 'MULTI_CHOICE',
            options: [{
                id: 0,
                name: 'green',
                selected: true
              },
              {
                id: 1,
                name: 'copper',
                selected: false
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: 'miniscus',
        options: [{
            id: 0,
            name: 'rim variation',
            description: 'A wide rim variation in a wine can indicate an older wine, whereas a very tight rim variation can show you a very young wine.',
            type: 'MULTI_CHOICE',
            options: [{
                id: 0,
                name: 'yes',
                selected: true
              },
              {
                id: 1,
                name: 'no',
                selected: false
              }
            ]
          },
          {
            id: 1,
            name: 'width',
            type: 'TEXT_INPUT',
            value: ''
          },
          {
            id: 2,
            name: 'color variation',
            type: 'TEXT_INPUT',
            value: ''
          },
          {
            id: 3,
            name: 'clarity',
            type: 'TEXT_INPUT',
            value: ''
          }
        ]
      },
      {
        id: 6,
        name: 'viscosity',
        type: 'SCALE',
        options: [{
            id: 0,
            name: 'low',
            selected: true
          },
          {
            id: 1,
            name: 'medium-minus',
            selected: false
          },
          {
            id: 2,
            name: 'medium',
            selected: false
          },
          {
            id: 3,
            name: 'medium-plus',
            selected: false
          },
          {
            id: 4,
            name: 'high',
            selected: false
          }
        ]
      }
    ]
  }, {
    id: 1,
    section: 'nose/palate',
    attributes: [{
        id: 0,
        name: 'condition',
        options: [{
            id: 0,
            name: 'sound vs unsound',
            type: 'MULTI_CHOICE',
            options: [{
                id: 0,
                name: 'sound',
                selected: true
              },
              {
                id: 1,
                name: 'unsound',
                selected: false
              }
            ]
          },
          {
            id: 1,
            name: 'clean vs faulty',
            type: 'MULTI_CHOICE',
            options: [{
                id: 0,
                name: 'clean',
                selected: true
              },
              {
                id: 1,
                name: 'faulty',
                selected: false
              }
            ]
          }
        ]
      },
      {
        id: 1,
        name: 'intensity',
        type: 'SCALE',
        options: [{
            id: 0,
            name: 'low',
            selected: true
          },
          {
            id: 1,
            name: 'medium-minus',
            selected: false
          },
          {
            id: 2,
            name: 'medium',
            selected: false
          },
          {
            id: 3,
            name: 'medium-plus',
            selected: false
          },
          {
            id: 4,
            name: 'high',
            selected: false
          }
        ]
      },
      {
        id: 2,
        name: 'aroma vs boquet',
        type: 'MULTI_CHOICE',
        options: [{
            id: 0,
            name: 'youthful aromas',
            selected: true
          },
          {
            id: 1,
            name: 'aged tertiary aromas',
            selected: false
          }
        ]
      },
      {
        id: 3,
        name: 'primary aroma',
        type: 'MULTI_SELECT',
        groups: ['citrus', 'red fruits', 'tree fruits', 'tropical fruits', 'black fruits', 'dried fruits', 'spice', 'flowers', 'herbs', 'vegetable', 'earth'],
        options: [{
            id: 0,
            group: 'citrus',
            name: 'lime',
            selected: false
          },
          {
            id: 1,
            group: 'citrus',
            name: 'lemon',
            selected: false
          },
          {
            id: 2,
            group: 'citrus',
            name: 'grapefruit',
            selected: false
          },
          {
            id: 3,
            group: 'citrus',
            name: 'orange',
            selected: false
          },
          {
            id: 4,
            group: 'citrus',
            name: 'marmalade',
            selected: false
          },
          {
            id: 10,
            group: 'red fruits',
            name: 'cranberry',
            selected: false
          },
          {
            id: 11,
            group: 'red fruits',
            name: 'red plum',
            selected: false
          },
          {
            id: 12,
            group: 'red fruits',
            name: 'pomegranate',
            selected: false
          },
          {
            id: 13,
            group: 'red fruits',
            name: 'sour cherry',
            selected: false
          },
          {
            id: 14,
            group: 'red fruits',
            name: 'strawberry',
            selected: false
          },
          {
            id: 15,
            group: 'red fruits',
            name: 'cherry',
            selected: false
          },
          {
            id: 16,
            group: 'red fruits',
            name: 'raspberry',
            selected: false
          },
          {
            id: 20,
            name: 'quince',
            group: 'tree fruits',
            selected: false
          },
          {
            id: 21,
            name: 'apple',
            group: 'tree fruits',
            selected: false
          },
          {
            id: 22,
            name: 'pear',
            group: 'tree fruits',
            selected: false
          },
          {
            id: 23,
            name: 'nectarine',
            group: 'tree fruits',
            selected: false
          },
          {
            id: 24,
            name: 'peach',
            group: 'tree fruits',
            selected: false
          },
          {
            id: 25,
            name: 'apricot',
            group: 'tree fruits',
            selected: false
          },
          {
            id: 26,
            name: 'persimmon',
            group: 'tree fruits',
            selected: false
          },
          {
            id: 30,
            group: 'tropical fruits',
            name: 'pineapple',
            selected: false
          },
          {
            id: 31,
            group: 'tropical fruits',
            name: 'mango',
            selected: false
          },
          {
            id: 32,
            group: 'tropical fruits',
            name: 'guava',
            selected: false
          },
          {
            id: 33,
            group: 'tropical fruits',
            name: 'passionfruit',
            selected: false
          },
          {
            id: 34,
            group: 'tropical fruits',
            name: 'lychee',
            selected: false
          },
          {
            id: 35,
            group: 'tropical fruits',
            name: 'bubblegum',
            selected: false

          },
          {
            id: 40,
            group: 'black fruits',
            name: 'boysenberry',
            selected: false
          },
          {
            id: 41,
            group: 'black fruits',
            name: 'black currant',
            selected: false
          },
          {
            id: 42,
            group: 'black fruits',
            name: 'black cherry',
            selected: false
          },
          {
            id: 43,
            group: 'black fruits',
            name: 'plum',
            selected: false
          },
          {
            id: 44,
            group: 'black fruits',
            name: 'blackberry',
            selected: false
          },
          {
            id: 45,
            group: 'black fruits',
            name: 'blueberry',
            selected: false
          },
          {
            id: 46,
            group: 'black fruits',
            name: 'olive',
            selected: false

          },
          {
            id: 50,
            group: 'dried fruits',
            name: 'raisin',
            selected: false
          },
          {
            id: 51,
            group: 'dried fruits',
            name: 'fig',
            selected: false
          },
          {
            id: 52,
            group: 'dried fruits',
            name: 'date',
            selected: false
          },
          {
            id: 53,
            group: 'dried fruits',
            name: 'fruitcake',
            selected: false
          },
          {
            id: 54,
            group: 'dried fruits',
            name: 'noble rot',
            selected: false
          },
          {
            id: 55,
            group: 'dried fruits',
            name: 'beeswax',
            selected: false
          },
          {
            id: 56,
            group: 'dried fruits',
            name: 'ginger',
            selected: false
          },
          {
            id: 57,
            group: 'dried fruits',
            name: 'honey',
            selected: false
          },
          {
            id: 60,
            group: 'spice',
            name: 'white pepper',
            selected: false
          },
          {
            id: 61,
            group: 'spice',
            name: 'red pepper',
            selected: false
          },
          {
            id: 62,
            group: 'spice',
            name: 'black pepper',
            selected: false
          },
          {
            id: 63,
            group: 'spice',
            name: 'cinnamon',
            selected: false
          },
          {
            id: 64,
            group: 'spice',
            name: 'anise',
            selected: false
          },
          {
            id: 65,
            group: 'spice',
            name: '5-spice',
            selected: false
          },
          {
            id: 66,
            group: 'spice',
            name: 'fennel',
            selected: false
          },
          {
            id: 70,
            group: 'flowers',
            name: 'rose',
            selected: false
          },
          {
            id: 71,
            group: 'flowers',
            name: 'geranium',
            selected: false
          },
          {
            id: 72,
            group: 'flowers',
            name: 'citrus blossom',
            selected: false
          },
          {
            id: 73,
            group: 'flowers',
            name: 'white flowers/lily',
            selected: false
          },
          {
            id: 74,
            group: 'flowers',
            name: 'lavendar',
            selected: false
          },
          {
            id: 75,
            group: 'flowers',
            name: 'violet',
            selected: false
          },
          {
            id: 80,
            group: 'herbs',
            name: 'grass',
            selected: false
          },
          {
            id: 81,
            group: 'herbs',
            name: 'mint',
            selected: false
          },
          {
            id: 82,
            group: 'herbs',
            name: 'rosemary',
            selected: false
          },
          {
            id: 83,
            group: 'herbs',
            name: 'sage',
            selected: false
          },
          {
            id: 84,
            group: 'herbs',
            name: 'thyme',
            selected: false
          },
          {
            id: 85,
            group: 'herbs',
            name: 'dill',
            selected: false
          },
          {
            id: 86,
            group: 'herbs',
            name: 'eucalyptus',
            selected: false
          },
          {
            id: 87,
            group: 'herbs',
            name: 'clove',
            selected: false
          },
          {
            id: 90,
            group: 'vegetable',
            name: 'tomato leaf',
            selected: false
          },
          {
            id: 91,
            group: 'vegetable',
            name: 'gooseberry',
            selected: false
          },
          {
            id: 92,
            group: 'vegetable',
            name: 'bell pepper',
            selected: false
          },
          {
            id: 93,
            group: 'vegetable',
            name: 'jalapeño',
            selected: false
          },
          {
            id: 94,
            group: 'vegetable',
            name: 'bitter almond',
            selected: false
          },
          {
            id: 95,
            group: 'vegetable',
            name: 'tomato',
            selected: false
          },
          {
            id: 96,
            group: 'vegetable',
            name: 'black tea',
            selected: false
          },
          {
            id: 100,
            group: 'earth',
            name: 'clay pot',
            selected: false
          },
          {
            id: 101,
            group: 'earth',
            name: 'slate',
            selected: false
          },
          {
            id: 102,
            group: 'earth',
            name: 'wet gravel',
            selected: false
          },
          {
            id: 103,
            group: 'earth',
            name: 'potting soil',
            selected: false
          },
          {
            id: 104,
            group: 'earth',
            name: 'red beet',
            selected: false
          },
          {
            id: 105,
            group: 'earth',
            name: 'volcanic rocks',
            selected: false
          },
          {
            id: 106,
            group: 'earth',
            name: 'petroleum',
            selected: false
          },
        ]
      },
  {
    id: 4,
    name: 'secondary aromas',
    type: 'MULTI_SELECT',
    options: [
     {
          id: 0,
          name: 'butter',
          selected: false
        },
        {
          id: 1,
          name: 'cream',
          selected: false
        },
        {
          id: 2,
          name: 'sourdough',
          selected: false
        },
        {
          id: 3,
          name: 'lager',
          selected: false
        },
        {
          id: 4,
          name: 'truffle',
          selected: false
        },
        {
          id: 5,
          name: 'mushroom',
          selected: false
        },
      ]
  },
  {
    id: 5,
    name: 'tertiary aromas',
    type: 'MULTI_SELECT',
    groups: ['oak aging', 'general aging'],
    options: [{
            id: 0,
            group: 'oak aging',
            name: 'vanilla',
            selected: false
          },
          {
            id: 1,
            group: 'oak aging',
            name: 'coconut',
            selected: false
          },
          {
            id: 2,
            group: 'oak aging',
            name: 'baking spices',
            selected: false
          },
          {
            id: 3,
            group: 'oak aging',
            name: 'cigar box',
            selected: false
          },
          {
            id: 4,
            group: 'oak aging',
            name: 'smoke',
            selected: false
          },
          {
            id: 5,
            group: 'oak aging',
            name: 'dill',
            selected: false
          },
       {
            id: 10,
            group: 'general aging',
            name: 'dried fruit',
            selected: false
          },
          {
            id: 11,
            group: 'general aging',
            name: 'nutty flavors',
            selected: false
          },
          {
            id: 12,
            group: 'general aging',
            name: 'tobacco',
            selected: false
          },
          {
            id: 13,
            group: 'general aging',
            name: 'coffee',
            selected: false
          },
          {
            id: 14,
            group: 'general aging',
            name: 'cocoa',
            selected: false
          },
          {
            id: 15,
            group: 'general aging',
            name: 'leather',
            selected: false
          },
        ]
  },
  {
    id: 6,
    name: 'oak',
    options: [{
      id: 0,
      type: 'MULTI_CHOICE',
      name: 'has oak',
      options: [{
          id: 0,
          name: 'yes',
          selected: true

        },
        {
          id: 1,
          name: 'no',
          selected: false
        }
      ]
    }],
    nestedOptions: [{
        id: 0,
        parentId: 0,
        type: 'MULTI_CHOICE',
        name: 'european/american',
        options: [{
            id: 0,
            name: 'european',
            selected: true
          },
          {
            id: 1,
            name: 'american',
            selected: false
          }
        ]
      },
      {
        id: 1,
        parentId: 0,
        type: 'MULTI_CHOICE',
        name: 'new/neutral',
        options: [{
            id: 0,
            name: 'new',
            selected: true
          },
          {
            id: 1,
            name: 'neutral',
            selected: false
          }
        ]
      }
    ]
  },
  {
    id: 7,
    name: 'faults',
    type: 'MULTI_SELECT',
    options: [{
        id: 0,
        name: 'musty cardboard',
        selected: false
      },
      {
        id: 1,
        name: 'wet dog',
        selected: false
      },
      {
        id: 2,
        name: 'cured meat',
        selected: false
      },
    ]
  }
]
}, {
  id: 2,
  section: 'structure',
  attributes: [{
      id: 0,
      name: 'sweetness',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'dry',
          selected: true
        },
        {
          id: 1,
          name: 'off-dry',
          selected: false
        },
        {
          id: 2,
          name: 'semi-sweet',
          selected: false
        },
        {
          id: 3,
          name: 'medium sweet',
          selected: false
        },
        {
          id: 4,
          name: 'sweet',
          selected: false
        }
      ]
    },
    {
      id: 1,
      name: 'body',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'low',
          selected: true
        },
        {
          id: 1,
          name: 'medium-minus',
          selected: false
        },
        {
          id: 2,
          name: 'medium',
          selected: false
        },
        {
          id: 3,
          name: 'medium-plus',
          selected: false
        },
        {
          id: 4,
          name: 'high',
          selected: false
        }
      ]
    },
    {
      id: 2,
      name: 'acidity',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'low',
          selected: true
        },
        {
          id: 1,
          name: 'medium-minus',
          selected: false
        },
        {
          id: 2,
          name: 'medium',
          selected: false
        },
        {
          id: 3,
          name: 'medium-plus',
          selected: false
        },
        {
          id: 4,
          name: 'high',
          selected: false
        }
      ]
    },
    {
      id: 3,
      name: 'alcohol',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'low',
          selected: true
        },
        {
          id: 1,
          name: 'medium-minus',
          selected: false
        },
        {
          id: 2,
          name: 'medium',
          selected: false
        },
        {
          id: 3,
          name: 'medium-plus',
          selected: false
        },
        {
          id: 4,
          name: 'high',
          selected: false
        }
      ]
    },
    {
      id: 4,
      name: 'tannin',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'low',
          selected: true
        },
        {
          id: 1,
          name: 'medium-minus',
          selected: false
        },
        {
          id: 2,
          name: 'medium',
          selected: false
        },
        {
          id: 3,
          name: 'medium-plus',
          selected: false
        },
        {
          id: 4,
          name: 'high',
          selected: false
        }
      ]
    },
    {
      id: 5,
      name: 'complexity',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'low',
          selected: true
        },
        {
          id: 1,
          name: 'medium-minus',
          selected: false
        },
        {
          id: 2,
          name: 'medium',
          selected: false
        },
        {
          id: 3,
          name: 'medium-plus',
          selected: false
        },
        {
          id: 4,
          name: 'high',
          selected: false
        }
      ]
    },
    {
      id: 6,
      name: 'length',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'low',
          selected: true
        },
        {
          id: 1,
          name: 'medium-minus',
          selected: false
        },
        {
          id: 2,
          name: 'medium',
          selected: false
        },
        {
          id: 3,
          name: 'medium-plus',
          selected: false
        },
        {
          id: 4,
          name: 'long',
          selected: false
        }
      ]
    },
    {
      id: 7,
      name: 'balance',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'in balance',
          selected: true
        },
        {
          id: 1,
          name: 'out of balance',
          selected: false
        }
      ]
    }
  ]
}, {
  id: 3,
  section: 'initial conclusion',
  attributes: [{
      id: 0,
      name: 'quality',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'poor',
          selected: false
        },
        {
          id: 1,
          name: 'average',
          selected: false
        },
        {
          id: 2,
          name: 'good',
          selected: true
        },
        {
          id: 3,
          name: 'very good',
          selected: false
        },
        {
          id: 4,
          name: 'outstanding',
          selected: false
        }
      ]
    },
    {
      id: 1,
      name: 'climate',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'cool climate',
          selected: false
        },
        {
          id: 1,
          name: 'warm/moderate climate',
          selected: false
        },
        {
          id: 2,
          name: 'hot climate',
          selected: false
        }
      ]
    },
    {
      id: 2,
      name: 'origin and region',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'new world',
          selected: true
        },
        {
          id: 1,
          name: 'old world',
          selected: false
        }
      ]
    },
    {
      id: 3,
      name: 'possible age',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'youthful',
          selected: true
        },
        {
          id: 1,
          name: 'middle aged',
          selected: false
        },
        {
          id: 2,
          name: 'old',
          selected: false
        }
      ]
    },
    {
      id: 4,
      name: 'grape/blend',
      options: []
    }
  ]
}, {
  id: 4,
  section: 'conclusion',
  attributes: [{
      id: 0,
      name: 'quality',
      type: 'MULTI_CHOICE',
      options: [{
          id: 0,
          name: 'regional wine'
        },
        {
          id: 1,
          name: 'village wine'
        },
        {
          id: 2,
          name: 'cru level'
        },
        {
          id: 3,
          name: 'aging classification (reserva)'
        }
      ]
    },
    {
      id: 1,
      name: 'grape/blend',
      type: 'TEXT_INPUT',
      options: [{
          id: 0,
          name: 'variety',
          value: ''
        },
        {
          id: 1,
          name: 'main grape in blend',
          value: ''
        }
      ]
    },
    {
      id: 2,
      name: 'country and region',
      type: 'TEXT_INPUT',
      options: [{
          id: 0,
          name: 'country',
          value: ''
        },
        {
          id: 1,
          name: 'region',
          value: ''
        },
        {
          id: 2,
          name: 'subregion',
          value: ''
        }
      ]
    },
    {
      id: 3,
      name: 'vintage',
      type: 'TEXT_INPUT',
      value: ''
    }
  ]
}
];
export default gridSectionData;