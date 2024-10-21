import RootLayout from './layouts/RootLayout'
import {Route, Routes, Outlet, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import PageOne from './pages/PageOne'
import PageError from './pages/PageError'
import {createBrowserRouter} from 'react-router-dom'
import ReducerDemo from './pages/ReducerDemo';

const router = createBrowserRouter([
{
  path: "/home",
  element: <Home/>
},
{
  path: "/page-one/:id",
  element: <PageOne><Outlet></Outlet></PageOne>,
  loader: ({ params }) => getPost(params.id),
  errorElement: <PageError></PageError>,
  children:[
    {
      path: "details",
      element: <h1>About</h1>
    }
  ]
},
{
  path: "/reducer",
  element: <ReducerDemo/>
}
]
);

function App() {
  return (
    <>
     {/* <RootLayout>
      <Routes>
      <Route path="*" element={<PageError/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/page-one/:id" element={<PageOne><Outlet/></PageOne>}>
          <Route path='details' element={<h1>Details</h1>}></Route>
        </Route>
        <Route path="/about" element={<h1>About</h1>}></Route>
      </Routes>
     </RootLayout> */}
     <RootLayout>
      <RouterProvider router ={router}></RouterProvider>
     </RootLayout>
    </>
  )
}

export default App

async function getPost(id){
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => {
    if (response.status === 404){
        throw Error(`No data found for id: ${id}`)
    }
    return response;
  })
  .then((response) => response.json());
}
