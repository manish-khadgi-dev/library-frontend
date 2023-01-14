import axios from "axios";

const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : process.env.REACT_APP_ROOT_URL;
const userEp = baseApiUrl + "/user";
const bookEp = baseApiUrl + "/book";

// ===========USER_FROM_SESSION_STORAGE================
const getUserFromSessionStorage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    return user?._id;
  }
  return;
};

//=================================== USER API
export const registerNewUser = async (userData) => {
  try {
    const { data } = await axios.post(userEp, userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//================login users
export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userEp + "/login", userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// ============
//   BOOKS
// ============

export const addBook = async (bookInfo) => {
  try {
    const userId = getUserFromSessionStorage();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first to add Books",
      };
    }

    const { data } = await axios.post(bookEp, bookInfo, {
      headers: {
        Authorization: userId,
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getbooks = async () => {
  try {
    const userId = getUserFromSessionStorage();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first to add Books",
      };
    }

    const { data } = await axios.get(bookEp, {
      headers: {
        Authorization: userId,
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
