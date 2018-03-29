@facebooklogin
Feature: facebbok testing

  Scenario: facebook login
    Given FURL opened
    When Fuser navigate to login page
    And Fenter username and password
      | fields   | values |
      | uname    | testt  |
      | password | sree   |
      | uname    | testt  |
      | password | sree   |
    Then Flogin  successful
