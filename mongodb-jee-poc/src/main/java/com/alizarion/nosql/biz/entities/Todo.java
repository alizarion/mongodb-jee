package com.alizarion.nosql.biz.entities;

/**
 * Created by selim.bensenouci on 16/01/14.
 */
public class Todo {

    private Long id;

    private String title;

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
