## Updating
As this is a quite small 'exercise' app, I felt it quite safe to simple run an audit and fix as many vulnerabilities as possible, with a fair amount of confidence that any breaking changes could be fixed.
Turns out the only real problem was eslint - I decided to remove the explicit installation and instead let create-react-app do it's thing (getting a newer version).

## Packages
1. Axios for fetching the data - I'd argue this is the de-facto way to interact with endpoints these days. Also allows for super easy mocking in tests with Moxios. Fetch is the alternative, but requires polyfilling for IE, needs to convert from JSON and is not as easily mockable.
2. PropTypes is just a nice 'TypeScript light' for React that I appreciate and - while we do not use PropTypes at Unisport - I consider it best-practice.

## Structure
I don't have a strong favorite between having a separate __tests__ directory, or adding the component test file in the folder with each component. I went with the separate directory in this case, consider it my weak preference.
CSS I do like to place with the component to which they belong, and I went with a fairly simple SCSS structure, a somewhat 'manual' isolation approach, nesting all component-relevant CSS inside the className of the component root element. Do note that I am actually more of a fan of CSS modules (see considerations below), but this approach is what I am most used to and what we use at Unisport.
Apart from that, for this small project, having a single folder for utilities and custom hooks seemed sensible.

## Considerations
I had 2 main considerations for this that I ultimately decided against, from the simple fact that I don't consider myself proficient enough in either of these things that it makes sense to 'showcase':
1. Adding Typescript to the app. I absolutely love the idea of Typescript as it helps enforce the idea of reusability through interfaces, type declarations and generics. However, we don't use Typescript at Unisport, so my extent of knowledge of Typescript comes from home.
2. CSS Modules (coupled with classNames npm package): This allows for strong isolation of components on the styling-level, and coupled with classNames package can create some really, truly reusable components that can easily be expanded upon. But again, it's not something I have a firm grasp of just yet, so I decided against going that route here.