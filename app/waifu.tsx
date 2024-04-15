import { useState, useEffect } from 'react';

const WaifuPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const categories: string[] = [
      'waifu',
      'neko',
      'shinobu',
      'megumin',
      'bully',
      'cuddle',
      'cry',
      'hug',
      'awoo',
      'kiss',
      'lick',
      'pat',
      'smug',
      'bonk',
      'blush',
      'smile',
      'wave',
      'highfive',
      'handhold',
      'nom',
      'bite',
      'glomp',
      'slap',
      'kill',
      'kick',
      'happy',
      'wink',
      'poke',
      'dance',
      'cringe'
    ];

    const fetchRandomImage = async () => {
      try {
        const randomCategory: string = categories[Math.floor(Math.random() * categories.length)];
        const response = await fetch(`https://api.waifu.pics/sfw/${randomCategory}`);
        const data = await response.json();
        setImageUrl(data.url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <div>
      <h1>Random Waifu Image</h1>
      {imageUrl && <img src={imageUrl} alt="Random Waifu" />}
    </div>
  );
};

export default WaifuPage;
