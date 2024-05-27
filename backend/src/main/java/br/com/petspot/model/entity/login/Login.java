package br.com.petspot.model.entity.login;

import br.com.petspot.model.dto.logindto.TypesUsers;
import br.com.petspot.model.entity.petOwner.PetOwner;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;
import br.com.petspot.model.dto.logindto.RegisterUserDto;

/**
 * @author Lincoln
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = {"id", "email"})
@Entity(name = "Login")
@Table(name = "login")
public class Login {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.RANDOM)
    private String id;

    @Email
    private String email;

    private String passwordLogin;

    private String typeOfUser;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pet_owner_id")
    private PetOwner petOwner;

    public Login(RegisterUserDto registerUserDto) {
        this.email = registerUserDto.email();
        this.passwordLogin = registerUserDto.senha();
        this.typeOfUser = TypesUsers.PETOWNER.name();
    }
}
