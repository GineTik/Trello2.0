import Heading from '@/components/ui/heading/Heading';
import { Paragraph } from '@/components/ui/paragraph/Paragraph';
import Link from 'next/link';
import styles from './HomeContacts.module.scss';

export const HomeContacts = () => {
  return (
    <div className={styles.contacts}>
      <div>
        <div>{/* my photo */}</div>
        <div>
          <Heading tag='h2'>Hi, I am Denis!</Heading>
          <Paragraph>I have created this website for 2 weeks</Paragraph>
        </div>
      </div>
      <div>
        <Link href='https://github.com/GineTik' target='_blank'>
          Github
        </Link>
        <Link href='tel:+380672352711'>+380 67 235 27 11</Link>
        <Link href='mailto:densheva18072003@gmail.com'>
          densheva18072003@gmail.com
        </Link>
      </div>
    </div>
  );
};
