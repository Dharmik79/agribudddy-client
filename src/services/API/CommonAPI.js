import { toast } from "react-toastify";
import { api, apiImage } from "./utilService";

export const getResponse = async (url, data) => {
  const res = await api
    .get(url, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response?.status == 403) {
        return err?.response;
      }
      return err?.response?.data;
    });
  return res;
};

export const postResponse = async (url, data) => {
  const response = await api
    .post(url, data)
    .then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      }
      return res.data;
    })
    .catch((err) => {
      if (err.response.status === 402 || err.response.status === 400) {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        if (err.response.status === 402) {
          setTimeout(function () {
            window.location.href = "/Subscription";
          }, 2000);
        }
      }
      return err.response.data;
    });
  return response;
};

export const postChatResponse = async (url, data) => {
  const response = await api
    .post(url, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response.status === 402) {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        setTimeout(function () {
          window.location.href = "/Subscription";
        }, 2000);
      }
      return err.response.data;
    });
  return response;
};

export const putResponse = async (url, data) => {
  const response = await api
    .put(url, data)
    .then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      }
      return res.data;
    })
    .catch((err) => {
      if (err?.response?.status === 400) {
        toast.error(err?.response?.data?.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        return err?.response?.data;
      }
    });
  return response;
};

export const deleteResponse = async (url, id) => {
  const response = await api.delete(url, id).then((res) => {
    if (res.status === 200) {
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
    return res.data;
  });
  return response;
};

export const postImageResponse = (url, data) => {
  const response = apiImage.post(url, data);
  if (response.status === 200) {
    toast.success(response.data.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  }
  return response;
};
