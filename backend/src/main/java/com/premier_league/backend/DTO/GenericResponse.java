package com.premier_league.backend.DTO;

import com.premier_league.backend.model.Player;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GenericResponse {
    private String message;
    private int status;
    private Player player;
}
