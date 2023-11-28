import { fetchApi } from "../apiFactory";
import { BUSSINESS } from "../constants";

const { GET_DATA, POST_DATA, PUT_DATA, DELETE_DATA } = BUSSINESS;

export const businessApi = () => {
  const getApi = async (params) => {
    // TODO: use transform here
    return await fetchApi(GET_DATA, params);
  };
  const postApi = async (body) => {
    // TODO: use transform here
    return await fetchApi(POST_DATA, {}, body);
  };
  const putApi = async (id, body) => {
    // TODO: use transform here
    return await fetchApi(PUT_DATA, { id }, body);
  };
  const deleteApi = async (id) => {
    // TODO: use transform here
    return await fetchApi(DELETE_DATA, { id });
  };

  return {
    getApi,
    postApi,
    putApi,
    deleteApi,
  };
};
