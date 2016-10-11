![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# GA | Web Development Immersive

| Unit                 | Topic                              | Topic                              | Project
|------------          |------------------------------------|------------------------------------|--------------------------------------
| **[UNIT 1](#unit1)** | [1. Front-end Intro](#week1)       | [2. Dynamic Frontend](#week2)      | [3. Project 1: Build a game](#week3)
| **[UNIT 2](#unit2)** | [4. AJAX & MongoDB](#week4)        | [5. MongoDB & Hapi.js](#week5)     | [6. Project 2: Web API App](#week6)
| **[UNIT 3](#unit3)** | [7. Ruby and SQL DB](#week7)       | [8. Ruby on Rails](#week8)         | [9. Project 3: Rails App](#week9)
| **[UNIT 4](#unit4)** | [10. MVC with Angular](#week10)    | [11. Final Project](#week11)       | [12. Final Project](#week12)

# Short Hands
- ILab = Inclass Lab (Doing and reviewing the lab inclass on the same day)
- HLab = Homework Lab (Doing the lab partly inclass and the rest for homework)
- RLab = Reviewing Lab (Review the lab that was assigned for homework the previous day)

<a name="unit1"></a>
## Unit 1

<a name="week1"></a>
### Week 1 | Front-end Fundamentals

| [Monday](#w1d1)                    | [Tuesday](#w1d2)                      | [Wednesday](#w1d3)                         | [Thursday](#w1d4)                          | [Friday](#w1d5)                        |
| ---------------------------------- | ------------------------------------- | ------------------------------------------ | ------------------------------------------ | -------------------------------------- |
| KICKOFF!!                          | [Assessment][1-2A] & [Solution][1-2Z] | [Assessment][1-3A] & [Solution][1-3Z]      | [Assessment][1-4A] & [Solution][1-4Z]      | [Assessment][1-5A] & [Solution][1-5Z]  |
| [Install Fest][1-1A]               | [RLab: Command Line][1-1C]            | [RLab: Build a Website][1-2F]              | [RLab: Boostrap Website Replication][1-3F] | [RLab: Functions][1-4E]                |
|                                    | [HTML Basics][1-2B]                   | [Box Model and Positioning][1-3B]          | [Data Types, Variables, Arrays][1-4C]      | [JS Debugging][1-5B]                   |
| LUNCH                              | LUNCH                                 | LUNCH                                      | LUNCH                                      | LUNCH                                  |
| [Navigating the file system][1-1B] | [Chrome Dev Tools][1-2C]              | [ILab: HTML CSS Site Replication][1-3C]    | [Mastering The Flow][1-4D]                 | Fundamental Reviews                    |
| [HLab: Command Line][1-1C]         | [CSS Selector Basics][1-2D]           | [Bootstrap CSS Slides][1-3D]               | [HLab: Functions][1-4E]                    | [Review - Rock, Paper, Scissors][1-5C] |
| -                                  | [CSS Selector Game][1-2E]             | [Bootstrap CSS Lesson][1-3E]               | -                                          | [HLab: JS Koans][1-5D]                 |
| -                                  | [HLab: Simple Website][1-2F]          | [HLab: Boostrap Site Replication][1-3F]    | -                                          | -                                      |

[1-1A]: 00-programming/install-fest/README.md                           "Install Fest"
[1-1B]: 01-workflow/navigating-the-file-system-lesson                   "Navigating the file system"
[1-1C]: https://github.com/wdi-hk-12/lab-command-line                   "HLab: Command line"

[1-2A]: 14-assessments/w01d2.md                                         "Assessment"
[1-2Z]: 14-assessments/w01d2-solution.md                                "Assessment Solution"
[1-2B]: 02-front-end-intro/html-basics-lesson                           "HTML Basics"
[1-2C]: 01-workflow/chrome-dev-tools-lesson                             "Chrome Dev Tools"
[1-2D]: 02-front-end-intro/css-selector-basics                          "CSS Selector Basics"
[1-2E]: http://flukeout.github.io                                       "CSS Selector Game"
[1-2F]: https://github.com/wdi-hk-12/lab-simple-website                 "HLab: Build website"

[1-3A]: 14-assessments/w01d3.md                                         "Assessment"
[1-3Z]: 14-assessments/w01d3-solution.html                              "Assessment Solution"
[1-3B]: 02-front-end-intro/css-box-model-and-positioning                "Box Model and Positioning"
[1-3C]: https://github.com/wdi-hk-12/lab-html-css-site-replication      "ILab: CSS Web Replication"
[1-3D]: 02-front-end-intro/css-bootstrap-lesson                         "Bootstrap CSS Lesson"
[1-3E]: https://presentations.generalassemb.ly/649ce6766e83f246e122     "Bootstrap CSS Slides"
[1-3F]: https://github.com/wdi-hk-12/lab-bootstrap-site-replication     "HLab: Bootstrap Web Replication"

[1-4A]: 14-assessments/w01d4.md                                         "Assessment"
[1-4Z]: 14-assessments/w01d4-solution.md                                "Assessment Solution"
[1-4C]: 00-programming/js-data-types-variables-and-arrays               "Data Types, Variables, Arrays"
[1-4D]: 00-programming/js-mastering-the-flow-lesson                     "Mastering The Flow"
[1-4E]: https://github.com/wdi-hk-12/lab-js-functions                   "HLabs: Functions"

[1-5A]: 14-assessments/w01d5.md                                         "Assessment"
[1-5Z]: 14-assessments/w01d5-solution.md                                "Assessment Solution"
[1-5B]: 00-programming/js-debugging-lesson                              "JS Debugging"
[1-5C]: 00-programming/js-fundamental-reviews/rock-paper-scissors.js    "Review - Rock, Paper, Scissors"
[1-5D]: https://github.com/wdi-hk-12/JavaScript-Koans                   "HLab: JS Koans"

#### Week 1 | Day 1
<a name="w1d1"></a>

- Homework
  - Read [What is Code? (by Bloomberg Business)](http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)
  - Read [20 things I've learned about browsers and the web](http://www.20thingsilearned.com/en-US/home)
  - Try the typing exercises on [typing.io](https://www.typing.io/) and see how fast you type code
  - Watch [DNS Explained](https://www.youtube.com/watch?v=72snZctFFtA) to how DNS works
  - Watch [So You Want to be a Developer (part 1)](https://www.youtube.com/watch?v=WCuUWGmatpU) & [So You Want to be a Developer (part 2)](https://www.youtube.com/watch?v=kqFcF_jRrx0)

<a name="week2"></a>
### Week 2 | Front-end Fundamentals

| [Monday](#w2d1)                  | [Tuesday](#w2d2)                      | [Wednesday](#w2d3)             | [Thursday](#w2d4)             | [Friday](#w2d5)                 |
| -------------------------------- | ------------------------------------- | ------------------------------ | ----------------------------- | ------------------------------- |
| [JS Objects][2-1A]               | [Assessment][2-2A] & [Solution][1-2Z] | [@Dom Manipulation][2-3A]      | [RLab: Shopping Cart][2-3E]   | [Project Spec][2-5A]            |
| [ILab: JS Objects][2-1B]         | [RLab: Objects & Arrays][2-1E]        | [ILab: Dom Manipulation][2-3B] | [ILab: Tic-Tac-Toe][2-4A]     | [Presentation Guidelines][2-5B] |
| LUNCH                            | [Function and Scope][2-2B]            | LUNCH                          | LUNCH                         | LUNCH                           |
| [JS Arrays][2-1C]                | LUNCH                                 | [JQuery Lesson][2-3C]          | [ILab: 10 Seconds Math][2-4B] | [Agile Framework][2-5C]         |
| [ILab: JS Arrays Problems][2-1D] | [Github Lesson][2-2C]                 | [JQuery Game][2-3D]            | -                             | Project Pitch Day1              |
| [HLab: Objects & Arrays][2-1E]   | [ILab: Github][2-2D]                  | [HLab: Shoppoing Cart][2-3E]   | -                             | -                               |
| -                                | [Read: Git][2-2E]                     | -                              | -                             | -                               |

[2-1A]: 00-programming/js-objects-lesson                                      "JS Objects"
[2-1B]: https://github.com/wdi-hk-12/lab-js-problems-objects                  "ILab: JS Objects"
[2-1C]: 00-programming/js-arrays-lesson                                       "JS Arrays"
[2-1D]: https://github.com/wdi-hk-12/lab-js-problems-arrays                   "ILab: JS Arrays Problems"
[2-1E]: https://github.com/wdi-hk-12/lab-js-problems-objects-and-arrays       "HLab: Objects & Arrays"

[2-2A]: 14-assessments/w02d2.md                                               "Assessment"
[2-2Z]: 14-assessments/w02d2-solution.md                                      "Assessment Solution"
[2-2B]: 00-programming/js-functions-and-scope                                 "Function and Scope"
[2-2C]: 01-workflow/git-github-lesson                                         "Github Lesson"
[2-2D]: https://github.com/wdi-hk-12/lab-git-github                           "ILab: Github"
[2-2E]: https://git-scm.com/doc                                               "Read: Git"

[2-3A]: 02-front-end-intro/js-dom-manipulation-lesson                         "Dom Manipulation"
[2-3B]: https://github.com/wdi-hk-12/lab-js-dom-manipulation                  "ILab: Dom Manipulation"
[2-3C]: 02-front-end-intro/js-jquery-lesson                                   "JQuery Lesson"
[2-3D]: http://jqexercise.droppages.com/                                      "JQuery Game"
[2-3E]: https://github.com/wdi-hk-12/lab-shopping-cart                        "HLab: Shopping Cart"

[2-4A]: https://github.com/wdi-hk-12/lab-js-tic-tac-toe                       "ILab: Tic-Tac-Toe Lab"
[2-4B]: https://github.com/wdi-hk-12/lab-ten-seconds-math                     "ILab: 10 Seconds Math"

[2-5A]: projects/project-01.md                                                "Project Spec"
[2-5B]: projects/presentation_guideline.md                                    "Presentation Guidelines"
[2-5C]: 01-workflow/agile-user-stories-wireframes-lesson                      "Agile Framework"

<a name="week3"></a>
### Week 3 | Project 1

| [Monday](#w3d1)                          | [Tuesday](#w3d2)                        | [Wednesday](#w3d3)                      | [Thursday](#w3d4)                       | [Friday](#w3d5)                         |
| ---------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| Project Pitch Day2                       | Daily Standup                           | Daily Standup                           | Daily Standup                           | Daily Standup                           |
| WireFrame + Trello + Coding Begins       | -                                       | -                                       | -                                       | -                                       |
| LUNCH                                    | LUNCH                                   | LUNCH                                   | LUNCH                                   | LUNCH                                   |
| -                                        | -                                       | -                                       | -                                       | *JS CHANGE FREEZE*                      |
| -                                        | -                                       | -                                       | -                                       | Final touch up (HTML & CSS)             |
| -                                        | -                                       | -                                       | -                                       | Presentation                            |

<a name="week4"></a>
### Week 4 | Node.js First Steps

| [Monday](#w4d1)                          | [Tuesday](#w4d2)                        | [Wednesday](#w4d3)                      | [Thursday](#w4d4)                       | [Friday](#w4d5)                         |
| ---------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| Week 1-3 Retrospective                   | [Node.js: First steps][4-2A]            | [RLab: Express Routes][4-2C]            | Review JSON & AJAX                      | [RLab: Mongo Restaurants][4-4C]         |
| -                                        | -                                       | -                                       |                                         | [Node.js: Models with Mongoose][4-5A]   |
| LUNCH                                    | LUNCH                                   | LUNCH                                   | LUNCH                                   | LUNCH                                   |
| Project 1 Feedback                       | [Node.js: Jade templating][4-2B]        | Node.js: JSON                           | [MongoDB: Setup][4-4A]                  | [HLab: Mongoose Modeling][4-5B]         |
| How to structure code                    | [HLab: Express Routes][4-2C]            | Node.js: AJAX                           | [MongoDB: Basics][4-4B]                 | -                                       |
| -                                        | -                                       | -                                       | [ILab: Mongo Restaurants][4-4C]         | -                                       |

[4-2A]: 04-node.js/node-express-intro                                          "Node.js: First Steps"
[4-2B]: https://www.sitepoint.com/jade-tutorial-for-beginners/                 "Node.js: Jade intro"
[4-2C]: https://github.com/wdi-hk-12/lab-express-routing                       "HLab: Express Routes"

[4-4A]: 05-databases/mongodb/setup.md                                          "MongoDB: Setup"
[4-4B]: 05-databases/mongodb/basics.md                                         "MongoDB: Basics"
[4-4C]: https://github.com/wdi-hk-12/lab-mongo-restaurants                     "ILab: Mongo Restaurants"

[4-5A]: 04-node.js/node-express-mongo-models-lesson                            "Node.js: Mongoose"
[4-5B]: https://github.com/wdi-hk-12/lab-node-express-mongo-modeling           "HLab: Mongoose Modeling"

<a name="week5"></a>
### Week 5 | Node.js Hackathon

| [Monday](#w5d1)                          | [Tuesday](#w5d2)                        | [Wednesday](#w5d3)                      | [Thursday](#w5d4)                       | [Friday](#w4d5)                         |
| ---------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| Node.js: Passport                        | Model View Controller                   | Node.js: Hackathon Starter              | Node.js: Middelware                     | Project Spec                            |
| -                                        | -                                       | -                                       | Node.js: Socket.io ?                    | -                                       |
| LUNCH                                    | LUNCH                                   | LUNCH                                   | LUNCH                                   | LUNCH                                   |
| Node.js: Social login                    | Labs                                    | Labs                                    | [Node.js: Heroku][5-4A]                 | -                                       |
|[HLab: Node.js - Passports][5-1A]         | -                                       | -                                       | -                                       | -                                       |
| -                                        | -                                       | -                                       | -                                       | -                                       |

[5-1A]: https://github.com/wdi-hk-12/nodejs-passport                                          "Node.js: Passport"
[5-4A]: 04-node.js/node-deployment-heroku                                                     "Node.js: Heroku"

<a name="week7"></a>
### Week 7 | Ruby on Rails

| [Monday](#w7d1)                          | [Tuesday](#w7d2)                        | [Wednesday](#w7d3)                      | [Thursday](#w7d4)                       | [Friday](#w7d5)                         |
| ---------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| Presentation @ 10AM                      | [Intro to Ruby Programming][7-2A]       | [R-Lab: Arrays & Hashes][7-2D]          | [R-Lab: Rails Medieval Objects][7-3B]   | [Intro to Relation DB][7-5A]            |
| -                                        | [Control Flow in Ruby][7-2B]            | [OOP in Ruby][7-3A]                     | [R-Lab: Ruby Apartments][7-3C]          | [ILab: ERD Design][7-5B]                |
| LUNCH                                    | LUNCH                                   | LUNCH                                   | LUNCH                                   | LUNCH                                   |
| Retrospective                            | [Arrays, Hashes & Blocks][7-2C]         | [ILab: Rails Medieval Objects][7-3B]    | [+What is MVC?][7-4A]                    | [SQL: Setup & CRUD][7-5C]               |
| -                                        | [ILab: Arrays & Hashes][7-2D]           | [HLab: Ruby Apartments][7-3C]           | [Intro to Rails][7-4B]                  | [HLab: Find Carmen Sandiego][7-5D]      |
| -                                        | [HLab: Ruby Koans][7-2E]                | -                                       | -                                       |                                         |

[7-2A]: 06-ruby/ruby-data-types-variables-lesson                                     "Intro to Ruby - Data Types & Variables"
[7-2B]: 06-ruby/ruby-control-flow-lesson                                             "Control flow in Ruby"
[7-2C]: 06-ruby/ruby-arrays-hashes-and-blocks-lesson                                 "Arrays, Hashes, & Blocks"
[7-2D]: https://github.com/wdi-hk-12/lab-ruby-arrays-and-hashes                      "ILab: Arrays & Hashes"
[7-2E]: https://github.com/wdi-hk-12/ruby_koans                                      "HLab: Ruby Koans"

[7-3A]: 06-ruby/ruby-oop-classes                                                     "OOP in Ruby"
[7-3B]: https://github.com/wdi-hk-12/lab-ruby-medieval-objects                       "ILab: Rails Medieval Objects"
[7-3C]: https://github.com/wdi-hk-12/lab-ruby-apartments                             "HLab: Ruby Apartments"

[7-4A]: 07-rails/rails-mvc-lesson                                                    "What is MVC?"
[7-4B]: 07-rails/rails-intro-lesson                                                  "Intro to Rails"

[7-5A]: 08-sql/data-modeling-intro-lesson                                          "Intro to Relational Data Modeling"
[7-5B]: 08-sql/data-modeling-erd-design-lab                                        "ILab: ERD Design"
[7-5C]: 08-sql/sql-setup-insert-update-delete-lesson                               "SQL: Setup & CRUD"
[7-5D]: https://github.com/wdi-hk-12/lab-carmen-sandiego                             "HLab: Find Carmen Sandiego"

#### Week 7 | Tuesday
<a name="w7d2"></a>
- [Ruby v JavaScript](06-ruby/ruby-vs-javascript-lesson)
- Ruby Readings
  - [Ruby in 20 Minutes](http://www.ruby-lang.org/en/documentation/quickstart/)
  - [Important Language Features And Some Gotchas](http://www.ruby-lang.org/en/documentation/ruby-from-other-languages/)
  - [Ruby QuickRef](http://www.zenspider.com/Languages/Ruby/QuickRef.html#pseudo-variables)
  - [Try Ruby!!](http://tryruby.org/)
  - [Ruby String Methods](http://ruby-doc.org/core-2.2.0/String.html)
  - [Ruby Array Methods](http://ruby-doc.org/core-2.2.0/Array.html)

#### Week 7 | Thursday
<a name="w7d4"></a>
- Rails Readings
  - [Ruby on Rails: Getting Started](http://guides.rubyonrails.org/getting_started.html)
  - [Rails Routing from the Outside in](http://guides.rubyonrails.org/routing.html)
    - Everything you need to know abour Rails Routes

<a name="week8"></a>
### Week 8 | Ruby on Rails

| [Monday](#w7d1)                           | [Tuesday](#w7d2)                        | [Wednesday](#w7d3)                      | [Thursday](#w7d4)                       | [Friday](#w7d5)                         |
| ----------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| [R-Lab: Find Carmen Sandiego][7-5D]       | [R-Lab: ActiveRecord Finders][8-1D]     | [R-Lab: Modeling Relationshoips][8-2B]  | [Lab: Layouts, partials, views][8-3C]   | [Authentication with Devise][8-5A]      |
| [ActiveRecord and Migrations][8-1A]       | [Modeling Relationships][8-2A]          | [Controllers and Routes in Rails][8-3A] | [Rails API][8-4A]                       | [Photo Upload - Paperclip Gem][8-5B]    |
| LUNCH                                     | LUNCH                                   | LUNCH                                   | LUNCH                                   | LUNCH                                   |
| [ILab: ActiveRecord and Migrations][8-1B] | [ILab: Modeling Relationships][8-2B]    | [Layouts, partials, and views][8-3B]    | [Building and Submitting Forms][8-4B]   | [Heroku][8-5C]                          |
| [ActiveRecord Methods and Finders][8-1C]  | [Seed & Faker][8-2C]                    | [ILab: Layouts, partials, views][8-3C]  | -                                       | [Project 3 Spec][8-5D]                  |
| [HLab: ActiveRecord Finders][8-1D]        | [Scraping][8-2D]                        | [Read: MVC GUIDE][8-3D]                 | -                                       | -                                       |

[8-1A]: 07-rails/rails-activerecord-models-migrations-lesson                         "Building Models with ActiveRecord and Migrations"
[8-1B]: https://github.com/wdi-hk-12/lab-rails-activerecord-models-migrations        "ILab: ActiveRecord and Migrations"
[8-1C]: 07-rails/rails-activerecord-methods-and-finders-lesson                       "ActiveRecord Methods and Finders"
[8-1D]: https://github.com/wdi-hk-12/lab-rails-activerecord-finders                  "HLab: ActiveRecord Finders"

[8-2A]: 07-rails/rails-activerecord-modeling-relationships-lesson                    "Modeling Relationships"
[8-2B]: https://github.com/wdi-hk-12/lab-rails-relationships                         "ILab: Modeling Relationships"
[8-2C]: guides/rails/gems/faker                                                      "Seed & Faker"
[8-2D]: guides/rails/gems/nokogiri                                                   "Scraping"

[8-3A]: 07-rails/rails-controllers-and-routes-lesson                                 "Controllers and Routes"
[8-3B]: 07-rails/rails-layouts-views-lesson                                          "Layouts, partials, and views"
[8-3C]: https://github.com/wdi-hk-12/lab-rails-layouts-views                         "ILab: Layouts, partials, views"
[8-3D]: guides/rails/01_mvc                                                          "Read: MVC GUIDE"

[8-4A]: 07-rails/rails-api-lesson                                                    "Rails API"
[8-4B]: 07-rails/rails-forms-lesson                                                  "Building and Submitting Forms"

[8-5A]: guides/rails/02_rails_jquery/07-devise-token-auth.md                         "Authentication with Devise"
[8-5B]: guides/rails/gems/paperclip                                                  "Photo Upload - Paperclip Gem"
[8-5C]: guides/rails/02_rails_jquery/06-deploy-to-heroku.md                          "Deploying to Heroku"
[8-5D]: projects/project-03.md                                                       "Project 3 Spec"