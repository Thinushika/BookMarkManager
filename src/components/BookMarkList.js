import React from 'react'
import { connect } from 'react-redux';
import { deleteBookMark } from '../redux/actions';
import Bookmark from './Bookmark';

function BookMarkList({ bookmarks, onDelete}) {
    return (
        <div>
            {bookmarks.map(bookmark => {
                return (
                    <Bookmark 
                    bookmark={bookmark}
                    onDelete={onDelete}
                    key={bookmark.id} />
                );
            })}
        </div>
    )
}


// receive stores dispatch method - return obj that callback 
// as props then dispatch the desired action to the store
const mapStateToProps = state => {
    return {
        bookmarks: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deleteBookMark(id));
        }
    };
};


// used redux connect function 
export default connect(
    mapStateToProps, // receives current value of state and return obj to connected component
    mapDispatchToProps
)(BookMarkList);
