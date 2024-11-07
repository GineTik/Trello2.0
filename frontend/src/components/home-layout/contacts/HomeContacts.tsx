import MyImage from '@/../public/I.jpg';
import { Button } from '@/components/ui/button/Button';
import Heading from '@/components/ui/heading/Heading';
import { Paragraph } from '@/components/ui/paragraph/Paragraph';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaPhone, FaTelegram } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import styles from './HomeContacts.module.scss';

export const HomeContacts = () => {
  return (
    <div className={styles.contacts}>
      <Heading tag='h2'>Contact me</Heading>
      <div className={styles.contacts__about}>
        <div>
          <Image
            src={MyImage.src}
            width={200}
            height={200}
            className={styles.contacts__photo}
            alt='My photo'
          />
        </div>
        <div>
          <Heading tag='h3'>Hi, I am Denis!</Heading>
          <Paragraph>I have been create this website for 2 weeks</Paragraph>
        </div>
      </div>
      <div className={styles.contacts__links}>
        <Button asChild variant='default_50_opacity'>
          <Link href='https://github.com/GineTik' target='_blank'>
            <FaGithub />
            Github
          </Link>
        </Button>
        <Button asChild variant='default_50_opacity'>
          <Link href='tel:+380672352711'>
            <FaPhone />
            067-235-27-11
          </Link>
        </Button>
        <Button asChild variant='default_50_opacity'>
          <Link href='mailto:densheva18072003@gmail.com'>
            <IoMdMail />
            <span>Gmail</span>
          </Link>
        </Button>
        <Button asChild variant='default_50_opacity'>
          <Link href='https://t.me/GineTik0_0' target='_blank'>
            <FaTelegram />
            <span>Telegram</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};
