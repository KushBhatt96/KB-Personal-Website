import React from "react"
import Layout from "../components/layout"
import Theme from "../components/theme"
import AppCard from "./../components/Projects/AppCard"
import MobileCard from "../components/Projects/MobileCard"

const Projects = () => {
  return (
    <Layout>
      <Theme title="Projects">
        <div className="container-fluid inner-mid mb-5 mt-5" id="projects">
          <AppCard
            outerTitle="Reactify"
            outerDescription="Social Networking Web Application"
            mainImage="images/Reactify_img1.PNG"
            summary="Reactify is a social networking web application similar to meetup. It
          allows users to host and join different activities. The application includes authentication using JWT tokens, 
          policy-based authorization, real-time messaging system, and complex relationships between
          entities. The Clean Architecture Design Pattern was used to achieve single responsibility.
          ASP.NET Core's Entity Framework ORM was used to scaffold the database using a code-first approach. On the FE, 
          MobX was used as the state management solution and Axios for making calls to the RESTful API."
            FEPhoto1="images/JS.png"
            FEPhoto2="images/HTML.png"
            FEPhoto3="images/CSS.png"
            FEPhoto4="images/React.png"
            FEPhoto5="images/MobX.png"
            BEPhoto1="images/CSharp.png"
            BEPhoto2="images/dotnet.png"
            BEPhoto3="images/sqlserver.png"
            linkToCode="https://github.com/KushBhatt96/Reactify"
          />
          <MobileCard
            outerTitle="React Native Mobile App w/ GraphQL"
            outerDescription="UofC Capstone Project"
            mainImage="images/Capstone_img.PNG"
            summary="For our capstone, my team and I worked on an industry project related to
          the implementation of a GraphQL API Layer on top of an existing RESTful application in Python.
          The application was a ticketing system for field engineers working on
          oil and gas rig sites. Through this project, I learned all aspects of GraphQL including types, queries,
          mutations, subscriptions, schemas, and resolvers. In addition to the API, we developed a GraphQL
          Client App to consume the API. I was able to utilize my knowledge of React Native and Redux to build the app.
          I also learned to use Apollo Client for sending queries, mutations, constructing dynamic queries, and
          offset pagination. We also learned to use JEST and React Native Testing Library for unit, snapshot, and component testing."
            FEPhoto1="images/JS.png"
            FEPhoto2="images/React.png"
            FEPhoto3="images/expo.png"
            BEPhoto1="images/Python.png"
            BEPhoto2="images/flask.png"
            BEPhoto3="images/gql.png"
          />
          <AppCard
            outerTitle="Bug Tracker Web App"
            mainImage="images/BugTracker_img2.PNG"
            summary="This is a bug tracker web application that was created in a team of three. The application consists
          of three main segments including a dashboard, teams section, and tickets section. I in particular worked
          on the ticketing functionality on both FE and BE. The application includes authentication using JWT tokens, 
          policy-based authorization, real-time messaging system for each ticket, and complex relationships between
          entities. The Clean Architecture Design Pattern was used to achieve single responsibility.
          ASP.NET Core's Entity Framework ORM was used to scaffold the database using a code-first approach. On the FE, 
          MobX was used as the state management solution and Axios for making calls to the RESTful API."
            FEPhoto1="images/JS.png"
            FEPhoto2="images/HTML.png"
            FEPhoto3="images/CSS.png"
            FEPhoto4="images/React.png"
            FEPhoto5="images/MobX.png"
            BEPhoto1="images/CSharp.png"
            BEPhoto2="images/dotnet.png"
            BEPhoto3="images/sqlserver.png"
            linkToCode="https://github.com/MichaelMauriceLee/Bug-Tracker"
          />
          <MobileCard
            outerTitle="Event Planning Mobile App"
            outerDescription="App for UofC GNCTR 2022"
            mainImage="images/EventApp_Mockup.PNG"
            summary="This is a React Native mobile application for hosting events and competitions. It is currently a work
          in progress. The project was initiated when the UofC GNCTR Team (Great Northern Concrete Toboggan Race Team)
          contacted my friend and I to build an app for the 2022 GNCTR competition being held in Calgary. As of now, we are
          working in a team of four during our spare time on the evenings and weekends to develop this application. It involves many
          new learning opportunities such as the use of third-party auth providers, user role and permissions management, GraphQL for .NET, and TypeScript."
            FEPhoto1="images/JS.png"
            FEPhoto2="images/React.png"
            FEPhoto3="images/expo.png"
            BEPhoto1="images/CSharp.png"
            BEPhoto2="images/dotnet.png"
            BEPhoto3="images/gql.png"
            BEPhoto4="images/postgres.png"
          />
          <AppCard
            outerTitle="Java Client Server App"
            outerDescription="Real-time tic-tac-toe game w/ Sockets"
            mainImage="images/Java_App.PNG"
            summary="This is a client-server tic-tac-toe application written in pure Java. It consists of two jar
          files (client.jar and server.jar). It uses sockets
          for real-time communication between players. It utilizes a thread pool allowing multiple
          pairs of players to play each other simultaneously. To allow users on different machines to play
          each other, the server.jar file was deployed onto an AWS EC2 Linux virtual machine. This allowed me to
          learn about tools such as Putty and WinSCP for connecting and using virtual machines."
            FEPhoto1="images/JAVA.jpg"
            BEPhoto1="images/JAVA.jpg"
            linkToCode="https://github.com/KushBhatt96/Java-Client-Server-Apps/tree/master/A2_Ex4_Ex5"
          />
        </div>
      </Theme>
    </Layout>
  )
}

export default Projects
