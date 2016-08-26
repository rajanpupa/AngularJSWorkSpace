package com.tutorialspoint.models;

public class Person {
	Integer id;
	String name;
	String city;
	
	public Person(){}
	public Person(String name, String city){
		this.name = name;
		this.city = city;
	}
	public Person(Integer id, String name, String city){
		this(name, city);
		this.id = id;
	}
	
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	
}
