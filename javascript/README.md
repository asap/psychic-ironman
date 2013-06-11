This a collection of resources for writing BDD Tests using Jasmine

Jasmine is a behavior-driven development (BDD) framework for testing JavaScript
code.

# Set up

Copy/Create JavaScript file(s) to be tested within `jasmine/src/` directory

Create empty spec file(s) within `jasmine/spec/` directory

Open jasmine/SpecRunner.html in a text editor

Find the following code:

`<script type="text/javascript" src="src/<!-- SOURCE JAVASCRIPT -->"></script>`

Replace `<!-- SOURCE JAVASCRIPT -->` with /path/to/source.js file

    // for example `src/MyLibrary.js`

Find the following code:

`<script type="text/javascript" src="spec/<!-- SPEC JAVASCRIPT -->"></script>`

Replace `<!-- SPEC JAVASCRIPT -->` with /path/to/spec.js file

    // for example `spec/MyLibrarySpec.js`

Open SpecRunner.html in your browser and you should see failing tests

Make your tests pass!


# Docs

+ Jasmine [github]<br />
http://pivotal.github.com/jasmine/

# Tutorials

+ Testing Your JavaScript with Jasmine [nettuts+]<br />
http://net.tutsplus.com/tutorials/javascript-ajax/testing-your-javascript-with-jasmine/

+ How do I Jasmine: a tutorial [evanhahn.com]<br />
http://evanhahn.com/how-do-i-jasmine/
