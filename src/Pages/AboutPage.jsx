import { Link } from "react-router-dom";
import Card from "../Card";

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>This is a react app to leave feedback for a product.</p>
            <p>Version: 1.0.0</p>
            <p>DEVELOPED BY ABHISHEK</p>
            <p>
                <Link to="/">Back to home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage;
