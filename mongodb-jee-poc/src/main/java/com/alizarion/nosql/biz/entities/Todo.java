package com.alizarion.nosql.biz.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * Created by selim.bensenouci on 16/01/14.
 */
@Document
public class Todo {

    @Id
    private Long id;


    private String title;

    @Field("todo_message")
    private String todoMessage;

    public Todo(String title, String todoMessage) {
        this.title = title;
        this.todoMessage = todoMessage;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTodoMessage() {
        return todoMessage;
    }

    public void setTodoMessage(String todoMessage) {
        this.todoMessage = todoMessage;
    }


}
