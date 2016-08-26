# MVC | JSP

**Dependencies for JSP **
```
		<dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>javax.servlet-api</artifactId>
			<version>3.0.1</version>
		</dependency>
```

* To pass some parameters from controller to the view
```
 // in controller
 model.addAttribute("key", "Value Object");
 
 // in view
 ${key} 
```

### Notes
* Jsp simply puts java inside HTML.
* Expressions can be used to add dynamic content
```
<HTML>
<BODY>
Hello!  The time is now <%= new java.util.Date() %>
</BODY>
</HTML>
```

* Scriptlet is the block of code just like expressions but without the `=` sign
```
<%
	// generates html output
	out.println("Hello World");
	// prints in the console
	System.out.println("Evaluating date now");
	java.util.Date date = new java.util.Date();
%>
Hello!  The time is now <%= date %>
```

* The `out` variable is of type `javax.servlet.jsp.JspWriter`
* `request` is another pre-defined variable of type `javax.servlet.http.HttpServletRequest`.


### Reference
http://www.jsptut.com/