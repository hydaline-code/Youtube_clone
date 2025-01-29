
        import { v4 as uuidv4 } from 'uuid';


export const generateCustomYouTubeCards = (count) => {

    const titles = [
        'Learn React in 10 Minutes!',
        'Top 10 Programming Tips',
        'How to Build a YouTube Clone',
        'Best Coding Practices in 2025',
        'JavaScript for Beginners',
        'Mastering CSS Grid Layout',
        'Understanding React Hooks',
        'Become a Frontend Developer',
        'Building Responsive Websites',
        'Debugging JavaScript Like a Pro',
    ];

    const channels = [
        'Code Academy',
        'Frontend Masters',
        'Tech with Tim',
        'Traversy Media',
        'Web Dev Simplified',
        'The Net Ninja',
        'Programming with Mosh',
        'CS Dojo',
        'Dev Ed',
        'Clever Programmer',
    ];

    const thumbnails = [
        '../src/assets/amazed-beautiful-girls-being-impressed-by-stunning-news-cover-mouthes-with-palms-react-unexpected-information.jpg',
        '../src/assets/learn.jpeg',
        '../src/assets/react.jpeg',
        '../src/assets/mosh.jpg',
        '../src/assets/developer.jpeg',
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
        title: titles[Math.floor(Math.random() * titles.length)],
        thumbnail: thumbnails[Math.floor(Math.random() * thumbnails.length)],
        channelName: channels[Math.floor(Math.random() * channels.length)].toUpperCase(),
        views: Math.floor(Math.random() * 1_000_000).toLocaleString() + ' views',
        uploadedAt: `${Math.floor(Math.random() * 30) + 1} days ago`,
        category: categories[Math.floor(Math.random() * categories.length)], // Add category to each video          
    }));
};
