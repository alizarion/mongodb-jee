package com.alizarion.nosql.web.spingmvccontrollers;

import com.alizarion.nosql.biz.CaptchaData;
import net.tanesha.recaptcha.ReCaptcha;
import net.tanesha.recaptcha.ReCaptchaResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

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
    public  String verify(@RequestBody CaptchaData recaptcha,  Model model) {


        ReCaptchaResponse reCaptchaResponse = reCaptchaService.checkAnswer(recaptcha.getChallenge(), recaptcha.getChallenge(), recaptcha.getChallenge());

        if(reCaptchaResponse.isValid()) {
            model.addAttribute("message", "reCaptcha Hello World!");
            return "success";
        } else {
            model.addAttribute("message", "Try again and prove it.");
            return "captcha";
        }
    }

}