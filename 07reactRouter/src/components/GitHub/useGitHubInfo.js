// import { useState, useEffect } from "react";

// function useGitHubInfo(username) {

//   const [data, setData] = useState({});

//   let url = `https://api.github.com/users/${username}`;

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         return setData(res);
//       });
//   }, [url]);

//   return data;

// }

const useGitHubInfo = async (username) => {

  const response = await fetch(`https://api.github.com/users/${username}`)
  .then( res => res.json() )

  return response;
}

export default useGitHubInfo;
