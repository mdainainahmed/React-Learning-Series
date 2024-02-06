/* eslint-disable no-useless-catch */
import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";
/*
const client = new Client()
  .setEndpoint(conf.appwriteUrl) // Your API Endpoint
  .setProject(conf.appwriteProjectId); // Your project ID

const account = new Account(client);

// signup
const promise = account.create(
    ID.unique(),
    "email@example.com",
    ""
);

promise.then(
  function (response) {
    console.log(response); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);

// login
const promise = account.createEmailSession('email@example.com', 'password');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
*/
// Production grade:
// We created our own Services so when we shift to another BackendAAS or our own backend
// No need to change variables everywhere in our code base
// Just make changes in our Services in class AuthService based on BAAS or our backend
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID
    this.account = new Account(this.client);
  }

  // signup / createAccount service
  // using async await as we see that its a promise in above appwrite snipet
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      //   checker
      if (userAccount) {
        // call another method
        // we want that is useAccount exist login directly
        return this.login({ email, password });
      } else return userAccount;
    } catch (error) {
      // throw error;
      console.log("Appwrite service :: createAccount :: error", error);
    }
  }

  // login / createSession service
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Appwrite service :: login :: error", error);
    }
  }

  // getCurrentUser service
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
    return null;
  }

  //   logout / deleteSession service
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
