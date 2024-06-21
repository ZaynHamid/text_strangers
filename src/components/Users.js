'use client'
import { useEffect, useState } from 'react';

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/messages');
      const result = await response.json();
      console.log(result)
      setData(result.mesasage);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((val, i) => (
        <p key={i} className="text-center">{val.message}</p>
      ))}
    </div>
  );
}

export default Users;
