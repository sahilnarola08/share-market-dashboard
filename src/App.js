import { StockDetails, StockList } from '@stock';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StockList />,
    },
    {
      path: "/StockDetails",
      element: <StockDetails />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
