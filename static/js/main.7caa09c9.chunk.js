(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    13: function(e, a, t) {},
    14: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        l = t.n(n),
        i = t(7),
        r = t.n(i),
        s = (t(13), t(1)),
        c = t(2),
        o = t(4),
        m = t(3),
        u = t(5),
        p = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "header",
                      {
                        id: "home"
                      },
                      l.a.createElement(
                        "nav",
                        {
                          id: "nav-wrap"
                        },
                        l.a.createElement(
                          "a",
                          {
                            className: "mobile-btn",
                            href: "#nav-wrap",
                            title: "Show navigation"
                          },
                          "Show navigation"
                        ),
                        l.a.createElement(
                          "a",
                          {
                            className: "mobile-btn",
                            href: "#",
                            title: "Hide navigation"
                          },
                          "Hide navigation"
                        ),
                        l.a.createElement(
                          "ul",
                          {
                            id: "nav",
                            className: "nav"
                          },
                          l.a.createElement(
                            "li",
                            {
                              className: "current"
                            },
                            l.a.createElement(
                              "a",
                              {
                                className: "smoothscroll",
                                href: "#home"
                              },
                              "Home"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              {
                                className: "smoothscroll",
                                href: "#about"
                              },
                              "About"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              {
                                className: "smoothscroll",
                                href: "#resume"
                              },
                              "Resume"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              {
                                className: "smoothscroll",
                                href: "#portfolio"
                              },
                              "Works"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              {
                                className: "smoothscroll",
                                href: "#contact"
                              },
                              "Contact"
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "row banner"
                        },
                        l.a.createElement(
                          "div",
                          {
                            className: "banner-text"
                          },
                          l.a.createElement(
                            "h1",
                            {
                              className: "responsive-headline"
                            },
                            "I am ",
                            e.name,
                            "."
                          ),
                          l.a.createElement(
                            "h3",
                            {
                              style: {
                                color: "#fff",
                                fontFamily: "sans-serif "
                              }
                            },
                            "I am a ",
                            e.role,
                            ".",
                            e.roleDescription
                          ),
                          l.a.createElement("hr", null),
                          l.a.createElement(
                            "ul",
                            {
                              className: "social"
                            },
                            e.socialLinks &&
                              e.socialLinks.map(function(e) {
                                return l.a.createElement(
                                  "li",
                                  {
                                    key: e.name
                                  },
                                  l.a.createElement(
                                    "a",
                                    {
                                      href: e.url,
                                      target: "_blank"
                                    },
                                    l.a.createElement("i", {
                                      className: e.className
                                    })
                                  )
                                );
                              })
                          )
                        )
                      ),
                      l.a.createElement(
                        "p",
                        {
                          className: "scrolldown"
                        },
                        l.a.createElement(
                          "a",
                          {
                            className: "smoothscroll",
                            href: "#about"
                          },
                          l.a.createElement("i", {
                            className: "icon-down-circle"
                          })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            a
          );
        })(n.Component),
        d = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    {
                      id: "about"
                    },
                    l.a.createElement(
                      "div",
                      {
                        className: "row"
                      },
                      l.a.createElement(
                        "div",
                        {
                          className: "three columns"
                        },
                        l.a.createElement("img", {
                          className: "profile-pic",
                          src: "images/profilepic.jpg",
                          alt: ""
                        })
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "nine columns main-col"
                        },
                        l.a.createElement("h2", null, "About Me"),
                        l.a.createElement("p", null, e.aboutme),
                        l.a.createElement(
                          "div",
                          {
                            className: "row"
                          },
                          l.a.createElement(
                            "div",
                            {
                              className: "columns contact-details"
                            },
                            l.a.createElement("h2", null, "Contact Details"),
                            l.a.createElement(
                              "p",
                              {
                                className: "address"
                              },
                              l.a.createElement("span", null, e.name),
                              l.a.createElement("br", null),
                              l.a.createElement("span", null, e.address),
                              l.a.createElement("br", null),
                              l.a.createElement("span", null, e.website)
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            a
          );
        })(n.Component),
        h = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    {
                      id: "resume"
                    },
                    l.a.createElement(
                      "div",
                      {
                        className: "row education"
                      },
                      l.a.createElement(
                        "div",
                        {
                          className: "three columns header-col"
                        },
                        l.a.createElement(
                          "h1",
                          null,
                          l.a.createElement("span", null, "Education")
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "nine columns main-col"
                        },
                        e.education &&
                          e.education.map(function(e) {
                            return l.a.createElement(
                              "div",
                              {
                                className: "row item"
                              },
                              l.a.createElement(
                                "div",
                                {
                                  className: "twelve columns"
                                },
                                l.a.createElement("h3", null, e.UniversityName),
                                l.a.createElement(
                                  "p",
                                  {
                                    className: "info"
                                  },
                                  e.specialization,
                                  l.a.createElement("span", null, "\u2022"),
                                  " ",
                                  l.a.createElement(
                                    "em",
                                    {
                                      className: "date"
                                    },
                                    e.MonthOfPassing,
                                    " ",
                                    e.YearOfPassing
                                  )
                                ),
                                l.a.createElement("p", null, e.Achievements)
                              )
                            );
                          })
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "row certification"
                      },
                      l.a.createElement(
                        "div",
                        {
                          className: "three columns header-col"
                        },
                        l.a.createElement(
                          "h1",
                          null,
                          l.a.createElement("span", null, "Certifications")
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "nine columns main-col"
                        },
                        e.certification &&
                          e.certification.map(function(e) {
                            return l.a.createElement(
                              "div",
                              {
                                className: "row item"
                              },
                              l.a.createElement(
                                "div",
                                {
                                  className: "twelve columns"
                                },
                                l.a.createElement("h3", null, e.specialization),
                                l.a.createElement(
                                  "p",
                                  {
                                    className: "info"
                                  },
                                  e.CertificateAuthority,
                                  l.a.createElement("span", null, "\u2022"),
                                  " ",
                                  l.a.createElement(
                                    "em",
                                    {
                                      className: "date"
                                    },
                                    e.MonthOfPassing,
                                    " ",
                                    e.YearOfPassing
                                  )
                                ),
                                l.a.createElement("p", null, e.Achievements)
                              )
                            );
                          })
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "row work"
                      },
                      l.a.createElement(
                        "div",
                        {
                          className: "three columns header-col"
                        },
                        l.a.createElement(
                          "h1",
                          null,
                          l.a.createElement("span", null, "Work")
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "nine columns main-col"
                        },
                        e.work &&
                          e.work.map(function(e) {
                            return l.a.createElement(
                              "div",
                              {
                                className: "row item"
                              },
                              l.a.createElement(
                                "div",
                                {
                                  className: "twelve columns"
                                },
                                l.a.createElement("h3", null, e.CompanyName),
                                l.a.createElement(
                                  "p",
                                  {
                                    className: "info"
                                  },
                                  e.specialization,
                                  l.a.createElement("span", null, "\u2022"),
                                  " ",
                                  l.a.createElement(
                                    "em",
                                    {
                                      className: "date"
                                    },
                                    e.MonthOfStarting,
                                    " ",
                                    e.YearOfStarting,
                                    " -",
                                    " ",
                                    e.MonthOfLeaving,
                                    " ",
                                    e.YearOfLeaving
                                  )
                                ),
                                l.a.createElement("p", null, e.Achievements)
                              )
                            );
                          })
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "row skill"
                      },
                      l.a.createElement(
                        "div",
                        {
                          className: "three columns header-col"
                        },
                        l.a.createElement(
                          "h1",
                          null,
                          l.a.createElement("span", null, "Skills")
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "nine columns main-col"
                        },
                        l.a.createElement("p", null, e.skillsDescription),
                        l.a.createElement(
                          "div",
                          {
                            className: "bars"
                          },
                          l.a.createElement(
                            "ul",
                            {
                              className: "skills"
                            },
                            e.skills &&
                              e.skills.map(function(e) {
                                return l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement("span", {
                                    className: "bar-expand ".concat(
                                      e.skillname.toLowerCase()
                                    )
                                  }),
                                  l.a.createElement("em", null, e.skillname)
                                );
                              })
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            a
          );
        })(n.Component),
        f = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    {
                      id: "portfolio"
                    },
                    l.a.createElement(
                      "div",
                      {
                        className: "row"
                      },
                      l.a.createElement(
                        "div",
                        {
                          className: "twelve columns collapsed"
                        },
                        l.a.createElement(
                          "h1",
                          null,
                          "Check Out Some of My Work."
                        ),
                        l.a.createElement(
                          "div",
                          {
                            id: "portfolio-wrapper",
                            className: "bgrid-quarters s-bgrid-thirds cf"
                          },
                          e.portfolio &&
                            e.portfolio.map(function(e) {
                              return l.a.createElement(
                                "div",
                                {
                                  className: "columns portfolio-item"
                                },
                                l.a.createElement(
                                  "div",
                                  {
                                    className: "item-wrap"
                                  },
                                  l.a.createElement(
                                    "a",
                                    {
                                      href: "#modal-01"
                                    },
                                    l.a.createElement("img", {
                                      src: "".concat(e.imgurl),
                                      className: "item-img"
                                    }),
                                    l.a.createElement(
                                      "div",
                                      {
                                        className: "overlay"
                                      },
                                      l.a.createElement(
                                        "div",
                                        {
                                          className: "portfolio-item-meta"
                                        },
                                        l.a.createElement("h5", null, e.name),
                                        l.a.createElement(
                                          "p",
                                          null,
                                          e.description
                                        )
                                      )
                                    )
                                  )
                                )
                              );
                            })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            a
          );
        })(n.Component),
        E = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    {
                      id: "contact"
                    },
                    l.a.createElement(
                      "div",
                      {
                        className: "row section-head"
                      },
                      l.a.createElement(
                        "div",
                        {
                          className: "ten columns"
                        },
                        l.a.createElement(
                          "p",
                          {
                            className: "lead"
                          },
                          "Feel free to contact me for any work or suggestions below"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "row"
                      },
                      l.a.createElement(
                        "aside",
                        {
                          className: "eigth columns footer-widgets"
                        },
                        l.a.createElement("div", {
                          className: "widget"
                        })
                      )
                    )
                  );
                }
              }
            ]),
            a
          );
        })(n.Component),
        g = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "footer",
                    null,
                    l.a.createElement(
                      "div",
                      {
                        className: "row"
                      },
                      l.a.createElement(
                        "div",
                        {
                          className: "twelve columns"
                        },
                        l.a.createElement(
                          "ul",
                          {
                            className: "social-links"
                          },
                          e.socialLinks &&
                            e.socialLinks.map(function(e) {
                              return l.a.createElement(
                                "li",
                                null,
                                l.a.createElement(
                                  "a",
                                  {
                                    href: e.url
                                  },
                                  l.a.createElement("i", {
                                    className: e.className
                                  })
                                )
                              );
                            })
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          id: "go-top"
                        },
                        l.a.createElement(
                          "a",
                          {
                            className: "smoothscroll",
                            title: "Back to Top",
                            href: "#home"
                          },
                          l.a.createElement("i", {
                            className: "icon-up-open"
                          })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            a
          );
        })(n.Component),
        v = {
          imagebaseurl: "https://redorbluepill.github.io/",
          name: "Martin Brose",
          role: "Financial Risk Management Consultant and Data Scientist",
          linkedinId: "martinbrose",
          skypeid: "martinbrose",
          roleDescription:
            " I like working on data science challenges, playing around with machine learning, learning about new technologies or simply riding my racing bicycle in my free time.",
          socialLinks: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/in/martinbrose/",
              className: "fab fa-linkedin"
            },
            {
              name: "github",
              url: "http://github.com/redorbluepill",
              className: "fab fa-github"
            },
            {
              name: "aws cloud practitioner",
              url: "https://learn.acloud.guru/profile/redorbluepill",
              className: "fab fa-aws"
            },
            {
              name: "freecodecamp",
              url: "https://www.freecodecamp.org/redorbluepill",
              className: "fab fa-free-code-camp"
            },
            {
              name: "kaggle",
              url: "https://www.kaggle.com/redorbluepill",
              className: "fab fa-kaggle"
            },
            {
              name: "strava",
              url: "https://www.strava.com/athletes/1735718",
              className: "fab fa-strava"
            },
            {
              name: "skype",
              url: "http://skype.com/martinbrose",
              className: "fab fa-skype"
            }
          ],
          aboutme:
            "I am currently a consultant in Financial Services and a Data Scientist.",
          address: "United Kongdom",
          website: "https://redorbluepill.github.io",
          education: [
            {
              UniversityName: "CFA Institute",
              specialization: "CFA Charterholder",
              MonthOfPassing: "Sep",
              YearOfPassing: "2013"
            },
            {
              UniversityName:
                "Johann Wolfgang Goethe-Universitaet Frankfurt/Main",
              specialization: "Business Administration, major in Finance",
              MonthOfPassing: "Jan",
              YearOfPassing: "2005"
            },
            {
              UniversityName: "GARP",
              specialization: "Certified FRM",
              MonthOfPassing: "Jun",
              YearOfPassing: "2004"
            }
          ],
          certification: [
            {
              CertificateAuthority: "Amazon Web Services (AWS)",
              specialization: "AWS Certified Cloud Practitioner",
              MonthOfPassing: "Jul",
              YearOfPassing: "2019"
            },
            {
              CertificateAuthority: "DataCamp",
              specialization: "Data Scientist with Python",
              MonthOfPassing: "Apr",
              YearOfPassing: "2019"
            },
            {
              CertificateAuthority: "Scrum.org",
              specialization: "Professional Scrum Product Owner I (PSPO I)",
              MonthOfPassing: "Apr",
              YearOfPassing: "2018"
            },
            {
              CertificateAuthority: "Scrum.org",
              specialization: "Professional Scrum Master I (PSM I)",
              MonthOfPassing: "Mar",
              YearOfPassing: "2018"
            },
            {
              CertificateAuthority: "APMG Internation",
              specialization: "PRINCE2 Practitioner",
              MonthOfPassing: "Nov",
              YearOfPassing: "2011"
            }
          ],
          work: [
            {
              CompanyName: "MBrose Consulting LTD",
              specialization:
                "Independent project contractor for Finance Transformation",
              Location: "London, United Kingdom",
              MonthOfStarting: "Oct",
              YearOfStarting: "2015",
              MonthOfLeaving: "",
              YearOfLeaving: "current",
              Achievements:
                "I worked on projects for Deutsche Bank, CFA Institute, and Forensic Risk Alliance."
            },
            {
              CompanyName: "KPMG",
              specialization: "Financial Risk Management Consulting",
              Location: "Frankfurt, Germany & Sydney, Australia",
              MonthOfStarting: "Oct",
              YearOfStarting: "2004",
              MonthOfLeaving: "Mar",
              YearOfLeaving: "2015",
              Achievements:
                "I started in 2004 within Audit Financial Services in Germany and Australia. I moved to Financial Risk Management Consulting after approx 5 years and worked on projects in Australia, Germany, United Kingdom, and other European countries."
            }
          ],
          skillsDescription: "My programming skills are as follows",
          skills: [
            {
              skillname: "Python"
            },
            {
              skillname: "VBA"
            },
            {
              skillname: "Shell"
            },
            {
              skillname: "JavaScript"
            },
            {
              skillname: "React"
            },
            {
              skillname: "Perl"
            }
          ],
          portfolio: [
            {
              name: "project1",
              description: "mobileapp",
              imgurl: "images/portfolio/origami.jpg"
            },
            {
              name: "project2",
              description: "mobileapp",
              imgurl: "images/portfolio/origami.jpg"
            },
            {
              name: "project3",
              description: "mobileapp",
              imgurl: "images/portfolio/origami.jpg"
            },
            {
              name: "project4",
              description: "mobileapp",
              imgurl: "images/portfolio/origami.jpg"
            }
          ],
          testimonials: [
            {
              description: "This is a sample testimonial",
              name: "Some technical guy"
            },
            {
              description: "This is a sample testimonial",
              name: "Some technical guy"
            }
          ]
        },
        b = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    {
                      className: "App"
                    },
                    l.a.createElement(p, {
                      resumeData: v
                    }),
                    l.a.createElement(d, {
                      resumeData: v
                    }),
                    l.a.createElement(h, {
                      resumeData: v
                    }),
                    l.a.createElement(f, {
                      resumeData: v
                    }),
                    l.a.createElement(E, {
                      resumeData: v
                    }),
                    l.a.createElement(g, {
                      resumeData: v
                    })
                  );
                }
              }
            ]),
            a
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(l.a.createElement(b, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    8: function(e, a, t) {
      e.exports = t(14);
    }
  },
  [[8, 1, 2]]
]);
//# sourceMappingURL=main.7caa09c9.chunk.js.map
