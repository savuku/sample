@gmaillogin
@SM
Feature: GMail testing
Scenario Outline: Gmail login
Given URL opened
When user navigate to login page
And enter "<username>" and "<password>"

Then login  successful

Examples:
    | username   | password |
    | testuser_1 | Test@153 |
    | testuser_2 | Test@153 |
