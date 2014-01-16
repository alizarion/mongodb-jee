package com.alizarion.nosql.biz.entities;

/**
 * Created by selim.bensenouci on 16/01/14.
 */
public class MoralPerson extends Person {

    private String vatNumber;

    private String organisationName;


    public MoralPerson(String vatNumber, String organisationName) {
        this.vatNumber = vatNumber;
        this.organisationName = organisationName;
    }

    public String getVatNumber() {
        return vatNumber;
    }

    public void setVatNumber(String vatNumber) {
        this.vatNumber = vatNumber;
    }

    public String getOrganisationName() {
        return organisationName;
    }

    public void setOrganisationName(String organisationName) {
        this.organisationName = organisationName;
    }
}
