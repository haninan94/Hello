package com.ssafy.backend.domain.live.model.request;

import com.ssafy.backend.domain.live.entity.LiveEntity;
import com.ssafy.backend.domain.shelter.entity.ShelterEntity;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class LiveRegistDto {

    private String title;
    private String category;
    private String image;

    public LiveEntity toEntity(ShelterEntity shelter){
        return LiveEntity.builder()
                .shelter(shelter)
                .title(this.title)
                .category(this.category)
                .image(this.image)
                .build();
    }
}