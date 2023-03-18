import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignIn from "../services/auth/signIn";
import SignUp from "../services/auth/signUp";

const Home = () => {
    return ( 
        
        <div style={{
            paddingTop:"30px"
        }}className="tiger">
            <div className="container tcontent">
                <h1>Appreciating the hidden beauty of nature</h1>
                <p>Join us to explore the various attributes of natural environment. Let the world view nature through your lens and watch what others discover. </p>
                <button class="bttn" id="explore">Explore</button>
            </div>
            <Link to="/Feed">Feed</Link>
        </div>
        
     );
}
 
export default Home;
