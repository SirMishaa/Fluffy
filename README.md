# Fluffy
<p align="center">
  <img alt="logo" src="https://nsa40.casimages.com/img/2020/07/03/200703060226646210.png" />
  </p>

**Fluffy** is a fully manageable web interface for the discord bot [**Nota Bot**](https://github.com/DigitalPulseSoftware/NotaBot).

Features : WIP

## Technologies mainly used
- [**Vue**](https://vuejs.org/) - JavaScript framework for building user interfaces and single-page applications

- [**VueX**](https://vuex.vuejs.org/) - State management pattern and library for Vue.js applications
	
- [**VueRouter**](https://router.vuejs.org/) - Deeply integrates with Vue.js core to make building Single Page Applications
- [**Tailwind**](https://tailwindcss.com/) - Highly customizable, low-level CSS framework

- [**Jest**](https://jestjs.io/) - JavaScript testing framework maintained by Facebook

- [**Cypress**](https://www.cypress.io/) - Fast, easy and reliable testing for anything that runs in a browser.

- [**CircleCI**](https://circleci.com/) - Continuous Integration and Delivery service

## Contribute to Fluffy
Before contributing, **you must read and respect the [Code of conduct](#code-of-conduct).**
In order to be able to contribute to this project, you need the following knowledge:  
- Basic knowledge of **Git**
- Intermediate knowledge of **Javascript**
- Intermediate knowledge of the **VueJS framework**
- Intermediate knowledge of the **Unit Test concept**

Your code, commits, comments, issues and pull requests **must be written completely in English**.
You must respect the [**Commit Message Guidelines**](commit-message-guidelines).

## Code of conduct
As contributors and maintainers of the Fluffy project, we pledge to respect everyone who contributes by posting issues, updating documentation, submitting pull requests, providing feedback in comments, and any other activities.

Communication through any of Angular's channels (GitHub, Gitter, IRC, mailing lists, Google+, Twitter, etc.) must be constructive and never resort to personal attacks, trolling, public or private harassment, insults, or other unprofessional conduct.

We promise to extend courtesy and respect to everyone involved in this project regardless of gender, gender identity, sexual orientation, disability, age, race, ethnicity, religion, or level of experience. We expect anyone contributing to the Fluffy project to do the same.

If any member of the community violates this code of conduct, the maintainers of the Angular project may take action, removing issues, comments, and PRs or blocking accounts as deemed appropriate.

## Commit Message Guidelines
We have very precise rules over how our git commit messages can be formatted. This leads to **more readable messages** that are easy to follow when looking through the **project history**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>

```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples](https://github.com/SirMishaa/Fluffy))

```
docs: update changelog to beta.5
```

```
fix: need to depend on the latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```
### Type
Must be one of the following:

-   **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
-   **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
-   **docs**: Documentation only changes
-   **feat**: A new feature
-   **fix**: A bug fix
-   **perf**: A code change that improves performance
-   **refactor**: A code change that neither fixes a bug nor adds a feature
-   **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
-   **test**: Adding missing tests or correcting existing tests

### Subject
The subject contains a succinct description of the change:

-   use the imperative, present tense: "change" not "changed" nor "changes"
-   don't capitalize the first letter
-   no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.
