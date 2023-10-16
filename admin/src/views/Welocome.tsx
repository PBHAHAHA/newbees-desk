import request from '@/utils/request';
import { useEffect } from 'react';
import storage from '@/utils/storage';
import { formatMoney, formatNum } from '@/utils';

export default function Welcome() {
  useEffect(() => {
    request.get<string>('/posts', {}).then(res => {
      console.log(res);
    });
    // console.log(res);
  }, []);
  return (
    <>
      <button onClick={() => storage.set('haha', '----')}>123</button>
      <button onClick={() => console.log(storage.get('haha'))}>get</button>
      <button onClick={() => storage.clear()}>clear</button>
      <h1>
        {formatMoney('1234531')} --- {formatNum('1234531.34532')}
      </h1>
    </>
  );
}
