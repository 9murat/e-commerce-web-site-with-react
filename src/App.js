import Navigator from "./e-commerce-app/pages/Navigator";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navigator />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        theme="light"
      />
    </div>
  );
}
//  <ToastContainer
// position="bottom-center"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// 
// />
export default App;



