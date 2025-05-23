import type { Meta, StoryObj } from '@storybook/react';
import ActorCard from '../components/actorCard';
import { MemoryRouter } from 'react-router';
import MoviesContextProvider from '../contexts/moviesContext';
import { action } from '@storybook/addon-actions';
import { SampleActor, sampleNoProfile } from './sampleActorData';

const meta = {
  title: 'Home Page/ActorCard',
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
} satisfies Meta<typeof ActorCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    actor: SampleActor,
    action: (actor) => {
      action('Add to favourites')(actor.name);
      return <div style={{ paddingLeft: 10 }}>⭐</div>;
    },
  },
};
Basic.storyName = 'Default';

export const Exceptional: Story = {
  args: {
    actor: sampleNoProfile,
    action: (actor) => {
      action('Add to favourites')(actor.name);
      return <div style={{ paddingLeft: 10 }}>⭐</div>;
    },
  },
};
Exceptional.storyName = 'Exception';
