import axios from "axios";
import { Config } from "../config";

// import TokenStorage from "@/services/TokenStorageService";
// import { authService } from "./auth";

const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 3000,
});
// Request interceptor for API calls
// api.interceptors.request.use(
//   async (config) => {
//     const token = await TokenStorage.getToken();
//     if (config?.data?._parts) {
//       config.headers = {
//         Authorization: `Bearer ${token}`,
//         Accept: "application/json",
//         "Content-Type": "multipart/form-data",
//       };
//     } else {
//       config.headers = {
//         Authorization: `Bearer ${token}`,
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       };
//     }
//     return config;
//   },
//   (error) => {
//     console.log("request error");
//     Promise.reject(error);
//   }
// );

// Response interceptor for API calls
// api.interceptors.response.use(
//   function (response) {
//     //console.log(response.config.url, response.data)
//     // If the request succeeds, we don't have to do anything and just return the response
//     return response;
//   },
//   function (error) {
//     const errorResponse = error.response;
//     if (error.message === "Network Error") {
//       return Promise.reject({
//         response: {
//           data: { message: "Network Error" },
//           status: 0, //error.response ? error.response.status : null,
//         },
//       });
//     }
//     if (isTokenExpiredError(errorResponse)) {
//       return resetTokenAndReattemptRequest(error);
//     }
//     // If the error is due to other reasons, we just throw it back to axios
//     return new Promise(function (resolve, reject) {
//       reject(error);
//     });
//   }
// );
// function isTokenExpiredError(errorResponse) {
//   // Your own logic to determine if the error is due to JWT token expired returns a boolean value
//   return errorResponse.status === 401;
// }

let isAlreadyFetchingAccessToken = false;

// This is the list of waiting requests that will retry after the JWT refresh complete
let subscribers = [];

// async function resetTokenAndReattemptRequest(error) {
//   try {
//     const { response: errorResponse } = error;
//     const resetToken = await TokenStorage.getToken(); // Your own mechanism to get the refresh token to refresh the JWT token
//     if (!resetToken) {
//       // We can't refresh, throw the error anyway
//       return Promise.reject(error);
//     }
//     /* Proceed to the token refresh procedure
//     We create a new Promise that will retry the request,
//     clone all the request configuration from the failed
//     request in the error object. */
//     const retryOriginalRequest = new Promise((resolve) => {
//       /* We need to add the request retry to the queue
//     since there another request that already attempt to
//     refresh the token */
//       addSubscriber((accesstoken) => {
//         errorResponse.config.headers.Authorization = "Bearer " + accesstoken;
//         resolve(axios(errorResponse.config));
//       });
//     });
//     if (!isAlreadyFetchingAccessToken) {
//       isAlreadyFetchingAccessToken = true;
//       const refreshToken = TokenStorage.getRefreshToken();
//       // const userName = TokenStorage.getUsername();

//       const response = await authService.refreshTokens(refreshToken);
//       if (!response) {
//         return Promise.reject(error);
//       }
//       // console.log(response.data);
//       TokenStorage.storeToken(response.access); // save the newly refreshed token for other requests to use
//       TokenStorage.storeRefreshToken(response.refresh); // save the newly refreshed token for other requests to use

//       // TokenStorage.storeTokenInfo(
//       //   response.AccessToken,
//       //   response.RefreshToken,
//       //   response.UserId,
//       //   response.UserName
//       // ); // save the newly refreshed token for other requests to use

//       const newToken = response.access;
//       isAlreadyFetchingAccessToken = false;
//       onAccessTokenFetched(newToken);
//     }
//     return retryOriginalRequest;
//   } catch (err) {
//     console.log("Error in token reset", err);

//     return Promise.reject(err);
//   }
// }

// function onAccessTokenFetched(accesstoken) {
//   // When the refresh is successful, we start retrying the requests one by one and empty the queue
//   subscribers.forEach((callback) => callback(accesstoken));
//   subscribers = [];
// }

// function addSubscriber(callback) {
//   subscribers.push(callback);
// }

class ApiClient {
  async get(route) {
    return api
      .get(route)
      .then(function (response) {
        // handle success
        // console.log(`Success route - ${route} response `, response.data);
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(`ERROR route - ${route}`, JSON.stringify(error));
        throw error;
      });
  }

  async post(route, params) {
    return api
      .post(route, params)
      .then(function (response) {
        // console.log(
        //   `POST Route Success route - ${route} response ${JSON.stringify(
        //     response.data
        //   )}`
        // );
        return response;
      })
      .catch(function (error) {
        console.log(
          `POST Route Error route - ${route} response ${JSON.stringify(error)}`
        );

        throw error;
      });
  }
  async put(route, params) {
    return api
      .put(route, params)
      .then(function (response) {
        // console.log(
        //   `POST Route Success route - ${route} response ${JSON.stringify(
        //     response.data
        //   )}`
        // );
        return response;
      })
      .catch(function (error) {
        console.log(
          `POST Route Error route - ${route} response ${JSON.stringify(error)}`
        );

        throw error;
      });
  }
  async patch(route, params) {
    return api
      .patch(route, params)
      .then(function (response) {
        // console.log(
        //   `POST Route Success route - ${route} response ${JSON.stringify(
        //     response.data
        //   )}`
        // );
        return response;
      })
      .catch(function (error) {
        console.log(
          `POST Route Error route - ${route} response ${JSON.stringify(error)}`
        );

        throw error;
      });
  }
  async delete(route, params) {
    return api
      .delete(route, params)
      .then(function (response) {
        // console.log(
        //   `POST Route Success route - ${route} response ${JSON.stringify(
        //     response.data
        //   )}`
        // );
        return response;
      })
      .catch(function (error) {
        console.log(
          `POST Route Error route - ${route} response ${JSON.stringify(error)}`
        );

        throw error;
      });
  }
}

export default new ApiClient();
