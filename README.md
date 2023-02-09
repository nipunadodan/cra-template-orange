# React.js Boilerplate with Tailwind and React Router DOM

This project is bootstrapped with [Create React App PWA](https://create-react-app.dev/docs/making-a-progressive-web-app/).

## Setup
### Use npx to create the React App

```shell
npx create-react-app <project_name> --template cra-template-orange
```

### Use the template locally
1. Download or Clone the [repository](https://github.com/nipunadodan/cra-template-orange).
2. Run, 
```shell
npx create-react-app <project-name> --template file:path/to/your/template/cra-template-orange
```

### Edit the template or adding packages
1. [Template files](#folder-structure) can be found in `template` folder to add/edit/remove.
2. To add/edit/remove packages edit the `template.json` file.

## Available features
There are several readily available libraries, components and functions out of the box. Default scripts are also changed as shown below. In addition, several ready-made components are available to use as is or to customise.

### Added libraries through package.json

```json
{
  "dependencies" : {
    "react-router-dom": "^6.3.0"
  },
  "devDependencies": {
    "autoprefixer": ">=10",
    "dotenv-cli": ">=6",
    "sass": ">=1",
    "tailwindcss": ">=3"
  },
  "scripts": {
    "build:test": "dotenv -e .env.dev react-scripts build && rm -rf build-test && cp -r build build-test",
    "build:prod": "dotenv -e .env.production react-scripts build",
    "build": "echo \"Please use build:dev or build:prod \" && exit 1"
  }
}
```

### Template Folder Structure
Featured files only,
```bash
├── public
│     ├── .htaccess # This solves the refreshing problem for routes (Described in a later section)
│     └── index.html
├── src
│     ├── App.js # Acts as the router
│     ├── components
│     │     ├── common
│     │     │     ├── index.js  # Indexes the sibling components so it will be able to import all in one line)
│     │     │     ├── Modal.js
│     │     │     └── ThemeToggle.js
│     │     ├── pages
│     │     │     ├── home
│     │     │     │     └── Home.js
│     │     │     ├── index.js
│     │     │     ├── login
│     │     │     │     ├── LoginForm.js
│     │     │     │     └── Login.js
│     │     │     └── NotFound.js # The 404 file
│     │     └── template
│     │     │     ├── Footer.js
│     │     │     ├── Header.js
│     │     │     └── index.js
│     ├── contexts
│     │     ├── index.js
│     │     ├── SiteSettingsContext.js
│     │     └── ThemeContext.js
│     ├── index.css
│     ├── index.js # The main index file where the #root resides
│     └── use-cases
│           ├── cache
│           │     └── get-cached-fetch.js
│           ├── create-markup.js
│           ├── index.js
│           ├── is-logged-in.js
│           ├── iso-local-date.js
│           ├── private-route.js
│           ├── relative-day.js
│           └── use-auth.js
└── tailwind.config.js
```

## Usage
### Enabling PWA
```javascript
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
```
As the comment states, switching `serviceWorker.unregister()` to `serviceWorker.register()` will opt you in to using the service worker.

You can totally remove Google Workbox libraries from the `package.json` if you don't desire this functionality.

### Ready to use components

The `app.js` is working solely as a router. Apart from a several commonly used components in the `Common` and `Pages` folders under `src`, there are some helpers provided to beat commonly rising issues with ReactJS.

### Access restriction to pages
`PrivateRoute.js` will provide a solution for authentication while routing. You will have to save authentication details somewhere convenient to you and retrieve them on `useAuth()` instead of retrieving from `localStorage` if you prefer. You can find it under `Helpers.js`.

### Dark Mode Switching
`ThemeContext` is included to function as the dark mode switcher. You can use `ThemeToggle` component to toggle the theme. **Remember** to add `ThemeProvider` to `App.js` and set `darkMode: 'class'` in `tailwind.config.js`

### Solving the refreshing problem with .htaccess
In order to make sure the App will be routed correctly when refreshed, an .htaccess is introduced to redirect the requests to index.html. **This solution will only work with Apache servers**. For other solutions read, [this (StackOverflow)](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually) or [this (React Docs)](https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing).

```text
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```


## Learn More
Visit Create React App [README.md](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md) or [Docs](https://create-react-app.dev/docs/getting-started) to learn more.