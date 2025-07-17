export type Walk = {
  id: string
  title: string
  description: string
  image: string
  href: string
  map: string
  interactiveMap?: string
}

export const walks: Walk[] = [
  {
    id: 'ambleside',
    title: 'Ambleside Walk',
    description: 'A scenic walk along Ambleside with stunning views of the mountains.',
    image: '/images/ambleside.jpg',
    href: '/walk/ambleside',
    map: '/maps/amblesideMap.jpg',
    interactiveMap: 'https://dwvmaps.westvancouver.ca'
  },
  {
    id: 'hollyburn',
    title: 'Hollyburn Walk',
    description: 'A vibrant walk through the heart of the city, showcasing urban art and culture.',
    image: '/images/hollyburn.jpg',
    href: '/walk/hollyburn',
    map: '/maps/hollyburnMap.jpg',
    interactiveMap: 'https://dwvmaps.westvancouver.ca',

  },
  {
    id: 'dundarave',
    title: 'Dundarave Walk',
    description: 'Explore the charming Dundarave village and its beautiful seaside promenade.',
    image: '/images/dundarave.jpg',
    href: '/walk/dundarave',
    map: '/maps/dundaraveMap.jpg',
    interactiveMap: 'https://dwvmaps.westvancouver.ca',

  },
]