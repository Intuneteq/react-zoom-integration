import axios from "axios";

export default async function getTokens(lessonId) {
  const endpoint = `http://localhost:5000/api/v1.1/lessons/${lessonId}/start`;

  try {
    const res = await axios.get(endpoint, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZmZjFjZDhkLTEyN2EtNDgzYS1iOTJhLWI1NDQwZTlkYTc5OCIsInJvbGUiOiJUVVRPUiIsImlhdCI6MTY4OTkwODY0OSwiZXhwIjoxNjg5OTk1MDQ5fQ.VgggD3rni_vWlv-GRa_2mwl3Egh0bgHwBfiTvf7VXMc",
      },
    });

    return res.data.data;
  } catch (error) {
    console.error(error);
    // throw new Error(error.message);
  }
}
