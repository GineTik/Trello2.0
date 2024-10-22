class Routes {
  HOME = '/';

  // DASHBOARD
  DASHBOARD = '/dashboard';
  TASKS = `${this.DASHBOARD}/tasks`;
  POMODORO_TIMER = `${this.DASHBOARD}/pomodoro-timer`;
  TIME_BLOCKS = `${this.DASHBOARD}/time-blocks`;
  SETTINGS = `${this.DASHBOARD}/settings`;

  // AUTH
  AUTH = '/auth';
}

export const ROUTES = new Routes();
