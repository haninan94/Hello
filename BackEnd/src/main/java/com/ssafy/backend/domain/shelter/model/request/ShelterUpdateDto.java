package com.ssafy.backend.domain.shelter.model.request;

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
public class ShelterUpdateDto {

	private String url;
	private String introduce;
	private String telNumber;
	private String postCode;
	private String address;

	public static ShelterUpdateDto of(ShelterEntity shelter) {

		return ShelterUpdateDto.builder()
			.url(shelter.getUrl())
			.introduce(shelter.getIntroduce())
			.telNumber(shelter.getTelNumber())
			.postCode(shelter.getPostCode())
			.address(shelter.getAddress())
			.build();
	}

	public ShelterEntity toEntity() {

		return ShelterEntity.builder()
			.url(this.url)
			.introduce(this.introduce)
			.telNumber(this.telNumber)
			.postCode(this.postCode)
			.address(this.address)
			.build();
	}
}