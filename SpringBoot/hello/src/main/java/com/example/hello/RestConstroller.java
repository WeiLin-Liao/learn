package com.example.hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestConstroller {

    @GetMapping("/haha")
    public String index ()
    {
        return "(●'◡'●)";
    }
}
