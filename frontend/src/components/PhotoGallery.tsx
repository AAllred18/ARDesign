import { useState, useEffect } from 'react';
import './PhotoGallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';


interface GalleryImage {
  src: string;
  caption: string;
  orientation: 'horizontal' | 'vertical';
}

const images: GalleryImage[] = [
  { src: '../src/assets/Proposal.jpg', caption: 'The Day I proposed to Reagan\n12/1/2023', orientation: 'horizontal' },
  { src: '../src/assets/About.jpg', caption: 'Exploring Keauhou Bay\n5/7/2023', orientation: 'vertical' },
  { src: '../src/assets/FamilyChristmas.jpg', caption: 'Family Christmas in Idaho\n12/23/2023', orientation: 'horizontal' },
  { src: '../src/assets/BYUFootballGame.jpg', caption: 'BYU Football Game\n9/2/2023', orientation: 'vertical' },
  { src: '../src/assets/Proposal.jpg', caption: 'Photo 3,1', orientation: 'horizontal' },
  { src: '../src/assets/WeddingDay.jpg', caption: 'Wedding Day\n6/15/2024', orientation: 'vertical' },
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
        <div className="mobile-swiper-wrapper" style={{ maxWidth: '480px', margin: '0 auto', paddingBottom: '30px' }}>
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
          <button className="close-btn" onClick={closeModal}>
            &times;
          </button>
          <img src={currentImage} alt="Expanded" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
