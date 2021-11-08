import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostfilesForm.propTypes = {
    onSubmit : PropTypes.func,
};
PostfilesForm.defaultProps = {
    onsubmit : null,
}
function PostfilesForm(props) {
    const {onSubmit} = props;
    const [searchItem, setSearchItem] = useState('');
    const typingtimeoutRef = useRef(null);
    function Onchange(e) {
        const value = e.target.value;
        setSearchItem(value);
        if (!onSubmit) {
            return;
        }
        if (typingtimeoutRef.current) {
            clearTimeout(typingtimeoutRef.current);
        }
        typingtimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchItem : value
            };
            onSubmit(formValue);
        }, 300);
       

    }
   
    return (
        <div className="m-auto">
        <form>
          <div className="form-group">
            <label htmlFor="txtname">Nhập tên: </label>
            <div style={{'display' : 'flex'}}>
              <input type="text" value={searchItem}  onChange={Onchange} name="txtname" className="form-control" id="txtname" />
              <button type="submit" className="btn btn-primary float-right ml-2">
                  Tìm kiếm
              </button>
            </div>
            
          </div>
          
         
        </form>
      </div>
    );
}

export default PostfilesForm;