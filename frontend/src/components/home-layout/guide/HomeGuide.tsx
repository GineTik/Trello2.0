import AuthImage from '@/../public/features/auth.png';
import TasksImage from '@/../public/features/tasks.png';
import { UnderDevelopmentBadge } from '@/components/ui/badge/UnderDevelopmentBadge';
import Heading from '@/components/ui/heading/Heading';
import { Paragraph } from '@/components/ui/paragraph/Paragraph';
import { ArrowLeftBottomSvg } from '@/components/ui/svg/ArrowLeftBottomSvg';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import styles from './HomeGuide.module.scss';

export const HomeGuide = () => {
  return (
    <div>
      <Heading tag='h2'>Features</Heading>
      <div className={styles.steps}>
        <div className={styles.steps__item}>
          <div className={styles.step__content}>
            <Heading tag='h3'>Authentication</Heading>
            <Paragraph>
              Provide personalization and safety of data (tasks, statistics,
              etc)
            </Paragraph>
            <ArrowLeftBottomSvg className={styles.step__arrow} />
          </div>
          <Image
            src={AuthImage.src}
            width={200}
            height={200}
            alt='auth'
            className={cn(styles.step__image, 'rotate-12')}
          />
        </div>
        <div className={styles.steps__item}>
          <div className={styles.step__content}>
            <Heading tag='h3'>Dashboard&Statistics</Heading>
            <Paragraph>
              The Dashboard page displays statistics and navigation through
              other sections of the site.
            </Paragraph>
            <ArrowLeftBottomSvg className={styles.step__arrow} />
          </div>
          <div className={cn(styles.step__image, '-rotate-6')}>
            <UnderDevelopmentBadge />
          </div>
        </div>
        <div className={styles.steps__item}>
          <div className={styles.step__content}>
            <Heading tag='h3'>Tasks</Heading>
            <Paragraph>
              This page contains your tasks for complete your ideas.
            </Paragraph>
            <ArrowLeftBottomSvg className={styles.step__arrow} />
          </div>
          <Image
            src={TasksImage.src}
            width={200}
            height={200}
            alt='tasks'
            className={cn(styles.step__image, 'rotate-[8deg]')}
          />
        </div>
        <div className={styles.steps__item}>
          <div className={styles.step__content}>
            <Heading tag='h3'>Time blocks</Heading>
            <Paragraph>
              Manage your daily time to increase your performance and comfort
              lifework balance.
            </Paragraph>
            <ArrowLeftBottomSvg className={styles.step__arrow} />
          </div>
          <div className={cn(styles.step__image, '-rotate-[15deg]')}>
            <UnderDevelopmentBadge />
          </div>
        </div>
        <div className={styles.steps__item}>
          <div className={styles.step__content}>
            <Heading tag='h3'>Pomodoro timer</Heading>
            <Paragraph>
              Concentrate your attention and complete your tasks without burning
              out.
            </Paragraph>
          </div>
          <div className={cn(styles.step__image, 'rotate-[10deg]')}>
            <UnderDevelopmentBadge />
          </div>
        </div>
      </div>
    </div>
  );
};
