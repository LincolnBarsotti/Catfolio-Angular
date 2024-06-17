package br.com.petspot.model.dto.petdto;

import br.com.petspot.model.entity.Pet.Pet;

import java.util.Date;

public record
AllDatasPetDto(
        String id,
        String nome,
        Date nascimento,
        String raca

) {
    public AllDatasPetDto(Pet pet){
        this(
                pet.getId(), pet.getPetName(),
                pet.getPetBirthday(), pet.getRace()
                );
    }
}
