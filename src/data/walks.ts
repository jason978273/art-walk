export type Walk = {
  id: string
  title: string
  description: string
  image: string
  href: string
  map: string
  interactiveMap?: string
  walkingTime?: string
  recommendedTime?: string
  distance?: string
  difficulty?: string
  highlights?: string[]
}

export const walks: Walk[] = [
  {
    id: 'ambleside',
    title: 'Ambleside Walk',
    description: 'A scenic walk along Ambleside with stunning views of the mountains.',
    image: '/images/ambleside.jpg',
    href: '/walk/ambleside',
    map: '/maps/amblesideMap.jpg',
    interactiveMap: 'https://dwvmaps.westvancouver.ca',
    walkingTime: "25 min",
    recommendedTime: "40 min",
    distance: "1.5 km",
    difficulty: "Moderate",
    highlights: ["Mountain Views", "Waterfront Promenade", "Public Art", "Beach Access"]
  },
  {
    id: 'hollyburn',
    title: 'Hollyburn Walk',
    description: 'A vibrant walk through the heart of the city, showcasing urban art and culture.',
    image: '/images/hollyburn.jpg',
    href: '/walk/hollyburn',
    map: '/maps/hollyburnMap.jpg',
    interactiveMap: 'https://dwvmaps.westvancouver.ca',
    walkingTime: "20 min",
    recommendedTime: "40 min",
    distance: "1.2 km",
    difficulty: "Easy",
    highlights: ["Urban Art", "Community Center", "Shopping District", "Local Cafes"]
  },
  {
    id: 'dundarave',
    title: 'Dundarave Walk',
    description: 'Explore the charming Dundarave village and its beautiful seaside promenade.',
    image: '/images/dundarave.jpg',
    href: '/walk/dundarave',
    map: '/maps/dundaraveMap.jpg',
    interactiveMap: 'https://dwvmaps.westvancouver.ca',
    walkingTime: "10 min",
    recommendedTime: "20 min",
    distance: "2.0 km",
    difficulty: "Easy",
    highlights: ["Dundarave Beach", "Ocean Views"]
  },
]