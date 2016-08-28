package com.tutorialspoint.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tutorialspoint.models.Person;

@Controller
//@RequestMapping("/hello")
public class HelloController{
	Integer id = 5;
	List<Person> persons ;
	
	@RequestMapping(value="/")
	public @ResponseBody String defaultMethod(){
		return "<a href='/print'> Click me</a>";
	}
 
   @RequestMapping(value="print", method = RequestMethod.GET)
   public String printHello(ModelMap model) {
      return "index";
   }
   
   @RequestMapping(value="getPersons", method = RequestMethod.GET)
   public @ResponseBody List<Person> getPersons() {
      
	  if(persons==null){
		  persons = new ArrayList<Person>();
		  
	      persons.add(new Person(1,"Dave Jones", "Phoenix"));
	      persons.add(new Person(2, "Jamie Riley", "Atlanta"));
	      persons.add(new Person(3, "Heedy Wahlin", "Chandler"));
	      persons.add(new Person(4, "Thomas Winter", "Seattle"));
	  }
      
      return persons;
   }
   
   @RequestMapping(value="getPersons", method = RequestMethod.POST)
   public @ResponseBody Person addPersons(@RequestBody Person person) {
      
	  if(persons==null){
		  persons = new ArrayList<Person>();
	  }
	  
	  if(person.getId()==null){
		  person.setId(id++);
	  }
	  
	  persons.add(person);
	  
	  return person;
      
   }
   
   @RequestMapping(value="getPersons/{id}", method = RequestMethod.DELETE)
   public @ResponseBody String deletePerson(@PathVariable("id") Integer id) {
      if(persons != null && id != null){
    	  deletePersons(id);
      }
      return "success";
   }

	private void deletePersons(Integer id) {
		persons = persons
					.stream()
					.filter(a->!a.getId().equals(id))
					.collect(Collectors.toList());
	}
}
