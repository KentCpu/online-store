import {actions} from "../store/actions";
import {AppDispatch} from "../store";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

const useActions = () => {
    const dispatch = useDispatch<AppDispatch>()
    return bindActionCreators(actions, dispatch);
};

export default useActions;