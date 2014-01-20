package com.alizarion.nosql.biz.entities;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

/**
 * Created by selim.bensenouci on 16/01/14.
 */
@Document
public class PhysicalPerson  extends Person {

    @Field("first_name")
    private String firstName;

    @Field("last_name")
    private String lastName;

    @Field("birth_date")
    private Date birthDay;

    public PhysicalPerson() {

    }

    public PhysicalPerson(String firstName, String lastName, Date birthDay) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(Date birthDay) {
        this.birthDay = birthDay;
    }
}
