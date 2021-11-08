import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../pagination/index';
import PostfilesForm from '../postfilesForm/index';

TodoApi.propTypes = {
    posts : PropTypes.array,
};
TodoApi.defaultProps = {
    posts : []
}

function TodoApi(props) {
    const {posts, pagination,onPageChange,onSubmit} = props;
    return (
        <div>
            <PostfilesForm onSubmit={onSubmit}/>
            <ul className="list-group list-group-flush">
                {posts.map((post,index)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <Pagination pagination={pagination} onPageChange={onPageChange}></Pagination>
        </div>
    );
}

export default TodoApi;