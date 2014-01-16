package com.alizarion.nosql.biz.entities;

import org.springframework.data.annotation.Id;

import java.util.List;

/**
 * Created by selim.bensenouci on 16/01/14.
 */
public abstract class Person {

    @Id
    private Long id;

    private Address address;

    private String phoneNumber;

    private String email;

    private List<Todo> todoList;

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
