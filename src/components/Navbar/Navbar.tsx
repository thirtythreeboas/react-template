import {FC} from 'react';
import s from './Navbar.module.scss';

export const Navbar: FC = () => {
  return (
    <div className={s.navbar}>
      <ul>
        <li>home</li>
        <li>posts</li>
        <li>about</li>
      </ul>
    </div>
  );
};
