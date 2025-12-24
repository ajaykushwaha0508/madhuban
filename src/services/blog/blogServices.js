import axios from "axios";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getAllBlogs = async () => {
  try {
    const res = await axios.get(`${serverUrl}/api/blogs/all/madhubhan`);
    return res;
  } catch (err) {
    throw Error(err);
  }
};
