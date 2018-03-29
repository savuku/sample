package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefinition {
	WebDriver driver=null;
	@Given("^URL opened$")
	public void url_opened() throws Throwable {
		driver= new ChromeDriver();
		driver.get("https://www.facebook.com/");
	  String text=driver.getTitle();
	  System.out.println(text);
	}

	@When("^user navigate to login page$")
	public void user_navigate_to_login_page() throws Throwable {
	  
	}

	@When("^enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_and(String username, String password) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(username); 	 
	    driver.findElement(By.id("pass")).sendKeys(password);
	}

	@Then("^login  successful$")
	public void login_successful() throws Throwable {
	    driver.quit();
	}



}
