import {FC, ReactNode} from 'react';
import s from './Container.module.scss';

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({children}) => {
  return <div className={s.container}>{children}</div>;
};
