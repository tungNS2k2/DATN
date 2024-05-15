package com.tungns.entity;



import java.io.Serializable;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.tungns.entity.Accounts.AccountRole;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "`Images`")
@NoArgsConstructor
public class Images implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Column(name = "id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "name", length = 50, nullable = false)
	private String nameImage;
	
	@Column(name = "image_url", length = 250, nullable = false)
	private String imageUrl;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "category", columnDefinition = "ENUM('DOG', 'CAT', 'OTHER')")
	private categoryRole category;
	
	@Column(name ="rate")
	private long rate = 0;
	
	
	
	@Column(name = "created_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdAt;
	
	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "`accountId`")
	private Accounts account;
	
	public enum categoryRole {
		DOG, CAT, OTHER;
		public static categoryRole toEnum(String name) {
			for (categoryRole item : categoryRole.values()) {
				if (item.toString().equals(name))
					return item;
			}
			return null;
		}
	}
	
}
