import { User } from '~/types/types';
import SingleStory from './SingleStory';
import { useState } from 'react';
import StoriesView from '../StoriesView/StoriesView';

type Props = {
  stories: User[];
};

const StoryList = ({ stories }: Props) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number | null>(
    null
  );
  const [currentSelectedStory, setCurrentSelectedStory] = useState<User | null>(
    null
  );

  const handleSelectedStories = (index: number) => {
    setCurrentStoryIndex(index);
    setCurrentSelectedStory(stories[index]);
  };

  const handleNextStory = () => {
    if (currentStoryIndex !== null && currentStoryIndex < stories.length - 1) {
      const nextIndex = currentStoryIndex + 1;
      setCurrentStoryIndex(nextIndex);
      setCurrentSelectedStory(stories[nextIndex]);
    } else {
      // Close the story view when the last story is finished
      setCurrentStoryIndex(null);
      setCurrentSelectedStory(null);
    }
  };

  const handlePrevStory = () => {
    if (currentStoryIndex !== null && currentStoryIndex > 0) {
      const prevIndex = currentStoryIndex - 1;
      setCurrentStoryIndex(prevIndex);
      setCurrentSelectedStory(stories[prevIndex]);
    } else {
      // Close the story view when the last story is finished
      setCurrentStoryIndex(null);
      setCurrentSelectedStory(null);
    }
  };

  return (
    <section>
      <div className='flex gap-4 overflow-x-auto p-2 hide-scrollbar border-b-[1px]'>
        {stories.map((story, index) => (
          <SingleStory
            key={story.id}
            story={story}
            onClick={() => handleSelectedStories(index)}
          />
        ))}
      </div>

      {currentSelectedStory && (
        <StoriesView
          story={currentSelectedStory}
          onClose={() => {
            setCurrentStoryIndex(null);
            setCurrentSelectedStory(null);
          }}
          onNext={handleNextStory}
          onPrev={handlePrevStory}
        />
      )}
    </section>
  );
};

export default StoryList;
