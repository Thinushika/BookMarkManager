import { connect } from "react-redux"
import { addBookMark } from "../redux/actions";
import NewBookMark from "./NewBookMark"


const mapDispatchToProps = dispatch => {
    return {
        onAddBookMark: bookmark => {
            dispatch(addBookMark(bookmark));
        }
    };
};


export default connect(
    null, //because this component not need to read from the store
    mapDispatchToProps
    )(NewBookMark);
