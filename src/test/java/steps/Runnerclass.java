package steps;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features="src/test/java/demo1.feature",

format={"pretty","html:target/Reports"}

)


public class Runnerclass {

}
