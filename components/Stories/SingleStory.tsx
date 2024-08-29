import Image from 'next/image';
import { User } from '~/types/types';

type Props = {
  story: User | null;
};

const SingleStory = ({ story }: Props) => {
  if (!story) return null;

  return (
    <button key={story.id} className='flex flex-col items-center'>
      <div className='w-[66px] h-[66px] rounded-full relative flex items-center justify-center bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full'>
        <Image
          src={story.profile_image}
          alt={story.user_name}
          height={60}
          width={60}
          className='rounded-full p-1 bg-white'
          fetchPriority='high'
          priority
        />
      </div>
      <span className='text-xs'>
        {story.user_name.length > 8
          ? `${story.user_name.slice(0, 8)}...`
          : story.user_name}
      </span>
    </button>
  );
};

export default SingleStory;
