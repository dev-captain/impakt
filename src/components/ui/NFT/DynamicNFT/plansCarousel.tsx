import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Text } from '@chakra-ui/react';

const PlansCarousel = () => {
  const { t } = useTranslation(`default`).i18n;
  const [images, setImages] = useState<any[]>();
  let NFTPlans = useState<object[]>();
  NFTPlans = t('DynamicNFT.plans', { returnObjects: true });
  useEffect(() => {
    if (!images) setImages(NFTPlans);
  }, [NFTPlans]);

  const renderCustomThumbs: any = () => {
    const thumbList =
      images &&
      images.map((plan: any) => (
        <picture key={plan.title}>
          <source data-srcSet={plan.imageThumb} type="image/jpg" />
          <img key={plan.title} src={plan.imageThumb} height="70" alt="" />
        </picture>
      ));

    return thumbList;
  };

  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      renderThumbs={renderCustomThumbs}
    >
      {images &&
        images.map((plan) => {
          return (
            <div key={plan.title}>
              <Text
                textStyle="semiBold20"
                color="#fff"
                textAlign="start"
                paddingLeft="10px"
                marginBottom="30px"
              >
                {plan.title}
              </Text>
              <img src={plan.image} alt="" />
            </div>
          );
        })}
    </Carousel>
  );
};
export default memo(PlansCarousel);
