const stimuliSets = [
  {
    category: "train",
    description1: "Tomorrow, you need to go from Palo Alto to San Francisco early in the morning. Your brother goes to San Francisco quite frequently, and you remember he said:",
    description2: "You go to the ticket office at the station and ask for a train schedule for early the next morning. The operator responds:",
    person: "the operator",
    originalBiasOptions: [
      { 
        caption: "\"I usually take a train in the morning, before 7:00.\"", 
        image: "images/train_pos.png",
        condition: "spk-pos" 
      },
      { 
        caption: "\"I don't remember if there is a train in the early morning. I only go there in the afternoon.\"", 
        image: "images/train_neu.png",
        condition: "spk-neu" 
      },
      { 
        caption: "\"There is no train available in the early morning, before 7:00.\"", 
        image: "images/train_neg.png",
        condition: "spk-neg" 
      }
    ],
    contextualEvidenceOptions: [
      { 
        caption: "\"You can take a train at 6:00.\"", 
        image: "images/train_pos.png",
        condition: "evi-pos" 
      },
      { 
        caption: "\"Do you have any preference?\"", 
        image: "images/train_neu.png",
        condition: "evi-neu"
      },
      { 
        caption: "\"The only train available is at 13:00\"", 
        image: "images/train_neg.png",
        condition: "evi-neg" 
      }
    ],
    polarQuestions: [
      { 
        question: "Is there a train in the early morning?",
        type: "PPQ" 
      },
      { 
        question: "Really? Is there a train in the early morning?",
        type: "ReallyPQ" 
      },
      { 
        question: "Is there no train in the early morning?",
        type: "LNQ" 
      },
      { 
        question: "Isn't there a train in the early morning?",
        type: "HNQ" 
      },
      { 
        question: "Other",
        type: "Other" 
      }
    ]
  },
  {
    category: "library",
    description1: "You need to read a book for a class and want to borrow it from the library. You're new to town, but you remember hearing something from your landlord:",
    description2: "To make sure, you called the city hall and hear this:",
    person:"receptionist",
    originalBiasOptions: [
      { 
        caption: "\"A new library opened last week two blocks away.\"", 
        image: "images/library_pos.png",
        condition: "spk-pos" 
      },
      { 
        caption: "\"I haven't really looked for a library around here, so I'm not sure.\"", 
        image: "images/library_neu.png",
        condition: "spk-neu" 
      },
      { 
        caption: "\"I wish there was a library in our city.\"", 
        image: "images/library_neg.png",
        condition: "spk-neg" 
      }
    ],
    contextualEvidenceOptions: [
      { 
        caption: "\"There's one on Escondido Road.\"", 
        image: "images/library_pos.png",
        condition: "evi-pos" 
      },
      { 
        caption: "\"I'm not sure. You'd better check the city website.\"", 
        image: "images/library_neu.png",
        condition: "evi-neu" 
      },
      { 
        caption: "\"Unfortunately, we don't have any. You'll need to drive a while to find one.\"", 
        image: "images/library_neg.png",
        condition: "evi-neg" 
      }
    ],
    polarQuestions: [
      { 
        question: "Is there a library nearby?",
        type: "PPQ" 
      },
      { 
        question: "Really? Is there a library nearby?",
        type: "ReallyPQ" 
      },
      { 
        question: "Is there no library nearby?",
        type: "LNQ" 
      },
      { 
        question: "Isn't there a library nearby?",
        type: "HNQ" 
      },
      { 
        question: "Other",
        type: "Other"
      }
    ]
  },
  {
    category: "bike",
    description1: "You're planning a relaxed weekend with your cousin and are thinking about possible outdoor activities. You remember she told you last month:",
    description2: "The next day, you visit her place thinking about suggesting some outdoor activities for next weekend. Then you notice:",
    person:"your cousin",
    originalBiasOptions: [
      {
        caption: "\"I've been biking a lot lately — every Sunday morning, actually.\"",
        image: "images/bike_pos.png",
        condition: "spk-pos"
      },
      {
        caption: "\"I can't remember if I brought the bike with me when I moved here.\"",
        image: "images/bike_neu.png",
        condition: "spk-neu"
      },
      {
        caption: "\"I left the bike behind. Haven't touched it in ages.\"",
        image: "images/bike_neg.png",
        condition: "spk-neg"
      }
    ],
    contextualEvidenceOptions: [
      {
        caption: "There's a bike helmet on the table and chains by the door.",
        image: "images/bike_pos.png",
        condition: "evi-pos"
      },
      {
        caption: "The garage is packed with stuff. Hard to tell what's there.",
        image: "images/bike_neu.png",
        condition: "evi-neu"
      },
      {
        caption: "Her bike rack is empty, and the tires hanging on the wall look like they haven't been touched in ages.",
        image: "images/bike_neg.png",
        condition: "evi-neg"
      }
    ],
    polarQuestions: [
      {
        question: "Do you have a bike?",
        type: "PPQ"
      },
      {
        question: "Really? Do you have a bike?",
        type: "ReallyPQ"
      },
      {
        question: "Do you not have a bike?",
        type: "LNQ"
      },
      {
        question: "Don't you have a bike?",
        type: "HNQ"
      },
      {
        question: "Other",
        type: "Other"
      }
    ]
  },
  {
    category: "korean",
    description1: "You're going to a welcome event for international students. You recall that Alex said something about language a while ago:",
    description2: "At the event, someone greets Alex in Korean. Alex reacts:",
    person:"Alex",
    originalBiasOptions: [
      {
        caption: "\"My grandparents are Korean, and I grew up speaking it at home.\"",
        image: "images/korean_pos.png",
        condition: "spk-pos"
      },
      {
        caption: "\"I am interested in learning East Asian languages.\"",
        image: "images/korean_neu.png",
        condition: "spk-neu"
      },
      {
        caption: "\"I found Korean too hard and have never tried learning it.\"",
        image: "images/korean_neg.png",
        condition: "spk-neg"
      }
    ],
    contextualEvidenceOptions: [
      {
        caption: "He responded fluently and laughed with the other person.",
        image: "images/korean_pos.png",
        condition: "evi-pos"
      },
      {
        caption: "He smiled and nodded politely without saying anything.",
        image: "images/korean_neu.png",
        condition: "evi-neu"
      },
      {
        caption: "He looked confused and replied, 'Sorry, I don't speak Korean.'",
        image: "images/korean_neg.png",
        condition: "evi-neg"
      }
    ],
    polarQuestions: [
      {
        question: "Do you speak Korean?",
        type: "PPQ"
      },
      {
        question: "Really? Do you speak Korean?",
        type: "ReallyPQ"
      },
      {
        question: "Do you not speak Korean?",
        type: "LNQ"
      },
      {
        question: "Don't you speak Korean?",
        type: "HNQ"
      },
      {
        question: "Other",
        type: "Other"
      }
    ]
  },
  {
    category: "beer",
    description1: "You're organizing a casual barbecue with friends and trying to decide what drinks to buy. You remember a past conversation with Jordan where he said:",
    description2: "You're at the grocery store shopping for drinks, and observe:",
    person:"Jordan",
    originalBiasOptions: [
      {
        caption: "\"A cold beer on a summer day? Nothing better!\"",
        image: "images/beer_pos.png",
        condition: "spk-pos"
      },
      {
        caption: "\"I usually just go with whatever's available to drink.\"",
        image: "images/beer_neu.png",
        condition: "spk-neu"
      },
      {
        caption: "\"I'm not a big fan of the taste of beer.\"",
        image: "images/beer_neg.png",
        condition: "spk-neg"
      }
    ],
    contextualEvidenceOptions: [
      {
        caption: "Jordan picks up a six-pack of hazy IPA and puts it in the cart.",
        image: "images/beer_pos.png",
        condition: "evi-pos"
      },
      {
        caption: "Jordan stands near the drinks but doesn't grab anything.",
        image: "images/beer_neu.png",
        condition: "evi-neu"
      },
      {
        caption: "Jordan walks past the beer aisle and grabs wine instead.",
        image: "images/beer_neg.png",
        condition: "evi-neg"
      }
    ],
    polarQuestions: [
      {
        question: "Do you like beer?",
        type: "PPQ"
      },
      {
        question: "Really? Do you like beer?",
        type: "ReallyPQ"
      },
      {
        question: "Do you not like beer?",
        type: "LNQ"
      },
      {
        question: "Don't you like beer?",
        type: "HNQ"
      },
      {
        question: "Other",
        type: "Other"
      }
    ]
  },
  {
    category: "dog",
    description1: "You're planning to visit your neighbor Rachael this afternoon. You remember Rachael once said:",
    description2: "Later in the afternoon, you're at her place and you notice:",
    person:"Rachael",
    originalBiasOptions: [
      {
        caption: "\"Ever since I adopted Max, I can't imagine life without a dog.\"",
        image: "images/dog_pos.png",
        condition: "spk-pos"
      },
      {
        caption: "\"I like animals in general. Dogs, cats, birds, all of them.\"",
        image: "images/dog_neu.png",
        condition: "spk-neu"
      },
      {
        caption: "\"I've always liked dogs, but never really got around to getting one.\"",
        image: "images/dog_neg.png",
        condition: "spk-neg"
      }
    ],
    contextualEvidenceOptions: [
      {
        caption: "A leash and dog bowl are by the front door, and barking comes from another room.",
        image: "images/dog_pos.png",
        condition: "evi-pos"
      },
      {
        caption: "There's an animal-themed calendar on the fridge, but no other signs of a pet.",
        image: "images/dog_neu.png",
        condition: "evi-neu"
      },
      {
        caption: "The house was extremely clean, with no sign of a pet.",
        image: "images/dog_neg.png",
        condition: "evi-neg"
      }
    ],
    polarQuestions: [
      {
        question: "Do you have a dog?",
        type: "PPQ"
      },
      {
        question: "Really? Do you have a dog?",
        type: "ReallyPQ"
      },
      {
        question: "Do you not have a dog?",
        type: "LNQ"
      },
      {
        question: "Don't you have a dog?",
        type: "HNQ"
      },
      {
        question: "Other",
        type: "Other"
      }
    ]
  },
  {
    category: "rain",
    description1: "You're about to head out for a walk but aren't sure about the weather. You remember something from the weather forecast yesterday:",
    description2: "You hear your roommate come in, so you go to his room and ask him. He says:",
    person: "your roommate",
    originalBiasOptions: [
      {
        caption: "It's going to rain all afternoon today.",
        image: "images/rain_pos.png",
        condition: "spk-pos"
      },
      {
        caption: "The weather is unpredictable these days.",
        image: "images/rain_neu.png",
        condition: "spk-neu"
      },
      {
        caption: "It was supposed to stay dry all day—no rain expected.",
        image: "images/rain_neg.png",
        condition: "spk-neg"
      }
    ],
    contextualEvidenceOptions: [
      {
        caption: "\"It just started drizzling when I was walking back.\"",
        image: "images/rain_pos.png",
        condition: "evi-pos"
      },
      {
        caption: "\"The sky looks weird—might rain, might not.\"",
        image: "images/rain_neu.png",
        condition: "evi-neu"
      },
      {
        caption: "\"No sign of rain. It's actually kind of nice right now.\"",
        image: "images/rain_neg.png",
        condition: "evi-neg"
      }
    ],
    polarQuestions: [
      {
        question: "Is it raining?",
        type: "PPQ"
      },
      {
        question: "Really? Is it raining?",
        type: "ReallyPQ"
      },
      {
        question: "Is it not raining?",
        type: "LNQ"
      },
      {
        question: "Isn't it raining?",
        type: "HNQ"
      },
      {
        question: "Other",
        type: "Other"
      }
    ]
  }  
  ]