import { TypeTask } from '@/types/task.types';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/uk';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);

class TaskGroups {
  today: TypeTaskGroupConfig = {
    label: 'Today',
    deadline: dayjs().startOf('day'),
    filterTasks: tasks =>
      tasks?.filter(item =>
        dayjs(item.deadlineDate).isSame(this.today.deadline, 'day'),
      ),
  };
  tomorrow: TypeTaskGroupConfig = {
    label: 'Tomorrow',
    deadline: dayjs().add(1, 'day').startOf('day'),
    filterTasks: tasks =>
      tasks?.filter(item =>
        dayjs(item.deadlineDate).isSame(this.tomorrow.deadline, 'day'),
      ),
  };
  'within-week': TypeTaskGroupConfig = {
    label: 'Within Week',
    deadline: dayjs().add(1, 'week').startOf('day'),
    filterTasks: tasks =>
      tasks?.filter(
        item =>
          dayjs(item.deadlineDate).isAfter(this.tomorrow.deadline, 'day') &&
          dayjs(item.deadlineDate).isBefore(
            this['within-week'].deadline.add(1, 'day').startOf('day'),
            'milliseconds',
          ),
      ),
  };
  'within-month': TypeTaskGroupConfig = {
    label: 'Within Month',
    deadline: dayjs().add(1, 'month').startOf('day'),
    filterTasks: tasks =>
      tasks?.filter(
        item =>
          dayjs(item.deadlineDate).isAfter(
            this['within-week'].deadline,
            'day',
          ) &&
          dayjs(item.deadlineDate).isBefore(
            this['within-month'].deadline.add(1, 'day').startOf('day'),
            'milliseconds',
          ),
      ),
  };
  uncompleted: TypeTaskGroupConfig = {
    label: 'Uncompleted',
    deadline: dayjs().subtract(1, 'day').startOf('day'),
    filterTasks: tasks =>
      tasks?.filter(
        item =>
          !item.isCompleted &&
          dayjs(item.deadlineDate).isBefore(this.today.deadline, 'day'),
      ),
    noAddTaskButton: true,
  };
  history: TypeTaskGroupConfig = {
    label: 'History',
    deadline: dayjs().subtract(1, 'day').startOf('day'),
    filterTasks: tasks =>
      tasks?.filter(
        item =>
          item.isCompleted &&
          dayjs(item.deadlineDate).isBefore(this.today.deadline, 'day'),
      ),
    noAddTaskButton: true,
  };
}

export const TASK_GROUPS = new TaskGroups();

export const TASK_GROUPS_ARRAY = Object.keys(TASK_GROUPS).map(id => ({
  id,
  ...TASK_GROUPS[id as keyof TaskGroups],
}));

export type TypeTaskGroupConfig = {
  label: string;
  deadline: Dayjs;
  filterTasks: (tasks?: TypeTask[]) => TypeTask[] | undefined;
  noAddTaskButton?: boolean;
};
