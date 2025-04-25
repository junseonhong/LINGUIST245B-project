// stimuli.js
const stimuliSets = [
  {
    category: "train",
    description1: "Tomorrow you need to go from Palo Alto to San Francisco. Your brother goes there quite frequently and you remember he told you that:",
    description2: "You go to the station to the ticket office and you ask for a train ticket for the next morning. The operator answers to you:",
    originalBiasOptions: [
      { caption: "He usually takes a train in the morning, before 7:00", 
        image: "images/train_pos.png",
        condition: "spk-pos" },
      { caption: "He doesn't remember if there is a train in the early morning, before 7:00.", 
        image: "images/train_neu.png",
        condition: "spk-neu" },
      { caption: "There is no train available in the early morning, before 7:00.", 
        image: "images/train_neg.png",
        condition: "spk-neg" }
    ],
    contextualEvidenceOptions: [
      { caption: "I suggest you take a train at 6:00", 
      image: "images/train_pos.png",
        condition: "evi-pos" },
      { caption: "Do you have any preference?", 
        image: "images/train_neu.png",
        condition: "evi-neu"
       },
      { caption: "The only train available is at 11:00", 
        image: "images/train_neg.png",
        condition: "evi-neg" }
    ],
    polarQuestions: [
      { question: "Is there a train in the early morning?",
        type: "PPQ" },
      { question: "Really? Is there a train in the early morning?",
        type: "ReallyPQ" },
      { question: "Is there no train in the early morning?",
        type: "LNQ" },
      { question: "Isn't there a train in the early morning?",
        type: "HNQ" },
      { question: "Other",
        type: "Other" }
    ]
  },
  {
    category: "library",
    description1: "Tomorrow you need to visit the city library early in the morning. Your friend often goes there and you remember they told you that:",
    description2: "You arrive at the library and ask the receptionist about the opening hours. The receptionist tells you:",
    originalBiasOptions: [
      { caption: "They usually find the library open before 8:00 AM.", 
        image: "images/library_pos.png",
        condition: "spk-pos" },
      { caption: "They don't remember exactly when the library opens.", 
        image: "images/library_neu.png",
        condition: "spk-neu" },
      { caption: "They think the library usually opens late, after 10:00 AM.", 
        image: "images/library_neg.png",
        condition: "spk-neg" }
    ],
    contextualEvidenceOptions: [
      { caption: "I suggest you come in at 7:30 AM.", 
        image: "images/library_pos.png",
        condition: "evi-pos" },
      { caption: "The schedule varies—better to check.", 
        image: "images/library_neu.png",
        condition: "evi-neu" },
      { caption: "Today, the library only opens at 11:00 AM.", 
        image: "images/library_neg.png",
        condition: "evi-neg" }
    ],
    polarQuestions: [
      { question: "Is the library open early in the morning?",
        type: "PPQ" },
      { question: "Really? Is the library open early in the morning?",
        type: "ReallyPQ" },
      { question: "Is the library not open early in the morning?",
        type: "LNQ" },
      { question: "Isn't the library open early in the morning?",
        type: "HNQ" },
      { question: "Other",
        type: "Other" }
    ]
  }
  ]  