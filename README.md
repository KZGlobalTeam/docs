# CSGO KZ Docs

Documentation for CSGO Kreedz related things, including but not limited to guides.
> <https://docs.gokz.org>.

![Build status](https://img.shields.io/github/workflow/status/kzglobalteam/docs/build/master?style=for-the-badge&color=3eaf7c)
![Open issues](https://img.shields.io/github/issues/kzglobalteam/docs?style=for-the-badge&color=3eaf7c)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/kzglobalteam/docs?style=for-the-badge&color=3eaf7c)

## Running locally

1. Clone the project `git clone https://github.com/KZGlobalTeam/docs.git csgo-kz-docs`.
2. Navigate to the project directory `cd csgo-kz-docs`.
3. Install NodeJS dependencies `npm install`.
4. Start the dev server: `npm run dev`.
5. Navigate to `http://localhost:3000` on your browser.

## Running on StackBlitz

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/kzglobalteam/docs)

StackBlitz lets you easily play around with the project without setting up a local environment for the project.

The project can imported with: <https://stackblitz.com/github/kzglobalteam/docs>.
<br>This can also be used to preview your fork by changing `kzglobalteam` in the URL to your account name.

## Environment variables

- `NODE_ENV` - If set to "production", adds last updated to pages.
- `DOCS_BASE_URL` - Base url for the documentation, defaults to `/`.
