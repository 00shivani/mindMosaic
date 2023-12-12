import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($name: String!, $email: String!, $password: String!, $gallery: String!) {
        addUser(name: $name, email: $email, password: $password, gallery: $gallery) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($galleryId: ID!, $commentText: String!) {
        addComment(galleryId: $galleryId, commentText: $commentText) {
            _id
            commentCount
            comments {
                _id
                commentText
                createdAt
                name
            }
        }
    }
`;

export const ADD_GALLERY = gql`
    mutation addGallery($title: String!, $caption: String!, $media: String!, $credit: String!) {
        addGallery(title: $title, caption: $caption, media: $media, credit: $credit) {
            _id
            title
            caption
            media
            credit
            createdAt
            username
            commentCount
            comments {
                _id
                commentText
                createdAt
                name
            }
        }
    }
`;

export const ADD_TILE = gql`
    mutation addTile($title: String!, $caption: String!, $media: String!, $credit: String!) {
        addTile(title: $title, caption: $caption, media: $media, credit: $credit) {
            _id
            title
            caption
            media
            credit
            createdAt
            username
            commentCount
            comments {
                _id
                commentText
                createdAt
                name
            }
        }
    }
`;

export const REMOVE_COMMENT = gql`
    mutation removeComment($galleryId: ID!, $commentId: ID!) {
        removeComment(galleryId: $galleryId, commentId: $commentId) {
            _id
            commentCount
            comments {
                _id
                commentText
                createdAt
                name
            }
        }
    }
`;

export const REMOVE_GALLERY = gql`
    mutation removeGallery($galleryId: ID!) {
        removeGallery(galleryId: $galleryId) {
            _id
            title
            caption
            media
            credit
            createdAt
            username
            commentCount
            comments {
                _id
                commentText
                createdAt
                name
            }
        }
    }
`;

export const REMOVE_TILE = gql`
    mutation removeTile($tileId: ID!) {
        removeTile(tileId: $tileId) {
            _id
            title
            caption
            media
            credit
            createdAt
            username
            commentCount
            comments {
                _id
                commentText
                createdAt
                name
            }
        }
    }
`;

export const UPDATE_GALLERY = gql`
    mutation updateGallery($galleryId: ID!, $title: String!, $caption: String!, $media: String!, $credit: String!) {
        updateGallery(galleryId: $galleryId, title: $title, caption: $caption, media: $media, credit: $credit) {
            _id
            title
            caption
            media
            credit
            createdAt
            username
            commentCount
            comments {
                _id
                commentText
                createdAt
                name
            }
        }
    }
`;

export const UPDATE_TILE = gql`
    mutation updateTile($tileId: ID!, $title: String!, $caption: String!, $media: String!, $credit: String!) {
        updateTile(tileId: $tileId, title: $title, caption: $caption, media: $media, credit: $credit) {
            _id
            title
            caption
            media
            credit
            createdAt
            username
            commentCount
            comments {
                _id
                commentText
                createdAt
                name
            }
        }
    }
`;