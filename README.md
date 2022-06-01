# Rocket Academy's Marketing Website

## Setup Instructions

### Basic Setup

1. Copy contents from "Marketing Site .env.development" entry in 1Password's Platform vault into a local `.env.development` file at the root of this repo
2. Install Gatsby globally with `npm i -g gatsby-cli`
3. Run `gatsby develop` from the root of the repo
4. View the page at `localhost:8000`

### Setup Netlify locally to test Netlify Functions

1. Install Netlify CLI globally with `npm i -g netlify-cli`
2. Run `netlify dev` from the root of the repo
3. View the page at `localhost:8888`

## Deploy Instructions

### Deploy to Staging

1. Merge feature branch with `main` through PR
2. View staged changes at https://marketing-website-staging.netlify.app/

### Deploy to Production

1. Merge `main` with `production` branch once ready
2. View live changes at https://rocketacademy.co
