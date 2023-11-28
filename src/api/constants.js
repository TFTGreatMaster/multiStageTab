// Create static variables related to api
import { DOMAIN_DEVELOVPMENT } from "../utils/constants";

export const HTTP_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const HTTP_HEADER = {
  JSON: { "Content-Type": "application/json" },
};

// Define domain url and method below this line

export const BUSSINESS = {
  GET_DATA: {
    url: `${DOMAIN_DEVELOVPMENT}/profile`,
    method: HTTP_METHOD.GET,
  },
  POST_DATA: {
    url: `${DOMAIN_DEVELOVPMENT}/profile`,
    method: HTTP_METHOD.POST,
  },
  PUT_DATA: {
    url: `${DOMAIN_DEVELOVPMENT}/profile`,
    method: HTTP_METHOD.PUT,
  },
  DELETE_DATA: {
    url: `${DOMAIN_DEVELOVPMENT}/profile`,
    method: HTTP_METHOD.DELETE,
  },
};
