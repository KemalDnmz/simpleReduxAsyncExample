
import './App.css';
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import { allActions } from './actions';
import Posts from './components/Posts';



function App() {
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(allActions.fetchPosts())
  },[dispatch])
  return (
    <div className="App">
      <h2>This Student...</h2>
     <Posts/>
    </div>
  );
}

export default App;
