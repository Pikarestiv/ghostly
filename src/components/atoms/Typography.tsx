import React, { CSSProperties, ReactNode } from 'react';

type TypographyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  className,
  style,
  children,
}) => {
  const getHeadingElement = () => {
    switch (variant) {
      case 'h1':
        return <h1 className={className} style={style}>{children}</h1>;
      case 'h2':
        return <h2 className={className} style={style}>{children}</h2>;
      case 'h3':
        return <h3 className={className} style={style}>{children}</h3>;
      case 'h4':
        return <h4 className={className} style={style}>{children}</h4>;
      case 'h5':
        return <h5 className={className} style={style}>{children}</h5>;
      case 'h6':
        return <h6 className={className} style={style}>{children}</h6>;
      default:
        return <p className={className} style={style}>{children}</p>;
    }
  };

  return getHeadingElement();
};

export default Typography;
