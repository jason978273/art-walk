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
    interactiveMap: 'https://www.openstreetmap.org/export/embed.html?bbox=-123.2%2C49.3%2C-123.1%2C49.35'
  },
  {
    id: 'hollyburn',
    title: 'Hollyburn Walk',
    description: 'A vibrant walk through the heart of the city, showcasing urban art and culture.',
    image: '/images/hollyburn.jpg',
    href: '/walk/hollyburn',
    map: '/maps/hollyburnMap.jpg',
    interactiveMap: 'https://dwvmaps.westvancouver.ca/portal/apps/experiencebuilder/experience/?draft=true&id=1379154fb98d4f538c1de79ef37fbfba&page=Page#data_s=id%3AdataSource_1-196d07c68a8-layer-2%3A65',

  },
  {
    id: 'dundarave',
    title: 'Dundarave Walk',
    description: 'Explore the charming Dundarave village and its beautiful seaside promenade.',
    image: '/images/dundarave.jpg',
    href: '/walk/dundarave',
    map: '/maps/dundaraveMap.jpg',
    interactiveMap: 'https://dwvmaps.westvancouver.ca/portal/apps/experiencebuilder/experience/?draft=true&id=1379154fb98d4f538c1de79ef37fbfba&page=Page#data_s=id%3AdataSource_1-196d07c68a8-layer-2%3A65',

  },
]