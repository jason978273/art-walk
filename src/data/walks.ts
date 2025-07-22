export type ClickableHighlight = {
  name: string
  url: string
  type?: 'sponsor' | 'attraction' | 'info' | 'external'
  description?: string
}

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
  clickableHighlights?: ClickableHighlight[] // Add this new field
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
    highlights: ["Mountain Views", "Waterfront Promenade", "Public Art", "Beach Access"],
    clickableHighlights: [
      {
        name: "Crema Cafe Bar",
        url: "https://www.cremacafebar.com",
        type: "sponsor",
        description: "Cafe with waterfront views"
      },
      {
        name: "Ambleside Park Information",
        url: "https://westvancouver.ca/parks-recreation/parks/ambleside-park",
        type: "info",
        description: "Official park information"
      },
      {
        name: "Centennial Seawalk",
        url: "https://westvancouver.ca/parks-recreation/parks-trails/centennial-seawalk",
        type: "attraction",
        description: "Scenic walking path along the ocean"
      }
    ]
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
    highlights: ["Urban Art", "Community Center", "Shopping District", "Local Cafes"],
    clickableHighlights: [
      {
        name: "Bean Around The World Coffee",
        url: "https://beanaround.com",
        type: "sponsor",
        description: "Local coffee roaster with fresh brews"
      },
      {
        name: "Hollyburn Country Club",
        url: "https://hollyburncc.com",
        type: "sponsor",
        description: "Historic club with dining facilities"
      }
    ]
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
    highlights: ["Dundarave Beach", "Ocean Views"],
    clickableHighlights: [
      {
        name: "Dundarave Village Shopping",
        url: "https://dundaravevillage.ca",
        type: "info",
        description: "Local shops and businesses"
      }
    ]
  },
]