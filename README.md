[![Starware](https://img.shields.io/badge/Starware-⭐-black?labelColor=f9b00d)](https://github.com/TCP-Tech/Codeutsava-X)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />

<p align="center">
  <h3 align="center">CodeUtsava X — Glitch × Illusion</h3>

  <p align="center">
    The Official Repository for the website of CodeUtsava X
    <br />
    <strong>◈ When reality glitches, perception becomes the interface. ◈</strong>
    <br />
    <br />
    <!-- TODO: Add live website URL when available -->
    <!-- <a href="https://codeutsava.vercel.app/">View Live</a> -->
    ·
    <a href="https://github.com/TCP-Tech/Codeutsava-X/issues">Report Bugs</a>
    ·
    <a href="https://github.com/TCP-Tech/Codeutsava-X/issues">Request Features</a>
  </p>
</p>

---

## Table of Contents

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#what-is-codeutsava-x">What is CodeUtsava X?</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#theme---glitch--illusion">Theme - Glitch × Illusion</a></li>
        <li><a href="#website-screenshots">Website Screenshots</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#local-repository-setup">Local Repository Setup</a></li>
        <li><a href="#running-the-project">Running the Project</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#turing-club-of-programmers">Turing Club Of Programmers</a></li>
    <li><a href="#starware">Starware</a></li>
  </ol>
</details>

---

## About The Project

**CodeUtsava X — Glitch × Illusion** is the 10th edition of the flagship event organized by the **Turing Club of Programmers (TCP)**, the official coding club of NIT Raipur.

CodeUtsava has grown into a celebration of technology, creativity, problem-solving, and community. With its tenth edition, CodeUtsava X introduces a new visual and conceptual identity built around the theme **Glitch × Illusion**.

The website serves as the digital gateway to the event — bringing together participants, organizers, mentors, speakers, sponsors, and the wider developer community.

### What is CodeUtsava X?

CodeUtsava X is more than just a coding competition. It is a technology-focused celebration designed to bring students and developers together through:

- 💻 **Hackathon** — Build innovative solutions to real-world problems
- 🧠 **Workshops & Learning** — Learn from developers, mentors, and industry professionals
- ⚡ **Coding & Technical Challenges** — Test your problem-solving and technical skills
- 🌐 **Community Building** — Connect with students, developers, mentors, and technology enthusiasts
- 🏆 **Competition & Recognition** — Compete, build, learn, and earn recognition
- 🎨 **Creativity & Innovation** — Turn ideas into meaningful technological experiences

Participants from across the country can take part in the various activities conducted as part of CodeUtsava X and become a part of the CodeUtsava community.

---

## Built With

The frontend currently uses the following stack:

### Frontend

- [Next.js](https://nextjs.org/) — React framework for building the website
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [pnpm](https://pnpm.io/) — Fast and efficient package manager

### Backend integration

This repository contains the **frontend website only**. If backend services are introduced, they should be consumed through documented external APIs and configured with environment variables.

---

## Theme — Glitch × Illusion

**Glitch × Illusion** is the central creative direction of CodeUtsava X.

The theme explores the space between **what is real and what appears to be real** — where digital imperfections become visual identities, familiar interfaces distort, and reality itself feels like a system experiencing an unexpected glitch.

### Theme Elements

The CodeUtsava X experience draws inspiration from:

- 🌀 **Illusion** — Distorting perception and challenging what the viewer expects
- ⚡ **Glitch** — Digital errors transformed into visual expression
- 🖥️ **Digital Reality** — Interfaces, systems, code, and technology as part of the visual language
- 👁️ **Perception** — Making users question what they see
- 🔀 **Distortion** — Breaking conventional layouts and interactions
- 🧩 **Hidden Layers** — Revealing unexpected information and experiences
- 💻 **Technology & Creativity** — Blending engineering with artistic expression

### The Experience

The website aims to feel less like a conventional event website and more like an **interactive digital world**.

Elements may appear fragmented, distorted, displaced, or unexpectedly transformed — creating an experience where users continuously move between structure and chaos.

The **glitch** represents the unexpected.

The **illusion** represents perception.

Together, they create the identity of **CodeUtsava X**.

---

## Website Screenshots 📸

> **Screenshots will be added once the CodeUtsava X website reaches a stable design milestone.**

---

## Getting Started

Follow the steps below to set up the CodeUtsava X website locally.

### Prerequisites

Make sure the following tools are installed on your system.

- [Node.js 24 LTS](https://nodejs.org/)
- [pnpm 10.25.0](https://pnpm.io/installation)
- [Git](https://git-scm.com/downloads)

### Installing pnpm

If pnpm is not already installed:

```sh
npm install -g pnpm@10.25.0
```

Verify the installation:

```sh
node --version
pnpm --version
git --version
```

### Local Repository Setup

Please follow the project's contribution guidelines when submitting changes. We follow a standard fork-and-pull workflow for contributions.

1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Create a separate branch** for your changes
4. **Make and test your changes**
5. **Commit** your work with a meaningful commit message
6. **Push** your branch to your fork
7. **Open a Pull Request** for review

Repository:

https://github.com/TCP-Tech/Codeutsava-X

### Running the Project

The CodeUtsava X frontend uses **Next.js**, **Tailwind CSS**, and **pnpm**.

Clone the repository and install the dependencies:

```sh
git clone --branch dev --single-branch https://github.com/TCP-Tech/Codeutsava-X.git
cd Codeutsava-X

pnpm install --frozen-lockfile
```

Start the development server:

```sh
pnpm dev
```

The website should now be available at `http://localhost:3000`.

Format the repository with the shared four-space Prettier configuration:

```sh
pnpm format
```

Run the complete local quality check before opening a pull request:

```sh
pnpm check
```

### Production Build

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin so canonical URLs, social
metadata, `robots.txt`, and `sitemap.xml` point to production. Vercel's
production URL is detected automatically when that variable is omitted.

Create a production build:

```sh
pnpm build
```

Start the production server:

```sh
pnpm start
```

### Managing Dependencies

Add a package:

```sh
pnpm add package_name
```

Add a development dependency:

```sh
pnpm add -D package_name
```

Remove a package:

```sh
pnpm remove package_name
```

---

## Community

Join the CodeUtsava community and stay connected with announcements, discussions, and event updates.

**Discord Community:**
[Join the CodeUtsava Discord](https://discord.gg/Ek9gr2Xnqb)

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## Turing Club Of Programmers

**Turing Club of Programmers (TCP)** is the official coding club of NIT Raipur and the organization behind CodeUtsava.

---

## Starware ⭐

**TCP-Tech/Codeutsava-X is Starware.**

This means you're free to use the project, as long as you star its GitHub repository.

Your appreciation makes us grow and helps the project shine. ⭐

---

<p align="center">
  <strong>◈ Welcome to CodeUtsava X — where reality glitches and nothing is quite what it seems. ◈</strong>
  <br>
  <em>Build. Break. Perceive. Reimagine.</em>
</p>

---

[contributors-shield]: https://img.shields.io/github/contributors/TCP-Tech/Codeutsava-X?style=for-the-badge
[contributors-url]: https://github.com/TCP-Tech/Codeutsava-X/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TCP-Tech/Codeutsava-X?style=for-the-badge
[forks-url]: https://github.com/TCP-Tech/Codeutsava-X/network/members
[stars-shield]: https://img.shields.io/github/stars/TCP-Tech/Codeutsava-X?style=for-the-badge
[stars-url]: https://github.com/TCP-Tech/Codeutsava-X/stargazers
[issues-shield]: https://img.shields.io/github/issues/TCP-Tech/Codeutsava-X?style=for-the-badge
[issues-url]: https://github.com/TCP-Tech/Codeutsava-X/issues
[license-shield]: https://img.shields.io/github/license/TCP-Tech/Codeutsava-X?style=for-the-badge
[license-url]: https://github.com/TCP-Tech/Codeutsava-X/blob/main/LICENSE
