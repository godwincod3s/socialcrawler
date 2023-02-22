import React, { useReducer } from "react";

// Context
import UrlContext from "../UrlContext"

// Types
import {
    Get_Urls,
    Get_Url_Dom,
    Get_Dom_Links,
    Clear_url_field
} from "../types/UrlTypes"

// Reducers
import UrlReducer from "../reducers/UrlReducer";

// State
const UrlState = ({children}) => {
    // define the state
    const initialState = {
        loading: false,
        url: [],
        dom: null,
        field: '',
        domLinks: []
    }

    // Dispatch the reducer
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    // Get Url from Form
    const getUrl = (payload) => {
        dispatch({type: Get_Urls, payload: payload})
    }

    // Get UrlDOM
    const getUrlDom = async () => {
        try {
        const urlDom = await fetch(
            // replace with url array from the state object
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        )
        // const toJSON = await todos.json()

        dispatch({ type: GET_TODOS, payload: urlDom })
        } catch (err) {
        console.error(err.message)
        }
    }

}