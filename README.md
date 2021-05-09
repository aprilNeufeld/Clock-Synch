<!--
*** This README was created using the Best-README-Template: 
*** https://github.com/othneildrew/Best-README-Template/blob/master/README.md
-->



<!-- PROJECT SHIELDS -->
[![Website][website-shield]][website-url]
[![Language][language-shield]][repo-url]
[![React Version][react-version-shield]][package-url]
[![NextJS Version][next-version-shield]][package-url]
[![Last Commit][last-commit-shield]][last-commit-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tricksterCodess/Clock-Synch/blob/main/public/favicon.ico">
    <img src="/public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Clock-Synch</h3>

  <p align="center">
    A small app displaying two synchronized clocks.
    <br />
    <a href="https://clock-synch.vercel.app/">View Deployment</a>
    ·
    <a href="https://github.com/tricksterCodess/Clock-Synch/issues">Report a Bug</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#demo">Demo</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#testing">Testing</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About

This app contains two ticking clocks - one digital, one analog. To change the time, the user can click on
either clock and select a new time from a TimePicker dialog. Both clocks are kept perfectly in synch
with the selected time and with each other.

The clocks are only rendered client-side and are initialized to the user's current time. 

### Demo

View a working demo [hosted on Vercel](https://clock-synch.vercel.app/).

### Built With

* [React](https://reactjs.org)
* [Typescript](https://www.typescriptlang.org)
* [Next.js](https://nextjs.org)
* [Material-UI](https://material-ui.com)
* [Jest](https://jestjs.io/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tricksterCodess/Clock-Synch.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```
 4. Go to [localhost:3000](http://localhost:3000/) to see it in action!

### Testing

   ```sh
   npm run test
   ```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

April Neufeld - [@tricksterCodess](https://gitconnected.com/trickstercodess) - april.neufeld@gmail.com

Project Link: [https://github.com/tricksterCodess/Clock-Synch](https://github.com/tricksterCodess/Clock-Synch)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Material-Ui Pickers](https://material-ui-pickers.dev/)
* [react-clock](https://www.npmjs.com/package/react-clock)
* [react-live-clock](https://www.npmjs.com/package/react-live-clock)
* [date-fns](https://date-fns.org/)
* [Best README Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[last-commit-shield]: https://img.shields.io/github/last-commit/tricksterCodess/Clock-Synch.svg
[last-commit-url]: https://github.com/tricksterCodess/Clock-Synch/commits/main
[license-shield]: https://img.shields.io/github/license/tricksterCodess/Clock-Synch.svg
[license-url]: https://github.com/tricksterCodess/Clock-Synch/blob/main/LICENSE.txt
[language-shield]: https://img.shields.io/github/languages/top/tricksterCodess/Clock-Synch.svg
[next-version-shield]: https://img.shields.io/github/package-json/dependency-version/tricksterCodess/Clock-Synch/next.svg
[package-url]: https://github.com/tricksterCodess/Clock-Synch/blob/main/package.json
[product-screenshot]: images/screenshot.png
[react-version-shield]: https://img.shields.io/github/package-json/dependency-version/tricksterCodess/Clock-Synch/react.svg
[repo-url]: https://github.com/tricksterCodess/Clock-Synch
[website-shield]: https://img.shields.io/website?url=https://clock-synch.vercel.app/
[website-url]: https://clock-synch.vercel.app/
