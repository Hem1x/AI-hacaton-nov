import { ResponseAPI } from '../App';

const Text = ({ data }: { data: ResponseAPI | null }) => {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl font-medium mb-7">
        Сканировать фото
      </h1>
      <p className="text-lg sm:text-xl text-[#969696] max-w-[650px] mb-10 leading-8">
        Вы можете сканировать фото и получать информацию о них в формате
        реального времени с задержкой в доли секунд
      </p>

      <p className="mb-[20px] text-base sm:text-lg">
        {data
          ? 'Всё готово! Можете скачать или просмотреть результат'
          : 'Вставьте ссылку на ваш яндекс диск. Не забудьте открыть доступ'}
      </p>
    </>
  );
};

export default Text;
