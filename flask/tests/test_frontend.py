""" Test Front End """

import requests
import unittest
from selenium import webdriver
from selenium.webdriver.support import ui

site_url = 'http://localhost:5000'

    
class URLtest(unittest.TestCase):

    def test_homepage_404(self):
        url = site_url

        r = requests.get(url)

        self.assertEquals(
            requests.codes.OK,
            r.status_code,
            "%s should return a 200, got %s instead" % (url, r.status_code)
        )

class PageTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()
        self.url = site_url

    def test_homepage(self):
        driver = self.driver
        driver.get(self.url)

        self.assertTrue(
            driver.find_elements_by_class_name('title'),
            "Can't find a title on the page"
        )

    def test_homepage_click(self):
        driver = self.driver
        driver.get(self.url)

        # Sets timeout for wait which we will use after the click
        wait = ui.WebDriverWait(driver, 10)

        title = driver.find_element_by_css_selector('.title a')

        title.click()

        # Waits until the url changes to '/hello' or till a timeout
        wait.until(lambda driver: driver.current_url.endswith('/hello'),
                   "Click Title No Work")

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
