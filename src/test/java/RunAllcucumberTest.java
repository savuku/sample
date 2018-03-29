

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "pretty", "html:target/cucumber" }, tags = {
		"@SM" }, features = "src/test/java/features/")

public class RunAllcucumberTest {

}
