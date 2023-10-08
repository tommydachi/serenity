export const projects = [
  {
    name: 'Sugar Rush',
    type: 'Personal project',
    description:
      'An interactive website to find bubble tea / dessert places near you!',
    description_full:
      'A common issue I have when going out with my friends was deciding where to get dessert, or what places ' +
      'near us would be open - so I created Sugar Rush to solve that! Utilising the Google Maps APIs, which took a bit of ' +
      "research and testing to properly understand and use, I added markers on dessert places nearby a user's current location which are interactive where " +
      'ratings, reviews and opening hours can be viewed. I also implemented an autocomplete component to search places across Australia, and ' +
      "defaulted the location to Burwood if the location was turned off, because you can't go wrong with Burwood. This has been my favourite project" +
      'to work on as it was not only fun to research and create, but also fun to use and is applicable in my life!',
    technologies: 'TypeScript, ReactJS, NodeJS, ExpressJS, Google Maps API',
    link: 'https://tommydachi.github.io/sugar-rush/',
  },
  {
    name: 'Serenity',
    type: 'Personal project',
    description:
      'Personal website designed and developed to showcase experiences and projects.',
    description_full:
      'After looking back at my first personal website I created this year, you could ' +
      "probably guess why I decided to make a new one (spoiler alert: it wasn't that good). " +
      'I wanted to design this website to combine a bit of fun, smooth animations and ' +
      'relevant animations, and I feel accomplished as I believe I was able to do so.\n' +
      "Fun fact (an actually true one this time): I chose 'serenity' as the name because originally I wanted " +
      "to use 'serendipity', but that was too big of a word I shortened it down. Other potential candidates were " +
      "'calling' and the simple, yet concise, 'website.'",
    technologies: 'TypeScript, ReactJS',
    link: 'https://tommydachi.github.io/serenity/',
  },
  {
    name: 'Flag Guessr',
    type: 'Personal project',
    description:
      'A very simple flag guessing game that presents options and keeps score.',
    description_full:
      'My friend was talking to me about how they wanted to learn more of the world flags. I had 30 minutes ' +
      'and as a result, this project was created. The game is very simple, initially calling a countries API to fetch the country ' +
      'data and then simply collating that into a game format. My high score is 94 because I forgot the difference between Kazakhstan and Kyrgyzstan.',
    technologies: 'TypeScript, ReactJS',
    link: 'https://github.com/tommydachi/flag-guesser/',
  },
  {
    name: 'Music Show Archive',
    type: 'Personal project',
    description:
      'A work-in-progress site that collates weekly Korean music shows from different channels into one location for convenience.',
    description_full:
      'The KMSA as I liked to call it is a project I have been currently working on (although the progress has slowed lots as I started interning).\n' +
      'For background context, every week, there are a variety of Korean music broadcasting channels that host different music award shows for Korean artists to perform and promote ' +
      'their new music. As there are many of these channels and finding them on YouTube is frustrating due to the different naming ' +
      'conventions and playlist locations, I am working on creating a site that collates all these different weekly episodes into one convenient location. I am utilising the YouTube API ' +
      "to extract information for each channel's weekly shows and wrote a quick Python script to generate dates of shows and crosscheck with Wikipedia.",
    technologies: 'TypeScript, React, Python',
    link: 'WIP',
  },
  {
    name: 'Spotify Data',
    type: 'Personal project',
    description:
      'A Python script that extracts Spotify listening data and presents back top songs, artists and albums.',
    description_full:
      'This was a quick script after not wanting to wait for Spotify wrapped at the end of each year. I utilised the Spotipy API ' +
      'to fetch information about each song after extracting the JSON data from each downloaded file. Despite being a very short project, it was quite fun and ' +
      'allowed my music taste to be further questioned by my friends.',
    technologies: 'Python',
    link: 'https://github.com/tommydachi/spotifyVisualiser',
  },
  {
    name: 'UNSW Streams',
    type: 'University project',
    description:
      'The backend API for a mock Microsoft Teams application in a group of 5.',
    description_full:
      'As my first group assingment in university, I was part of a team of 5 that wrote the backend API for a mock Microsoft Teams applications. This was a very interesting yet fun experience ' +
      'and I was exposed to the process of designing APIs, Postman/Swagger and general teamwork skills during this project!',
    technologies: 'Python',
    link: 'University Project',
  },
];
