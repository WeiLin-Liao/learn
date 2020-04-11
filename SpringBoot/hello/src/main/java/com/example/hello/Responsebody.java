package com.example.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/v1")
public class Responsebody {

    @GetMapping("/hello")
    @ResponseBody
    public String index ()
    {
        return "hello world! ";
    }

}
