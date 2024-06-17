package br.com.petspot.model.messages.login;

import lombok.Data;

@Data
public class MessageWithEmail {
    private String message;
    private String email;
    private String id = null;

    public MessageWithEmail(String email,String id, String message){
        this.email = email;
        this.message = message;
        this.id = id;
    }

    public MessageWithEmail(String email, String message){
        this.email = email;
        this.message = message;
    }
    public MessageWithEmail(String message){
        this.message = message;
    }
}
