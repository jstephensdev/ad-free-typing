# Ad Free Typing

This, https://adfreetyping.netlify.app/, is a typing practice app based on my favorite practice typing site https://www.keybr.com/.

## Technology Used

1. TypeScript & React
   1. https://create-react-app.dev/docs/adding-typescript/
   2. npx create-react-app my-app --template typescript
2. Redux with Redux-ToolKit
3. Faker for text generation
4. IonIcons for icons
5. React Bootstrap for progress bar and dropdown
6. localstorage

## Running Locally

1. fork project
2. npm i
3. npm start

### Docker Startup Guide

1. docker build . --no-cache -t adfreetyping
2. docker run --rm -p 3000:3000 adfreetyping

### helpful docker commands

1. docker image list
2. docker ps

## Completed Features

1. Keyboard plus keys light up when key pressed matches keyboard key
2. Calculating and displaying duraction, wpm, acc, and error rate
3. Text generation with faker
4. 6 differet text modes
5. Store stats in localstorage
6. Clear all stats in localstorage
7. client side routing with redux
8. add date and time to rounds
9.  docker file plus start guide
10. ability to sort stats

## Incomplete Features

1. db connection, either mysql or postgresql

## Bugs

1. timer takes a second to catch up, after it is hidden

## Resources

1. key press detection hook

   1. https://betterprogramming.pub/create-a-typing-game-with-react-hooks-usekeypress-and-faker-28bbc7919820

2. timer:

   1. https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks

3. text generation:

   1. https://github.com/faker-js/faker
   2. https://fakerjs.dev/api/

4. icons:

   1. https://www.npmjs.com/package/@reacticons/ionicons

5. state managment:

   1. https://redux-toolkit.js.org/
   2. https://redux.js.org/tutorials/essentials/part-1-overview-concepts
   3. https://redux.js.org/tutorials/essentials/part-2-app-structure
   4. tool behind the scenes that allows for writing mutating logic https://immerjs.github.io/immer/

6. tests:

   1. https://redux.js.org/usage/writing-tests
   2. https://marek-rozmus.medium.com/mocking-window-object-d316050ae7a5

7. routing:

   1. https://read.reduxbook.com/markdown/part2/09-routing.html
   2. https://codesandbox.io/s/4ryppz540
   3. https://jamesknelson.com/even-need-routing-library/
   4. https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
   5. https://developer.mozilla.org/en-US/docs/Web/API/History_API
   6. https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API
   7. https://create-react-app.dev/docs/deployment/#netlify

8. accessibility:

   1. https://reactjs.org/docs/accessibility.html

9. bootstrap

   1. https://react-bootstrap.github.io/getting-started/introduction/
   2. https://create-react-app.dev/docs/adding-bootstrap

10. TypeScript & React

    1. https://blog.logrocket.com/how-use-typescript-react-tutorial-examples/

11. Docker
    1. https://hub.docker.com/search?q=
    2. https://github.com/docker/awesome-compose/blob/master/react-nginx/Dockerfile
    3. https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/
