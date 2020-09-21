import { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import BuyerStyles from '../../stylesheets/Buyers.module.css';

const BuyersGuide = () => {
  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (width <= 640) {
      setScreenSize('mobile');
    } else if (width > 640) {
      setScreenSize('desktop');
    }
    return () => { };
  }, [width]);

  return (
    <div className={BuyerStyles.BuyersGuide}>
      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703244/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide1-m400.jpg' alt='buyers-guide-slide-1' title='buyers-guide-slide-1' />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703244/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide1-d700.jpg' alt="buyers-guide-slide-1" title="buyers-guide-slide-1" />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703244/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide2-m400.jpg' alt='buyers-guide-slide-2' title='buyers-guide-slide-2' />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703244/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide2-d700.jpg' alt="buyers-guide-slide-2" title="buyers-guide-slide-2" />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703244/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide3-m400.jpg' alt='buyers-guide-slide-3' title='buyers-guide-slide-3' />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703244/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide3-d700.jpg' alt="buyers-guide-slide-3" title="buyers-guide-slide-3" />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703253/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide4-m400.jpg' alt='buyers-guide-slide-4' title='buyers-guide-slide-4' />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703254/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide4-d700.jpg' alt="buyers-guide-slide-4" title="buyers-guide-slide-4" />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703253/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide5-m400.jpg' alt='buyers-guide-slide-5' title='buyers-guide-slide-5' />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703254/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide5-d700.jpg' alt="buyers-guide-slide-5" title="buyers-guide-slide-5" />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703254/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide6-m400.jpg' alt='buyers-guide-slide-6' title='buyers-guide-slide-6' />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703257/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide6-d700.jpg' alt="buyers-guide-slide-6" title="buyers-guide-slide-6" />
      )}

      {screenSize === 'mobile' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703254/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide7-m400.jpg' alt='buyers-guide-slide-7' title='buyers-guide-slide-7' />
      )}

      {screenSize === 'desktop' && (
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600703254/Pe%C3%B1a%20El%20Paso/Buyers%20Guide/buyers-guide-slide7-d700.jpg' alt="buyers-guide-slide-7" title="buyers-guide-slide-7" />
      )}
    </div>
  );
}


export default BuyersGuide;