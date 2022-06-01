import React from "react";
import "./Blogs.css";
import vsImg from "../../Image/jsVsNode.jpg";
import vsImg2 from "../../Image/jsVsNode2.jpg";
import vsImg3 from "../../Image/jsVsNode3.jpg";
import vsImg4 from "../../Image/jsVsNode4.jpg";

const Blogs = () => {
  return (
    <div className="">
      <div className="container">
        <div>
          <h3 className="text-center my-5 fw-bold blogHeader">Blogs</h3>
          <div className="vsImage bg-clr rounded p-5 my-5 d-flex">
            <img width={'100%'} src={vsImg} alt="" />
            <div className="vImgContainer">
              <h3>1. Difference between javascript and node js ?</h3>
              <div className="d-flex blog-text">
                <div>
                  <h5>JavaScript</h5>
                  <p>
                    Javascript is a programming language that is used for
                    writing scripts on the website. 2) Javascript can only be
                    run in the browsers. 3)It is basically used on the
                    client-side. 4)Javascript is capable enough to add HTML and
                    play with the DOM. 5) Javascript can run in any browser
                    engine as like JS core in safari and Spidermonkey in
                    Firefox. 6)Javascript is used in frontend development. 7)
                    Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                    8) It is the upgraded version of ECMA script that uses
                    Chrome’s V8 engine written in C++.
                  </p>
                </div>
                <div>
                  <h5>JavaScript</h5>
                  <p>
                    Javascript is a programming language that is used for
                    writing scripts on the website. 2) Javascript can only be
                    run in the browsers. 3)It is basically used on the
                    client-side. 4)Javascript is capable enough to add HTML and
                    play with the DOM. 5) Javascript can run in any browser
                    engine as like JS core in safari and Spidermonkey in
                    Firefox. 6)Javascript is used in frontend development. 7)
                    Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                    8) It is the upgraded version of ECMA script that uses
                    Chrome’s V8 engine written in C++.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="vsImage bg-clr rounded p-5 my-5 d-flex">
            <img width={'100%'} src={vsImg2} alt="" />
            <div className="vImgContainer">
              <h3>
                2. When should we use node js and when should use mongodb ?
              </h3>
              <div className="d-flex blog-text">
                <div>
                  <h5>When should we use Nodejs?</h5>
                  <p>
                    Any project needs a programming environment and a runtime
                    library that offers you basic programming tools/support and
                    can compile and/or interpret your code. Nodejs is such as
                    tool for the Javascript programming language. There are
                    other similar tools for other languages such as Python,
                    Java, PHP, C#, C++, Go, etc... So, if you want to write some
                    kind of stand-alone program or server in Javascript, then
                    you can use nodejs for it.
                  </p>
                </div>
                <div>
                  <h5>When should we use MongoDB?</h5>
                  <p>
                    If your application needs the ability to persistently store
                    data in a way that you can efficiently query or update it
                    later, then you would typically use some form of database.
                    There are dozens of popular databases. MongoDB is one such
                    database. MariaDB, MySql, CouchDB, DynamoDB (on AWS),
                    Postgres are examples of other databases. Different
                    databases have different strengths (things they are best at)
                    and different ways of using them so it's a whole different
                    question to choose the right/best database for what you're
                    doing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="vsImage bg-clr rounded p-5 my-5 d-flex">
            <img width={'100%'} src={vsImg3} alt="" />
            <div className="vImgContainer">
              <h3>3. Difference between sql and nosql ?</h3>
              <p className="my-3">
                SQL databases are primarily called as Relational Databases
                (RDBMS); whereas NoSQL database are primarily called as
                non-relational or distributed database.
              </p>
              <div className="d-flex blog-text">
                <div>
                  <h5>SQL</h5>
                  <p>
                    These databases have fixed or static or predefined schema.
                    2) These databases are not suited for hierarchical data
                    storage. 3)These databases are not suited for hierarchical
                    data storage. 4)These databases are best suited for complex
                    queries 5) Vertically Scalable. 6)Follows ACID property.
                  </p>
                </div>
                <div>
                  <h5>NoSQL</h5>
                  <p>
                    Non-relational or distributed database system. 2) They have
                    dynamic schema. 3) These databases are best suited for
                    hierarchical data storage. 4) These databases are not so
                    good for complex queries. 5) Horizontally scalable. 6)
                    Follows CAP(consistency, availability, partition tolerance).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="vsImage bg-clr rounded p-5 my-5 d-flex">
            <img width={'100%'} src={vsImg4} alt="" />
            <div className="vImgContainer">
              <h3>4. What is the purpose of JWT and how does it work ?</h3>
              <div className="d-flex blog-text">
                <div>
                  <h5>What is the purpose of JWT?</h5>
                  <p>
                    JWT, or JSON Web Token, is an open standard used to share
                    security information between two parties — a client and a
                    server. Each JWT contains encoded JSON objects, including a
                    set of claims. JWTs are signed using a cryptographic
                    algorithm to ensure that the claims cannot be altered after
                    the token is issued.
                  </p>
                </div>
                <div>
                  <h5>How JWT Works?</h5>
                  <p>
                    JWTs differ from other web tokens in that they contain a set
                    of claims. Claims are used to transmit information between
                    two parties. What these claims are depends on the use case
                    at hand. For example, a claim may assert who issued the
                    token, how long it is valid for, or what permissions the
                    client has been granted.A JWT is a string made up of three
                    parts, separated by dots (.), and serialized using base64.
                    In the most common serialization format, compact
                    serialization, the JWT looks something like this:
                    xxxxx.yyyyy.zzzzz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
