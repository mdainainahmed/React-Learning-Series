import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../conf/conf.js";


// slug: post.$id

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);

    this.bucket = new Storage(this.client);
  }

  //  CRUD operations

  // create post
  async createPost({ userId, title, slug, content, featuredImage, status }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionId,
        slug, // document id
        {
          userId,
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Service :: createPost :: Error :: ", error);
    }
  }

  // get posts for all post status = active
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Service :: getPosts :: Error :: ", error);
    }
  }

  // get post by document id
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Service :: getPost :: Error :: ", error);
    }
  }

  // update post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Service :: updatePost :: Error :: ", error);
    }
  }

  // delete post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Service :: deletePost :: Error :: ", error);
      return false;
    }
  }

  // upload file
  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log("Service :: uploadFile :: Error :: ", error);
    }
  } 

  // delete file
  async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true;
    } catch (error) {
      console.log("Service :: deleteFile :: Error :: ", error);
      return false;
    }
  }

  // get file preview - return file
  getFilePreview(fileId){
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }

}

const service = new Service();
export default service;
