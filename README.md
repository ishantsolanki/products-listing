# products-listing
A simple react typescript project with products listing with different currencies

## Steps to run the project

After cloning run `yarn` to install the dependencies

Once finished
```
yarn build && yarn serve
```

This creates a production build of the client and serves it from express app

Fire up the browser and navigate to `http://localhost:3001`

## Things with scope of improvement

- The login functionality is pretty basic and is nowhere close to secure. Please dont use sensitive imformation.
- Also, there is no auth in place to restrict the page `/listing` to be accessed without login.
- The unit tests all pass but some throw a false positive error in the console. I have raised an issue with the testing library regarding the same.

