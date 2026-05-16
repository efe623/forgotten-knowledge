import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Clock, 
  Ticket, 
  ChevronDown,
  Hammer,
  Accessibility,
  Leaf,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Trophy
} from 'lucide-react';
import emeraldTabletImage from './assets/home/emerald-tablet.png';
import curatorsMidnightTourImage from './assets/home/curators-midnight-tour-user.webp';
import symposiumOnLostTechImage from './assets/home/symposium-on-lost-tech-user.jpeg';
import antikytheraMechanismImage from './assets/collections-user/antikythera-mechanism-user.png';
import baghdadBatteryImage from './assets/collections-user/baghdad-battery-user.png';
import heronsSteamEngineImage from './assets/collections/herons-steam-engine-user.png';
import leonardosAutomatonImage from './assets/collections/leonardos-automaton-user.jpg';
import ancientSeismoscopeImage from './assets/collections/ancient-seismoscope-user.jpg';
import romanConcreteImage from './assets/collections/roman-concrete.png';
import damascusSteelImage from './assets/collections/damascus-steel-user.jpg';
import vikingSunstoneImage from './assets/collections/viking-sunstone-user.jpg';
import archimedesScrewImage from './assets/collections/archimedes-screw.png';
import pharosLighthouseImage from './assets/collections/pharos-lighthouse.png';
import inventorImage from './assets/about/inventor.png';
import socratesImage from './assets/about/socrates.webp';

// --- Types ---
type Page = 'HOME' | 'VISIT' | 'EXHIBITIONS' | 'COLLECTIONS' | 'EVENTS' | 'LEARN' | 'SUPPORT' | 'ABOUT' | 'TICKETS';

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

interface CollectionItem {
  id: string;
  name: string;
  shortDesc: string;
  image: string;
  slide1Info: string;
  slide2Quiz: QuizQuestion[];
  slide3Info: string;
  slide4Quiz: QuizQuestion[];
}

interface ShowcaseItem {
  title: string;
  desc: string;
  image: string;
  eyebrow: string;
  details: string;
}

