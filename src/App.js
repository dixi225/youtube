import { Provider } from 'react-redux';
import './App.css'
import Body from './components/Body';
import Head from './components/Head';
import store from './Constants/Utills/store';
import {createBrowserRouter , RouterProvider } from 'react-router-dom';
import MainContainer from './components/Maincontainer';
import Videowatch from './components/Videowatch';
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'watch',
      element:<Videowatch/>
    }
    ]
  }
])
function App() {
  return<Provider store={store}>
      <Head/>
      <RouterProvider router={appRouter}/>
  </Provider>
}
export default App;
