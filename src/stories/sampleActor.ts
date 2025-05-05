import { ActorDetailsProps } from '../types/interfaces';

export const SampleActor: ActorDetailsProps = {
  id: 101,
  name: 'John Doe',
  profile_path: '/path_to_profile_image.jpg',
  gender: 2,
  popularity: 100,
  known_for_department: 'Acting',
  biography: 'John Doe is a well-known actor with a career spanning decades. He has been a part of several blockbuster movies and is known for his versatile acting skills.',
  birthday: '1980-01-01',
  awards: 'Best Actor Award 2020',
  imdb_id: 1234567,
  genres: [
    { id: 1, title: 'Action' },
    { id: 2, title: 'Drama' },
  ],
  place_of_birth: undefined
};
