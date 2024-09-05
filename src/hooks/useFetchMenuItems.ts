import axios from "axios";
import { useEffect, useState } from "react";

interface MenuItem {
  id: number;
  MenuName: string;
  DisplayName: string;
  Content: string;
}

interface ApiResponse {
  isSuccess: boolean;
  data: {
    Menu: MenuItem[];
  };
  message: string;
}

const useFetchMenuItems = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://mocki.io/v1/0e8debe1-6309-49e1-9426-95db063617cf"
        );
        if (response.data.isSuccess) {
          setMenuItems(response.data.data.Menu);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError("Failed to fetch menu items.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  return { menuItems, loading, error };
};

export default useFetchMenuItems;
