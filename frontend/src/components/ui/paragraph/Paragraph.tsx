import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Paragraph.module.scss';

type ParagraphProps = HtmlHTMLAttributes<HTMLParagraphElement> &
  PropsWithChildren & {};

export const Paragraph = ({ className, ...props }: ParagraphProps) => {
  return <p className={cn(styles.paragraph, className)} {...props} />;
};
