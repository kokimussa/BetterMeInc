// https://davidwalsh.name/fetch for reference
const headers = new Headers();

// Add some headers
headers.append('Content-Type', 'text/plain');

// Check, get, and set header values
headers.has('Content-Type');
headers.get('Content-Type');
headers.set('Content-Type', 'application/json');

const request = (url) => {
    // const fullURL = `${apiRoot}${url}`;
    return new Request(url, {
        headers,
    });
};

export default {
    get: async (url) => {
        const response = await fetch(request(url));
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }

        return body;
    },
};
