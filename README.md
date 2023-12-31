# Github Users task

The goal of this project was to create application which integrates with github.com API and allows user to search for up to 5 users with a username similar to the value entered in text input and then on click, display
repositories (no limit on displayed repositories amount) for selected GitHub user.

## Running project locally

Project is build with [Create React App](https://create-react-app.dev/), to run it locally it is enough to run

1. Install dependencies run: `npm install`
2. Run the project by running: `npm start`

## Hosting

Project is deployed to AWS S3 service as static site. You can check it out at: [http://simple-system-task.s3-website.eu-central-1.amazonaws.com](http://simple-system-task.s3-website.eu-central-1.amazonaws.com)

Reason behind this choice is developers previous experience with provider and whish to demonstrate knowledge when it comes to AWS services as well as CI/CD

## CI/CD

Choice of CI/CD platform is GitHubs [GitHub Actions](https://docs.github.com/en/actions). They offer nice documentation and straight forward way of configuring workflows while providing ability to keep the code close to the pipeline.

## Styling

To style application in this project, we are using [Tailwind](https://tailwindcss.com/) as CSS utility. Tailwind provides nice way to configure basics blocks of style guide like colors, spacings, font sizes, breaking points... Also it speeds up development process by bringing bootstrap like feeling when implementing styles.

## Application state management

As application state management library for this app it is used [Zustand](https://github.com/pmndrs/zustand). Way smaller in size than Redux but jet simple and powerful and plays nicely with TypeScript

## Testing

With increasing applications complexity, complexity of tests should increase by bringing parts of testing pyramid to the workflow. When it comes to the testing react components mine preferred way to test them would be snapshot/visual testing. It gives us ability te test component as a unit together with implemented styles while lowering down styling bugs. For automating visual tests and storing snapshots we are using [Chromatic](https://www.chromatic.com/). Together with [Storybook](https://storybook.js.org/) gives us a nice way of building and testing components in isolation.

## Octokit

[Octokit](https://github.com/octokit) is SDK for the GitHub API. It offers response typings and abstracts requests functionalities.

# Future improvement plans

Application is fairly simple therefor it is missing some elements of large application like:

## Memoizing "selectors"

[Reselect](https://www.npmjs.com/package/reselect) which gives us opportunity to make memoised state "selectors".

## More robust testing

1. Unit testing utility functions with [Jest](https://jestjs.io/) for example.
2. End 2 End testing with [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/)
3. Components interaction testing with [Storybook Play Function](https://storybook.js.org/docs/react/writing-stories/play-function)

# And many more ideas we can discuss more in person like: Form libraries, API invalidation, AB testing, Analytics...
