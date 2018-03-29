$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demo.feature");
formatter.feature({
  "line": 3,
  "name": "GMail testing",
  "description": "",
  "id": "gmail-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@gmaillogin"
    },
    {
      "line": 2,
      "name": "@SM"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Gmail login",
  "description": "",
  "id": "gmail-testing;gmail-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "URL opened",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigate to login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "login  successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "gmail-testing;gmail-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "gmail-testing;gmail-login;;1"
    },
    {
      "cells": [
        "testuser_1",
        "Test@153"
      ],
      "line": 13,
      "id": "gmail-testing;gmail-login;;2"
    },
    {
      "cells": [
        "testuser_2",
        "Test@153"
      ],
      "line": 14,
      "id": "gmail-testing;gmail-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Gmail login",
  "description": "",
  "id": "gmail-testing;gmail-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@gmaillogin"
    },
    {
      "line": 2,
      "name": "@SM"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "URL opened",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigate to login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter \"testuser_1\" and \"Test@153\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "login  successful",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.url_opened()"
});
formatter.result({
  "duration": 21686597407,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.29.461585 (0be2cd95f834e9ee7c46bcc7cf405b483f5ae83b),platform\u003dMac OS X 10.11.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 19.93 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Sreedevis-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:aa60:b6ff:fe13:d5bc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461585 (0be2cd95f834e9ee7c46bcc7cf405b483f5ae83b), userDataDir\u003d/var/folders/1y/sn4wg9h51q103tqgppsy54zc0000gn/T/.org.chromium.Chromium.hBDVUL}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: c16c9053ef20e0ec8b8d9e7851bea7da\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:364)\n\tat steps.stepdefinition.url_opened(stepdefinition.java:16)\n\tat ✽.Given URL opened(demo.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdefinition.user_navigate_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser_1",
      "offset": 7
    },
    {
      "val": "Test@153",
      "offset": 24
    }
  ],
  "location": "stepdefinition.enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefinition.login_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Gmail login",
  "description": "",
  "id": "gmail-testing;gmail-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@gmaillogin"
    },
    {
      "line": 2,
      "name": "@SM"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "URL opened",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigate to login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter \"testuser_2\" and \"Test@153\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "login  successful",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.url_opened()"
});
formatter.result({
  "duration": 3156544896,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.29.461585 (0be2cd95f834e9ee7c46bcc7cf405b483f5ae83b),platform\u003dMac OS X 10.11.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.46 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Sreedevis-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:aa60:b6ff:fe13:d5bc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461585 (0be2cd95f834e9ee7c46bcc7cf405b483f5ae83b), userDataDir\u003d/var/folders/1y/sn4wg9h51q103tqgppsy54zc0000gn/T/.org.chromium.Chromium.yFN0mp}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6ebdf3f58ccf78891ad7a7a7169dd61c\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:364)\n\tat steps.stepdefinition.url_opened(stepdefinition.java:16)\n\tat ✽.Given URL opened(demo.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdefinition.user_navigate_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser_2",
      "offset": 7
    },
    {
      "val": "Test@153",
      "offset": 24
    }
  ],
  "location": "stepdefinition.enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefinition.login_successful()"
});
formatter.result({
  "status": "skipped"
});
});