import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';
import styles from './PageHeader.module.scss';

type PageHeader = HtmlHTMLAttributes<HTMLDivElement> & {
  children: any;
};

const PageHeader = ({ className, ...props }: PageHeader) => {
  return <div className={cn(styles.header, className)} {...props} />;
};

const PageHeaderRow = ({ className, ...props }: PageHeader) => {
  return <div className={cn(styles.header__row, className)} {...props} />;
};

export { PageHeader, PageHeaderRow };
