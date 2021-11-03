https://www.youtube.com/watch?v=oAaS9ix8pes

https://github.com/codingwithjustin/react-electron/blob/main/package.json


yarn add electron-is-dev
yarn add concurrently
yarn add wait-on
yarn add @electron/remote

package.json
```
  },
  "main": "public/main.js",
  "homepage": "./",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "electron:serve": "concurrently -k \"cross-env BROWSER=none yarn start\" \"yarn electron:start\"",
    "electron:build": "",
    "electron:start": "wait-on tcp:3000 && electron ."
  },
```

yarn electron:serve

yarn add bootstrap@next