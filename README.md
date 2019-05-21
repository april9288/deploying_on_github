# How to deploy on Github?
> a brief guide for publishing projects on Github

Github comes with an amazing service called Github Pages. It's free and easy to setup. So if you want to show off your project to your friends and/or your future employers, then Github Pages is one of the options you can consider to publish your project. But, before you deploy your project, you need to check two things.

1. You have your own server (node.js or express.js) serving your static files (mostly "index.html" & "bundle.js" bundled by webpack).
	if yes, then Github Pages is not your option. (consider other options like Heroku or AWS or Digital Ocean)

2. Your project contains any sensitive user information (like API keys).
	if yes, then Github Pages is not your option.
	Even if you use a npm package something like dotenv, which encrypts information, your information will be exposed on your bundle.js. 

So your website have only static files without any sensitive information, then Github Pages is the right fit for you. And now let's go ahead and follow the guide here!

## Meta

James Jongho Kim 
- [Portfolio](https://april9288.github.io/) - It's my portfolio website
- [Github](https://github.com/april9288) - This is my Github page
- [Linkedin](https://www.linkedin.com/in/jongho-kim-b05618170/) - This is my Linkedin page
- april9288@gmail.com
