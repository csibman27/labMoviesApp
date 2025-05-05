import type { Meta, StoryObj } from '@storybook/react';
import ActorDetails from '../components/actorDetails';
import { MemoryRouter } from 'react-router';
import MoviesContextProvider from '../contexts/moviesContext';
import { SampleActor } from './sampleActorData';

const meta: Meta<typeof ActorDetails> = {
  title: 'Actor Details Page/ActorDetails',
  component: ActorDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    actor: SampleActor,
  },
};

Default.storyName = 'Default';






