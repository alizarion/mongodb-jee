package com.alizarion.nosql.dto;

/**
 * Created by selim.bensenouci on 22/01/14.
 */
public class I18nDTO {

    private String key;

    private String value;


    public I18nDTO(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
