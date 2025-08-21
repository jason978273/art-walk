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
  introText?: string
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
    recommendedTime: "45 min",
    distance: "2.0 km",
    difficulty: "Easy",
    introText:"Begin at the striking Squamish Welcome Figure and follow the Seawalk toward John Lawson Park. This route passes a series of waterfront artworks, with stops near the Ferry Building Gallery and Silk Purse Arts Centre, offering a blend of coastal scenery and cultural landmarks.",
    highlights: ["Ocean Views", "Waterfront Promenade", "Lions Gate Bridge", "Beach Access"],
    clickableHighlights: [
      {
        name: "Featured Business Opportunity",
        url: "mailto:publicart.wvcac@shaw.ca?subject=Business Partnership Inquiry",
        type: "sponsor",
        description: "Interested in being featured? Contact us!"
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
    walkingTime: "30 min",
    recommendedTime: "45 min",
    distance: "2.2 km",
    difficulty: "Moderate",
    introText:"Explore the cultural heart of Hollyburn, beginning near the Seawalk and weaving inland to the West Vancouver Community Centre and Memorial Library. Along the way, enjoy a mix of outdoor installations and community-focused spaces that celebrate art in daily life.",
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
    distance: "0.9 km",
    difficulty: "Easy",
    introText:"Enjoy a relaxed coastal walk through Dundarave, following the Seawalk to Dundarave Beach. Public art and seaside scenery combine here, offering a tranquil experience with a touch of West Coast character.",
    highlights: ["Dundarave Beach", "Ocean Views"],
    clickableHighlights: [
      {
        name: "Dundarave Village Shopping",
        url: "https://adbia.ca",
        type: "info",
        description: "Learn more about Local shops and businesses"
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