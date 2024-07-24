import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((result) => {
      console.log(`${result[0].body} ${result[1].lastName} ${result[1].firstName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
