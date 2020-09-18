export const initialState = {
    isPosting: false,
    isPosted: false,
    isCheck:false,
    isDeleting: false,
    isDeleted: false,
};

export const WRITE_POST_REQUEST = 'WRITE_POST_REQUEST';
export const WRITE_POST_SUCCESS = 'WRITE_POST_SUCCESS';
export const WRITE_POST_FAILURE = 'WRITE_POST_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const DELETE_POST_REQUEST =  'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS =  'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE =  'DELETE_POST_FAILURE';

export const writePostRequestAction = () => ({
    type: WRITE_POST_REQUEST,
});

export const loadPostRequestAction = () => ({
    type: LOAD_POST_REQUEST,
});

export const deletePostRequestAction = () => ({
    type: DELETE_POST_REQUEST,
});

const reducer = (state=initialState , action) => {
    switch(action.type){
        case WRITE_POST_REQUEST:{
            return{
                ...state,
                isPosting:true,
            }
        }
        case WRITE_POST_SUCCESS:{
            return{
                ...state,
                isPosting:false,
                isPosted:true,
            }
        }
        case WRITE_POST_FAILURE:{
            return{
                ...state,
                isPosting:false,
            }
        }
        case LOAD_POST_REQUEST:{
            return{
                ...state,
            }
        }
        case LOAD_POST_SUCCESS:{
            return{
                ...state,
                isCheck:true,
            }
        }
        case LOAD_POST_FAILURE:{
            return{
                ...state,
            }
        }
        case DELETE_POST_REQUEST:{
            return{
                ...state,
                isDeleting:true,
            }
        }
        case DELETE_POST_SUCCESS:{
            return{
                ...state,
                isDeleting:false,
                isDeleted:true,
            }
        }
        case DELETE_POST_FAILURE:{
            return{
                ...state,
                isDeleting:false,
            }
        }
        default:{
            return{
                ...state,
            }
        }
    }
}

export default reducer;