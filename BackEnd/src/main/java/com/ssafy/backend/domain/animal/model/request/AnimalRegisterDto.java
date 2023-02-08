package com.ssafy.backend.domain.animal.model.request;

import com.ssafy.backend.domain.animal.entity.AnimalEntity;
import com.ssafy.backend.domain.shelter.entity.ShelterEntity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AnimalRegisterDto {

	// animal
	private String manageCode;
	private String name;
	private String breed;
	private int age;
	private int weight;
	private String gender;
	private String neuter;
	private String note;

	public static AnimalRegisterDto of(AnimalEntity animal) {

		return AnimalRegisterDto.builder()
			.manageCode(animal.getManageCode())
			.name(animal.getName())
			.breed(animal.getBreed())
			.age(animal.getAge())
			.weight(animal.getWeight())
			.gender(animal.getGender())
			.neuter(animal.getNeuter())
			.note(animal.getNote())
			.build();
	}

	public AnimalEntity toEntity(ShelterEntity shelter) {

		return AnimalEntity.builder()
			.shelter(shelter)
			.manageCode(this.manageCode)
			.name(this.name)
			.breed(this.breed)
			.age(this.age)
			.weight(this.weight)
			.gender(this.gender)
			.neuter(this.neuter)
			.note(this.note)
			.build();
	}
}