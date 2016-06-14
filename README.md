# VesperCart

### Commands needed to run and files missing, for the app to work

meteor add angular2-compilers

meteor npm install --save angular2-meteor

meteor npm install --save meteor-node-stubs

meteor remove blaze-html-templates

npm install typings -g 

typings install es6-promise 

typings install es6-shim --ambient

meteor npm install angular2-meteor-auto-bootstrap --save

sudo chown -R $USER ~/.meteor

sudo chown -R $USER .meteor/local/build

meteor add u2622:persistent-session

add meteor.d.ts file and reference it in main.d.ts (you can look for this file in github)
