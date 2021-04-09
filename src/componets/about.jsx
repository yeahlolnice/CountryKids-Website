import background from "../img/logo.JPG"
import "../App.css"

function about () {
    return (
        <div id="About">
            <div style={{marginBottom: "50px"}}>
                <img src={background} alt=""logo style={{maxWidth: "100%"}}/>
            </div>
            <h1 style={{textAlign: "center"}}>About Us</h1>
            <p className="centeredParagraph">To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a data URI instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to #1153. You can control the 10,000 byte threshold by setting the IMAGE_INLINE_SIZE_LIMIT environment variable as documented in our advanced configuration.</p>
        </div>
    )
}
export default about;