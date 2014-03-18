SpaceApps Toronto Template
=============

This is a copy of the 2013 Space Apps Toronto website, which we are making freely available to any other space apps venue that would like to use it!

This is a static HTML/CSS/JS site template for Space Apps that can be seen here [http://thephuse.github.io/space-apps-template/](http://thephuse.github.io/space-apps-template/).

Development
-------------

###Requirements

* Some variety of local server (for Typekit authorization)
* Sass CLI or a GUI for compiling .scss to sass

###To compile Scss
```bash
cd space-apps-template/styles
sass --watch main.scss:main.css
```

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

Structure
=============

index.html
-------------

####Header

This is a responsive header that changes to a dropdown menu at a page width of 769px. You will need to update `{Your Blog Link}` and `{Your Email}` in the navigation. For the blog, Space Apps Toronto 2013 used a [Tumblr blog] (http://spaceappstoronto.tumblr.com/). You will have to update the navigation on every page. Note that the links here are different from the other pages, as clicking something like challenges, which links to `#challenges` will animate a scroll down to that section. Clicking challenges from the press page will just link you to the challenges section on the index page.

####{LOCATION}, PREPARE YOURSELVES FOR LIFTOFF

Introduce the event here. You will need to update the `{Date of Event}` as well as the `{Venue Location}` where your event will be held (e.g. museum, conference hall, university building, etc).

####Register

Link to space apps registration.

####Challenges

For each challenge, we linked out to a Google Groups discussion. You will need to update the `{Challenge Name}` and `{Challenge Link}`.

####The Schedule

Since some venues start with a pre-event, the `<!-- @module CALLOUT-->` is optional. If these events are held at a different location than your main event, use the `{Venue Location}` link to direct participants to a map. You can use the `{RSVP link}` to collect RSVP information from interested participants (e.g. use a Google or Wufoo form).

You will need to fill in the schedule with the specifics of your event. The schedule from the 2013 Toronto event is there as a placeholder.

Don't forget to change the dates and the days of the week!

####Sponsors

Give a nice shoutout to your sponsors! The placeholders can be used to showcase sponsors on the homepage. You will need to update the `{Link to Sponsorship Package}`.

####Organizers

Each `<!-- @component ORGANIZER -->` has their name and photo visible here, and an associated modal. For each one, make sure that the `href="#modal0"` and the `id="modal0"` match up, so that the correct modal opens for each person.

Within the modal, you can link out to the organizer's twitter, personal website, and anything else they want you to plug. The blank image in the modal (`<img src="" />`) will be populated with the same image from the home page (whatever you replace `src="images/logo_you.png"` with).

####Mentors

Same as organizers, but note that the `href="#modal0"` and the `id="modal0"` must still match up, and the id's must not overlap with those from the organizers section. For example, the template provided starts them counting at `href="#modal7"` and `id="modal7"`.

####Questions & Answers

Again we use the `href="#faq1"` and `id="faq1"` match up. You will probably want to include similar questions, so we left our FAQ there. You will need to update `{Your Twitter}` and `{Your Email}`.

####Join the conversation

Last year, we displayed tweets in this space using the old Twitter API. Since things have changed, and you now need verification to do that, you'll have to follow a tutorial to get set up with a stream of your tweets ([see this page from twitter](https://blog.twitter.com/2012/embedded-timelines-howto)). You will need to update `{Your Twitter}` and `{Your Facebook}`.

####Press & Posters

If you have a press package, here's a place to link to it!

####Footer

Lots to fill out here! `{Your Twitter}`, `{Your Email}`x2, and `{Your Facebook}`. We would really, really appreciate it if you left the attribution to [The Phuse](http://thephuse.com) in the corner. :) <3

press.html
-------------

####Header

Update the links!

####Space Apps {Location} In the Press

Update the `{Location}` and add details for each article.

####Downloads

Update the links for each download.

sponsors.html
-------------

Shotouts to all your awesome sponsors and supporters! Fill in their logos, names, and links.

If you have a different number of sponsors, and you would like to see everything spaced out nicely, check out the different grid sizes in `layout.scss` and update the classes in each row accordingly.


challenges.html
-------------

Make a list of challenges that your venue will be promoting at the hackathon. The challenges can be filtered by Skill Set. All you need to do to set up the filtering is tag your challenges using classes, like so:

```html
<li class="challenges_page_list-challenge software design hardware strategy">
```

The above challenge is tagged with software, design, hardware, and strategy, so it will show up under each of those filters. Additionally, list the same tags in the `<li>` body like this:


```html
<ul class="challenges-tags">
	<li class="challenges-tag challenges-needed">Skills needed:</li>
	<li class="challenges-tag challenges-design">Design</li>
	<li class="challenges-tag challenges-software">Software</li>
	<li class="challenges-tag challenges-hardware" >Hardware</li>
	<li class="challenges-tag challenges-strategy">Citizen Science</li>
</ul>
```

One important discrepancy to note is that the `strategy` filter/tag is displayed publicly as "Citizen Science".
