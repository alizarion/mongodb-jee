package com.alizarion.nosql.biz;

/**
 * Created by selim.bensenouci on 21/01/14.
 */
public class CaptchaDTO {

    private String response;

    private String  challenge;

    private Boolean  valid;

    private Long id;

    public CaptchaDTO() {

    }

    public Boolean getValid() {
        return valid;
    }

    public void setValid(Boolean valid) {
        this.valid = valid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getChallenge() {
        return challenge;
    }

    public void setChallenge(String challenge) {
        this.challenge = challenge;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
