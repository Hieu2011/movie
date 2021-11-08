import './App.css';
import Color from './component/color/index';
import Todo from './component/todolist/index';
import Home from './component/home/index';
import TodoForm from './component/todoForm/index';
import TodoAPI from './component/todoApi/index';
import Clock from './component/clock/index';
import queryString from 'query-string';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';
function s4(){
  return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1);
}
function getGenderid(){
  return s4() + s4() + '-' + s4() + s4() + '-' + s4()+ s4();
}
function App() {
  const list =[
    {
      'id' : 1,
      'title': 'Title 1'
    },
    {
      'id' : 2,
      'title': 'Title 2'
    },
    {
      'id' : 3,
      'title': 'Title 3'
    }
  ];
  const [todos, setTodoList] = useState(list);
  const [postList, setpostList] = useState([]);
  const [ListTest, setListTest] = useState([]);
  const [pagination, setPagination] = useState({
    _page : 1,
    _limit : 10,
    _totalRows : 10
  });
  const [filters, setfilters] = useState({
    _limit : 10,
    _page : 1,
    title_like: ''
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        //_limit=10&_page=1
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        const {data,pagination} = responseJson;
        console.log(responseJson);
        setpostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to connect Api to fetch postList : '+error.message);
      }
      
    }
    fetchPostList();
   
    return () => {
      
    }
  }, [filters]);
  useEffect(() => {
    
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    
    postData('http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1', {})
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
    return () => {
      
    }
  }, []);
  
  function handelPageChange(newPage) {
    console.log('New Page: '+newPage);
    setfilters({
      ...filters,
      _page : newPage
    })
  }
  function handelTodoClick(todo) {
    console.log(todo);
    const index = todos.findIndex(x => x.id == todo.id);
    if (index < 0) {
      return;
    }
    const newlist = [...todos];
    newlist.splice(index,1);
    setTodoList(newlist);
  }
  function handelTodoFormSubmit(value) {
    console.log(value);
    const newlist = [...todos];
    newlist.push({
      id : getGenderid(),
      title : value.title
    });
    setTodoList(newlist);
  }
  function handelFilterChange(newFilter) {
    console.log('Search : ' + newFilter);
    setfilters({
      ...filters,
      _page : 1,
      title_like : newFilter.searchItem
    })
  }
  return (
    <Router>
      <div className="App-header">
        <h1>Wellcome to My life</h1>
        <Clock/>
        
        <Link to='/'>Home</Link>
        <Link to='/color'>Color</Link>
        <Link to='/todo-list'>ToDoList</Link>
        <Link to='/todo-api'>TodoApi</Link>
        <Switch>
          <Route path="/" exact  render={(props) => (
              <Home />
          )}/>
          <Route path="/todo-list"  render={(props) => (
              <Todo {...props} onSubmitValue = {handelTodoFormSubmit} ontodoClick={handelTodoClick} todos ={todos}/>
          )}/>
           <Route path="/todo-api"  render={(props) => (
              <TodoAPI {...props} onSubmit={handelFilterChange}  pagination = {pagination} onPageChange = {handelPageChange} posts ={postList}/>
          )}/>
          <Route path="/color"  render={(props) => (
              <Color/>
          )}/>   
        </Switch>
        
      </div>
           
      
    </Router>
    
  );
}

export default App;
