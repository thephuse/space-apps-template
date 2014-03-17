SpaceApps Toronto Template
=============

This is a copy of the 2013 Space Apps Toronto website, which we are making freely available to any other space apps venue that would like to use it!

This is a static HTML/CSS/JS site that can be seen here [http://thephuse.github.io/space-apps-template/](http://thephuse.github.io/space-apps-template/)

Structure
-------------

###index.html
###press.html
###sponsors.html
###youth.html


###challenges.html

Make a list of challenges that your venue will be promoting at the hackathon. The challenges can be filtered by Skill Set. All you need to do to set up the filtering is tag your challenges using classes, like so:

``` <li class="challenges_page_list-challenge software design hardware strategy">
```

The above challenge is tagged with software, design, hardware, and strategy, so it will show up under each of those filters. Additionally, list the same tags in the `<li>` body like this:


```<ul class="challenges-tags">
	<li class="challenges-tag challenges-needed">Skills needed:</li>
	<li class="challenges-tag challenges-design">Design</li>
	<li class="challenges-tag challenges-software">Software</li>
	<li class="challenges-tag challenges-hardware" >Hardware</li>
	<li class="challenges-tag challenges-strategy">Citizen Science</li>
</ul>
```

One important discrepancy to note is that the `strategy` filter/tag is displayed publicly as "Citizen Science".

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