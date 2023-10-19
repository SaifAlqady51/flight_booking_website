import axios from 'axios';

const data = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: '6YPwYEt5BYOOTZLZ6ZFd8YtXu1ZwiAfF',
    client_secret: 'sPETtWwD1gn1FNai',
});

// this function make a post request to get amadeus token

export async function getAmadeusKey() {
    const response = await axios({
        url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data,
    });

    return `Bearer ${response.data.access_token}`;
}
