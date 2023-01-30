package com.ssafy.backend.global.common.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;

/*
 * [순수 JPA를 이용한 BaseEntity 클래스 설계]
 * 참고 : https://sas-study.tistory.com/361
 *
 * @Column(updatable = false) : created_at 컬럼은 insert 시에 들어가는 값이 쭉 유지되어야 하므로 update 되어서는 안되기에 처리
 * persist() 메소드를 통해 엔티티를 영속화시키는 작업
 * persist 메소드가 실행되기 전 BaseEntity 객체를 상속하는 @Entity 클래스의 created_at과 updated_at 값이 현재시각으로 채워지는 prePersist() 메소드 실행
 * 변경감지(dirty checking) 등을 이용하여 update 쿼리가 실행되었을 때, updated_at을 현재시각으로 수정하는 preUpdate() 메소드 실행
 * 이들은 모두 이벤트성 메소드로 스프링 데이터 JPA를 이용했을 시에는 AuditingEntityListener 클래스에 의해서 관리
 */

//@Getter
//@Setter
//@MappedSuperclass
//public abstract class BaseEntity {
//	@Column(updatable = false)
//	private LocalDateTime created_date;
//	private LocalDateTime updated_date;
//
//	@PrePersist
//	public void prePersist() {
//		LocalDateTime now = LocalDateTime.now();
//		created_date = now;
//		updated_date = now;
//	}
//
//	@PreUpdate
//	public void preUpdate() {
//		updated_date = LocalDateTime.now();
//	}
//}

/*
 * [스프링 Data JPA를 이용한 BaseEntity 클래스 설계]
 * AuditingEntityListener 클래스타입을 @EntityListeners의 인자로 전달해야
 * @PrePersist과 @PreUpdate처럼 @CreatedDate, @LastModifiedDate를 이용하여 객체를 insert, update 할때 now 값을 넣어줌
 */
@EntityListeners(AuditingEntityListener.class)
@Getter
@MappedSuperclass
public abstract class BaseTimeEntity {

	@CreatedDate
	@Column(name = "created_date", updatable = false)
	private LocalDateTime createdDate;

	@LastModifiedDate
	@Column(name = "updated_date")
	private LocalDateTime updatedDate;
}