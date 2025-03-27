package sreekanth.springboot_backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="sree")
public class SreeModel {
@Id
@GeneratedValue(strategy =GenerationType.IDENTITY )
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name="mark")
    private int mark;
    @Column(name="Grade")
    private String Grade;


    public SreeModel(){
        
    }

    public SreeModel(String name,int mark,String Grade){
        this.name=name;
        this.mark=mark;
        this.Grade=Grade;
    }



    // create getter setter method


    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id=id;
    }

    
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name=name;

    }


    public int getMark(){
        return mark;
    }

    public void setMark(int mark){
        this.mark=mark;
    }


    public String getGrade(){
        return Grade;
    }
    public void setGrade(String Grade){
        
        
        
        this.Grade=Grade;
    }
   

    
}
