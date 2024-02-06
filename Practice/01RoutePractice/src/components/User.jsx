import { useParams } from "react-router-dom";

function Home() {

    const {userid} = useParams();

  return <div className="w-full h-80 bg-yellow-800">{userid}</div>;
}

export default Home;
