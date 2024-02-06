// import React from "react";
// import useGitHubInfo from "./useGitHubInfo";
import { useLoaderData } from "react-router-dom";


export function GitHub() {

  // const data = useGitHubInfo("mdainainahmed");

  const data = useLoaderData();

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Profile Image" width={300} />
      </div>
    </>
  );
}



export const githubInfoLoader = async () => {

  const response = await fetch('https://api.github.com/users/mdainainahmed')
  .then( res => res.json() )

  console.log(response);
  return response;
}

