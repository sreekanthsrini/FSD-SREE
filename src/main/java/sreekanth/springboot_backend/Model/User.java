// // package sreekanth.springboot_backend.Model;

// // import jakarta.persistence.Column;
// // import jakarta.persistence.Entity;
// // import jakarta.persistence.GeneratedValue;
// // import jakarta.persistence.GenerationType;
// // import jakarta.persistence.Id;
// // import jakarta.persistence.Table;

// // @Entity
// // @Table(name = "users")
// // public class User {
// //     @Id
// //     @GeneratedValue(strategy = GenerationType.IDENTITY)
// //     private long id;
// //     @Column(name = "first_name")
// //     private String firstName;
// //     @Column(name = "last_name")
// //     private String Lastname;
// //     @Column(name = "email")
// //     private String email;

   




// //     public void user(){
        
// //     }




// //     public User(String firstName,String Lastname,String email ){
// //         super();
// //         this.firstName=firstName;
// //         this.Lastname=Lastname;
// //         this.email=email;
// //     }
    

// //     // creating getter setter

// //     public long getId(){
// //         return id;
// //     }
// //     public void setId(long id){
// //         this.id=id;
// //     }

// //     public String getFirstName(){
// //         return firstName;
// //     }
// //     public void setFirstName(String firstname){
// //         this.firstName=firstname;
// //     }
// //     public String getLastName(){
// //         return firstName;
// //     }
// //     public void setLastName(String lastname){
// //         this.Lastname=lastname;
// //     }
// //     public String getEmail(){
// //         return email;
// //     }
// //     public void setEmail(String email){
// //         this.email=email;
// //     }

// //     // create a constructor
   
// // }


// package sreekanth.springboot_backend.Model;

// import jakarta.persistence.*;

// @Entity
// @Table(name = "users")
// public class User {
    
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
   
//     private String firstName;
//     private String lastName;
//     private String email;

//     // Constructors
//     public User() {}

//     public User(String firstName, String lastName, String email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//     }

//     // Getters and Setters
//     public Long getId() { return id; }
//     public void setId(Long id) { this.id = id; }

//     public String getFirstName() { 
//         return firstName;
//      }
//     public void setFirstName(String firstName) { 
//         this.firstName = firstName;
//      }

//     public String getLastName() { 
//         return lastName;
//      }
//     public void setLastName(String lastName) {
//          this.lastName = lastName; 
//         }

//     public String getEmail() {
//          return email; 
//         }
//     public void setEmail(String email) { 
//         this.email = email;
//     }
// }

