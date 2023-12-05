import { reducer } from '../utils/reducers';
import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  ADD_USER,
  REMOVE_USER,
  UPDATE_USER,
  ADD_FRIEND,
  REMOVE_FRIEND,
} from '../utils/actions';

const initialState = {
  posts: [],
  comments: [],
  commentOpen: false,
  users: [],
  friends: [],
  user: {},
  loggedIn: false,
};

test('ADD_POST', () => {
  let newState = reducer(initialState, {
    type: ADD_POST,
    posts: { _id: '1' }
  });

  expect(newState.posts.length).toBe(1);
  expect(initialState.posts.length).toBe(0);
});
test('REMOVE_POST', () => {
  let currentState = {
    posts: [{ _id: '1' }, { _id: '2' }]
  };

  let newState = reducer(currentState, {
    type: REMOVE_POST,
    _id: '1'
  });

  expect(newState.posts.length).toBe(1);
  expect(newState.posts[0]._id).toBe('2');
  expect(initialState.posts.length).toBe(0);
});
test ('UPDATE_POST', () => {
  let currentState = {
    posts: [{ _id: '1', title: 'Post 1' }, { _id: '2', title: 'Post 2' }]
  };

  let newState = reducer(currentState, {
    type: UPDATE_POST,
    _id: '1',
    title: 'Updated Post 1'
  });

  expect(newState.posts.length).toBe(2);
  expect(newState.posts[0].title).toBe('Updated Post 1');
  expect(newState.posts[1].title).toBe('Post 2');
  expect(initialState.posts.length).toBe(0);
});
test('ADD_COMMENT', () => {
  let newState = reducer(initialState, {
    type: ADD_COMMENT,
    comment: { _id: '1' }
  });

  expect(newState.comments.length).toBe(1);
  expect(initialState.comments.length).toBe(0);
});


test('REMOVE_COMMENT', () => {
  let currentState = {
    comments: [{ _id: '1' }, { _id: '2' }]
  };

  let newState = reducer(currentState, {
    type: REMOVE_COMMENT,
    _id: '1'
  });

  expect(newState.comments.length).toBe(1);
  expect(newState.comments[0]._id).toBe('2');
  expect(initialState.comments.length).toBe(0);
});

test ('UPDATE_COMMENT', () => {
  let currentState = {
    comments: [{ _id: '1', title: 'Comment 1' }, { _id: '2', title: 'Comment 2' }]
  };

  let newState = reducer(currentState, {
    type: UPDATE_COMMENT,
    _id: '1',
    title: 'Updated Comment 1'
  });

  expect(newState.comments.length).toBe(2);
  expect(newState.comments[0].title).toBe('Updated Comment 1');
  expect(newState.comments[1].title).toBe('Comment 2');
  expect(initialState.comments.length).toBe(0);
});
test('ADD_USER', () => {
  let newState = reducer(initialState, {
    type: ADD_USER,
    users: { _id: '1' }
  });

  expect(newState.users.length).toBe(1);
  expect(initialState.users.length).toBe(0);
});
test('REMOVE_USER', () => {
  let currentState = {
    users: [{ _id: '1' }, { _id: '2' }]
  };

  let newState = reducer(currentState, {
    type: REMOVE_USER,
    _id: '1'
  });

  expect(newState.users.length).toBe(1);
  expect(newState.users[0]._id).toBe('2');
  expect(initialState.users.length).toBe(0);
});
test ('UPDATE_USER', () => {
  let currentState = {
    users: [{ _id: '1', title: 'User 1' }, { _id: '2', title: 'User 2' }]
  };

  let newState = reducer(currentState, {
    type: UPDATE_USER,
    _id: '1',
    title: 'Updated User 1'
  });

  expect(newState.users.length).toBe(2);
  expect(newState.users[0].title).toBe('Updated User 1');
  expect(newState.users[1].title).toBe('User 2');
  expect(initialState.users.length).toBe(0);
});
test('ADD_FRIEND', () => {
  let newState = reducer(initialState, {
    type: ADD_FRIEND,
    friends: { _id: '1' }
  });

  expect(newState.friends.length).toBe(1);
  expect(initialState.friends.length).toBe(0);
});
test('REMOVE_FRIEND', () => {
  let currentState = {
    friends: [{ _id: '1' }, { _id: '2' }]
  };

  let newState = reducer(currentState, {
    type: REMOVE_FRIEND,
    _id: '1'
  });

  expect(newState.friends.length).toBe(1);
  expect(newState.friends[0]._id).toBe('2');
  expect(initialState.friends.length).toBe(0);
});