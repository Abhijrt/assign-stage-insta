import { User } from '~/types/types';
import SingleStory from './SingleStory';

type Props = {
  stories: User[];
};

const StoryList = ({ stories }: Props) => {
  return (
    <section>
      <div className='flex gap-4 overflow-x-auto p-2 hide-scrollbar border-b-[1px]'>
        {stories.map((story) => (
          <SingleStory key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
};

export default StoryList;
