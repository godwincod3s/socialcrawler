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
        dom: null,
        urls: '',
        field: '',
        domLinks: []
    }

    // Dispatch the reducer
    const [state, dispatch] = useReducer(UrlReducer, initialState);

    // Destructure the states
    const { 
        loading,
        dom,
        field,
        domLinks,
        urls } = state

    // Get Url from Form
    const getUrl = async (payload) => {
        if(urls === undefined){
            dispatch({type: Get_Urls, payload: payload})
        }else{
            dispatch({type: Get_Urls, payload: urls})
        }
    }

    // Get UrlDOM
    const getUrlDom = async (argUrl) => {
        try {
            var url = new URL("http://localhost:5000/url?"),
                params = {lat:35.696233, long:139.570431, foo: argUrl, bar: true}
                Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            const urlDom = fetch(url).then((e) => console.log(e));

        // const toJSONs = await urlDom.json();
        const toJSON = await urlDom;

        dispatch({ type: Get_Url_Dom, payload: toJSON })

        
        console.log(state)
        } catch (err) {
        console.error(err.message)
        }
    }

    return <UrlContext.Provider
            value={{
                loading,
                urls,
                dom,
                field,
                domLinks,
                getUrl,
                getUrlDom
            }}>
        {children}
    </UrlContext.Provider>

}

export default UrlState;