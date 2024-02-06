import { useParams } from "react-router-dom"

function User() {

    const {userid} = useParams();

  return (
    <div className="text-black text-center">User: {userid} </div>
  )
}

export default User