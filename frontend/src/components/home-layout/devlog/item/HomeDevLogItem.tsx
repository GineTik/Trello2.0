import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Dayjs } from 'dayjs';
import styles from './HomeDevLogItem.module.scss';

const itemVariants = cva('', {
  variants: {
    status: {
      todo: styles.todo,
      soon: styles.soon,
      done: styles.done,
      bugs: styles.bugs,
    },
  },
  defaultVariants: {
    status: 'todo',
  },
});

type HomeDevLogItemProps = VariantProps<typeof itemVariants> & {
  date?: Dayjs;
  text: string;
};

export const HomeDevLogItem = ({ status, date, text }: HomeDevLogItemProps) => {
  return (
    <div className={cn(styles.item, itemVariants({ status }))}>
      <span className={styles.item__date}>{date?.format('DD.MM.YYYY')}</span>
      {text}
    </div>
  );
};
