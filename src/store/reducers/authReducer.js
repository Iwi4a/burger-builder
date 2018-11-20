import * as actionTypes from './../actions/actionTypes';


const initState = {
	idtoken : null,
	userid : null,
	error : null,
	loading : false,
}

const reducer = (state = initState, actions) => {
	switch(actions.type) {
		case actionTypes.AUTH_START : 
			return {
				...state,
				idtoken : null,
				userid : null,
				error : null,
				loading : true
			}
		case actionTypes.AUTH_SUCCESS : 
			return {
				...state,
				idtoken : actions.idToken,
				userid : actions.localId,
				error : null,
				loading : false,
			}
		case actionTypes.AUTH_FAIL : 
			return {
				...state,
				idtoken : null,
				userid : null,
				error : actions.error,
				loading : false,
			}
		case actionTypes.AUTH_LOGOUT :
			return {
				...state,
				idtoken : null,
				userid : null,
				error : null,
				loading : false
			}
		default : return state;
	}
}

export default reducer;