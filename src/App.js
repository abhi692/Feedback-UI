import FeedbackList from "./FeedbackList";
import Header from "./Header";
import FeedbackStats from "./FeedbackStats";
import FeedbackForm from "./FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./AboutIconLink";
import { FeedbackProvider } from "./FeedbackContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {

    return (
        <FeedbackProvider>
        <Router>
        <Header/>
            <div className="container">
                <Routes>
                <Route exact path="/" element={
                    <>
                        <FeedbackForm/>
                        <FeedbackStats/>
                        <FeedbackList/>
                    
                    </>
                }></Route>
                <Route path="/about" element={<AboutPage />}/>
                </Routes>
                <AboutIconLink/>
            </div>
        </Router>
        </FeedbackProvider>
    )
}
export default App;