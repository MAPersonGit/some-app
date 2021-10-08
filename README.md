# This project was created for fun and educational purposes


## Project structure
* `/Controllers` - This folder would contain all the functions for your `APIs`. Naming of files - `xxxxx.controllers.js`
* `/Routes` - This folder would contain all the routes that you have created using `Express Router` and what they do would be exported from a Controller file <br/>
 Naming of files - `xxxxx.routes.js`
* `/Models` - This folder would contain all your schema files and and the .... functions required for the schema would also lie over here. <br/>
 Naming of files - `xxxxx.js`
* `/Middleware` - This folder would contain all the middleware that you have created, whether it be authentication/some other function.
 Naming of files - `xxxxx.middleware.js`
* `/Utils` <i>(Optional)</i> - The common functions that you would require multiple times throughout your code
<br/> Naming of files - <i>Normal project file naming scheme</i>
* `/Templates` <i>(Optional)</i> - If your code requires you to send certain emails/HTML code to the client-side, store it in this files
<br/> Naming of files - <i>Normal project file naming scheme</i>
* `/Config` <i>(Optional)</i> - Configuration files for third party `APIs/services` like `passport/S3`, etc <br/>
Naming of files - <i>Normal project file naming scheme</i>
