import { useParams } from "react-router";

const Naruto = () => {
    const { name } = useParams();
    return (
        <h1>This is Naruto page. My name is {name}.</h1>
    );
}

export default Naruto;