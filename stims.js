const stimuliSets = [
  {
    category: "train",
    description1: "Tomorrow you need to go from Palo Alto to San Francisco. Your brother goes there quite frequently and you remember he says:",
    description2: "You go to the ticket office at the station and you ask for a train ticket for the next morning. The operator responds:",
    person: "the operator",
    originalBiasOptions: [
      { 
        caption: "\"I usually take a train in the morning to get to work, before 7:00\"", 
        image: "images/train_pos.png",
        condition: "spk-pos" 
      },
      { 
        caption: "\"I don't remember if there is a train in the early morning, before 7:00.\"", 
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
        caption: "\"The only train available is at 11:00\"", 
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
    description1: "Next week, you need to visit the city library early in the morning. Your friend often goes there and you remember she told you that:",
    description2: "You called the library and asked the receptionist tells you:",
    person:"receptionist",
    originalBiasOptions: [
      { 
        caption: "\"I used to study the library at 8:00 AM.\"", 
        image: "images/library_pos.png",
        condition: "spk-pos" 
      },
      { 
        caption: "\"I don't remember exactly when the library opens.\"", 
        image: "images/library_neu.png",
        condition: "spk-neu" 
      },
      { 
        caption: "\"I believe the library usually opens late, after noon.\"", 
        image: "images/library_neg.png",
        condition: "spk-neg" 
      }
    ],
    contextualEvidenceOptions: [
      { 
        caption: "\"You can come in at 7:30 AM tomorrow.\"", 
        image: "images/library_pos.png",
        condition: "evi-pos" 
      },
      { 
        caption: "\"The schedule varies—better to check the website.\"", 
        image: "images/library_neu.png",
        condition: "evi-neu" 
      },
      { 
        caption: "\"Tomorrow, the library only opens at afternoon.\"", 
        image: "images/library_neg.png",
        condition: "evi-neg" 
      }
    ],
    polarQuestions: [
      { 
        question: "Is the library open early in the morning?",
        type: "PPQ" 
      },
      { 
        question: "Really? Is the library open early in the morning?",
        type: "ReallyPQ" 
      },
      { 
        question: "Is the library not open early in the morning?",
        type: "LNQ" 
      },
      { 
        question: "Isn't the library open early in the morning?",
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
    description1: "You're planning a relaxed weekend with your cousin. Last month, they talked about having picked up biking again, and you remember they told you:",
    description2: "When you arrive at their place, you consider going for a ride and ask. They respond:",
    person:"your cousin",
    originalBiasOptions: [
      {
        caption: "\"I've been riding a lot lately — every Sunday morning actually.\"",
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
        caption: "There's a bike helmet on the table and shoes by the door.",
        image: "images/bike_pos.png",
        condition: "evi-pos"
      },
      {
        caption: "The garage is packed with stuff. Hard to tell what's there.",
        image: "images/bike_neu.png",
        condition: "evi-neu"
      },
      {
        caption: "You look around but see no sign of a bike anywhere.",
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
    description1: "You're going to a welcome event for international students. You remember talking to Alex about languages before, and you recall Alex said:",
    description2: "At the event, someone greets Alex in Korean. And Alex reacts:",
    person:"Alex",
    originalBiasOptions: [
      {
        caption: "\"My grandparents are Korean and I grew up speaking it at home.\"",
        image: "images/korean_pos.png",
        condition: "spk-pos"
      },
      {
        caption: "\"I am interested in learning East Asian languages.\"",
        image: "images/korean_neu.png",
        condition: "spk-neu"
      },
      {
        caption: "\"I found Korean too hard and has never tried learning it.\"",
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
        caption: "He smiled and nodded politely, without saying anything.",
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
    description2: "You're at the grocery store shopping for drinks, and you observe:",
    person:"Jordan",
    originalBiasOptions: [
      {
        caption: "\"A cold beer on a summer day? Nothing better!\"",
        image: "images/beer_pos.png",
        condition: "spk-pos"
      },
      {
        caption: "\"I usually just go with whatever available.\"",
        image: "images/beer_neu.png",
        condition: "spk-neu"
      },
      {
        caption: "\"I am not a big fan of the taste of beer.\"",
        image: "images/beer_neg.png",
        condition: "spk-neg"
      }
    ],
    contextualEvidenceOptions: [
      {
        caption: "Joran picks up a six-pack of IPA and puts it in the cart.",
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
    description1: "You're planning to visit your neighbor Rachael this afernoon. You're recalling past conversations, and you remember Rachael once said:",
    description2: "In the afternoon, you're at their house and you notice:",
    person:"Racheal",
    originalBiasOptions: [
      {
        caption: "\"Ever since I adopted Max, I can't imagine life without a dog.\"",
        image: "images/dog_pos.png",
        condition: "spk-pos"
      },
      {
        caption: "\"I like animals in general — dogs, cats, birds — all of them.\"",
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
        caption: "You see some pet magazines on the table.",
        image: "images/dog_neu.png",
        condition: "evi-neu"
      },
      {
        caption: "The house was extremlty clean and there is no sign of an animal.",
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
    category: "car",
    description1: "You and your friend Sam are planning a short weekend trip out of town for next month. You're thinking back to something Sam said recently:",
    description2: "You arrive at Sam's place to finalize plans and notice:",
    person:"Sam",
    originalBiasOptions: [
      {
        caption: "\"I just bought a used car few days ago — finally got my own ride!\"",
        image: "images/car_pos.png",
        condition: "spk-pos"
      },
      {
        caption: "\"I've been thinking about getting a car sometime soon, but not sure when.\"",
        image: "images/car_neu.png",
        condition: "spk-neu"
      },
      {
        caption: "\"I don't drive. I never got a license.\"",
        image: "images/car_neg.png",
        condition: "spk-neg"
      }
    ],
    contextualEvidenceOptions: [
      {
        caption: "There's a car parked in the driveway with Sam's parking permit on the dash.",
        image: "images/car_pos.png",
        condition: "evi-pos"
      },
      {
        caption: "You don't see a car out front, and nothing suggests whether Sam has one.",
        image: "images/car_neu.png",
        condition: "evi-neu"
      },
      {
        caption: "Sam pulls out a bus schedule and suggests checking train times.",
        image: "images/car_neg.png",
        condition: "evi-neg"
      }
    ],
    polarQuestions: [
      {
        question: "Do you have a car?",
        type: "PPQ"
      },
      {
        question: "Really? Do you have a car?",
        type: "ReallyPQ"
      },
      {
        question: "Do you not have a car?",
        type: "LNQ"
      },
      {
        question: "Don't you have a car?",
        type: "HNQ"
      },
      {
        question: "Other",
        type: "Other"
      }
    ]
  }
  ]