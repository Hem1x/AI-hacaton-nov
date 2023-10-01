import axios from 'axios';
import { useState } from 'react';
import Text from './components/Text';
import CircularProgress from '@mui/material/CircularProgress';
import user from './assets/user.svg';

export interface ResponseAPI {
  download: string;
  link: string;
}

const App = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState<ResponseAPI | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setMessage] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setMessage(null);
      await axios
        .get<ResponseAPI>('https://alexbobr.ru/image', {
          params: {
            url: value,
          },
        })
        .then((res) => setData(res.data));
    } catch (error) {
      setMessage('Произошла ошибка');
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="px-[5%] md:px-[5%] pt-14 sm:pt-28 w-full h-[100%] flex justify-center flex-col gap-5">
      <div className="w-[95%] lg:w-[70%] mx-auto">
        <img src={user} style={{ width: '100%', marginBottom: '3rem' }} />
        <h1 className="font-bold text-2xl sm:text-4xl text-[#612EF7] mb-6">
          Помощник по распознаванию фото
        </h1>
        <div className="w-full bg-transparent sm:bg-white py-12 px-0 sm:px-11  rounded-3xl shadow-none sm:shadow-block mb-28">
          <Text data={data} />
          {isLoading ? (
            <div className="flex justify-center">
              <CircularProgress />
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 justify-center">
              {data ? (
                <>
                  <button className="flex-1 w-full sm:w-[339px] p-2 bg-[#612EF7] rounded-md text-white hover:bg-[#4A23BE] hover:scale-105 transition-all">
                    <a href={data.link} target="_blank">
                      Посмотреть
                    </a>
                  </button>

                  <button className="flex-1 w-full sm:w-[339px] p-2  bg-[#612EF7] rounded-md text-white hover:bg-[#4A23BE] hover:scale-105 transition-all">
                    <a href={data.download} target="_blank">
                      Скачать
                    </a>
                  </button>

                  <button
                    className="p-2 text-white bg-black rounded-lg flex-[0.4] hover:scale-105 hover:bg-gray-700 transition-all"
                    onClick={() => {
                      setValue('');
                      setData(null);
                    }}>
                    Назад
                  </button>
                </>
              ) : (
                <>
                  <div className="flex border border-[#cdcccc] px-2 py-2 rounded-lg w-[100%] mx-auto">
                    <input
                      type="text"
                      className="w-full"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={handleClick}
                    className="w-full sm:w-[339px] p-2 bg-[#612EF7] rounded-md text-white hover:bg-[#4A23BE] hover:scale-105 transition-all">
                    Сканировать
                  </button>
                </>
              )}
            </div>
          )}
          {error && (
            <h1 className="mt-3 text-red-500 font-semibold">
              Произошла ошибка (Убедитесь что не более 20-ти фото)
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
