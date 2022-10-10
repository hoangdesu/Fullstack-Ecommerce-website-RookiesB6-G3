package com.ecommerce.server.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class MockController {
    
    @GetMapping("/")
    public String sayHello() {
        System.out.println("Got a response");
        return "<h1>Welcome to the server of Ecommerce website's server!</h1>";
    }
}
