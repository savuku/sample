package steps;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdef2 {
	WebDriver driver=null;
	@Given("^FURL opened$")
	public void furl_opened() throws Throwable {
		driver= new ChromeDriver();
		driver.get("https://www.facebook.com/");
	  String text=driver.getTitle();
	  System.out.println(text);
	}

	@When("^Fuser navigate to login page$")
	public void fuser_navigate_to_login_page() throws Throwable {
	    
	}

	@When("^Fenter username and password$")
	public void fenter_username_and_password(DataTable table) throws Throwable {
		 List<List<String>> data = table.raw();
		driver.findElement(By.id("email")).sendKeys(data.get(1).get(1)); 	 
	     driver.findElement(By.id("pass")).sendKeys(data.get(2).get(1));
	}

	@Then("^Flogin  successful$")
	public void flogin_successful() throws Throwable {
	  driver.quit();
	}


}
