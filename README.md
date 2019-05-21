# How to deploy on Github?
> A brief guide for publishing projects on Github

Github comes with an amazing service called Github Pages. It's free and easy to setup. So if you want to show off your project to your friends and/or your future employers, then Github Pages is one of the options you can consider to publish your project. But, before you deploy your project, you need to check two things.

1. You have your own server (node.js or express.js) serving your static files (mostly "index.html" & "bundle.js" bundled by webpack).
	if yes, then Github Pages is not your option. (consider other options like Heroku or AWS or Digital Ocean)

2. Your project contains any sensitive user information (like API keys).
	if yes, then Github Pages is not your option.
	Even if you use a npm package something like dotenv, which encrypts information, your information will be exposed on "bundle.js" on your Github repo. 

So if your website has no own server and has no sensitive information, then Github Pages is the right fit for you. Now, let's go ahead and follow the guide here!


### Guide Step 1

I'm assuming that you are not using 'create-react-app'. And your react app has already bundled with webpack. And you know the difference between dev mode and production mode. Just in case you don't know the difference, then take a look at this. [webpack production mode](https://webpack.js.org/guides/production/). One of the biggest differences is that webpack production mode minifies your code by default, meaning that your code has less in size so that your website can be delivered to users faster. When it comes to minification, there are a couple of options out there. You can research later. 

Now, let's do this. Download a npm package called 'gh-pages'. Here's the website. [gh-pages](https://www.npmjs.com/package/gh-pages)
```
npm install -D gh-pages
```



## Meta

James Jongho Kim 
- [Portfolio](https://april9288.github.io/) - It's my portfolio website
- [Github](https://github.com/april9288) - This is my Github page
- [Linkedin](https://www.linkedin.com/in/jongho-kim-b05618170/) - This is my Linkedin page
- april9288@gmail.com
