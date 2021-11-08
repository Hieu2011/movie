import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmitValue : PropTypes.func,

};
TodoForm.defaultProps={
    onSubmitValue : null
}

function TodoForm(props) {
    const {onSubmitValue} = props;
    const [value, setvalue] = useState('');
    function Onchange(e) {
        console.log(e.target.value);
        setvalue(e.target.value);
    }
    function onSave(e) {
        e.preventDefault();
        if (!onSubmitValue) return;
        const formvalue = {
            title : value
        };
        onSubmitValue(formvalue);
        setvalue('');
    }
    return (
        <div>
            <div className="m-auto">
              <form onSubmit={onSave}>
                <div className="form-group">
                  <label htmlFor="txtname">Nhập tên: </label>
                  <div style={{'display' : 'flex'}}>
                    <input type="text" value={value}  onChange={Onchange} name="txtname" className="form-control" id="txtname" />
                    <button type="submit" className="btn btn-primary float-right ml-2">
                        Lưu lại
                    </button>
                  </div>
                  
                </div>
                
               
              </form>
            </div>
        </div>
    );
}

export default TodoForm;