# React.js Boilerplate with Tailwind and React Router DOM

This project was bootstrapped with [Create React App PWA](https://create-react-app.dev/docs/making-a-progressive-web-app/).

## Enabling PWA
```javascript
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
```
As the comment states, switching `serviceWorker.unregister()` to `serviceWorker.register()` will opt you in to using the service worker.

You can totally remove Google Workbox libraries from the `package.json` if you don't desire this functionality.

## Available features
There are several readily available libraries, components and functions out of the box. Default scripts are also changed as shown below. In addition, several ready-made components are available to use as is or to customise.

### Added libraries on package.json

```json
{
  "dependencies" : {
    "react-router-dom": "^6.3.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.7",
    "dotenv-cli": "^5.1.0",
    "postcss": "^8.4.14",
    "sass": "^1.52.1",
    "tailwindcss": "^3.0.24"
  },
  "scripts": {
    "build:test": "dotenv -e .env.dev react-scripts build && rm -rf build-test && cp -r build build-test",
    "build:prod": "dotenv -e .env.production react-scripts build",
    "build": "echo \"Please use build:dev or build:prod \" && exit 1"
  }
}
```

### Ready to use components

The `app.js` is working solely as a router. Apart from a several commonly used components in the `Common` and `Pages` folders under `src`, there are some helpers provided to beat commonly rising issues with ReactJS. 

### Access restriction to pages
`PrivateRoute.js` will provide a solution for authentication while routing. You will have to save authentication details somewhere convenient to you and retrieve them on `useAuth()` instead of retrieving from `localStorage` if you prefer. You can find it under `Helpers.js`.

### Dark Mode Switching 
`ThemeContext` is included to function as the dark mode switcher. You can use `ThemeToggle` component to toggle the theme.

### Solving the refreshing problem with .htaccess
To make sure the App will be routed correctly when refreshed, an .htaccess is introduced to redirect the requests to index.html. **This solution will only work with Apache servers**. For other solutions read [this (stackoverflow)](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually) or [this (React Docs)](https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing).

```text
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```


## Learn More
Visit Create React App [README.md](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md) or [Docs](https://create-react-app.dev/docs/getting-started) to learn more.