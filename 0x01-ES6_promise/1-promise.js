export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: success,
      });
    } else {
      reject(new Error());
    }
  });
}
