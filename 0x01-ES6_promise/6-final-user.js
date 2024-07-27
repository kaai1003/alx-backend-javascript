import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(fileName, lastName);
  const photo = uploadPhoto(fileName);

  const results = await Promise.allSettled([signUp, photo]);

  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason
  }));
}
