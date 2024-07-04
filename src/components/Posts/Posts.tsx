import {FC} from 'react';
import {useAppSelector} from '@/hooks/hooks';
import s from './Posts.module.scss';

const Posts: FC = () => {
  const {posts} = useAppSelector(({TEMPLATE}) => TEMPLATE);

  return (
    <div className={s.posts}>
      {posts &&
        posts.map((post) => (
          <div className={s.post} key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export {Posts};
