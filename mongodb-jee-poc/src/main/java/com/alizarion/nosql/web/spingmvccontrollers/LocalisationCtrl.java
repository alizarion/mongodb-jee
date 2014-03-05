package com.alizarion.nosql.web.spingmvccontrollers;

import com.alizarion.nosql.dto.I18nDTO;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.PostConstruct;
import javax.servlet.ServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by selim.bensenouci on 22/01/14.
 */
@Controller
@Scope(value = "session")
public class LocalisationCtrl  {

    private Map<String, List<I18nDTO>> i18nDTOs = new HashMap<String, List<I18nDTO>>();

    @PostConstruct
    private void init(){
        List<I18nDTO> i18nDTOs1 = new ArrayList<I18nDTO>();
        i18nDTOs1.add(new I18nDTO("home.title.message","Salut les gars"));
        i18nDTOs1.add(new I18nDTO("home.body.message","ca va?"));
        i18nDTOs.put("FR",i18nDTOs1);

    }

    @RequestMapping(value = "/localized",method = RequestMethod.GET)
    public @ResponseBody  List<I18nDTO> getListOfLocalizedMessages(ServletRequest servletRequest){

        return i18nDTOs.get(servletRequest.getLocale().getCountry());
    }
}
