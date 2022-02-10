import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ImageCarousel = ({ images, quantity }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: quantity,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: quantity,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (

    <Carousel
      responsive={responsive}
      autoPlaySpeed={2000}
      autoPlay={true}
      infinite={true}
      removeArrowOnDeviceType={['tablet', 'mobile']}
    >
      {images.slice(0, 10).map((image, index) => {
        return (
          <img
            key={index}
            draggable={false}
            style={{ width: '100%', height: '100%' }}
            src={image}
            alt="pictures"
          />
        );
      })}
    </Carousel>
);
};

export default ImageCarousel;
