import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";



export const getMonster = () => {
  return (dispatch) => {
    dispatch(fetchStart());

    axios
      .get("https://mhw-db.com/monsters")
      .then((r) => {
        dispatch(fetchSuccess(r.data[Math.floor(Math.random() * r.data.length)]))
      })
      .catch((err) => dispatch(fetchFail(err)));
  };
};

export const fetchStart = ()=> {
    return({type: FETCH_START});
}
export const fetchSuccess = (person)=> {
    return({type: FETCH_SUCCESS, payload:person});
}
export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload:error});
}