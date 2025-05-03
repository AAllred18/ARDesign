import { useState, useEffect } from 'react';
import './PhotoGallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';

import ProposalImage from '../assets/Proposal.jpg';
import HawaiiImage from '../assets/Hawaii.jpg';
import FamilyChristmasImage from '../assets/FamilyChristmas.jpg';
import BYUFootballImage from '../assets/BYUFootballGame.jpg';
import WeddingImage from '../assets/WeddingDay.jpg';
import KauaiImage from '../assets/Kauai.jpeg';
import ISEventImage from '../assets/ISEvent.jpeg';
import MoabImage from '../assets/Moab.jpeg';

interface GalleryImage {
  src: string;
  caption: string;
  orientation: 'horizontal' | 'vertical';
}

const images: GalleryImage[] = [
  { src: ProposalImage, caption: 'The Day I proposed to Reagan', orientation: 'horizontal' },
  { src: HawaiiImage, caption: 'Exploring Keauhou Bay', orientation: 'vertical' },
  { src: FamilyChristmasImage, caption: 'Family Christmas in Idaho', orientation: 'horizontal' },
  { src: ISEventImage, caption: 'Attending an IS Event', orientation: 'vertical' },
  { src: BYUFootballImage, caption: 'BYU Football Game', orientation: 'vertical' },
  { src: MoabImage, caption: 'Trip to Moab', orientation: 'horizontal' }, // reuse works fine
  { src: WeddingImage, caption: 'Our Wedding Day', orientation: 'vertical' },
  { src: KauaiImage, caption: 'Visiting Kauai', orientation: 'horizontal' },
];

const PhotoGallery: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    checkMobile();
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openModal = (src: string) => {
    setCurrentImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      {/* Desktop Grid View */}
      {!isMobile && (
        <div className="polaroid-gallery">
          {images.map((img, index) => (
            <div
              key={index}
              className={`polaroid ${img.orientation === 'horizontal' ? 'horizontal-polaroid' : 'vertical-polaroid'}`}
              onClick={() => openModal(img.src)}
            >
              <div className="polaroid-inner">
                <img src={img.src} alt={img.caption} />
                <div className="caption">
                  {img.caption.split('\n').map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isMobile && (
        <div className="mobile-swiper-wrapper" style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '30px' }}>
          <Swiper
            modules={[Navigation]}
            navigation  // ✅ This enables default arrow generation
            autoHeight={true}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            style={{ width: '100%' }}
            className="custom-swiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="mobile-polaroid">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className={img.orientation === 'vertical' ? 'mobile-vertical-image' : ''}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                  <div className="caption">
                    {img.caption.split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}



      {/* Modal View */}
      {modalOpen && (
  <div className="modal open" onClick={handleBackdropClick}>
    <div className="modal-content-wrapper">
      <button className="close-btn" onClick={closeModal}>
        &times;
      </button>
      <img
        src={currentImage}
        alt="Expanded"
        className="modal-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  </div>
)}
    </div>
  );
};

export default PhotoGallery;
