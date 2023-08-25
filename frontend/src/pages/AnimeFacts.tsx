import { useState, useEffect } from 'react';

const AnimeFacts = () => {
  const baseURL =
    'https://stackblitzstartersxsicba-e2uu--6969--33975f1d.local-credentialless.webcontainer.io/api';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <main className="text-black">
      <h1>Anime Facts Users</h1>
      {data.map((item) => (
        <div className="border border-black border-4 p-4 rounded-xl m-10 text-3xl  ">
          {Object.keys(item).map((key) => (
            <p>
              {key} : {item[key]}
            </p>
          ))}
        </div>
      ))}
    </main>
  );
};
export default AnimeFacts;
