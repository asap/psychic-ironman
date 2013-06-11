import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import ui


class BarrelRoll(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def test_do_a_barrel_roll(self):
        driver = self.driver
        driver.get("http://www.google.com")
        self.assertIn("Google", driver.title)
        elem = driver.find_element_by_name("q")
        elem.send_keys("do a barrel roll")
        elem.send_keys(Keys.RETURN)

        wait = ui.WebDriverWait(driver, 10)

        # This is going to fail, ti's really just to show browser automation.
        # In reality, you would test for something specific, such as
        # wait.until(lambda driver: driver.title.lower().startswith('Title'),
        #            "Message lettting you know it failed"
        wait.until(lambda driver: driver.title.lower().startswith('foo'),
                   "I'm done")

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
