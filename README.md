[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Team Project – blogFace Client

## Description

BlogFace is a content management system that allows visitors to create users for creating and displaying pages and blogposts. Users, once logged in, have the ability to create, edit, retrieve, and delete pages and blogposts that the user has created. Users also have the ability to change passwords and log out.

Link to deployed App: https://go-away-alan.github.io/blogFace-client/

(Additional links to repos are provided in the Links section below.)

## ERD

Link to ERD: http://imgur.com/a/il2L0

## General Approach

### Development & Team Dynamics

We started our project by reading our CMS prompt and making a list of questions that we wanted answered by our consultants for clarification. After coming up with a team name and establishing roles for each of our members, we determined a schedule for doing standups each morning and afternoon. We also came up with user stories, wireframes, and an ERD for our project, which helped guide us through the coding of our back-end and front-end applications.

Throughout the project, we stayed together as a group as much as we could to make communication between members much easier since it was the first time working with git rebasing tools.

### API

Our ERD consisted of one user having the ability to created multiple pages as well as multiple blogposts. For a visual of our ERD, please refer to the ERD section above. Using the ERD, we knew we had to create 2 additional resources on top of the user resource which was provided to us by the Express API Template.

After determining the types of attributes that would be needed for each resource, we started by creating a controller and filled it with actions associated with the appropriate CRUD actions. Using the attributes, we also created the schema from within each of our resource models and updated the routes file to reflect the new resources. Express/Mongo allowed us the flexibility to add in attributes as we saw fit, which was valuable when we created an additional Template which required more fields.

Once we finished establishing the controllers, models, and routes for our resources, we developed curl scripts in order to test our actions locally to make sure they were working appropriately.

### Client

After we met with the consultants, we determined that we would start by creating a landing page for our users for sign-up and sign-in authentication similar to our competitors (Wix and Wordpress). We started by creating the functionality for authentication first, seeing that we had already developed similar features individually for our own projects. For our authentication feature, we relied heavily on modals.

Next, we used the wireframe we created to come up with a dashboard for managing and displaying our content. We wanted to have a specific section for pages as well as a section for blogposts. According to our user stories, users should have the ability to create a new page by selecting a template type. The template type provides users with the option of having two different styles for your created page. From the Page creation modal, users have the ability to edit in-line and update the page accordingly.

Finally, users were able to create blogposts within our dashboard. Hitting the Create New Blog button opens up a model which allows you to add content and display it on your dashboard.  Users also have the ability to edit and delete blogposts as appropriate.

## User Stories

As a user, we would like to be able to:
-   Sign up an account using authentication to manage our pages and blogs.
-   Sign in to access our pages and blogs.
-   Change passwords while signed in for added security.
-   Sign out to prevent others from making pages and blogposts on your site.
-   Create pages from the dashboard by selecting a template type (2 choices).
-   Create blogposts from the dashboard by selecting a Create button.
-   Show all the user’s Pages and Blogposts upon signing in.
-   Edit the page from the dashboard by selected a created page.
-   Open and show a specific blogpost or page by clicking on it.
-   Delete any user-made page or blogpost.

## Wireframes

Link to Wireframe: http://imgur.com/a/zN2HJ

## Links

-   Front End Repo: https://github.com/go-away-alan/blogFace-client
-   Back End Repo: https://github.com/go-away-alan/blogFace-api
-   Deployed Front End Client: https://go-away-alan.github.io/blogFace-client/
-   Heroku Site: https://ancient-forest-15685.herokuapp.com/

## Wins & Challenges

Link to Retro: http://imgur.com/a/efja4

### Challenges
-   Working remotely on the project was difficult because we didn’t have our team right next to us if we had a question or wanted a quick merge or code review.
-   Avoiding circular references
-   Update feature took the most time
-   Not enough time during the day
-   Overcoming distractions in general

### Wins
-   Great team dynamic, minimal conflicts – all members were accommodating and agreed on our goal at hand which was to come up with a MVP product that met requirements.
-   Over 200 Commits
-   Well-rounded distribution of API vs. Client side work/review for each of us
-   Pair Programming
-   Good ERDs and Wireframes
-   Git (Tough at first but very smooth afterwards)
-   In-line editing feature within Blogposts and Pages

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.

To deploy the SPA, run `grunt deploy`.

## Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Move into the new project and `git init`.
1.  Install dependencies with `npm install`.

## [License](LICENSE)

1.  All content is licensed under a CCBYNCSA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
