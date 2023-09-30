import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface ResponseAPI {
  download: string;
  link: string;
}

const App = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState<ResponseAPI | null>(null);

  const fetchData = async () => {
    await axios
      .get<ResponseAPI>('https://alexbobr.ru/image', {
        params: {
          url: value,
        },
      })
      .then((res) => setData(res.data));
  };

  const handleClick = () => {
    fetchData();
  };

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Отправить</button>
      <hr style={{ width: '30%' }} />
      {data && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '20%',
          }}>
          {data.link && (
            <button>
              <a href={data.link} target="_blank">
                Посмотреть
              </a>
            </button>
          )}

          {data.download && (
            <button>
              <a href={data.download} target="_blank">
                Скачать
              </a>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
