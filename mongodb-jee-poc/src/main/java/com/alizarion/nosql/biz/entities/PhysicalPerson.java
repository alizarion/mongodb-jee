package com.alizarion.nosql.biz.entities;

import java.util.Date;

/**
 * Created by selim.bensenouci on 16/01/14.
 */
public class PhysicalPerson  extends Person {

    private String firstName;

    private String lastName;

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
