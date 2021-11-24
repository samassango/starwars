import * as Constants from '../constants';

const initialState={
    peoples:[],
    person:[],
    isLoadingList:false,
    isLoading:false,
    isLoaded:false,
    peoplesError:null,
    personError:null
}

const peopleReducer =(state=initialState, action:IAction)=>{
    switch(action.type){
        case Constants.LOAD_LIST_OF_PEOPLE_INIT:
            return{
                ...state,
                isLoadingList:true
            }
        case Constants.LOAD_LIST_OF_PEOPLE_SUCCESS:
            return{
                ...state,
                peoples: action.payload,
                isLoaded: true,
                isLoadingList:false  
            }
        case Constants.LOAD_LIST_OF_PEOPLE_FAILURE:
            return{
                 ...state,
                 peoplesError: action.payload,
                 isLoaded: false,
                 isLoadingList:false 
            }
        case Constants.LOAD_SEARCH_OF_PEOPLE_INIT:
            return{
                ...state,
                isLoading:true 
            }
        case Constants.LOAD_SEARCH_OF_PEOPLE_SUCCESS:
            return{
                ...state,
                person: action.payload,
                isLoaded: true,
                isLoading:false 
            }
        case Constants.LOAD_SEARCH_OF_PEOPLE_FAILURE:
            return{
                ...state,
                personError: action.payload,
                isLoaded: false,
                isLoading:false 
            }
        default:
            return state
    }
}
interface IAction{
    type:String;
    payload:any
}

export default peopleReducer;