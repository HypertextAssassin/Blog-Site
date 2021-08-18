import { Injectable } from "@angular/core";
import { IBlog } from "src/models/blog";

@Injectable({
    providedIn: 'root'
})
export class DataService{

    GetAllBlogs(): IBlog[]{
        return [{
            "blogId": 1,
            "blogTitle" : "Blog 1",
            "blogCategory" : "Technology",
            "blogContent": "This is Blog 1"
        },
        {
            "blogId": 2,
            "blogTitle" : "Blog 2",
            "blogCategory" : "Technology",
            "blogContent": "This is Blog 2"
        },
        {
            "blogId": 3,
            "blogTitle" : "Blog 3",
            "blogCategory" : "Technology",
            "blogContent": "This is Blog 3"
        },
        {
            "blogId": 4,
            "blogTitle" : "Blog 4",
            "blogCategory" : "Technology",
            "blogContent": "This is Blog 4"
        },
        {
            "blogId": 5,
            "blogTitle" : "Blog 5",
            "blogCategory" : "Technology",
            "blogContent": "This is Blog 5"
        },
        {
            "blogId": 6,
            "blogTitle" : "Blog 6",
            "blogCategory" : "Technology",
            "blogContent": "This is Blog 6"
        }];
    }

}