package com.alizarion.nosql.biz.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by selim.bensenouci on 16/01/14.
 */
public abstract class Person {

    @Id
    private Long id;

    @DBRef
    private Address address;

    @Field("phone_number")
    private String phoneNumber;

    @Field("email")
    private String email;

    @DBRef
    private Set<Todo> todoList = new HashSet<Todo>();

    protected Person(){

    }

    protected Person( Address address, String phoneNumber, String email) {
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }



}
