package com.tungns.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CloundinaryDTO {
	private String public_id;
    private String url;
    private String format;
    private int width;
    private int height;
    private long createdAt;
    private long bytes;
}
