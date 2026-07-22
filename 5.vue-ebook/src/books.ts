import { ref } from 'vue'

export interface Book

{
id: number
title: string
author: string
category: string
year: number
description: string
image: string
}

export const books = ref<Book[]>([
{
id: 1,
title: 'Who Moved My Cheese?',
author: 'Spencer Johnson',
category: 'Motivational',
year: 1998,
description: 'New York #1',
image: '/books/1704016929_Who-Moved-My-Cheese.optimized.webp'
},
{
id: 2,
title: 'Famous Five',
author: 'Enid Blyton',
category: 'Adventure',
year: 1960,
description: 'Lima Sekawan',
image: '/books/51UQX4S0LVL.webp'
},
{
id: 3,
title: 'Dune',
author: 'Frank Herbert',
category: 'Sci-fi',
year: 1965,
description: 'Paul Atreides',
image: '/books/image.webp'
}

])