import { TabsTrigger } from '@/components/ui/tabs/Tabs';
import { cn } from '@/lib/utils';
import styles from './TaskViewsItem.module.scss';

type TaskViewsItemProps = React.ComponentPropsWithoutRef<typeof TabsTrigger> & {
  isDefault?: boolean;
};

const TaskViewsItem = ({ value, className, ...props }: TaskViewsItemProps) => {
  return (
    <TabsTrigger
      value={value}
      className={cn(styles.item, className)}
      {...props}
    />
  );
};

export default TaskViewsItem;
