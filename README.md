# Ad Free Typing

To avoid viewing ads at my favorite practice typing site https://www.keybr.com/, and to better understand and learn the tech used, I created this ad free typing pratice app. It is a work inprogress with a list of features complete, and features I am working on or plan to add below. Also, a know bugs list

## link: https://wonderful-crostata-77f500.netlify.app/

## Technology Used

1. TypeScript
2. React
3. Redux with Redux-ToolKit
4. Faker for text generation
5. IonIcons for icons in header
6. React Bootstrap for progress bar
7. localstorage

## Local Startup Guide

1. fork project

2. npm i

3. npm start

## Complete Features

1. keys light up when key pressed matchs keyboard key
2. keyboard display
3. stats calculated and displaying
4. stats reset to starting state
5. text back to initial mode state
6. text generation
7. 4 differet text modes
8. store and limit to 12 stats in localstorage
9. clear all stats in localstorage

## Incomplete Features

1. docker file plus start guide
2. idvidually delete stat round rows
3. options display improvements
4. more options, like non lorem ipsum sentences
5. a better transition experience when a round is complete

## Bugs: add tests for and fix

1. recent stats not ordering correctly
2. sometimes a character following the `f` is highlight along with the it, it also displays as moving over as an outgoing char

## Helpful Resources

1. key press detection hook

https://betterprogramming.pub/create-a-typing-game-with-react-hooks-usekeypress-and-faker-28bbc7919820

2. timer:

https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks

3. text generation:

https://github.com/faker-js/faker
https://fakerjs.dev/api/

4. icons:

https://www.npmjs.com/package/@reacticons/ionicons

5. state managment:

https://redux-toolkit.js.org/
https://redux.js.org/tutorials/essentials/part-1-overview-concepts
https://redux.js.org/tutorials/essentials/part-2-app-structure
tool behind the scenes that allows for writing mutating logic https://immerjs.github.io/immer/

6. tests:

https://redux.js.org/usage/writing-tests

7. routing:

https://read.reduxbook.com/markdown/part2/09-routing.html
https://codesandbox.io/s/4ryppz540

8. accessibility:

https://reactjs.org/docs/accessibility.html

9. bootstrap
   https://react-bootstrap.github.io/getting-started/introduction/
