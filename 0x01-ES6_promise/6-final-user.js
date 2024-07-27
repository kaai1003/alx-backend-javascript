import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise
    .allSettled([signUp, photo])
    .then((results) => (
      results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
      }))
    ));
}
