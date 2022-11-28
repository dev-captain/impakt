import { Image, ImageProps } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../../assets/images';

interface ImpaktIconPropsI {
  variant?: 'sm' | 'md' | 'lg';
  whiteMode?: boolean;
}

const ImpaktIcon: React.FC<ImageProps & ImpaktIconPropsI> = ({
  variant = 'md',
  whiteMode = false,
  ...props
}) => {
  const getLogo = () => {
    if (variant === 'md')
      return (
        <Image
          title="Impakt Logo"
          w="64px"
          alt="ImpaktLogo"
          src={whiteMode ? Images.Common.logo.white.sm : Images.Common.logo.sm}
          {...props}
        />
      );
    if (variant === 'sm')
      return (
        <Image
          title="Impakt Logo"
          alt="ImpaktLogo"
          w="32px"
          src={whiteMode ? Images.Common.logo.white.md : Images.Common.logo.md}
          {...props}
        />
      );
    if (variant === 'lg')
      return (
        <Image
          title="Impakt Logo"
          alt="ImpaktLogo"
          w="128px"
          src={whiteMode ? Images.Common.logo.white.lg : Images.Common.logo.lg}
          {...props}
        />
      );

    return (
      <Image
        title="Impakt Logo"
        alt="ImpaktLogo"
        w="64px"
        src={whiteMode ? Images.Common.logo.white.md : Images.Common.logo.md}
        {...props}
      />
    );
  };

  return (
    <Link to="/" download="Impakt Logo">
      {getLogo()}
    </Link>
  );
};

export default ImpaktIcon;
