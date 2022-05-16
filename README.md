# Ajaib-Project-Test / Example With Search and Filter

# Javascript (FE)

Every time developer add new config, please add the additional config into `config.js.development`.
Keep in mind that `config.js.development` will be used for building Multistaging.
  
**Keep in mind these rules:**

- Please maintain `config.js.development` based on your needs. Infra team only get the `config.js.development` for building multstaging.
- For `.env.development`, if it exists, the treatments are the same like the steps above. 
If you added config on `config.js.development` and the value will be different on new version, please added the value to `config.js.development`. Example, new config on `config.js.development` with new key is `new_value`. Then `config.js.development` will be:
```
-------- other config above --------
"new_value": {new_placeholder}
```

---
#### Maintaner #### 
@imbeben

If you don't understand git or any else it's good to read this tutorial link below, before you start the installation

[Tutorial](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners) - Simple Basic Tutorial for Using github

Please make sure you use latest node version

### Primary Node Modules ###

* ReactJS 18 (https://reactjs.org/)

* ... and other ingredients until 100% 👌

## :open_file_folder: Directory Structure
```
ajaib-project-test
   /public 
	/src
		/Components -> pure component
		/Config
		/Containers -> HoC
		/Redux
		/Sagas
		/Services
   App.js
   App.test.js -> default by React (npx create-react-app)
	config.js -> configuration for client side
   config.js.development -> configuration for client side used for building Multistaging
	index.css
   index.js
   reportWebVitals.js -> default by React (npx create-react-app)
   setupTests.js -> default by React (npx create-react-app)
   package-lock-json
	package.json
	.gitignore
	README.md
```

## Step by step Installation
- Make sure you already fork this repository

- Git clone ajaib-project-test repository to your local machine

- Type on your terminal to install all package library from package-lock.json
```
    npm ci or npm install
```

- The next step is configuration...

## Configuration
There are some files that you need to do some configuration :

- create a file with config.js name. You can copy a configuration from multi staging with file name config.js.development

this is some important variable that you need to replace on your local machine

```
apiURL: endpoint to get data, connect to repo backend
```

## How to Start the application
```
npm run start or npm start
```
## Method that can implement for Better Web Performance
**Disable Query Strings for Static Resources**
example: 
```
weblink.com/home?page=2 // with querry string
weblink.com/home // without querry string
```
**Minify Website’s Scripts**
Minification of resources means removing unnecessary characters from your HTML, JavaScript, and CSS that are not required to load, such as:

- White space characters
- New line characters
- Comments
- Block delimiters

example for css: 
```
#bluetext {
font-size: 2em;
color: blue;
}

#redtext {
font-size: 1em;
color: red;
}
```
after minify
```
#bluetext{font-size:2em;color:blue;}#redtext{font-size:1em;color:red;}
```

By removing the empty spaces within that code, we can reduce its file size. For a few lines of code, that might not have a significant impact. However, when you consider just how many scripts a modern site has, minification can make a noticeable difference in loading times

**Reduce HTTP requests**
When your browser fetches data from a server it does so using HTTP (Hypertext Transfer Protocol). It is a request/response between a client and a host. In general the more HTTP requests your web page makes the slower it will load.

There are many ways you can reduce the number of requests such as:

- Inline your JavaScript (only if it is very small)
- Reducing assets such as third party plugins that make a large number of external requests
- Don't use third party frameworks unless they are absolutely needed
- Use less code (Clean code)

The number of requests a particular website must make varies greatly from site to site. Running a site speed test will tell you how many requests were needed in order to generate a particular page.

**Serve scaled images**
You should always upload your images at scale and not rely on CSS to size them down. If you do you will run into this little Google PageSpeed recommendation: Optimization suggestion: "By compressing and adjusting the size of ... you can save 5.8 KB (51%).

This recommendation refers to your images being scaled down by your browser. For example, maybe the image you upload has a 400px width, but the column it was placed in is only 300px wide. This results in your image being scaled down to 300px due to CSS so that it matches the column size. It is better to always upload images at scale and also upload multiple resolutions of your images and serve the right resolution for the right device.

It is not always possible to avoid scaling with CSS, especially if you are working with high resolution retina devices.