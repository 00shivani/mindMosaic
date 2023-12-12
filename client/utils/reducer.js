import { from } from "@apollo/client"
import {
    Add-User,
    Remove-User,
    Add-Tile,
    Update-Tile,
    Delete-Tile,
    Add-Comment,
    Remove-Comment,
    Add-Gallery,
    Update-Gallery,
    Delete-Gallery,
    Add-Search,
    Update-Search,
    Delete-Search
} from './mutations'

import {
    Get-Tile,
    Get-Tile-ById,
    Get-Comment,
    Get-Comment-ById,
    Get-Gallery,
    Get-Gallery-ById,
    Get-Search,
    Get-Search-ById
} from './queries'

export const  reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [action.payload, ...state.users]
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter((user) => {
                    return user._id !== action.payload._id;
                })
            };
        case 'ADD_TILE':
            return {
                ...state,
                tiles: [action.payload, ...state.tiles]
            };
        case 'UPDATE_TILE':
            return {
                ...state,
                tiles: state.tiles.map((tile) => {
                    return tile._id === action.payload._id ? action.payload : tile;
                })
            };
        case 'DELETE_TILE':
            return {
                ...state,
                tiles: state.tiles.filter((tile) => {
                    return tile._id !== action.payload._id;
                })
            };
        case 'ADD_COMMENT':
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            };
        case 'REMOVE_COMMENT':
            return {
                ...state,
                comments: state.comments.filter((comment) => {
                    return comment._id !== action.payload._id;
                })
            };
        case 'ADD_GALLERY':
            return {
                ...state,
                gallery: [action.payload, ...state.gallery]
            };
        case 'UPDATE_GALLERY':
            return {
                ...state,
                gallery: state.gallery.map((gallery) => {
                    return gallery._id === action.payload._id ? action.payload : gallery;
                })
            };
        case 'DELETE_GALLERY':
            return {
                ...state,
                gallery: state.gallery.filter((gallery) => {
                    return gallery._id !== action.payload._id;
                })
            };
        case 'ADD_SEARCH':
            return {
                ...state,
                search: [action.payload, ...state.search]
            };
        case 'UPDATE_SEARCH':
            return {
                ...state,
                search: state.search.map((search) => {
                    return search._id === action.payload._id ? action.payload : search;
                })
            };
        case 'DELETE_SEARCH':
            return {
                ...state,
                search: state.search.filter((search) => {
                    return search._id !== action.payload._id;
                })
            };
        default:
            return state;
    }
}

export default reducer;
