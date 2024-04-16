'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './WaifuImage.module.css';

const categories = [
  'waifu',
  'neko',
  'trap',
  'blowjob'
];

const WaifuImage: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadedCount, setLoadedCount] = useState<number>(5);

 const fetchImages = useCallback(async (count: number) => {
  setIsLoading(true);
  const newImages = [];

  for (let i = 0; i < count; i++) {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const response = await fetch(`https://api.waifu.pics/nsfw/${randomCategory}?gif=true`);
    const data = await response.json();

    if (data.url && data.url.endsWith('.gif')) {
      newImages.push(data.url);
    }
  }

  setImageUrls((prevUrls) => [...prevUrls, ...newImages]);
  setIsLoading(false);
}, []);

  useEffect(() => {
    fetchImages(loadedCount);
  }, [fetchImages, loadedCount]);

  const handleLoadMore = () => {
    setLoadedCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {imageUrls.map((url, index) => (
        <div key={index} className="flex border-b py-6">
          <div className="pl-3 w-full px-4">
            <div className="mt-2.5 flex">
              <div className="relative min-h-[480px] max-h-[732px] max-w-[480px] flex items-center bg-black rounded-xl cursor-pointer">
                <img
                  src={url}
                  alt="Random image"
                  className="video-container rounded-xl overflow-auto object-cover mx-auto h-full"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={handleLoadMore}
        disabled={isLoading}
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export default WaifuImage;