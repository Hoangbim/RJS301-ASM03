import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productAction } from '../../store';

export const useFetchApi = () => {
  const dispatch = useDispatch();
  // const [data, setData] = useState('')

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(
          'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
        );
        const data = await res.json();

        dispatch(productAction.setInit(data));
      } catch (error) {
        dispatch(productAction.setInit([]));
      }
    };

    fetchApi();
  }, []);
};