// --- Data ---
const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'antikythera',
    name: 'Antikythera Mechanism',
    shortDesc: 'The world\'s first analog computer, dating back to 100 BCE.',
    image: antikytheraMechanismImage,
    slide1Info: "The Antikythera Mechanism was discovered in a shipwreck near Greece in 1901. It is a complex system of at least 30 bronze gears used to predict astronomical positions and eclipses. For decades, it remained a mystery as no technology of this complexity was seen again for another 1,500 years.",
    slide2Quiz: [
      {
        question: "In what year was the mechanism discovered?",
        options: ["1895", "1901", "1945", "1800"],
        correctIndex: 1
      },
      {
        question: "How many bronze gears are estimated to be inside?",
        options: ["10", "At least 30", "Over 100", "None"],
        correctIndex: 1
      },
      {
        question: "The device is often called what?",
        options: ["The first compass", "The first computer", "The clock of kings", "The golden gear"],
        correctIndex: 1
      },
      {
        question: "What did it track besides the stars?",
        options: ["Trade winds", "Olympic Games cycle", "Tsunami risks", "Gold prices"],
        correctIndex: 1
      }
    ],
    slide3Info: "Recent studies reveal that the mechanism reflected the Greek understanding of the cosmos as a handheld universe. It could even model the irregular orbit of the moon using a sophisticated 'pin-and-slot' system, a feat of mechanical engineering that wasn't replicated until the Renaissance.",
    slide4Quiz: [
      {
        question: "The mechanism could model whose irregular orbit?",
        options: ["Mars", "The Sun", "The Moon", "Venus"],
        correctIndex: 2
      },
      {
        question: "What specific mechanical system allowed for this lunar modeling?",
        options: ["Steam valves", "Pin-and-slot system", "Magnetic pulleys", "Hydraulic pipes"],
        correctIndex: 1
      },
      {
        question: "True or False: The technology was common in the ancient world.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        question: "The device represents a handheld version of what?",
        options: ["The Universe", "The Library", "The Temple", "The Sea"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 'baghdad-battery',
    name: 'Baghdad Battery',
    shortDesc: 'Ancient clay jars that may have produced electricity 2,000 years ago.',
    image: baghdadBatteryImage,
    slide1Info: "Found near Baghdad, these artifacts consist of a terracotta jar, a copper cylinder, and an iron rod. Some believe they were primitive galvanic cells used for electroplating jewelry with gold or silver.",
    slide2Quiz: [
      {
        question: "Which metal was the central rod made of?",
        options: ["Gold", "Silver", "Iron", "Bronze"],
        correctIndex: 2
      },
      {
        question: "The clay jar was made of which material?",
        options: ["Porcelain", "Terracotta", "Glass", "Stone"],
        correctIndex: 1
      },
      {
        question: "Where were they discovered?",
        options: ["Egypt", "India", "Baghdad", "Athens"],
        correctIndex: 2
      },
      {
        question: "What is the theoretical use of these jars?",
        options: ["Storing wine", "Holding scrolls", "Galvanic cells", "Cooking"],
        correctIndex: 2
      }
    ],
    slide3Info: "Replicas of the device filled with an acidic liquid like lemon juice or grape juice can generate a small voltage. This suggests that the Parthians may have had a working knowledge of electrochemistry nearly two millennia before Alessandro Volta.",
    slide4Quiz: [
      {
        question: "What could act as an electrolyte in the battery?",
        options: ["Olive oil", "Lemon juice", "Mercury", "Mud"],
        correctIndex: 1
      },
      {
        question: "Who was the modern inventor of the battery mentioned?",
        options: ["Thomas Edison", "Nikola Tesla", "Alessandro Volta", "Albert Einstein"],
        correctIndex: 2
      },
      {
        question: "True or False: Ancient people definitely used these to light cities.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        question: "The theory says they used the jars for what process?",
        options: ["Teleportation", "Electroplating", "Navigation", "Water purification"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'herons-engine',
    name: "Heron's Steam Engine",
    shortDesc: "A first-century steam-powered device that preceded the Industrial Revolution.",
    image: heronsSteamEngineImage,
    slide1Info: "Created by Heron of Alexandria in 1st century CE, the Aeolipile was the first recorded steam engine. It consisted of a hollow sphere that rotated when steam escaped through its nozzle.",
    slide2Quiz: [
      {
        question: "What was Heron's steam engine called?",
        options: ["Steam sphere", "Aeolipile", "Turbo jar", "Fire wheel"],
        correctIndex: 1
      },
      {
        question: "In which century was it invented?",
        options: ["1st Century CE", "12th Century CE", "1800s", "500 BCE"],
        correctIndex: 0
      },
      {
        question: "What powered the device?",
        options: ["Magnetism", "Wind", "Steam", "Water wheels"],
        correctIndex: 2
      },
      {
        question: "Where did Heron live?",
        options: ["Rome", "Alexandria", "Athens", "Carthage"],
        correctIndex: 1
      }
    ],
    slide3Info: "Despite its revolutionary nature, the Aeolipile was largely considered a 'temple wonder' or toy rather than a tool for industry. Heron used similar pneumatic principles to create automatic temple doors and even a vending machine for holy water.",
    slide4Quiz: [
      {
        question: "What was a main use for Heron's inventions?",
        options: ["Mining", "Temple wonders", "Deep sea diving", "Printing"],
        correctIndex: 1
      },
      {
        question: "Heron invented an early version of what modern machine?",
        options: ["ATM", "Vending machine", "Computer", "Airplane"],
        correctIndex: 1
      },
      {
        question: "The engine was used for industry in the ancient world?",
        options: ["Yes", "No"],
        correctIndex: 1
      },
      {
        question: "What escaped the sphere to make it rotate?",
        options: ["Air", "Steam", "Water", "Oil"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'leonardos-automaton',
    name: "Leonardo's Automaton",
    shortDesc: "A mechanical knight designed by Da Vinci around 1495.",
    image: leonardosAutomatonImage,
    slide1Info: "Leonardo da Vinci designed a humanoid mechanical knight around 1495. It was capable of several human-like motions, including sitting up, moving its arms, and opening its visor.",
    slide2Quiz: [
      {
        question: "When did Leonardo design the knight?",
        options: ["1300s", "1495", "1650", "1800"],
        correctIndex: 1
      },
      {
        question: "What could the knight do with its visor?",
        options: ["Shoot lasers", "Open and close it", "Talk", "Fly"],
        correctIndex: 1
      },
      {
        question: "The knight was a predecessor to what?",
        options: ["The tank", "The robot", "The submarine", "The clock"],
        correctIndex: 1
      },
      {
        question: "What powered Leonardo's designs?",
        options: ["Electricity", "Steam", "Pulleys and gears", "Gas"],
        correctIndex: 2
      }
    ],
    slide3Info: "The design was based on Leonardo's anatomical research on the human body. He applied the same proportions to his mechanical knight, which was controlled by a series of pulleys and internal cables, mirroring the human muscle-tendon system.",
    slide4Quiz: [
      {
        question: "What research influenced the robot's design?",
        options: ["Astronomy", "Chemistry", "Anatomy", "Botany"],
        correctIndex: 2
      },
      {
        question: "What system inside the robot mirrored muscles?",
        options: ["Hydraulic pumps", "Pulleys and cables", "Springs", "Electric wires"],
        correctIndex: 1
      },
      {
        question: "True or False: The knight was discovered fully built.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        question: "The knight was designed to be used as what?",
        options: ["A farm worker", "Entertainment", "A weapon", "A servant"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'ancient-seismoscope',
    name: "Ancient Seismoscope",
    shortDesc: "Zhang Heng's 132 CE device that detected earthquakes from afar.",
    image: ancientSeismoscopeImage,
    slide1Info: "Invented by Zhang Heng in 132 CE, this bronze vessel could detect earthquakes hundreds of miles away. It featured eight dragons, each holding a bronze ball above a bronze frog.",
    slide2Quiz: [
      {
        question: "In what year was the seismoscope invented?",
        options: ["132 CE", "500 BCE", "1000 CE", "1900 CE"],
        correctIndex: 0
      },
      {
        question: "What animal held the balls in the design?",
        options: ["Lions", "Dragons", "Snakes", "Eagles"],
        correctIndex: 1
      },
      {
        question: "What animal was positioned below the dragons?",
        options: ["Frogs", "Turtles", "Fish", "Crabs"],
        correctIndex: 0
      },
      {
        question: "Who was the inventor?",
        options: ["Leonardo", "Zhang Heng", "Archimedes", "Heron"],
        correctIndex: 1
      }
    ],
    slide3Info: "The device worked using a central pendulum that would tilt if a tremor was detected, causing a dragon to drop its ball into the mouth of the frog below. This indicated the direction of the earthquake's epicenter.",
    slide4Quiz: [
      {
        question: "What was the internal core of the device?",
        options: ["A battery", "A pendulum", "A gear system", "A water tank"],
        correctIndex: 1
      },
      {
        question: "dropping the ball indicated what?",
        options: ["Intensity", "Duration", "Direction", "Depth"],
        correctIndex: 2
      },
      {
        question: "True or False: Modern replicas have successfully detected earthquakes.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        question: "The device was made primarily of what?",
        options: ["Wood", "Iron", "Bronze", "Clay"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 'roman-concrete',
    name: "Roman Concrete",
    shortDesc: "A 2,000-year-old building material that grows stronger in seawater.",
    image: romanConcreteImage,
    slide1Info: "Roman concrete (Opus caementicium) is famous for its incredible durability. Unlike modern concrete, it has lasted for two millennia, with some structures even growing stronger when exposed to seawater.",
    slide2Quiz: [
      {
        question: "What is the Latin name for Roman concrete?",
        options: ["Lapis Lazuli", "Opus caementicium", "Aqua Vitae", "Terra Cotta"],
        correctIndex: 1
      },
      {
        question: "How old are the oldest Roman concrete structures?",
        options: ["500 years", "2,000 years", "5,000 years", "10,000 years"],
        correctIndex: 1
      },
      {
        question: "Modern concrete is more durable than Roman concrete.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        question: "Where does Roman concrete particularly excel?",
        options: ["In deserts", "In marine environments", "In high altitudes", "Underground"],
        correctIndex: 1
      }
    ],
    slide3Info: "The secret ingredient was volcanic ash from Pozzuoli. When mixed with lime and seawater, it triggered a chemical reaction that created rare minerals, allowing the concrete to self-repair over centuries.",
    slide4Quiz: [
      {
        question: "What was the secret 'ash' ingredient?",
        options: ["Coal ash", "Volcanic ash", "Wood ash", "Stardust"],
        correctIndex: 1
      },
      {
        question: "What liquid was used in the Roman mix?",
        options: ["Fresh water", "Seawater", "Olive oil", "Wine"],
        correctIndex: 1
      },
      {
        question: "The concrete has a unique ability to do what?",
        options: ["Change color", "Self-repair", "Float", "Generate heat"],
        correctIndex: 1
      },
      {
        question: "Pozzuoli ash is found in which country?",
        options: ["Greece", "Egypt", "Italy", "Spain"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 'damascus-steel',
    name: "Damascus Steel",
    shortDesc: "Lost forging techniques used to create razor-sharp, patterned blades.",
    image: damascusSteelImage,
    slide1Info: "Legendary for its strength, sharpness, and flowing water patterns, Damascus steel was the choice of warriors from the Crusades. The exact method of making it was lost in the 18th century.",
    slide2Quiz: [
      {
        question: "What is a distinguishing visual feature of Damascus steel?",
        options: ["Neon glow", "Water-like patterns", "Square holes", "Gold plating"],
        correctIndex: 1
      },
      {
        question: "When was the technique lost?",
        options: ["12th Century", "15th Century", "18th Century", "Yesterday"],
        correctIndex: 2
      },
      {
        question: "What is the steel base called?",
        options: ["Wootz steel", "Rust steel", "Soft iron", "Silver mix"],
        correctIndex: 0
      },
      {
        question: "Where did the raw material originate?",
        options: ["England", "Damascus", "India/Sri Lanka", "Japan"],
        correctIndex: 2
      }
    ],
    slide3Info: "Modern science has found that the steel contained carbon nanotubes, which were formed during the complex forging process. These nanotubes gave the blades their incredible flexibility and edge-holding capability.",
    slide4Quiz: [
      {
        question: "What modern microscopic structure was found in the steel?",
        options: ["Microchips", "Carbon nanotubes", "Plastic fibers", "Glass beads"],
        correctIndex: 1
      },
      {
        question: "The steel was famous for being what?",
        options: ["Very brittle", "Razor sharp", "Heavy", "Magnetic"],
        correctIndex: 1
      },
      {
        question: "True or False: We have perfectly replicated it today.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        question: "The patterns on the blade resemble what?",
        options: ["Stars", "Flowing water", "Brick walls", "Animals"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'viking-sunstone',
    name: "Viking Sunstone",
    shortDesc: "A crystal used by Vikings to navigate the seas even on cloudy days.",
    image: vikingSunstoneImage,
    slide1Info: "Vikings were legendary navigators. Norse sagas mention 'sunstones' that allowed them to find the sun's position even in thick fog or after sunset.",
    slide2Quiz: [
      {
        question: "What was the sunstone used for?",
        options: ["Starting fires", "Navigation", "Cooking", "Trading"],
        correctIndex: 1
      },
      {
        question: "Vikings used these when the sky was...?",
        options: ["Clear", "Cloudy or foggy", "Nighttime", "Purple"],
        correctIndex: 1
      },
      {
        question: "Which ancient people used sunstones?",
        options: ["Egyptians", "Vikings", "Romans", "Aztecs"],
        correctIndex: 1
      },
      {
        question: "Sagas are what?",
        options: ["Viking ships", "Viking stories", "Viking weapons", "Viking food"],
        correctIndex: 1
      }
    ],
    slide3Info: "Scientific studies suggest the sunstone was Icelandic spar, a calcite crystal that polarizes light. By looking through it, two images of the sun appear, and by rotating it until the images match, the navigator could pinpoint the sun's location.",
    slide4Quiz: [
      {
        question: "What is the likely mineral of the sunstone?",
        options: ["Quartz", "Icelandic spar", "Ruby", "Gold"],
        correctIndex: 1
      },
      {
        question: "How does the crystal work on light?",
        options: ["Reflects it", "Polarizes it", "Absorbs it", "Magnifies it"],
        correctIndex: 1
      },
      {
        question: "True or False: This enabled Vikings to reach North America.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        question: "When rotated, how many images of the sun appear?",
        options: ["One", "Two", "Four", "A rainbow"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'archimedes-screw',
    name: "Archimedes' Screw",
    shortDesc: "A revolutionary device for transporting water upwards against gravity.",
    image: archimedesScrewImage,
    slide1Info: "Designed by Archimedes in 3rd century BCE, this device used a screw inside a hollow pipe to lift water for irrigation. It is still used today in modern systems.",
    slide2Quiz: [
      {
        question: "Who designed the screw?",
        options: ["Socrates", "Archimedes", "Aristotle", "Plato"],
        correctIndex: 1
      },
      {
        question: "What is its primary purpose?",
        options: ["Drilling holes", "Lifting water", "Tightening bolts", "Grinding grain"],
        correctIndex: 1
      },
      {
        question: "When was it invented?",
        options: ["3rd Century BCE", "12th Century CE", "1905", "1000 BCE"],
        correctIndex: 0
      },
      {
        question: "In what country is Syracuse (Archimedes' home)?",
        options: ["Greece", "Italy", "Egypt", "France"],
        correctIndex: 1
      }
    ],
    slide3Info: "The device is essentially a large screw enclosed in a tube. When the screw is turned, water is trapped and moved upward. It proved that mechanical advantage could overcome the force of gravity with simple rotation.",
    slide4Quiz: [
      {
        question: "The screw is enclosed in what?",
        options: ["A box", "A tube/pipe", "A lake", "A temple"],
        correctIndex: 1
      },
      {
        question: "How is the device moved?",
        options: ["Up and down", "Rotation/turning", "Back and forth", "It doesn't move"],
        correctIndex: 1
      },
      {
        question: "True or False: It is still used in sewage plants today.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        question: "It was originally used for what?",
        options: ["Mining", "Irrigation", "Sailing", "Building pyramids"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'pharos-lighthouse',
    name: "Pharos Lighthouse",
    shortDesc: "One of the Seven Wonders, a beacon of ancient engineering.",
    image: pharosLighthouseImage,
    slide1Info: "Standing at over 100 meters, the Lighthouse of Alexandria was the first of its kind. It used a massive mirror to project light over 50 kilometers out to sea.",
    slide2Quiz: [
      {
        question: "Where was the Pharos Lighthouse located?",
        options: ["Rome", "Alexandria", "Rhodes", "Babylon"],
        correctIndex: 1
      },
      {
        question: "It was one of the Seven what?",
        options: ["Sins", "Seas", "Wonders of the World", "Continents"],
        correctIndex: 2
      },
      {
        question: "How tall was it roughly?",
        options: ["20 meters", "Over 100 meters", "500 meters", "1 kilometer"],
        correctIndex: 1
      },
      {
        question: "What was at the very top?",
        options: ["A gold statue", "A beacon and mirror", "A garden", "A library"],
        correctIndex: 1
      }
    ],
    slide3Info: "The lighthouse stood for over 1,500 years before being destroyed by earthquakes. Its mirror was said to be so powerful that it could be used to set enemy ships on fire, though this remains a legend.",
    slide4Quiz: [
      {
        question: "How long did it stand?",
        options: ["100 years", "500 years", "1,500 years", "5,000 years"],
        correctIndex: 2
      },
      {
        question: "What eventually destroyed it?",
        options: ["War", "Fire", "Earthquakes", "Tsunami"],
        correctIndex: 2
      },
      {
        question: "True or False: Pharos is the root word for lighthouse in many languages.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        question: "The light could be seen from how far?",
        options: ["1 km", "10 km", "50 km", "500 km"],
        correctIndex: 2
      }
    ]
  }
];

const EXHIBITIONS_DATA: ShowcaseItem[] = [
  {
    title: "The Emerald Tablet",
    desc: "Deciphering the foundational text of alchemy.",
    image: emeraldTabletImage,
    eyebrow: "Vault Gallery I",
    details: "An immersive study of hermetic doctrine, translation history, and symbolic alchemical diagrams centered on one of the most influential texts in esoteric scholarship."
  },
  {
    title: "Voynich Mysteries",
    desc: "A linguistic deep-dive into the world's least understood book.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2670&auto=format&fit=crop",
    eyebrow: "Vault Gallery II",
    details: "Explore competing theories around the Voynich manuscript through botanical folios, cipher analysis, and layered interpretations from historians, linguists, and codebreakers."
  },
  {
    title: "Astral Cartographies",
    desc: "Mapping how early civilizations navigated the heavens.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2670&auto=format&fit=crop",
    eyebrow: "Vault Gallery III",
    details: "This gallery follows celestial charts, instrument replicas, and star-led navigation systems that connected ritual, mathematics, and survival across ancient societies."
  },
  {
    title: "Engines Before Industry",
    desc: "Mechanical breakthroughs that arrived centuries too early.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    eyebrow: "Vault Gallery IV",
    details: "From rotary steam curiosities to automated temple devices, these displays reveal how pre-industrial inventors imagined motion, labor, and engineering long before factories."
  },
  {
    title: "Oracles of Ink",
    desc: "Sacred scripts, hidden notation, and forbidden annotation systems.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2670&auto=format&fit=crop",
    eyebrow: "Vault Gallery V",
    details: "A manuscript-focused exhibition on marginalia, ritual copying traditions, and the coded visual grammar used to preserve knowledge under secrecy and censorship."
  }
];

const EVENTS_DATA: ShowcaseItem[] = [
  {
    title: "Curator's Midnight Tour",
    desc: "Experience the halls under the light of forgotten flares.",
    image: curatorsMidnightTourImage,
    eyebrow: "After Hours",
    details: "A guided night walk through the museum's quietest corridors, with commentary on concealed objects, restricted displays, and the architecture of secrecy."
  },
  {
    title: "Symposium on Lost Tech",
    desc: "A gathering of alternative historians and engineers.",
    image: symposiumOnLostTechImage,
    eyebrow: "Scholarly Forum",
    details: "Researchers, conservators, and speculative technologists convene to compare evidence, reconstructions, and unresolved questions surrounding early machines."
  }
];

// --- Components ---

const Logo = () => (
  <div className="flex flex-col items-center">
    <div className="mb-4 text-primary relative">
       {/* More detailed pillar logo matching the reference */}
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 42V38H44V42H4Z" fill="currentColor"/>
        <path d="M4 14V11L24 4L44 11V14H4Z" fill="currentColor"/>
        <rect x="8" y="17" width="4" height="18" fill="currentColor" />
        <rect x="18" y="17" width="4" height="18" fill="currentColor" />
        <rect x="28" y="17" width="4" height="18" fill="currentColor" />
        <rect x="38" y="17" width="4" height="18" fill="currentColor" />
        <path d="M6 14H42V17H6V14Z" fill="currentColor" opacity="0.3" />
      </svg>
    </div>
    <h1 className="text-3xl font-serif tracking-[0.25em] text-secondary leading-none text-center">FORGOTTEN</h1>
    <h1 className="text-3xl font-serif tracking-[0.25em] text-secondary mt-1.5 text-center">KNOWLEDGE</h1>
    <div className="w-48 h-[1px] bg-primary/40 mt-4 mb-2" />
    <p className="label-caps opacity-50 text-[10px] tracking-[0.4em]">DISCOVER • LEARN • INSPIRE</p>
  </div>
);

const Navbar = ({ activePage, setActivePage, isArchiveOpen }: { activePage: Page, setActivePage: (p: Page) => void, isArchiveOpen: boolean }) => {
  return (
    <nav className="w-full border-b border-outline-variant/30 bg-surface sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between text-[10px] font-sans tracking-widest border-b border-outline-variant/20 text-neutral">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-primary" />
            <span>OPEN TODAY: 10:00 AM - 5:00 PM</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <MapPin size={12} className="text-primary" />
            <span>LONDON, ENGLAND</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 hover:text-primary transition-colors" onClick={() => setActivePage('TICKETS')}>
            <Ticket size={12} className="text-primary" />
            <span>TICKETS</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer hover:scale-[1.02] transition-transform origin-left flex items-center gap-4" onClick={() => setActivePage('HOME')}>
            <div className="text-primary">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 42V38H44V42H4Z" fill="currentColor"/>
                <path d="M4 14V11L24 4L44 11V14H4Z" fill="currentColor"/>
                <rect x="8" y="17" width="4" height="18" fill="currentColor" />
                <rect x="18" y="17" width="4" height="18" fill="currentColor" />
                <rect x="28" y="17" width="4" height="18" fill="currentColor" />
                <rect x="38" y="17" width="4" height="18" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-serif tracking-[0.2em] text-secondary leading-none">FORGOTTEN</h1>
              <h1 className="text-lg font-serif tracking-[0.2em] text-secondary mt-0.5 leading-none">KNOWLEDGE</h1>
            </div>
          </div>

          <div className={`flex items-center gap-8 transition-opacity ${isArchiveOpen ? 'opacity-20 pointer-events-none' : ''}`}>
            {(['HOME', 'VISIT', 'EXHIBITIONS', 'EVENTS', 'COLLECTIONS', 'LEARN', 'SUPPORT', 'ABOUT'] as Page[]).map(p => (
              <button
                key={p}
                onClick={() => setActivePage(p)}
                className={`label-caps text-[10px] hover:text-primary transition-colors relative flex flex-col items-center group ${activePage === p ? 'text-primary' : 'text-neutral'}`}
              >
                {p}
                {activePage === p && (
                  <motion.div layoutId="activeNav" className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const QuizSlide = ({ 
  questions, 
  onComplete, 
  onPrevious,
  isFinalQuiz = false
}: { 
  questions: QuizQuestion[], 
  onComplete: (score: number) => void,
  onPrevious: () => void,
  isFinalQuiz?: boolean
}) => {
  const [answers, setAnswers] = useState<(number|null)[]>(new Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return answers.reduce((acc, curr, idx) => curr === questions[idx].correctIndex ? acc + 1 : acc, 0);
  }, [answers, questions]);

  const canSubmit = answers.every(a => a !== null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {questions.map((q, qIdx) => (
          <div key={qIdx} className="bg-white p-6 rounded-[var(--radius-card)] border border-outline-variant/30 shadow-sm">
            <p className="font-serif text-lg mb-6 leading-relaxed">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, oIdx) => {
                let statusClass = "";
                if (submitted) {
                  if (oIdx === q.correctIndex) statusClass = "correct";
                  else if (answers[qIdx] === oIdx) statusClass = "wrong";
                } else if (answers[qIdx] === oIdx) {
                   statusClass = "selected";
                }

                return (
                  <button
                    key={oIdx}
                    disabled={submitted}
                    onClick={() => {
                      const newAnswers = [...answers];
                      newAnswers[qIdx] = oIdx;
                      setAnswers(newAnswers);
                    }}
                    className={`quiz-option ${statusClass} flex justify-between items-center`}
                  >
                    {opt}
                    {submitted && oIdx === q.correctIndex && <CheckCircle2 size={16} className="text-success" />}
                    {submitted && answers[qIdx] === oIdx && oIdx !== q.correctIndex && <XCircle size={16} className="text-error" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center border-t border-outline-variant pt-8">
        <button onClick={onPrevious} className="btn-secondary flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Information
        </button>
        {!submitted ? (
          <button 
            disabled={!canSubmit}
            onClick={() => setSubmitted(true)}
            className={`btn-success ${!canSubmit ? 'opacity-40 cursor-not-allowed' : 'bg-success hover:bg-success/90'}`}
          >
            Submit Responses
          </button>
        ) : (
          <button onClick={() => onComplete(score)} className="btn-primary flex items-center gap-2">
            Continue Journey <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

const CollectionArchive = ({ item, onClose }: { item: CollectionItem | null, onClose: () => void }) => {
  const [slide, setSlide] = useState(1);
  const [totalScore, setTotalScore] = useState(0);

  if (!item) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-surface flex flex-col overflow-hidden"
    >
      <div className="h-24 border-b border-outline-variant/30 flex items-center justify-between px-10 bg-white">
        <div className="flex items-center gap-4">
           <div className="scale-75"><Logo /></div>
           <div className="h-8 w-[1px] bg-outline-variant mx-4" />
           <h2 className="text-xl font-serif text-secondary">{item.name} Investigation</h2>
        </div>
        <button onClick={onClose} className="btn-inverted text-xs uppercase tracking-widest">Close Archive</button>
      </div>

      <div className="flex-1 overflow-y-auto bg-surface-dim/20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12 flex justify-center gap-4">
             {[1, 2, 3, 4, 5].map(s => (
               <div key={s} className={`h-1.5 w-16 rounded-full transition-all duration-300 ${slide >= s ? 'bg-primary' : 'bg-outline-variant/30'}`} />
             ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="min-h-[500px]"
            >
              {slide === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <div className="rounded-[var(--radius-card)] overflow-hidden border border-outline-variant/50 shadow-xl">
                      <img src={item.image} alt={item.name} className="w-full h-[500px] object-cover" />
                   </div>
                   <div className="space-y-8">
                      <h3 className="text-5xl font-serif leading-tight">Historical Observation</h3>
                      <p className="text-xl text-neutral leading-relaxed font-sans">{item.slide1Info}</p>
                      <button onClick={() => setSlide(2)} className="btn-primary px-12 group">
                        Begin Phase I Quiz <ArrowRight size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                   </div>
                </div>
              )}

              {slide === 2 && (
                <div className="space-y-8 text-center max-w-4xl mx-auto">
                  <h3 className="text-4xl font-serif">Assessment Phase I</h3>
                  <p className="text-neutral mb-12">Verify your knowledge based on the initial observations.</p>
                  <QuizSlide 
                    questions={item.slide2Quiz} 
                    onPrevious={() => setSlide(1)}
                    onComplete={(s) => {
                      setTotalScore(s);
                      setSlide(3);
                    }} 
                  />
                </div>
              )}

              {slide === 3 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <div className="space-y-8 order-2 lg:order-1">
                      <h3 className="text-5xl font-serif leading-tight">Advanced Findings</h3>
                      <p className="text-xl text-neutral leading-relaxed font-sans">{item.slide3Info}</p>
                      <div className="flex gap-4">
                        <button onClick={() => setSlide(2)} className="btn-outlined">Previous Findings</button>
                        <button onClick={() => setSlide(4)} className="btn-primary px-12 group">
                          Final Integration Assessment <ArrowRight size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                   </div>
                   <div className="rounded-[var(--radius-card)] overflow-hidden border border-outline-variant/50 shadow-xl order-1 lg:order-2 bg-white flex items-center justify-center p-12">
                      <Search size={120} className="text-primary/10" />
                   </div>
                </div>
              )}

              {slide === 4 && (
                <div className="space-y-8 text-center max-w-4xl mx-auto">
                  <h3 className="text-4xl font-serif">Assessment Phase II</h3>
                  <p className="text-neutral mb-12">Synthesize information from all findings previously presented.</p>
                  <QuizSlide 
                    questions={item.slide4Quiz} 
                    onPrevious={() => setSlide(3)}
                    isFinalQuiz={true}
                    onComplete={(s) => {
                      setTotalScore(prev => prev + s);
                      setSlide(5);
                    }} 
                  />
                </div>
              )}

              {slide === 5 && (
                <div className="max-w-2xl mx-auto text-center space-y-12 py-10">
                   <motion.div
                     initial={{ scale: 0.5, rotate: -20 }}
                     animate={{ scale: 1, rotate: 0 }}
                     className="inline-block p-10 rounded-full bg-primary/10 text-primary shadow-inner"
                   >
                     <Trophy size={80} />
                   </motion.div>
                   <div className="space-y-4">
                      <h3 className="text-6xl font-serif">Investigation Summary</h3>
                      <div className="text-3xl font-sans tracking-widest text-primary font-bold">
                        SCORE: {totalScore} / 8
                      </div>
                   </div>
                   
                   <div className="bg-white p-10 rounded-[var(--radius-card)] border border-outline-variant/30 shadow-md">
                     <p className="text-4xl font-serif mb-6 italic text-secondary">
                        {totalScore >= 7 ? "YOU are a genius!" : "YOU failed!"}
                     </p>
                     <p className="text-neutral leading-relaxed">
                        {totalScore >= 7 
                          ? "Your grasp of forgotten knowledge is unparalleled. You represent the finest caliber of modern investigators." 
                          : "You have failed to integrate the historical wisdom presented. History demands more rigorous study and attention to detail."}
                     </p>
                   </div>

                   <button onClick={onClose} className="btn-inverted px-16 py-4 text-sm font-bold tracking-[0.2em]">
                      RETURN TO CURATION GALLERY
                   </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const PageHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-24 relative overflow-hidden py-16">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative z-10"
    >
      <h2 className="text-7xl font-serif uppercase tracking-[0.15em] text-secondary mb-4 leading-none">{title}</h2>
      {subtitle && <p className="text-neutral label-caps tracking-[0.3em] opacity-60">{subtitle}</p>}
      <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-8" />
    </motion.div>
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-[0.03]">
       <div className="text-[200px] font-serif uppercase select-none">{title}</div>
    </div>
  </div>
);

// --- Pages ---

const Home = ({ setActivePage }: { setActivePage: (p: Page) => void }) => (
  <div className="space-y-32">
    <section className="relative h-[480px] rounded-[var(--radius-card)] overflow-hidden group border border-outline-variant/20 shadow-lg">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[3s] group-hover:scale-105" />
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-12">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="label-caps text-xs mb-6 text-primary tracking-[0.6em]"
        >
          CURATED EXHIBITION • MMXXIV
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-serif mb-10 max-w-4xl leading-tight"
        >
          The Unwritten Records <br /> <span className="italic font-normal opacity-90">of the Void</span>
        </motion.h2>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => setActivePage('TICKETS')}
            className="btn-primary px-16 text-base shadow-2xl"
          >
            Reserve Access
          </button>
        </motion.div>
      </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      <section className="col-span-1">
        <h3 className="text-2xl font-serif mb-10 text-secondary flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary" /> Current Exhibitions
        </h3>
        <div className="space-y-10">
          {EXHIBITIONS_DATA.slice(0, 2).map((ex, i) => (
            <div key={i} className="group cursor-pointer" onClick={() => setActivePage('EXHIBITIONS')}>
              <div className="aspect-video rounded-[var(--radius-card)] overflow-hidden border border-outline-variant/30 mb-5 bg-surface-dim">
                 <div className="w-full h-full hover:scale-105 transition-transform duration-700 bg-cover bg-center" style={{ backgroundImage: `url('${ex.image}')` }} />
              </div>
              <h4 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors">{ex.title}</h4>
              <p className="text-neutral text-sm leading-relaxed">{ex.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="col-span-1">
        <h3 className="text-2xl font-serif mb-10 text-secondary flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary" /> Scholarly Events
        </h3>
        <div className="space-y-10">
          {EVENTS_DATA.slice(0, 2).map((ev, i) => (
            <div key={i} className="group cursor-pointer" onClick={() => setActivePage('EVENTS')}>
              <div className="aspect-video rounded-[var(--radius-card)] overflow-hidden border border-outline-variant/30 mb-5 bg-surface-dim">
                 <div className="w-full h-full hover:scale-105 transition-transform duration-700 bg-cover bg-center" style={{ backgroundImage: `url('${ev.image}')` }} />
              </div>
              <h4 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors">{ev.title}</h4>
              <p className="text-neutral text-sm leading-relaxed">{ev.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="col-span-1">
        <h3 className="text-2xl font-serif mb-10 text-secondary flex items-center gap-3">
           <div className="w-2 h-2 rounded-full bg-primary" /> Museum Dispatch
        </h3>
        <div className="space-y-8">
          {[
             { title: "Antikythera Conservation", date: "May 12" },
             { title: "Archival Digitalization", date: "June 01" },
             { title: "Vault Security Update", date: "June 15" }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 group cursor-pointer border-b border-outline-variant/10 pb-8 last:border-0">
              <div className="w-24 h-24 shrink-0 rounded-lg bg-white border border-outline-variant/20 flex flex-col items-center justify-center group-hover:border-primary transition-colors">
                 <span className="text-primary font-bold text-lg">{item.date.split(' ')[1]}</span>
                 <span className="text-[8px] label-caps opacity-40">{item.date.split(' ')[0]}</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[10px] label-caps text-primary mb-2">Bulletin #{100+i}</span>
                <h4 className="font-serif text-sm group-hover:text-primary transition-colors leading-snug">{item.title} protocol completed.</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

const Visit = () => {
  // REPLACE THIS WITH YOUR ACCESS KEY FROM WEB3FORMS.COM
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

  return (
    <div className="max-w-5xl mx-auto space-y-20 py-10">
      <PageHeader title="VISIT" subtitle="Information for physical access to the Legacy Vaults" />
      
      <section className="relative h-[480px] rounded-[var(--radius-card)] overflow-hidden border border-outline-variant/30 shadow-md group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[4s] group-hover:scale-105" />
        <div className="absolute inset-0 bg-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
        <div className="relative h-full flex items-center justify-center text-white text-center p-12">
          <div className="max-w-2xl bg-secondary/80 backdrop-blur-md p-10 rounded-[var(--radius-card)] shadow-2xl border border-white/10">
            <h3 className="text-3xl font-serif mb-6 italic text-primary">The Gallery of Hours</h3>
            <p className="text-sm opacity-90 leading-relaxed max-w-lg mx-auto">
              Experience the silent weight of centuries as you wander through our humidity-controlled vaults. Admission is strictly by timed reservation to ensure tranquility.
            </p>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-secondary flex items-center gap-3">
              <Clock size={24} className="text-primary" />
              Hours of Operation
            </h3>
            <div className="space-y-3 text-neutral border-l-2 border-primary/20 pl-8 text-sm">
              <p className="flex justify-between items-center pb-2 border-b border-outline-variant/5">
                <span className="font-medium">Monday - Friday</span> 
                <span className="text-secondary">10:00 AM - 5:00 PM</span>
              </p>
              <p className="flex justify-between items-center pb-2 border-b border-outline-variant/5">
                <span className="font-medium">Saturday</span> 
                <span className="text-secondary">11:00 AM - 7:00 PM</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-medium">Sunday</span> 
                <span className="opacity-50">CLOSED</span>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-secondary flex items-center gap-3">
              <MapPin size={24} className="text-primary" />
              Location
            </h3>
            <div className="text-neutral border-l-2 border-primary/20 pl-8 space-y-3 text-sm">
              <p className="font-serif text-lg text-secondary">Forgotten Knowledge Museum</p>
              <p>123 Heritage Way, London, England</p>
              <p>W1B 2EL, United Kingdom</p>
            </div>
          </div>

          <div className="p-8 bg-surface-dim/50 rounded-[var(--radius-card)] border border-outline-variant/30 flex gap-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <Ticket size={24} className="text-primary" />
            </div>
            <div>
              <h4 className="font-serif text-xl mb-2 text-secondary">Admission Fee</h4>
              <p className="text-sm text-neutral leading-relaxed">
                Entry is free for all visitors, but a reservation is mandatory due to limited capacity in our preservation vaults.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[var(--radius-card)] border border-outline-variant/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
          <h3 className="font-serif text-3xl mb-2 text-secondary text-center">Book a Visit</h3>
          <p className="text-xs text-neutral text-center mb-8 uppercase tracking-[0.2em] opacity-60">Reserve your passage through time</p>
          
          <form 
            className="space-y-6" 
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              
              formData.append("access_key", WEB3FORMS_ACCESS_KEY);

              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData
                });

                const data = await response.json();

                if (data.success) {
                  alert("Reservation Request Sent Successfully!");
                  (e.target as HTMLFormElement).reset();
                } else {
                  alert(data.message || "Something went wrong. Please check your Access Key.");
                }
              } catch (error) {
                console.error("Error submitting form:", error);
                alert("Server error. Please try again later.");
              }
            }}
          >
            <div className="space-y-2">
              <label className="label-caps text-[10px] text-neutral font-bold">Full Name</label>
              <input 
                name="name"
                required
                type="text" 
                className="w-full bg-surface-dim/30 border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all font-sans text-sm focus:bg-white"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="label-caps text-[10px] text-neutral font-bold">Email Address</label>
              <input 
                name="email"
                required
                type="email" 
                className="w-full bg-surface-dim/30 border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all font-sans text-sm focus:bg-white"
                placeholder="john@example.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="label-caps text-[10px] text-neutral font-bold">Visitors</label>
                <select name="visitors" className="w-full bg-surface-dim/30 border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all font-sans text-sm focus:bg-white cursor-pointer">
                  <option>1 Visitor</option>
                  <option>2 Visitors</option>
                  <option>3 Visitors</option>
                  <option>4 Visitors</option>
                  <option>5+ Visitors</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="label-caps text-[10px] text-neutral font-bold">Date</label>
                <input 
                  name="date"
                  required
                  type="date" 
                  className="w-full bg-surface-dim/30 border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all font-sans text-sm focus:bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="label-caps text-[10px] text-neutral font-bold">Special Requests</label>
              <textarea 
                name="message"
                className="w-full bg-surface-dim/30 border border-outline-variant/30 rounded-lg px-4 py-4 focus:outline-none focus:border-primary transition-all font-sans text-sm focus:bg-white min-h-[100px] resize-none"
                placeholder="Private tours, academic research, or accessibility needs..."
              />
            </div>

            <div className="pt-2">
              <button type="submit" className="btn-primary w-full py-4 text-sm tracking-[0.3em] shadow-xl hover:shadow-2xl transition-all">
                CONFIRM RESERVATION
              </button>
            </div>
            
            <p className="text-[10px] text-neutral text-center opacity-50 uppercase tracking-widest leading-relaxed">
              All requests are subject to capacity limits.<br/>A confirmation email will be sent shortly.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const Support = ({ setActivePage }: { setActivePage: (p: Page) => void }) => (
    <div className="space-y-12">
        <PageHeader title="SUPPORT" subtitle="Help us bridge the gap between memory and survival" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
                { title: 'MEMBERSHIP', desc: 'Join the Vanguard of History. Members receive private access to symposium results and early dispatch notices from our deep-vault researchers.' },
                { title: 'DONATIONS', desc: 'Directly fund the restoration of crumbling scrolls and the high-resolution scanning of mystery clays found in deep strata.' },
                { title: 'CORPORATE', desc: 'Partner with us to provide the computational infrastructure needed for our ongoing interactive archival systems.' }
            ].map(col => (
                <div key={col.title} className="museum-module flex flex-col items-center text-center border border-outline-variant/10 hover:shadow-xl transition-all duration-500">
                    <div className="w-full py-4 mb-10 border-y border-outline-variant/20">
                        <h3 className="text-xl font-serif text-secondary tracking-widest">{col.title}</h3>
                    </div>
                    <p className="text-sm text-neutral leading-relaxed mb-12 flex-1">{col.desc}</p>
                    <button onClick={() => setActivePage('TICKETS')} className="btn-primary w-full">Apply for Patronage</button>
                </div>
            ))}
        </div>
    </div>
);

const Learn = ({ setActivePage }: { setActivePage: (p: Page) => void }) => (
    <div className="space-y-12">
        <PageHeader title="LEARN" subtitle="Education for the preservation of humanity" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
                <div className="museum-module">
                   <h3 className="text-3xl font-serif mb-6">Scholarly Programs</h3>
                   <p className="text-neutral mb-8 leading-relaxed">Our curriculum focuses on 'Lost Systems'—the forgotten technologies and social structures that have been omitted from mainstream history. We offer workshops for researchers of all skill levels.</p>
                   <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-sm italic font-serif">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                         Theoretical Archaeological Extraction
                      </li>
                      <li className="flex items-center gap-3 text-sm italic font-serif">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                         Chronology of the Pre-Industrial Automatons
                      </li>
                      <li className="flex items-center gap-3 text-sm italic font-serif">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                         Mathematics of the Babylonian Constellations
                      </li>
                   </ul>
                </div>
                <button onClick={() => setActivePage('TICKETS')} className="btn-secondary flex items-center gap-2 group">
                   Academic Registration <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="rounded-[var(--radius-card)] overflow-hidden border border-outline-variant/30 shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1491153059943-412f4b4701d9?q=80&w=2488&auto=format&fit=crop" className="w-full h-full object-cover" alt="Learning center" />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                   <p className="label-caps text-xs text-primary mb-2">Restoration Facility 4</p>
                   <h4 className="text-2xl font-serif">Micro-analysis of Ancient Pigments</h4>
                </div>
            </div>
        </div>
    </div>
);

const About = () => (
    <div className="space-y-12">
        <PageHeader title="ABOUT" subtitle="The provenance of our institution" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-6 p-4">
               <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-outline-variant/30 shadow-inner">
                  <img src={inventorImage} className="w-full h-full object-cover" alt="Forgotten Knowledge" />
               </div>
               <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-outline-variant/30 shadow-lg translate-y-10">
                  <img src={socratesImage} className="w-full h-full object-cover" alt="Socrates" />
               </div>
            </div>
            <div className="space-y-8">
                <h3 className="text-4xl font-serif leading-tight text-secondary">Forgotten Knowledge</h3>
                <p className="text-lg text-neutral leading-relaxed">
                   This is the museum of inventions people forgot about. We use some of these inventions in out daily life without knowing, so I, Efe Baylan, tought it would be a good idea to make this as the topic of my digital museum. I belive that believe that what is "lost" is rarely truly gone.
                </p>
                <div className="p-8 border-l-4 border-primary/60 bg-surface-dim italic font-serif text-xl tracking-tight text-secondary shadow-sm">
                   "The past is never dead. It's not even past"
                   <span className="block not-italic text-[10px] label-caps mt-5 opacity-40">— Socrates</span>
                </div>
            </div>
        </div>
    </div>
);

const Exhibitions = ({ setActivePage }: { setActivePage: (p: Page) => void }) => (
  <div className="space-y-12">
    <PageHeader title="EXHIBITIONS" subtitle="Current showcases of curated historical intrigue" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {EXHIBITIONS_DATA.map((ex, i) => (
        <div key={i} className="group relative overflow-hidden rounded-[var(--radius-card)] border border-outline-variant/30 shadow-xl bg-white">
          <div className="aspect-[16/9] overflow-hidden">
             <img src={ex.image} alt={ex.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
          </div>
          <div className="p-12 space-y-6">
             <div className="flex items-center gap-4">
                <span className="label-caps text-[10px] text-primary">{ex.eyebrow}</span>
                <div className="h-[1px] flex-1 bg-outline-variant/20" />
             </div>
             <h4 className="text-3xl font-serif text-secondary">{ex.title}</h4>
             <p className="text-neutral leading-relaxed text-sm">{ex.desc}</p>
             <p className="text-secondary/80 leading-relaxed text-sm">{ex.details}</p>
             <button onClick={() => setActivePage('TICKETS')} className="btn-outlined w-full group-hover:bg-primary group-hover:text-white transition-all">Secure Entry Passes</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Events = ({ setActivePage }: { setActivePage: (p: Page) => void }) => (
  <div className="space-y-12">
    <PageHeader title="EVENTS" subtitle="Current broadcasts from our scholarly network" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      {EVENTS_DATA.map((event, i) => (
        <div key={event.title} className="museum-module flex flex-col group border border-outline-variant/10 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="aspect-[4/3] rounded-[var(--radius-button)] overflow-hidden mb-8 border border-outline-variant/30 relative">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/35 transition-colors" />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="label-caps text-[10px] text-primary">Session {String(i + 1).padStart(2, '0')}</span>
            <div className="h-[1px] flex-1 bg-outline-variant/20" />
          </div>
          <p className="label-caps text-[10px] text-primary/70 mb-3">{event.eyebrow}</p>
          <h3 className="text-2xl font-serif text-secondary mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
          <p className="text-sm text-neutral leading-relaxed mb-5">{event.desc}</p>
          <p className="text-sm text-secondary/80 leading-relaxed mb-8 flex-1">{event.details}</p>
          <button onClick={() => setActivePage('TICKETS')} className="btn-secondary w-full">Register for Session</button>
        </div>
      ))}
    </div>
  </div>
);

const Tickets = () => {
  // REPLACE THIS WITH YOUR ACCESS KEY FROM WEB3FORMS.COM
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

  return (
  <div className="space-y-14">
    <PageHeader title="TICKETS" subtitle="Reserve your entry to the Legacy Vault" />
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "General", price: "FREE", desc: "Timed entry for the main galleries and rotating exhibitions." },
            { name: "Student", price: "FREE", desc: "Reserved access for school visits, study groups, and young researchers." },
            { name: "Private Tour", price: "REQUEST", desc: "A guided curator route through selected vault records and event spaces." }
          ].map(ticket => (
            <div key={ticket.name} className="museum-module bg-white border border-outline-variant/20 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <Ticket size={22} className="text-primary" />
                <span className="label-caps text-[10px] text-primary">{ticket.price}</span>
              </div>
              <h3 className="text-2xl font-serif text-secondary mb-4">{ticket.name}</h3>
              <p className="text-sm text-neutral leading-relaxed">{ticket.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary text-white p-10 rounded-[var(--radius-card)] shadow-xl">
          <p className="label-caps text-[10px] text-primary mb-4">Access Notice</p>
          <h3 className="text-3xl font-serif mb-5">Admission is free, but reservations are required.</h3>
          <p className="text-white/60 leading-relaxed text-sm">
            The museum limits gallery capacity to protect fragile materials and keep each room quiet enough for focused viewing.
          </p>
        </div>
      </section>

      <section className="bg-white p-10 rounded-[var(--radius-card)] border border-outline-variant/30 shadow-xl">
        <h3 className="text-3xl font-serif text-secondary mb-2">Ticket Request</h3>
        <p className="text-xs label-caps text-neutral opacity-60 mb-8">Select an access path</p>
        <form
          className="space-y-5"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);

            formData.append("access_key", WEB3FORMS_ACCESS_KEY);

            try {
              const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
              });

              const data = await response.json();

              if (data.success) {
                alert("Ticket Request Sent Successfully!");
                (e.target as HTMLFormElement).reset();
              } else {
                alert(data.message || "Something went wrong. Please check your Access Key.");
              }
            } catch (error) {
              console.error("Error submitting form:", error);
              alert("Server error. Please try again later.");
            }
          }}
        >
          <label className="block space-y-2">
            <span className="label-caps text-[10px] text-neutral font-bold">Visit Type</span>
            <select name="visit_type" className="w-full bg-surface-dim/30 border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all font-sans text-sm">
              <option>General Admission</option>
              <option>Student Group</option>
              <option>Private Tour</option>
            </select>
          </label>
          <label className="block space-y-2">
            <span className="label-caps text-[10px] text-neutral font-bold">Visitors</span>
            <select name="visitors" className="w-full bg-surface-dim/30 border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all font-sans text-sm">
              <option>1 Visitor</option>
              <option>2 Visitors</option>
              <option>3 Visitors</option>
              <option>4 Visitors</option>
              <option>5+ Visitors</option>
            </select>
          </label>
          <label className="block space-y-2">
            <span className="label-caps text-[10px] text-neutral font-bold">Preferred Date</span>
            <input required name="date" type="date" className="w-full bg-surface-dim/30 border border-outline-variant/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all font-sans text-sm" />
          </label>
          <button type="submit" className="btn-primary w-full py-4 mt-4">CONTINUE RESERVATION</button>
        </form>
      </section>
    </div>
  </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState<Page>('HOME');
  const [selectedArchive, setSelectedArchive] = useState<CollectionItem | null>(null);

  const archiveOverlay = useMemo(() => {
    if (!selectedArchive) return null;
    return <CollectionArchive item={selectedArchive} onClose={() => setSelectedArchive(null)} />;
  }, [selectedArchive]);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-on-primary font-sans antialiased">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isArchiveOpen={!!selectedArchive} 
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {activePage === 'HOME' && <Home setActivePage={setActivePage} />}
            {activePage === 'VISIT' && <Visit />}
            {activePage === 'EXHIBITIONS' && <Exhibitions setActivePage={setActivePage} />}
            {activePage === 'COLLECTIONS' && (
              <div className="space-y-16">
                <PageHeader title="COLLECTIONS" subtitle="The Archive of Hidden Wonders" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                   {COLLECTIONS_DATA.map(item => (
                     <motion.div 
                        key={item.id}
                        whileHover={{ y: -8 }}
                        className="museum-module cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10 bg-white"
                        onClick={() => setSelectedArchive(item)}
                     >
                        <div className="aspect-[4/3] rounded-[var(--radius-button)] overflow-hidden mb-8 border border-outline-variant/30 relative">
                           <img src={item.image} alt={item.name} className="w-full h-full object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-1000" />
                           <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="btn-primary text-xs uppercase tracking-widest shadow-2xl">Investigate Record</span>
                           </div>
                        </div>
                        <h4 className="text-2xl font-serif text-secondary mb-3 group-hover:text-primary transition-colors">{item.name}</h4>
                        <p className="text-sm text-neutral leading-relaxed">{item.shortDesc}</p>
                     </motion.div>
                   ))}
                </div>
              </div>
            )}
            {activePage === 'EVENTS' && <Events setActivePage={setActivePage} />}
            {activePage === 'TICKETS' && <Tickets />}
            {activePage === 'LEARN' && <Learn setActivePage={setActivePage} />}
            {activePage === 'SUPPORT' && <Support setActivePage={setActivePage} />}
            {activePage === 'ABOUT' && <About />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="w-full bg-secondary text-white mt-40 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-sm">
               <h3 className="font-serif text-4xl mb-6 tracking-wide italic">The Legacy Vault</h3>
               <p className="text-white/40 leading-relaxed text-sm">
                 A global institution dedicated to the preservation of obscure history and the reclamation of lost systems from across the timeline.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-20">
               <div className="space-y-6">
                  <span className="label-caps text-[9px] text-primary tracking-[0.5em]">Navigation</span>
                  <div className="flex flex-col gap-4 text-xs text-white/50 tracking-widest">
                    <button className="hover:text-primary transition-colors text-left" onClick={() => setActivePage('VISIT')}>RESERVATION</button>
                    <button className="hover:text-primary transition-colors text-left" onClick={() => setActivePage('COLLECTIONS')}>THE ARCHIVE</button>
                    <button className="hover:text-primary transition-colors text-left" onClick={() => setActivePage('SUPPORT')}>PATRONAGE</button>
                  </div>
               </div>
               <div className="space-y-6">
                  <span className="label-caps text-[9px] text-primary tracking-[0.5em]">Ethics</span>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3 text-[9px] tracking-[0.3em] text-white/40 font-bold">
                      <Accessibility size={14} className="text-primary" />
                      <span>UNIVERSAL DESIGN</span>
                    </div>
                    <div className="flex items-center gap-3 text-[9px] tracking-[0.3em] text-white/40 font-bold">
                      <Leaf size={14} className="text-primary" />
                      <span>NET ZERO GOALS</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.5em] text-white/20">
            <span>FORGOTTEN KNOWLEDGE MUSEUM &copy; MMXXIV</span>
            <div className="flex gap-12">
               <span className="cursor-pointer hover:text-white transition-colors">Digital Ethics Charter</span>
               <span className="cursor-pointer hover:text-white transition-colors">Governance Model</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Archive Detail & Quiz Overlay */}
      <AnimatePresence>
        {archiveOverlay}
      </AnimatePresence>
    </div>
  );
}
