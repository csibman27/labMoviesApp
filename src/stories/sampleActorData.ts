import { BaseActorProps } from '../types/interfaces';

export const SampleActor: BaseActorProps = {
  id: 101,
  name: 'John Doe',
  profile_path: '/path_to_profile_image.jpg', // Replace with a real path or mock image
  gender: 2,  // 1 for female, 2 for male
  popularity: 100,
  known_for_department: 'Acting',
  biography: 'John Doe is a well-known actor with a career spanning decades.',
  birthday: '1980-01-01',
  awards: 'Best Actor Award 2020',
  imdb_id: 101,
};

export const sampleNoProfile: BaseActorProps = { 
  ...SampleActor, 
  profile_path: undefined 
};
