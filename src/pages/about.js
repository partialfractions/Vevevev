import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { Link } from "gatsby";

export default () => {
  //   const post = data.markdownRemark;
  const resumeItems = [
    {
      company: "Facebook",
      role: "Frontend Engineering Intern",
      date: "Aug - Dec 2020",
      team: "Stories and Rooms Web",
      tech: "React, Javascript",
    },
    {
      company: "Facebook",
      role: "Frontend Engineering Intern",
      date: "Jan - Mar 2020",
      team: "Recruiting Products",
      tech: "React, Javascript, PHP",
    },
    {
      company: "Zynga",
      role: "Software Engineering Intern",
      date: "May - Aug 2019",
      team: "Words with Friends",
      tech: "React Native, Typescript",
    },
    {
      company: "Flipp",
      role: "Software Engineering Intern",
      date: "May - Aug 2018",
      team: "Item Data Platform",
      tech: "Ruby, Rails",
    },
  ];
  const fun = ["Learning about skincare and makeup", "Cooking"];

  return (
    <Layout>
      <Link
        to={`/`}
        style={{ position: "-webkit-sticky", position: "sticky", top: 55 }}
      >
        <h1
          style={{
            color: "#414141",
            display: "inline-block",
          }}
        >
          ←
        </h1>
      </Link>
      <div
        style={{
          color: "#414141",
        }}
      >
        <h1>👋 i'm vevina!</h1>
        <p>
          Computer Science Undergraduate @ University of Waterloo, Class of 2022
        </p>
        <h1 style={{ marginTop: 42 }}>work experience</h1>
        <div>
          <p
            style={{
              display: "inline-block",
              marginRight: 6,
            }}
          >
            Contact me through my email,
          </p>
          <a
            href={"mailto:vevinatrinh@gmail.com"}
            style={{
              color: "#414141",
              display: "inline-block",
              marginRight: 6,
            }}
          >
            vevinatrinh@gmail.com
          </a>
          <p
            style={{
              display: "inline-block",
            }}
          >
            for my full resume.
          </p>
        </div>
        {resumeItems.map((item) => {
          return (
            <div>
              <h3>{item.company}</h3>
              <p>{item.role + ", " + item.team}</p>
              <div>
                <i
                  style={{
                    display: "inline-block",
                    marginRight: 12,
                  }}
                  class="fas fa-hotdog"
                ></i>
                <p
                  style={{
                    display: "inline-block",
                  }}
                >
                  {item.date}
                </p>
              </div>
              <div>
                <i
                  style={{
                    display: "inline-block",
                    marginRight: 12,
                  }}
                  class="fas fa-hotdog"
                ></i>
                <p
                  style={{
                    display: "inline-block",
                  }}
                >
                  {item.tech}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
