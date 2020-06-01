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

### To run the unit tests
```
yarn test
```

## Things with scope of improvement

- The login functionality is pretty basic and is nowhere close to secure. Please dont use sensitive imformation.
- Also, there is no auth in place to restrict the page `/listing` to be accessed without login.
- The unit tests all pass but some throw a false positive error in the console. I have raised an issue with the testing library regarding the same.
- I have used tailwind css as an opportunity to learn and try it out. However, I found later on that it might have been a bad move the way I used it.
  I prefer semantic naming of classes over long list of tailwind classes. If I had more time, I would refactor them out of components into a `.styles.ts`
  file like below
  ```diff
  /* --- ProductCard.styles.ts --- */
  export default {
    base: 'p-4 border-2 rounded-md hover:shadow flex flex-col hover:visible product-card',
    ...
  }

  /* --- ProductCard.tsx --- */
  return (
    <>
      <div className={styles.base}>
        {...}
      </div>
    </>
  )
  ```
