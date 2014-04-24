This a collection of resources for writing tests, mostly geared towards Python.

# Set Up

Before you can install the project, make sure ``virtualenvwrapper`` is
installed::

    $ pip install -U virtualenvwrapper

Once installed:

    $ mkvirtualenv psychic-ironman
    $ pip install nose selenium

Run all tests:
    $ nosetests

Run a single test file
    $ nosetests test_basic.py

# Notes

Run a specific test
python tests/ MyTestClass.test_my_method

# Docs

+ Selenium Python ReadTheDocs<br />
http://selenium-python.readthedocs.org/en/latest/index.html

# Tutorials

+ TDD Terminology Simplified [nettuts+]<br />
http://net.tutsplus.com/articles/tdd-terminology-simplified/

+ Beginning Test-Driven Development in Python [nettuts+]<br />
http://net.tutsplus.com/tutorials/python-tutorials/test-driven-development-in-python/
