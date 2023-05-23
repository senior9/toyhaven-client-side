import React from "react";
import "./Blog.css";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Blog = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="custom-bg">
        <div class="wrapper">
          <h1>Question 1</h1>
          <p>What is an access token and refresh token? </p>
          <div class="item">
            <input id="one" type="checkbox" />
            <label for="one">?</label>
            <h2>Question One</h2>
            <div class="description">
              <p>
                An access token is a credential that is used to authenticate and
                authorize a user in a system. It is typically a short-lived
                token that grants access to specific resources or APIs. A
                refresh token is a long-lived token that is used to obtain a new
                access token when the current access token expires. Access
                tokens are usually stored in memory or in browser storage (e.g.,
                localStorage or sessionStorage) on the client-side. Refresh
                tokens, on the other hand, should be securely stored, preferably
                in an HTTP-only cookie or a secure storage mechanism provided by
                the platform.
              </p>
            </div>
          </div>
          <div class="item">
            <p>Compare SQL and NoSQL databases?</p>
            <input id="two" type="checkbox" />
            <label for="two">?</label>

            <div class="description">
              <p>
                SQL (Structured Query Language) databases are traditional
                relational databases that store data in tables with pre-defined
                schemas. They use structured query language for defining and
                manipulating data. SQL databases provide ACID (Atomicity,
                Consistency, Isolation, Durability) guarantees and are suitable
                for complex transactions and relationships between data. NoSQL
                (Not Only SQL) databases, on the other hand, are non-relational
                databases that provide flexible data models and scalable
                performance. They store data in various formats like key-value
                pairs, documents, graphs, or wide-column stores. NoSQL databases
                sacrifice some of the ACID properties for scalability and
                flexibility, making them suitable for handling large amounts of
                unstructured or semi-structured data and distributed systems.
              </p>
            </div>
          </div>
          <div class="item">
            <p>What is express js? What is Nest JS?</p>
            <input id="three" type="checkbox" />
            <label for="three">?</label>

            <div class="description">
              <p>
                Express.js: Express.js is a popular web application framework
                for Node.js. It provides a simple and minimalist approach to
                building web servers and APIs. Express.js offers a set of robust
                features and middleware that allows developers to handle routes,
                requests, and responses efficiently. It also supports various
                templating engines for generating dynamic HTML pages. Nest.js:
                Nest.js is a progressive and scalable TypeScript-based web
                application framework. It is built on top of Express.js and
                provides an opinionated architecture that promotes modularity
                and maintainability. Nest.js leverages decorators, dependency
                injection, and modules to create scalable and extensible
                server-side applications. It is often used for building
                enterprise-grade applications and follows a similar design
                pattern to Angular.
              </p>
            </div>
          </div>
          <div class="item">
            <p>What is MongoDB aggregate and how does it work</p>
            <input id="four" type="checkbox" />
            <label for="four">?</label>

            <div class="description">
              <p>
              MongoDB Aggregate is a powerful aggregation framework provided by MongoDB for data processing and analysis. It allows you to perform advanced operations like filtering, grouping, sorting, joining, and transforming data within the database. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blog;
