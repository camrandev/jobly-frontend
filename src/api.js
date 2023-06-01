import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN

  static token = "";

  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  // "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  // "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  // static token =
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  // "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  // "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by . */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
  /** do below logic before getting to this point */

  /** Get list of all companies */
  static async getCompanies(params) {
    //TODO: move out of API function
    params = !params ? "" : { nameLike: params };
    console.log("params in getCompanies", params);
    let res = await this.request(`companies`, params);
    return res.companies;
  }

  /** Get all jobs */
  static async getJobs(params) {
    //TODO: move out of API function
    params = !params ? "" : { title: params };
    let res = await this.request(`jobs`, params);
    return res.jobs;
  }

  static async login({ username, password }) {
    const credentials = { username, password };
    let res = await this.request(`auth/token`, credentials, "post");
    return res.token
  }

  static async getUserInfo(username) {
    console.log("username is ", username);
    let res = await this.request(`users/${username}`);
    return res.user
  }

/**takes a user object */
  static async signUpUser(user) {
    let res = await this.request(`auth/register`, user, "post");
    console.log("res.token is", res.token)
    return res.token
  }

  static async updateUser(userInfo, username) {
    console.log("userInfo, username is>>", userInfo, username)
    let res = await this.request(`user/${username}`, userInfo, "patch");
    console.log("res is", res)
    console.log("res.user is", res.user);
    return res
  }
}

export default JoblyApi;
