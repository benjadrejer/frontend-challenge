## Features
This app fetches the mockData and renders a grid of listings with accompanying images & descriptions. The header contains a count of currently shown listings, as well as a range slider for filtering on listing prices. 
The component approach here has been to delegate responsibility to a number of different components, which are then all composed inside the App component. The idea here is that the App component is the only 'non-reusable' component in the application. Grid takes children and renders them inside a grid, Listings has a link and image, and otherwise renders children as the description - I made 2 separate Description components to illustrate this, one showing the information in a text-based approach, while the icon takes a more Icon-based approach, they can be switched out where the Listing would be used.
Filter can do any kind of number-range-based filtering, and the Header takes children and spaces them out inside the, well, header (admittedly the Header is a last-minute thing I added).

## Updating
As this is a quite small 'exercise' app, I felt it quite safe to simple run an audit and fix as many vulnerabilities as possible, with a fair amount of confidence that any breaking changes could be fixed.
Turns out the only real problem was eslint - I decided to remove the explicit installation and instead let create-react-app do it's thing (getting a newer version).

## Packages
1. Axios for fetching the data - I'd argue this is the de-facto way to interact with endpoints these days. Also allows for super easy mocking in tests with Moxios. Fetch is the alternative, but requires polyfilling for IE, needs to convert from JSON and is not as easily mockable.
2. PropTypes is just a nice 'TypeScript light' for React that I appreciate and - while we do not use PropTypes at Unisport - I consider it best-practice.
3. lazysizes for lazy-loading of the images and having a default while they load. The images in the mockData are quite heavy, which makes this even more important (although, yes, there are only 15).
4. rc-slider for the price-filtering. It's a very popular React range-slider and has a fairly small footprint - and works quite well!
5. Enzyme & Adapter for testing React components. I don't have a strong preference between Enzyme or a setup with React-Testing-Library, but from my experience Enzyme is generally a bit faster to do tests with.

## Structure
I don't have a strong favorite between having a separate __tests__ directory, or adding the component test file in the folder with each component. I went with the separate directory in this case, consider it my weak preference.
CSS I do like to place with the component to which they belong, and I went with a fairly simple SCSS structure, a somewhat 'manual' isolation approach, nesting all component-relevant CSS inside the className of the component root element. Do note that I am actually more of a fan of CSS modules (see considerations below), but this approach is what I am most used to and what we use at Unisport.
Apart from that, for this small project, having a single folder for utilities and custom hooks seemed sensible, as well a globals like SCSS variables. 
Svgs have been converted to React Components and are inside components/Svgs. I have nothing against using Svgs inside the CSS, but having them as components do have some advantages in terms of conditional rendering and on-the-fly changes.

## Tests
Admittedly the tests were the last part of the challenge I got done. I generally like the idea of tests, but I also am of the opinion that a lot of unit tests are indeed unnecessary.
As this is a coding challenge, I added quite a few unit tests, anyway, despite them not really being needed.
The tests for the App are essentially Integration tests, as the app doesn't do anything without the other components & hooks.

## Considerations
I had 2 main considerations for this that I ultimately decided against, from the simple fact that I don't consider myself proficient enough in either of these things that it makes sense to 'showcase':
1. Adding Typescript to the app. I absolutely love the idea of Typescript as it helps enforce the idea of reusability through interfaces, type declarations and generics. However, we don't use Typescript at Unisport, so my extent of knowledge of Typescript comes from home.
2. CSS Modules (coupled with classNames npm package): This allows for strong isolation of components on the styling-level, and coupled with classNames package can create some really, truly reusable components that can easily be expanded upon. But again, it's not something I have a firm grasp of just yet, so I decided against going that route here.

## Compatibility
Despite adding IE 11 to the browserslist, it seems the app does not work in IE11. Having tried to just render a simple "Hello World" component and nothing else, and seeing the same errors, I can only assume that Create React App does not have the necessary polyfills. I don't want to spend any further time on this, but just be aware it is incompatible with IE11 at the moment.

## If I kept working on this ...
I decided to call it quits around the 6-hour mark, as I realize this is just a coding challenge and not actual production code. So this are the 'next steps' I did not get to:
1. Making the header/filter sticky & disappearing - I like having the full screen space when scrolling down, but then getting the header back when scrolling up again, so the user doesn't have to return to the top to re-filter.
2. BurgerMenu for mobile. Obviously the header/filter as it is right now is quite basic, and looks horrendous on mobile sizes. There would need to be a separate header for mobiles, most likely using the well-known BurgerMenu approach.
3. Improving styling on the range slider. Right now it's just using the default rc-slider styling, which certainly works, but could be better.
4. If the Properties request fails, the App will simply show the error message. This should of course be something more elaborate in a production application, perhaps providing a list of alternatives or popular choices.