import { getPeoples,searchPeople } from './../../infrastructure/repository';

import * as Constants from '../constants';

export interface IPeople {
    name?: String;
    gender?: String;
    height?: String;
    mass?: String;
    homeworld?: String;
}


export const getPeoplesInit =()=>({type: Constants.LOAD_LIST_OF_PEOPLE_INIT});

export const getPeoplesSuccess =(payload:any[])=>({type: Constants.LOAD_LIST_OF_PEOPLE_SUCCESS, payload:payload});

export const getPeoplesFail =(error:any)=>({type: Constants.LOAD_LIST_OF_PEOPLE_FAILURE, payload:error});

export const searchPeoplesInit =()=>({type: Constants.LOAD_SEARCH_OF_PEOPLE_INIT});

export const searchPeopleSuccess =(payload:any[])=>({type: Constants.LOAD_SEARCH_OF_PEOPLE_SUCCESS, payload:payload});

export const searchPeopleFail =(error:any)=>({type: Constants.LOAD_SEARCH_OF_PEOPLE_FAILURE, payload:error});

export const getListPeoples =(pageNo:String)=>( dispatch:any )=>{
    dispatch(getPeoplesInit());
    console.log(pageNo);
    return getPeoples(pageNo).then((results)=>{
        console.log(results);
        dispatch(getPeoplesSuccess(results.data.peoples));
    }).catch((error)=>{
      dispatch(getPeoplesFail(error));
    });
}

export const getSearchPeople =(searchName:String)=>(dispatch:any)=>{
dispatch(searchPeoplesInit());
return searchPeople(searchName).then((results)=>{
    dispatch(searchPeopleSuccess(results.data.search));
}).catch((error)=>{
    dispatch(searchPeopleFail(error));
});
}