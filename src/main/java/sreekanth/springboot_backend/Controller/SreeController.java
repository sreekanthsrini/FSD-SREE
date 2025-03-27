package sreekanth.springboot_backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sreekanth.springboot_backend.Repository.SreeRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3001/")


public class SreeController {

    // attach the Repository

    @Autowired
    private SreeRepository sreeRepository;



    @GetMapping("/sree")
    public List<sreekanth.springboot_backend.Model.SreeModel>

    getSreeUsers(){
        return this.sreeRepository.findAll();
    }


    
}
