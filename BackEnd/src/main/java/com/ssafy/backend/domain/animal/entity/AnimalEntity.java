package com.ssafy.backend.domain.animal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import com.ssafy.backend.domain.shelter.entity.ShelterEntity;
import com.ssafy.backend.global.common.entity.BaseTimeEntity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Entity
@DynamicInsert
@Table(name = "animal")
@Getter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(exclude = "shelter")
public class AnimalEntity extends BaseTimeEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "animal_id", columnDefinition = "INT UNSIGNED")
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "shelter_id")
	private ShelterEntity shelter;

	@Column(name = "manage_code", nullable = false, unique = true)
	private String manageCode;

	@Column(name = "name", nullable = false, unique = true, length = 50)
	private String name;

	@Column(name = "thumbnail_image", nullable = false)
	@ColumnDefault("'default.png'")
	private String thumbnail;

	@Column(name = "breed", nullable = false, length = 50)
	private String breed;

	@Column(name = "age", nullable = false)
	private int age;

	@Column(name = "weight", nullable = false)
	private int weight;

	@Column(name = "gender", nullable = false, length = 1)
	private String gender;

	@Column(name = "neuter", nullable = false, length = 1)
	private String neuter;

	@Column(name = "adpotion", nullable = false, length = 1)
	@ColumnDefault("'F'")
	private String adoption;

	@Column(name = "note", nullable = false)
	@ColumnDefault("'공란'")
	private String note;

	@Column(name = "expired", nullable = false, length = 1)
	@ColumnDefault("'F'")
	private String expired;

}
