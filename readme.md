SpaceApps Toronto Template
=============

This is a copy of the 2013 Space Apps Toronto website, which we are making freely available to any other space apps venue that would like to use it!

This is a static HTML/CSS/JS site that can be seen here [spaceappstoronto.com/2013](http://spaceappstoronto.com/2013)

Structure
-------------




Development
-------------

###Requirements

* Some variety of local server (for Typekit authorization)
* Sass CLI or a GUI for compiling .scss to sass

###To compile Scss
```cd space-apps-template/styles
sass --watch main.scss:main.css```

####Local server options (OSX)

* Python local server: `python -m SimpleHTTPServer` (starts server at localhost:9000)
* PHP local server (10.9+): `php -S localhost:8888`
* [MAMP](http://www.mamp.info/en/index.html)

```bash
git clone git@github.com:thephuse/SpaceApps2.git
cd space-apps-template/styles
sass --watch main.scss:main.css # alternatively compile sass using a GUI
```

Deployment
------------
Site is hosted on Github Pages at [spaceappstoronto.com/](http://spaceappstoronto.com/).

To push to gh-pages:

```bash
git checkout gh-pages
git merge master
git push origin gh-pages
```