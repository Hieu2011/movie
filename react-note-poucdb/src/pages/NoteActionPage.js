import React, { Component } from 'react';

class NoteActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note : {
                title : '',
                body : '',
                createAt : undefined,
                updateAt : undefined
            }
        }
    }
    
    onChange = (e) =>{
        var name = e.target.name ;
        var value = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
        const {note} = this.state;
        this.setState({
            note : {
                ...note,
                [name] : value
            }
        })
    }
    onSave = async (e) =>{
        e.preventDefault();
        console.log(this.state);
        const id = await this.props.onSave(this.state.note);
        this.props.history.replace(`/note/${id}`);
    }
    render() {
        return (
            <div>
                <h1>Form Note</h1>
                <div className="col-md-6 m-auto">
                  <form onSubmit={this.onSave}>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input type="text" onChange={this.onChange} name="title" className="form-control" id="title" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="body">Description</label>
                      <textarea style={{'height' : '100px'}} onChange={this.onChange} name="body" className="form-control">

                      </textarea>
                    </div>
                   
                    <button type="submit" className="btn btn-primary float-right">
                      Lưu lại
                    </button>
                  </form>
                </div>
            </div>
        );
    }
}

export default NoteActionPage;