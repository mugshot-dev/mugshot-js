# mugshot-js

The `mugshot-js` library provides a JavaScript/TypeScript SDK for interfacing with the [Mugshot.dev](https://mugshot.dev) API, allowing easy integration of face recognition capabilities into your web applications.

## Features

- Add faces to Mugshot.dev for recognition.
- Search for faces using uploaded images.
- Delete faces from Mugshot.dev.

## Installation

You can install `mugshot-js` using npm or yarn:

```bash
npm install mugshot-js
```

or

```bash
yarn add mugshot-js
```

## Usage

### Using the library in browser

```javascript
import { MugshotClient } from "mugshot-js";

const client = new MugshotClient("YOUR_API_KEY");

document.getElementById('fileInput').addEventListener('change', async function(event) {
    const file = event.target.files[0];
    const metadata = { name: "John Doe" };

    try {
        const response = await client.addFace(file, metadata);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
});
```

### Using the library in Edge Environment

```javascript
import { MugshotClient } from "mugshot-js";

const client = new MugshotClient("YOUR_API_KEY");

const payload = await request.formData();
const file = payload.get("image");
const metadata = { name: "John Doe" };

try {
    const response = await client.addFace(file, metadata);
    console.log(response);
} catch (error) {
    console.error(error);
}
```

### Using the library with NodeJS


```javascript
import { MugshotClient } from "mugshot-js";

const client = new MugshotClient("YOUR_API_KEY");

const payload = await request.formData();
const file = fs.openAsBlob("person-image.jpg");
const metadata = { name: "John Doe" };

try {
    const response = await client.addFace(file, metadata);
    console.log(response);
} catch (error) {
    console.error(error);
}
```
