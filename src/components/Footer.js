import { useNavigate } from "react-router-dom";
export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer className="w3-center w3-black w3-padding-64">
            <button className="btn btn-success" onClick={() => {
                navigate("/");
                window.scrollTo(0,0)
            }}><i className="fa fa-arrow-up w3-margin-right" ></i>Go to Home</button>
            <div className="w3-xlarge w3-section">
                <i className="fa-brands fa-facebook-official w3-hover-opacity me-1"></i>
                <i className="fa-brands fa-instagram w3-hover-opacity me-1"></i>
                <i className="fa-brands fa-twitter w3-hover-opacity me-1"></i>
                <i className="fa-brands fa-youtube w3-hover-opacity me-1"></i>
            </div>
            <p className="w3-large text-info">This website is made by Muhammad Usman Yousuf <b className="px-3">&copy;</b></p>
            <br />
            <button className="btn btn-light  btn-small  w3-margin-bottom"><b>Buy now</b></button>
        </footer>
    )
}
