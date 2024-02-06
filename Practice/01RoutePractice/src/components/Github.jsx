/* eslint-disable react-refresh/only-export-components */
import {useLoaderData} from 'react-router-dom'

export function GitHub() {

  const data = useLoaderData();

  return <div className="w-full h-auto bg-yellow-800 flex flex-row">
    <div>{data.name}</div>
    <img src={data.avatar_url} alt="dp" width={300} height={300}/>
  </div>;
}


export const getGithubInfo = async () => {
  
    const response = await fetch(`https://api.github.com/users/mdainainahmed`)
    .then( res => res.json() )
    
    return response;
}

