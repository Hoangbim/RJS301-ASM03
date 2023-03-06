import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //hàm sendRequest với 2 params, requestConfig là 1 mảng chứa thông tin url, method, headers, body; applyData là hàm xử lý data trả về từ fetch
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    //đặt trạng thái đang fetch là true, error hiện tại là null
    setIsLoading(true);
    setError(null);
    try {
      ///fetch với các config được truyền vào,
      const res = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      const data = await res.json();
      //gọi hàm applyData và truyền vào data
      applyData(data);
    } catch {
      //thông báo lỗi quá trình fetch
      setError('Something went wrong');
    }
    //đặt lại Isloading là false khi quá trình fetch xong
    setIsLoading(false);
  });

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
