package com.alizarion.nosql.biz.entities;

/**
 * Created by selim.bensenouci on 16/01/14.
 */
public class Credential {

    private Long id;

    private String userName;

    private String password;


    public Credential(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
