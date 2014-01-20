package com.alizarion.nosql.biz.entities;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * Created by selim.bensenouci on 16/01/14.
 */
@Document
public class MoralPerson extends Person {

    @Field("vat_number")
    private String vatNumber;

    @Field("organisation_name")
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
