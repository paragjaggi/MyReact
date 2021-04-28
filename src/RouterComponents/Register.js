import { useHistory } from "react-router";

const Register = () => {
    const history = useHistory();
    return (
        <div>
            <h1>This is register page</h1>
            <button className="btn btn-primary" onClick={()=> history.goBack()}>Back</button>
            &nbsp;
            <button className="btn btn-primary" onClick={()=> history.goForward()}>Forward</button>
            &nbsp;
            <button className="btn btn-secondary" onClick={()=> history.go(-2)}>GoBack2Steps</button>
        </div>
    )
}

export default Register;