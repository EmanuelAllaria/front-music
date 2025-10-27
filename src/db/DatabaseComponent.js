import axios from "axios";

// Obtener token y user_id almacenados en localStorage
const token = localStorage.getItem("token");

// Configurar el token en las solicitudes Axios (opcional)
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export async function checkDuplicateReleaseTitle(titleRelease) {
  const user_id = localStorage.getItem("user_id");
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_API}api/releases/${titleRelease}/${user_id}`
    );
    return response.data.length > 0;
  } catch (error) {
    console.error("Error checking duplicate release title:", error);
    throw error;
  }
}

export async function checkDuplicateMusicsTitle(titleMusic, release_id) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_API}api/musics/${titleMusic}/${release_id}`
    );
    return response.data.length > 0;
  } catch (error) {
    console.error("Error checking duplicate release title:", error);
    throw error;
  }
}

export async function getMysql(user_id) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_API}api/releases?user_id=${user_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getMysqlMusics(release_id) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_API}api/musics?release_id=${release_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function postMysql(data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_API}api/releases`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log("Data added successfully");
    return response.data;
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
}

export async function postMysqlMusics(data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_API}api/musics`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log("Data added successfully");
    return response.data;
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
}

export async function putMysql(versionId, data) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_URL_API}api/releases/${versionId}`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log("Data updated successfully");
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

export async function putMysqlMusics(musicId, data) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_URL_API}api/musics/${musicId}`,
      data
    );

    console.log("Data updated successfully");
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

export async function putMysqlPago(versionId, data) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_URL_API}api/releases/pago/${versionId}`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log("Data updated successfully");
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

export async function deleteMysql(versionId) {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_URL_API}api/releases/${versionId}`
    );
    console.log("Data deleted successfully");
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
}

export async function deleteMysqlMusics(musicId) {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_URL_API}api/musics/${musicId}`
    );
    console.log("Data deleted successfully");
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
}
