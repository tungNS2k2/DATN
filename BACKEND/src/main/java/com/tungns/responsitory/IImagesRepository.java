package com.tungns.responsitory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import com.tungns.entity.Images;

public interface IImagesRepository extends JpaRepository<Images, Integer>{

	Page<Images> findAll(Specification<Images> where, Pageable pageable);

}
