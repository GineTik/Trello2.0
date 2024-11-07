import { cn } from '@/lib/utils';
import React from 'react';
import styles from './Heading.module.scss';

type HeadingProps = React.ButtonHTMLAttributes<HTMLHeadingElement> & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading = ({ tag, className, ...props }: HeadingProps) => {
  const Component = tag ?? 'h1';

  return <Component className={cn(styles.heading, className)} {...props} />;
};

export default Heading;
