import { PropsWithChildren } from 'react';
import styles from './SettingsBlock.module.scss';

type SettingsBlockProps = PropsWithChildren<any>;

export const SettingsBlock = ({ children }: SettingsBlockProps) => {
  return <div className={styles.block}>{children}</div>;
};
