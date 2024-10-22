export type TypeAuthForm = {
  email: string;
  password: string;
};

export type TypeAuthResponse = {
  user: TypeUser;
  accessToken: string;
};

export type TypeUser = {
  id: number;
  name?: string;
  email: string;

  //pomodoro timer settings
  workInterval?: number;
  breakInterval?: number;
  intervalsCount?: number;

  //page styles settings
  smallSize?: boolean;
};
