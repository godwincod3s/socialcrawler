import {
    Get_Urls,
    Get_Url_Dom,
    Get_Dom_Links,
    Get_Filename,
    Clear_url_field
} from '../types/UrlTypes'

export default (state, {type, payload} ) => {
    switch (type) {
        case Get_Urls:
            return{
                ...state,
                loading: true,
                urls: payload
            }
        case Get_Url_Dom:
            return {
                ...state,
                loading: true,
                dom: payload
            }
        case Get_Dom_Links:
            return {
                ...state,
                loading: true, 
                links: payload       
            }
        case Get_Filename:
            return {
                ...state,
                file: payload
            }
    }
}