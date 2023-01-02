import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import actions from '../../../actions/actions';
import Adventures from './adventures';

const AdventuresContainer = () => {
	const dispatch = useDispatch();
	const homeReducer = useSelector(state => state.homeReducer);
	const loginReducer = useSelector(state => state.loginReducer);
	const adventures = homeReducer.adventures || [];
	const experienceOptions = homeReducer.experienceOptions || [];
	const authorizationData = loginReducer.authorizationData || null;

	return (
		<Adventures
			adventures={adventures}
			experienceOptions={experienceOptions}
			authorizationData={authorizationData}
			onCreate={(data) => dispatch({
				type: actions.CREATE_ADVENTURE, data
			})}
			onGetAllAdventures={(data) => dispatch({
				type: actions.GET_ALL_ADVENTURES
			})}
			onUpdate={(data) => dispatch({
				type: actions.UPDATE_ADVENTURE,
				data
			})}
			onRemove={(data) => dispatch({
				type: actions.DELETE_ADVENTURE,
				data
			})}
			onGetAllExperiences={(data) => dispatch({
				type: actions.GET_ALL_EXPERIENCES
			})}
		/>
	);
};

export default AdventuresContainer;
