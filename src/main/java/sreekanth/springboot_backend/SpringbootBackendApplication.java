package sreekanth.springboot_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import sreekanth.springboot_backend.Model.SreeModel;
import sreekanth.springboot_backend.Repository.SreeRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner { 

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
// @Autowired
// private UserRepository userRepository;
// 	@Override
// 	public void run(String... args) throws Exception {
// 		this.userRepository.save(new User("sree","kanth","@gmail.com"));
// 		this.userRepository.save(new User("sree","kanth","@gmail.com"));
// 		this.userRepository.save(new User("sree","kanth","@gmail.com"));
		
// 	}

@Autowired
private SreeRepository sreeRepository;

@Override
public void run(String... args) throws Exception {

	this.sreeRepository.save(new SreeModel("sreekanth",90,"A"));
	this.sreeRepository.save(new SreeModel("sanjeev",95,"A"));
	


}

}
