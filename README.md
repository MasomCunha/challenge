<br />
<div align="center">

  <h3 align="center">README-Challenge</h3>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#folder-structure">Folder Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The goal of this challenge was to build a responsive web application that uses fake API to simulate sending and receiving posts for a given user. Auth0 should have been used to control accessible/visible routes.

Based on Auth0 documentation to SPA https://auth0.com/docs/quickstart/spa/react/01-login#configure-auth0, i should get user information after the login successfully in Auth0. However, after redirect to my application, the user's information was undefined and this did not allow me to conclude the two first tasks.

Since I don't have much experience with typeScript, when analyzing the code you will find in the postAction file, a type of return any, which was used to overcome the problem documented in the code.

Since I have no experience writing tests, I did not perform any in this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* ReactJs
* TypeScript
* Redux
* HTML
* CSS


### Folder Structure

<p>|-- src</p>
    <p>|-- components</p>
    <p>|-- hooks</p>
    <p>|-- interface</p>
    <p>|-- pages</p>
    <p>|-- redux</p>
    <p>|-- routes</p>
    <p>|-- style</p>
    <p>|-- utils</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

To run this application you need to have npm;

### Installation

1. Download the project to your computer
2. Inside the project folder open the terminal and run npm install
3. After installation completed run npm start inside the terminal
4. Once the application is running, access the port that appears in the terminal (example: http://localhost:3000/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To use this app you need to insert an email with the following structure 
    example@example.example,
in input field and then click login.
You will open a homepage where you can see a list os posts and where you can insert new posts.
To insert a post you only need to click in post button. There is no validation in both title and body inputs.
After you click in "post" will appears a success message and if you scroll down you will see the new post.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Login/Logout
- [ ] Display identity
- [X] Show input field to type email
- [X] Show a button next to input field
- [X] Validate input field to be an email (display error with invalid email)
- [X] Save e-mail address on next time the user opens application 
- [X] Get list of posts
- [X] Create new post
- [X] Append newly created posts locally
- [X] Create Private and Public section
- [ ] Tests



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Manuel Cunha - manuelasomc@gmail.com

Project Link: [https://github.com/MasomCunha/challenge]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

