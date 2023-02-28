import React, { useReducer } from "react";

// Context
import UrlContext from "../UrlContext"

// Types
import {
    Get_Urls,
    Get_Url_Dom,
    Get_Filename,
    Get_Dom_Links
} from "../types/UrlTypes"

// Reducers
import UrlReducer from "../reducers/UrlReducer";

// State
const UrlState = ({children}) => {
    // define the state
    const initialState = {
        loading: false,
        dom: null,
        url: '',
        field: '',
        domLinks: [],
        file: ''
    }

    // Dispatch the reducer
    const [state, dispatch] = useReducer(UrlReducer, initialState);

    // Destructure the states
    const { 
        loading,
        dom,
        field,
        domLinks,
        urls,
        file } = state

    // Get Url from Form
    const getUrl = async (payload) => {
        dispatch({type: Get_Urls, payload: payload})
    }

    // Get UrlDOM
    const getUrlDom = async (argUrl) => {
        try {
            var url = new URL("http://localhost:5000/url?"),
                params = {lat:35.696233, long:139.570431, url: argUrl, fileUrl: file}
                Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        await fetch(url).then(e => e.json()).then(d => {
            dispatch({ type: Get_Url_Dom, payload: d });
            // return d;
        });

        } catch (err) {
            console.error(err.message)
        }
    }

    const onFileChange = (e) => {
        
        dispatch({type:Get_Filename, payload: e.target.value})
    }
    console.log(state)

    /*
        fetch('www.example.com/document.html')
        .then(response => response.text()) // Read the response as text
        .then(html => alert(html)); // Alert the retrieved HTML content

        fetch('www.example.com/submit-form', {
        method: 'POST', // Specify the HTTP method
        body: new FormData(document.querySelector('form')) // Collect form data })
        .then(response => response.text()) // Read response as text
        .then(data => alert(data)) // Alert the response

        try {
        fetch('www.example.com/submit-form', {
        method: 'POST', // Specify the HTTP method
        body: new FormData(document.querySelector('form')) // Collect form data })
        .then(response => response.text()) // Read response as text
        .then(data => alert(data)) // Alert the response } catch (error) { alert('An error occurred!'); }
    */

    return <UrlContext.Provider
            value={{
                loading,
                urls,
                dom,
                field,
                domLinks,
                file,
                getUrl,
                getUrlDom,
                onFileChange
            }}>
        {children}
    </UrlContext.Provider>

}

export default UrlState;