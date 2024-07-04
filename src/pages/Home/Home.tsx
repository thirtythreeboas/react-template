import {FC, useEffect} from 'react';
import {Posts} from '@/components/Posts';
import {useAppDispatch} from '@/hooks/hooks';
import {getPosts} from '@/store/template-slice/action-creators';

export const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts(10));
  }, [dispatch]);

  return (
    <div>
      <Posts />
    </div>
  );
};
