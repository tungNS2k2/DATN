package com.tungns.specification;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import com.tungns.entity.Accounts;
import com.tungns.entity.Images;
import com.tungns.entity.Images.categoryRole;
import com.tungns.filter.AccountFilterForm;
import com.tungns.form.Image.ImageFilterForm;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@SuppressWarnings("serial")
public class ImageSpecification{
	
	public static Specification<Images> buildImageWhere(String search, ImageFilterForm form){
		Specification<Images> where = null;
		
		CustomImageSpecifications init = new CustomImageSpecifications("init", "init");
		where = Specification.where(init);
	
		if (form != null && !StringUtils.isEmpty(form.getCategory())) {
			CustomImageSpecifications categoryImage = new CustomImageSpecifications("category", form.getCategory());
			if (where == null) where = categoryImage;
			else where = where.and(categoryImage);
		}
		
		if (form != null && form.getAccountId() != 0) {
			CustomImageSpecifications accountId = new CustomImageSpecifications("accountId", form.getAccountId());
			if (where == null) where = accountId;
			else where = where.and(accountId);
		}
		return where; 
		
		
	}


}

@SuppressWarnings("serial")
@RequiredArgsConstructor
class CustomImageSpecifications implements Specification<Images>{

	@NonNull
	private String field;
	@NonNull
	private Object value;
	
	@Override
	public Predicate toPredicate(
			Root<Images> root, 
			CriteriaQuery<?> query, 
			CriteriaBuilder criteriaBuilder) {

		if (field.equalsIgnoreCase("init")) {
			return criteriaBuilder.equal(criteriaBuilder.literal(1), 1);
		}
		
		if(field.equalsIgnoreCase("category")) {
			

		    return criteriaBuilder.equal(root.get("category"), categoryRole.toEnum(value.toString())); 
		}
		
		
		if(field.equalsIgnoreCase("accountId")) {
			

			return criteriaBuilder.equal(root.get("account").get("id"), value); 
		}
		
		
		return null;
	}
	
}