package com.alizarion.nosql.web.spingmvccontrollers;

import com.alizarion.nosql.biz.CaptchaDTO;
import net.tanesha.recaptcha.ReCaptcha;
import net.tanesha.recaptcha.ReCaptchaResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.servlet.ServletRequest;

@Controller
public class ReCaptchaCtrl {

    @Autowired
    private ReCaptcha reCaptchaService = null;



    @RequestMapping(value={"/re", "/recaptcha"},  method=RequestMethod.GET)
    public  @ResponseBody String show() {
        return "captcha";
    }

    @RequestMapping(value="/recaptcha", method=RequestMethod.POST)
    public @ResponseBody CaptchaDTO verify(@RequestBody CaptchaDTO recaptcha,ServletRequest servletRequest) {
        String remoteAddr = servletRequest.getRemoteAddr();

        ReCaptchaResponse reCaptchaResponse = reCaptchaService.checkAnswer(
                remoteAddr, recaptcha.getChallenge(),recaptcha.getResponse()
                );
        recaptcha.setValid(reCaptchaResponse.isValid());
       return recaptcha;
    }

}