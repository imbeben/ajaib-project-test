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
```sh
npm run start or npm start
```
