# Free Your Stuff

## Idea

A **mobile-first** platform designed to help facilitate the culture of **giving away** your unused/unwanted items away to people who need them more then you!

<br>
<center>
<img src="https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535125076/LogoBigo2.png" alt="logo of app" width="300" height="300" >
</center>
<br>

## Motivation

A common practice in the city of Tubingen, Germany, was that people would leave their unwanted items in the street with a sign saying **"For Free"**. I appreciated the idea and the recycling culture, however also noticed some problems such as:

* Only an immediate passerby would be able to take them
* Things would be left out for multiple days
* Also in bad weather
* Some people would leave undesirable stuff (trash)

There are platforms that try to help, however they are poorly designed, often requiring long descriptions to be able to past an app, and **hard to navigate**

This app is currently able to **solve all these problems** by:

* One click uploading
* Geolocation of items dropped
* photo recognition enabling *smart tagging*

## Screenshots
<br>
<center>
<img src="https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535129728/mobis2.png" alt="screen shots of app" width="700" height="380" >
</center>
<br>

## Getting Started

1. Clone both the **Free Your Stuff** [front-end](https://github.com/OliWalker/FreeYourStuff-FE/) and the **Free Your Stuff** [back-end](https://github.com/OliWalker/FreeYourStuff-BE)
2. In the command line, for both repos, enter `npm i` then follow the repository specific instructions below.

## Frontend Repository Configuration

### Step 1: Acquire Google Cloud API Key

You will need to acquire a Google Cloud API key that grants you access to **Cloud Vision API** and **Maps JavaScript API.**

Go to [https://cloud.google.com/](https://cloud.google.com/) and create an account. At the time of writing this, it is a requirement to enter your payment details to prove you are not a robot. Google informs you during this process that no actual billing will be taken without your authorisation.

### Step 2: Setup a Cloudinary account

Go to [https://cloudinary.com/](https://cloudinary.com/) and create an account. In the Settings - Upload page which can be accessed at [https://cloudinary.com/console/settings/upload](https://cloudinary.com/console/settings/upload), search for 'Add upload preset' and create a new one. Set the 'Signing Mode' to be 'Unsigned' and save the newly created upload preset. You will need the upload preset name in your config file.

### Step 3: Create a config file

Using the `/config/example.config.js` file, create your own `config.js` file inside the `/config` folder. This file should contain your Google and Cloundinary details.

## Backend Repository Configuration

TODO (replace content below with step-by-step instructions)

Create a **.env** file - following the **.env.example**

## Starting the application

- Frontend: `npm start`
- Backend: `npm run dev`

## Possible features to add

* Tests!
* Login/authentication & user accounts
* Weather recognition (if weather is bad, don't leave things out!)
* User messages
* Ability to gift things person to person

## Tech Stack

* [React](https://reactjs.org/) - The frontend framework used
* [Koa](https://koajs.com/) - The backend framework used
* [MongoDb](https://www.mongodb.com) - The database used
* [Cloudinary](https://cloudinary.com) - The photo-storage database
* [Google APIs](https://console.cloud.google.com) - APIs for Maps and Cloud Vision

## Contributing

Contributions Welcome!

This is an ongoing project and external input and ideas will be gladly received!

## License

This project is licensed under the MIT License, take it, have fun.
