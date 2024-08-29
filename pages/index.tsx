import { GetServerSideProps } from 'next';
import { fetchStories } from '~/api';
import StoryList from '~/components/Stories/StoryList';
import { User } from '~/types/types';

type Props = {
  stories: User[];
};

const Home = (props: Props) => {
  return <StoryList stories={props.stories} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const stories = await fetchStories();

  return {
    props: {
      stories,
    },
  };
};
