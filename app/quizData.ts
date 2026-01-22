export type PersonalityType = 'adventurer' | 'classic' | 'creative' | 'cozy' | 'energizer';

export interface Answer {
  text: string;
  emoji: string;
  personality: PersonalityType;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface Personality {
  type: PersonalityType;
  title: string;
  coffee: string;
  tagline: string;
  description: string;
  emoji: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "It's Saturday morning. What are you doing?",
    answers: [
      { text: "Hiking or exploring somewhere new", emoji: "🥾", personality: "adventurer" },
      { text: "Sleeping in, then a cozy breakfast", emoji: "😴", personality: "cozy" },
      { text: "Working on a creative project", emoji: "🎨", personality: "creative" },
      { text: "Catching up on emails and planning", emoji: "📧", personality: "classic" },
    ],
  },
  {
    id: 2,
    question: "Pick your ideal vacation destination:",
    answers: [
      { text: "A bustling city with lots to explore", emoji: "🏙️", personality: "energizer" },
      { text: "A cabin in the mountains", emoji: "🏔️", personality: "cozy" },
      { text: "An exotic, off-the-beaten-path location", emoji: "🌴", personality: "adventurer" },
      { text: "A classic European city with history", emoji: "🏛️", personality: "classic" },
    ],
  },
  {
    id: 3,
    question: "How do you handle a stressful day?",
    answers: [
      { text: "Go for a run or workout", emoji: "🏃", personality: "energizer" },
      { text: "Curl up with a book or movie", emoji: "📚", personality: "cozy" },
      { text: "Make a list and tackle it head-on", emoji: "📝", personality: "classic" },
      { text: "Do something creative to decompress", emoji: "🎸", personality: "creative" },
    ],
  },
  {
    id: 4,
    question: "What's your go-to music genre?",
    answers: [
      { text: "Indie or alternative", emoji: "🎧", personality: "creative" },
      { text: "Classic rock or jazz", emoji: "🎷", personality: "classic" },
      { text: "Upbeat pop or electronic", emoji: "🎵", personality: "energizer" },
      { text: "Acoustic or lo-fi beats", emoji: "🎶", personality: "cozy" },
    ],
  },
  {
    id: 5,
    question: "Pick your spirit animal:",
    answers: [
      { text: "Eagle - free and adventurous", emoji: "🦅", personality: "adventurer" },
      { text: "Cat - independent and cozy", emoji: "🐱", personality: "cozy" },
      { text: "Fox - clever and creative", emoji: "🦊", personality: "creative" },
      { text: "Lion - bold and energetic", emoji: "🦁", personality: "energizer" },
    ],
  },
];

export const personalities: Record<PersonalityType, Personality> = {
  adventurer: {
    type: "adventurer",
    title: "The Adventurer",
    coffee: "Cold Brew",
    tagline: "Bold, smooth, and ready for anything",
    description: "You're always seeking the next thrill! Your coffee should be as bold and adventurous as you are.",
    emoji: "🌍",
  },
  classic: {
    type: "classic",
    title: "The Classic",
    coffee: "Americano",
    tagline: "Timeless, reliable, and sophisticated",
    description: "You appreciate the finer things in life and value quality over trends. A classic choice for a classic soul.",
    emoji: "☕",
  },
  creative: {
    type: "creative",
    title: "The Creative",
    coffee: "Oat Milk Latte",
    tagline: "Unique, artistic, and full of flavor",
    description: "You march to the beat of your own drum and aren't afraid to try new things. Your coffee is as unique as you!",
    emoji: "🎨",
  },
  cozy: {
    type: "cozy",
    title: "The Cozy One",
    coffee: "Vanilla Cappuccino",
    tagline: "Warm, comforting, and perfectly sweet",
    description: "You're all about comfort and warmth. Life's too short for bitter coffee or cold days without a blanket.",
    emoji: "🧣",
  },
  energizer: {
    type: "energizer",
    title: "The Energizer",
    coffee: "Double Espresso",
    tagline: "Quick, powerful, and unstoppable",
    description: "You've got places to be and things to do! Your coffee needs to keep up with your non-stop energy.",
    emoji: "⚡",
  },
};
