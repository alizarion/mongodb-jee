package com.alizarion.nosql.biz.entities;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * Created by selim.bensenouci on 16/01/14.
 */
@Document
public class Address {


    private String street;

    private String number;

    @Field("zip_code")
    private Integer zipCode;

    public Address() {

    }

    public Address(String street, String number, Integer zipCode) {
        this.street = street;
        this.number = number;
        this.zipCode = zipCode;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Integer getZipCode() {
        return zipCode;
    }

    public void setZipCode(Integer zipCode) {
        this.zipCode = zipCode;
    }


}
