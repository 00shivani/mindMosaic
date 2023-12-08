import {
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  ADD_USER,
  REMOVE_USER,
  UPDATE_USER,
  ADD_FRIEND,
  REMOVE_FRIEND,
} from './actions';

// the initial state of our app will be an empty array of posts
const newState = {
  posts: [],
  comments: [],
  users: [],
  friends: [],
};
// We will also need to add the following properties to the initial state object:

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
    case UPDATE_POST:
      return {
        ...state,
        posts: [...action.posts],
      };
    case ADD_POST:
      return {
        ...state,
        cartOpen: true,
        posts: [...state.posts, action.posts],
      };
    // Returns a copy of state, sets the cartOpen to true and maps through the items in the cart.
    // If the item's `id` matches the `id` that was provided in the action.payload, we update the purchase quantity.
    case REMOVE_POST:
      let newState = state.posts.filter((post) => {
        return post._id !== action._id;
      });
      return {
        ...state,
        postsOpen: newState.length > 0,
        posts: newState,
      };
    // First we iterate through each item in the cart and check to see if the `product._id` matches the `action._id`
    // If so, we remove it from our cart and set the updated state to a variable called `newState`
    case ADD_COMMENT:
      return {
        ...state,
        commentsOpen: true,
        comments: [...state.comments, action.comments],
      };
      // Then we return a copy of state and check to see if the cart is empty.
      // If not, we set the cartOpen status to  `true`. Then we return an updated cart array set to the value of `newState`.
    case REMOVE_COMMENT:
        let commentState = state.comments.filter((comment) => {
          return comment._id !== action._id;
        });
        return {
          ...state,
          commentsOpen: commentState.length > 0,
          comments: commentState,
        };
    case UPDATE_COMMENT:
      return {
        ...state,
        commentsOpen: true,
        comments: [...state.comments, action.comments],
      };
    case ADD_USER:
        return {
          ...state,
          usersOpen: true,
          users: [...state.users, action.users],
        };
    case REMOVE_USER:
      let newState = state.users.filter((users) => {
        return users._id !== action._id;
      });
      return {
        ...state,
        usersOpen: newState.length > 0,
        users: newState,
      };
    case UPDATE_USER:
      return {
        ...state,
        usersOpen: true,
        users: [...state.users, action.users],
      };
    case ADD_FRIEND:
      return {
        ...state,
        postsOpen: true,
        posts: [...state.posts, action.posts],
      };
    case REMOVE_FRIEND:
      let newState = state.posts.filter((posts) => {
        return posts._id !== action._id;
      });
      return {
        ...state,
        postsOpen: newState.length > 0,
        posts: newState,
      };
    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};
