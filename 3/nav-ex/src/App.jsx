import RootLayout from "./layouts/RootLayout";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { homePath, pageOnePath, pageTwoPath } from "./data/paths";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    errorElement: <ErrorPage/>
  },
  {
    path: homePath,
    element: <Home/>,
  },
  {
    path: pageOnePath,
    element: <PageOne/>
  },
  {
    path: pageTwoPath,
    element: <PageTwo/>,
    loader: ({ params }) => getPost(params.id),
    errorElement: <NotFound/>
  },
  {
    path: "/user",
    element: <><h1>User: XYZ</h1> <Outlet/></>,
    children: [{
      path: "details",
      element: <h1>User details</h1>
    },
    {
      path: "change-password",
      element: <h1>Change password</h1>
    }
  ]
  }
]);

function App() {
  return (
    <RootLayout>
      <RouterProvider router={ router }/>
      {/* <Routes>
        <Route element={<Home />} path={homePath} />
        <Route element={<Outlet />} path={pageOnePath}>
          <Route element={<h1>Page one details</h1>} path="details" />
          <Route element={<h1>Page one edit</h1>} path="edit" />
        </Route>
        <Route
          element={<PageTwo />}
          path={pageTwoPath}
          loader={(id) => getPost(id)}
        />
        <Route element={<NotFound />} path="*"></Route>
      </Routes> */}
    </RootLayout>
  );
}

export default App;

async function getPost(id){
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
      if(response.status === 404){
        console.log("Error")
        throw Error("Data not found, status 404!");
      }
      return response;
    })   
    .then(response => response.json())
    return post;
}

