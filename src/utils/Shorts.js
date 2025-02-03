import { v4 as uuidv4 } from 'uuid';

export const youtubeShortData = (count) => {


const formatViews = (views) => {
    if (views >= 1_000_000) {
      return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (views >= 1_000) {
      return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return views.toString(); // For numbers less than 1,000
  };


    const titres = [
        'Learn React in 10 Minutes!',
        'Coding interviews in 2024...',
        'All because she wanted to be picked u',
        'Love how she rehearsed hers at ',
        'JavaScript for Beginners',
        'ol yall saw how he was annoyed with me for  🤣🤣',
        '5 SIGNS GOD IS TELLING YOU TO END ',
        'How to Build a YouTube Clone...',
        'The Biggest Mistake - Keanu Reeves...',
        'Denzel and Pauletta been together 47 years ',
    ];


    const thumbnails = [
        '../src/assets/signs.jpeg',
        '../src/assets/denzel.jpeg',
        '../src/assets/images.jpeg',
        '../src/assets/cool.jpg',
        '../src/assets/mariage.jpg',
        '../src/assets/phone.jpeg',
    ];

    // List of categories for videos
    const categories = [
        'Programming',
        'Web Development',
        'React',
        'JavaScript',
        'CSS',
        'Debugging',
        'Career Advice',
        'Frontend Development',
        'Coding Challenges',
        'Tips & Tricks',
    ];


    return Array.from({ length: count }, () => ({
        id: uuidv4(),
        titre: titres[Math.floor(Math.random() * titres.length)],
        thumbnail: thumbnails[Math.floor(Math.random() * thumbnails.length)].toUpperCase(),
        views: formatViews(Math.floor(Math.random() * 1_000_000).toLocaleString()) + ' views',
        category: categories[Math.floor(Math.random() * categories.length)]
    }));
}

//views: formatViews(Math.floor(Math.random() * 1_000_000).toLocaleString()) + ' views',