(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(10),i=a(9),c=a(11),l=a(0),s=a.n(l),m=a(16),u=a.n(m),p=a(13),h=a(3),d=a(14),b=(a(45),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(p.a,{basename:""},s.a.createElement("div",{id:"container1"},s.a.createElement(h.a,{path:"/",exact:!0,component:E}),s.a.createElement(h.a,{path:"/about/",exact:!0,component:g}),s.a.createElement(h.a,{path:"/work/",exact:!0,component:k}),s.a.createElement(h.a,{path:"/contact/",exact:!0,component:v})),s.a.createElement("div",{id:"container2"},s.a.createElement(f,{homeOnClick:function(){e.setState({activePage:"home"})},aboutOnClick:function(){e.setState({activePage:"about"})},workOnClick:function(){e.setState({activePage:"work"})},contactOnClick:function(){e.setState({activePage:"contact"})}})))}}]),t}(s.a.Component)),f=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"navigationBar",className:"inner-container"},s.a.createElement(p.b,{to:"/"},s.a.createElement("button",{className:"navigation-button",onClick:function(){e.props.homeOnClick()}},"Home")),s.a.createElement(p.b,{to:"/about/"},s.a.createElement("button",{className:"navigation-button",onClick:function(){e.props.aboutOnClick()}},"About Me")),s.a.createElement(p.b,{to:"/work/"},s.a.createElement("button",{className:"navigation-button",onClick:function(){e.props.workOnClick()}},"My Work")),s.a.createElement(p.b,{to:"/contact/"},s.a.createElement("button",{className:"navigation-button",onClick:function(){e.props.contactOnClick()}},"Contact")))}}]),t}(s.a.Component),E=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(d.CSSTransitionGroup,{transitionName:"fadeInUp",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},s.a.createElement("div",{id:"sayHello",className:"inner-container"},s.a.createElement("h1",{id:"helloMessage"},"Hi! My name is Gautham!")))}}]),t}(s.a.Component),g=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(d.CSSTransitionGroup,{transitionName:"fadeInUp",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},s.a.createElement("div",{id:"aboutMe",className:"outer-container"},s.a.createElement("div",{id:"dpContainer"},s.a.createElement("img",{id:"myPic",src:"/assets/DP2.jpg",alt:"Thats me!"})),s.a.createElement("h1",{id:"aboutMeHeading",className:"subtopic"},"About Me"),s.a.createElement("p",null,"My name is Gautham Kumar, and I currently study Computer Science and Engineering at NIT Trichy. I spend most of my time coding and building things. I like to think that my work has the potential to help someone in some corner of the world and this thought is what motivates me everyday."),s.a.createElement("p",null,"When I'm not coding, I usually spend my spare time listening to and playing music. Music is a huge part of who I am. I'm a huge Coldplay and Ed Sheeran fan and I also play the piano and the guitar as much as I can.")))}}]),t}(s.a.Component),k=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(d.CSSTransitionGroup,{transitionName:"fadeInUp",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},s.a.createElement("div",{id:"workedOn",className:"outer-container"},s.a.createElement("h1",{className:"subtopic"},"What I've Worked On"),s.a.createElement("p",null,"As a developer, I've worked on a wide range of platforms. Starting my journey as an algorithmic programmer, I ventured into iOS Application Development during my fresher year of college."),s.a.createElement("p",null,"I've since worked on both frontend and backend web development as well. I like to think of myself as a budding full stack developer, always ready to pick up something new."),s.a.createElement("p",null,"To know more about my work, check out my resume!"),s.a.createElement("p",{className:"paragraph-center"},s.a.createElement("a",{href:"/assets/Gautham Kumar - Resume.pdf"},s.a.createElement("button",{id:"resumeButton"},"Resume",s.a.createElement("i",{className:"far fa-file-pdf resumeIcon"}))))))}}]),t}(s.a.Component),v=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(d.CSSTransitionGroup,{transitionName:"fadeInUp",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},s.a.createElement("div",{id:"contactMe",className:"outer-container"},s.a.createElement("h1",{className:"subtopic"},"Contact"),s.a.createElement("p",{className:"paragraph-center"},"Come and say hello!"),s.a.createElement("div",{className:"inner-container",id:"socialLinks"},s.a.createElement("span",null,s.a.createElement("a",{href:"https://www.linkedin.com/in/gautham-kumar",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{id:"linkedinLogo",className:"fab fa-linkedin-in textLogo"}))),s.a.createElement("span",null,s.a.createElement("a",{href:"https://www.github.com/gauthamk97",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{id:"githubLogo",className:"fab fa-github textLogo"}))),s.a.createElement("span",null,s.a.createElement("a",{href:"https://www.facebook.com/heygautham",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{id:"facebookLogo",className:"fab fa-facebook-f textLogo"}))),s.a.createElement("span",null,s.a.createElement("a",{href:"mailto:kgautham1997@gmail.com",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{id:"emailLogo",className:"fas fa-envelope textLogo"}))),s.a.createElement("span",null,s.a.createElement("a",{href:"https://twitter.com/Gautham_Kumar97",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{id:"twitterLogo",className:"fab fa-twitter textLogo"}))))))}}]),t}(s.a.Component);u.a.render(s.a.createElement(b,null),document.getElementById("root"))},45:function(e,t,a){}},[[27,1,2]]]);
//# sourceMappingURL=main.437e6b76.chunk.js.map