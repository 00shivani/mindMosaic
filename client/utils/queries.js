import { gql } from '@apollo/client';

export const QUERY_TILES = gql`
    query getTiles ($tileId: ID) {
        tiles(tileId: $tileId) {
            _id
            title
            imageUrl
            credit
            comments {
                _id
                commentText
                createdAt
                username
            }
        }
    }
`;

export const QUERY_COMMENTS = gql`
    query getComments($tileId: ID) {
        comments(tileId: $tileId) {
            _id
            commentText
            createdAt
            username
        }
    }
`;

export const QUERY_GALLERY = gql`
    query getGallery($galleryId: ID) {
        gallery(galleryId: $galleryId) {
            _id
            title
            caption
            media
            comments {
                _id
                commentText
                createdAt
                username
            }
        }
    }
`;

export const QUERY_SEARCH = gql`
    query getSearch($searchId: ID) {
        search(searchId: $searchId) {
            _id
            title
            caption
            media
            comments {
                _id
                commentText
                createdAt
                username
            }
        }
    }
`;

