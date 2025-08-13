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
  clickableHighlights?: ClickableHighlight[]
  photoCredit?: string
}

export const walks: Walk[] = [
  {
    id: 'ambleside',
    title: 'Ambleside Walk',
    description: 'A scenic walk along Ambleside with stunning views.',
    image: '/images/ambleside.jpg',
    href: '/walk/ambleside',
    map: '/maps/amblesideMap.jpg',
    interactiveMap: 'https://dwvmaps.westvancouver.ca/portal/apps/experiencebuilder/experience/?id=97e4234b7ae4465e9835acfd9f1aeb52&page=Page&views=Ambleside',
    walkingTime: "30 min",
    recommendedTime: "40 min",
    distance: "1.5 km",
    difficulty: "Moderate",
    highlights: ["Ocean Views", "Waterfront Promenade", "Lions Gate Bridge", "Beach Access"],
    clickableHighlights: [
      {
        name: "Van Cha",
        url: "https://www.instagram.com/vanchatea/?hl=en",
        type: "sponsor",
        description: "Chinese Style Tea House"
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
    ],
    photoCredit: "Photo by District of West Vancouver"

  },
  {
    id: 'hollyburn',
    title: 'Hollyburn Walk',
    description: 'A vibrant walk through the heart of the city, showcasing urban art and culture.',
    image: '/images/hollyburn.jpg',
    href: '/walk/hollyburn',
    map: '/maps/hollyburnMap.jpg',
    interactiveMap: 'https://dwvmaps.westvancouver.ca/portal/apps/experiencebuilder/experience/?id=97e4234b7ae4465e9835acfd9f1aeb52&page=Page&views=Hollyburn',
    walkingTime: "25 min",
    recommendedTime: "40 min",
    distance: "1.2 km",
    difficulty: "Easy",
    highlights: ["Urban Art", "Community Center", "Shopping District", "Local Cafes"],
    clickableHighlights: [
      {
        name: "Future Sponsor Here",
        url: "https://batwcoffee.com/",
        type: "sponsor",
        description: "Local coffee roaster with fresh brews"
      },
      {
        name: "Future Sponsor Here",
        url: "https://redlionbarandgrill.net",
        type: "sponsor",
        description: "Popular pub with local beers"
      }
    ],
    photoCredit: "Photo by District of West Vancouver"
  },
  {
    id: 'dundarave',
    title: 'Dundarave Walk',
    description: 'Explore the charming Dundarave village and its beautiful seaside promenade.',
    image: '/images/dundarave.jpg',
    href: '/walk/dundarave',
    map: '/maps/dundaraveMap.jpg',
    interactiveMap: 'https://dwvmaps.westvancouver.ca/portal/apps/experiencebuilder/experience/?id=97e4234b7ae4465e9835acfd9f1aeb52&page=Page&views=Dundarave',
    walkingTime: "10 min",
    recommendedTime: "20 min",
    distance: "1.0 km",
    difficulty: "Easy",
    highlights: ["Dundarave Beach", "Ocean Views"],
    clickableHighlights: [
      {
        name: "Dundarave Village Shopping",
        url: "https://dundaravevillage.ca",
        type: "info",
        description: "Local shops and businesses"
      },
      {
        name: "Dundarave Park",
        url: "https://westvancouver.ca/parks-recreation/parks-trails/dundarave-park",
        type: "attraction",
        description: "Beautiful beach park with picnic areas"
      }
    ],
    photoCredit: "Photo by ADBIA"
  },
]