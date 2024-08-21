import { useQuery } from 'react-query';
import axios from 'axios';

export const useMenus = () => {
  return useQuery('menus', async () => {
    const { data } = await axios.get('/api/menus');
    return data;
  });
};
