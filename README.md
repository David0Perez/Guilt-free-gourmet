# Guilt-Free Gourmet Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
A Healthy LifeStyle can help you thrive as you move through your life's Journey. Making healthy choices isn't always easy - It can be hard to find the time and energy to exercise regularly or prepare healthy meals. However, your efforts will pay off in many ways, and for the rest of your Life, so Why Not to start now?

Guilt-Free Gourmet is an application that allows the user to search healthy recipes looking through 2.3 million of Recipes Ideas (requested through a Third Party API) once the user is already created an account. By searching for Meal Recipes, with their own corresponding pictures, the user will be able to save them on favorites on his profile for later viewing purposes, add Comments, and customize it by his preference.

## Table of Contents
- [The Challenge](#Challenges-Faced)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [Mock Up](#Mock-Up)
- [License](#License)
- [Authors](#Authors)

## Challenges Faced
All challenges that we've faced during the process.

## User Story

```md
    AS a USER who's trying to have healthier Habits, I want to be able to create an Account on Guilt-Free Gourmet Application.

    AS a USER, I want to be able to Search for Food Recipes and their Respective specifications, as ingredients, nutritional facts an Directins.

    AS a USER, I want to be able to add Comments, customize them on my preference.

    AS a USER, I want to be able to save the recipes on my profile and visualize them for later viewing purposes.

    AS a USER, I want to be able to create my own recipes for other users to view.
```

## Acceptance Criteria

```md

- It's done when the user is able to create his account successfully.

- It's done when the user is able to add look for recipes, add comments and customize each recipe by his preference saved them on his profile.

- It's done when the user is able to show his recipes on his profile.

- It's done when the user is able to create his own recipe.

```

## Usage Information
"We are what we eat".
By allowing the user to look for recipes through a third party API (Edamam), the user will have some guidance about how to organize his meals, have a better lifestyle and feel able to create his own recipes by his desire.

## Installation Process
1. Clone the repository in your VSC application through Command Line.
2. Open the integrated terminal and make sure to have all your packages installed `npm i`
3. Run `mysql -u root -p` and enter your password + enter `source db/schema.sql`
4. After your data is being seeded => Quit mysql and enter `npm run seed`.
5. After seeding all of your database => Enter `npm run start` and your application will be running in localhost:3001.

## Built With
1. Bulma and Tailwind CSS Frameworks for Styling.
2. VSC for code Edition.
3. Node JS.
4. Express JS and its dependencies.
5. Sequelize and MySql for database.
6. bcrypt for passwords.

## Mock Up


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Authors
 - Dowling, Blair.
 - Angulo, Maria.
 - Perez, David.
 - Kelly, Troy.

## TO DO => Routes are working properly 
1. Comments and recipes are able to be created => Need to be displayed.
2. Functionality for findRecipe button => document.location.replace to viewSavedRecipes with route '/recipe/:id' for a single view recipe option. => It's in profile.js folder
3. API request => Need to have recipes displayed on the screen => favorites.js file.