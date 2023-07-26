// Udenr modification --
// Replace these with your actual Twitter API credentials
const consumerKey = 'YOUR_CONSUMER_KEY';
const consumerSecret = 'YOUR_CONSUMER_SECRET';
const accessToken = 'YOUR_ACCESS_TOKEN';
const accessTokenSecret = 'YOUR_ACCESS_TOKEN_SECRET';

const baseUrl = 'https://api.twitter.com/1.1';

async function getTimeline(screenName: string): Promise<any> {
  const url = `${baseUrl}/statuses/user_timeline.json?screen_name=${screenName}&count=10`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `OAuth oauth_consumer_key="${consumerKey}", oauth_token="${accessToken}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Math.floor(
        Date.now() / 1000
      )}", oauth_nonce="${generateNonce()}", oauth_version="1.0", oauth_signature="${generateSignature(
        url
      )}"`,
    },
  });

  return response.data;
}

function generateNonce(): string {
  // You can implement your own nonce generation logic here
  return 'A_RANDOM_NONCE';
}

function generateSignature(url: string): string {
  // You need to implement the logic to generate the OAuth signature
  // using the consumerSecret and accessTokenSecret along with the request details.
  // The OAuth 1.0a spec provides details on how to calculate the signature.
  // Please refer to Twitter's OAuth documentation for the specific implementation details.
  return 'YOUR_GENERATED_OAUTH_SIGNATURE';
}

// Example usage:
getTimeline('twitter_user_screen_name')
  .then((timeline) => {
    console.log(timeline);
  })
  .catch((error) => {
    console.error('Error fetching timeline:', error);
  });
