$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/demo1.feature");
formatter.feature({
  "line": 2,
  "name": "facebbok testing",
  "description": "",
  "id": "facebbok-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@facebooklogin"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "facebook login",
  "description": "",
  "id": "facebbok-testing;facebook-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "FURL opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Fuser navigate to login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Fenter username and password",
  "rows": [
    {
      "cells": [
        "fields",
        "values"
      ],
      "line": 7
    },
    {
      "cells": [
        "uname ",
        "testt "
      ],
      "line": 8
    },
    {
      "cells": [
        "uname1",
        "test2"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Flogin  successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef2.furl_opened()"
});
formatter.result({
  "duration": 5814512108,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef2.fuser_navigate_to_login_page()"
});
formatter.result({
  "duration": 24405,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef2.fenter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 252530860,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef2.flogin_successful()"
});
formatter.result({
  "duration": 327106861,
  "status": "passed"
});
});