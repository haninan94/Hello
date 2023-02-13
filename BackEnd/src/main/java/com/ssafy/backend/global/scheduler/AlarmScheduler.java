package com.ssafy.backend.global.scheduler;

import com.ssafy.backend.domain.alarm.entity.AlarmEntity;
import com.ssafy.backend.domain.alarm.repository.AlarmRepository;
import com.ssafy.backend.domain.schedule.entity.ScheduleEntity;
import com.ssafy.backend.domain.schedule.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
public class AlarmScheduler {

    private final AlarmRepository alarmRepository;
    private final ScheduleRepository scheduleRepository;

    @Async
    @Scheduled(cron = "0 0 1 * * *")
    @Transactional
    public void dailyScheduleAlarm(){
        System.out.println("======================================");
        System.out.println("Daily Schedule Alarm");
        System.out.println("======================================");

        LocalDate now = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMdd");
        String day = now.format(formatter);

        List<ScheduleEntity> todayScheduleList = scheduleRepository.findByDay(day);
        List<AlarmEntity> alarmList = new ArrayList<>();

        for(ScheduleEntity schedule : todayScheduleList){

            AlarmEntity userAlarm = AlarmEntity.builder()
                    .receiver(schedule.getUser())
                    .alarmType(1)
                    .time(schedule.getTime())
                    .targetName(schedule.getShelter().getName())
                    .profileImage(schedule.getShelter().getUser().getProfileImage())
                    .build();

            alarmList.add(userAlarm);

            AlarmEntity shelterAlarm = AlarmEntity.builder()
                    .receiver(schedule.getShelter().getUser())
                    .alarmType(2)
                    .time(schedule.getTime())
                    .targetName(schedule.getUser().getName())
                    .profileImage(schedule.getUser().getProfileImage())
                    .build();

            alarmList.add(shelterAlarm);

        }

        alarmRepository.saveAll(alarmList);
    }

}