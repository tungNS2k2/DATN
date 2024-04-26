package com.tungns.entity;

import java.io.Serializable;
import java.util.List;

import org.hibernate.annotations.OnDelete;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table (name = "`Accounts`")
@NoArgsConstructor
public class Accounts implements Serializable{
	@Column(name = "id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "user_name", length = 50, nullable = false)
	private String username;
	
	@Column(name ="password", length = 800, nullable = false)
	private String password;
	
	@Column(name = "avatar_url", length = 250, nullable = true)
	private String avatarUrl;
	
	@Column(name = "email", length = 150, nullable = false)
	private String email;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "role", columnDefinition = "ENUM('ADMIN', 'USER')")
	private AccountRole role;
	
	@OneToMany(mappedBy = "account")
	private List<GeneratedImages> generatedImages;
	
	@OneToMany(mappedBy = "account")
	private List<Images> images;
	
	public enum AccountRole {
		ADMIN, USER;
		public static AccountRole toEnum(String name) {
			for (AccountRole item : AccountRole.values()) {
				if (item.toString().equals(name))
					return item;
			}
			return null;
		}
	}

}
