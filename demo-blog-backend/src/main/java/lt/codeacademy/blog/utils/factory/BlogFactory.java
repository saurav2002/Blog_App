package lt.codeacademy.blog.utils.factory;

import lt.codeacademy.blog.entity.BlogUser;
import lt.codeacademy.blog.entity.Comment;
import lt.codeacademy.blog.entity.Post;

import java.util.ArrayList;
import java.util.List;

public class BlogFactory {
    public static List<BlogUser> BLOG_USERS;
    public static List<Post> POSTS;

    static {
        // Initialize lists as empty
        BLOG_USERS = new ArrayList<>();
        POSTS = new ArrayList<>();
    }

    private BlogFactory() {
        // Private constructor to prevent instantiation
    }

    public static BlogUser generateBlogAdmin() {
        return new BlogUser(
                "admin",
                "ADMIN",
                "$2a$10$JM11cOpmVZMhEIjwp4gfTuztM2YUEs7FbWJYrpG6pLDEk6NYib/TO",
                "admin@mail.com"
        );
    }

    public static BlogUser generateBlogUser(String name, String email) {
        return new BlogUser(
                name,
                "USER",
                "$2a$12$8wt5PvXjFtd0dAg3p/.AL.5b2rSYN7CvZKAgb/yNvLkUHt0oWxGIS",
                email
        );
    }

    public static void addBlogUser(BlogUser user) {
        BLOG_USERS.add(user);
    }

    public static void addPost(Post post) {
        POSTS.add(post);
    }

    public static void addCommentToPost(Post post, Comment comment) {
        post.getComments().add(comment);
        comment.setPost(post);
    }
}
