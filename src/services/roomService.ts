import { IRoom, IRoomResponse } from "@/interfaces/IRoom";
import { API_URL } from "../../envs";
import { fetchWithInterceptor } from "./fetchInterceptor";

export const getRooms = async (): Promise<IRoomResponse[]> => {
  const res = await fetchWithInterceptor(`${API_URL}/rooms?page=1&limit=100`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .catch(() => {
      return [];
    });
  return res as IRoomResponse[];
};

export const getRoomById = async (
  id: string
): Promise<IRoomResponse | undefined> => {
  const res = await fetchWithInterceptor(`${API_URL}/rooms/${id}`, {
    cache: "no-store",
  }).catch(() => null);

  if (!res || !res.ok) return undefined;
  return (await res.json()) as IRoomResponse;
};

interface RoomDataToRegister {
  name: string;
  description: string;
  price: number;
  number_of_cats: number;
  img?: File;
  features?: string[];
}

export const registerRoom = async (
  roomData: RoomDataToRegister,
  token: string
) => {
  try {
    const formData = new FormData();

    // Agregar logs para debug
    console.log("Token:", token);
    console.log("Room data:", roomData);

    // Asegurarse de que todos los campos requeridos estén presentes
    formData.append("name", roomData.name);
    formData.append("description", roomData.description);
    formData.append("price", roomData.price.toString());
    formData.append("number_of_cats", roomData.number_of_cats.toString());
    if (roomData.img) {
      formData.append("img", roomData.img);
    }

    // Cambiar cómo se envían los features
    if (roomData.features && roomData.features.length > 0) {
      roomData.features.forEach((feature, index) => {
        formData.append(`features[${index}]`, feature);
      });
    } else {
      formData.append("features", "[]");
    }

    const response = await fetchWithInterceptor(`${API_URL}/rooms`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response:", errorData);
      throw new Error(errorData.message || "Error al crear la suite");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en registerRoom:", error);
    throw error;
  }
};

// Filtrar habitaciones
export const filterRooms = async (
  checkInDate: string,
  checkOutDate: string,
  numberOfCats: string,
  minPrice: string,
  maxPrice: string
): Promise<IRoomResponse[]> => {
  const params = new URLSearchParams({
    checkInDate,
    checkOutDate,
    numberOfCats,
    minPrice,
    maxPrice,
  });

  try {
    const res = await fetch(`${API_URL}/rooms/filters?${params}`);
    const data = await res.json();
    return data as IRoomResponse[];
  } catch {
    return [];
  }
};

export const updateRoom = async (
  id: string,
  roomData: RoomDataToRegister,
  token: string
) => {
  try {
    const formData = new FormData();

    formData.append("name", roomData.name);
    formData.append("description", roomData.description);
    formData.append("price", roomData.price.toString());
    formData.append("number_of_cats", roomData.number_of_cats.toString());

    // Manejar la imagen solo si hay una nueva
    if (roomData.img instanceof File) {
      formData.append("img", roomData.img);
    }

    // Manejar features de la misma manera que en registerRoom
    if (roomData.features && roomData.features.length > 0) {
      roomData.features.forEach((feature, index) => {
        formData.append(`features[${index}]`, feature);
      });
    } else {
      formData.append("features", "[]");
    }

    const response = await fetch(`${API_URL}/rooms/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    return await response.json();
  } catch (error) {
    console.error("Error en updateRoom:", error);
    throw error;
  }
};

export const roomService = {
  async updateRoom(data: FormData, id: string, token: string): Promise<IRoom> {
    const response = await fetch(`${API_URL}/rooms/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to update room");
    }

    return response.json();
  },

  async deleteRoom(id: string, token: string): Promise<void> {
    const response = await fetch(`${API_URL}/rooms/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error("Error deleting suite");
  },
};
