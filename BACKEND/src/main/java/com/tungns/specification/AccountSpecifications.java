package com.tungns.specification;


import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;


import com.tungns.entity.Accounts;
import com.tungns.filter.AccountFilterForm;


import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@SuppressWarnings("serial")
public class AccountSpecifications{
	
	public static Specification<Accounts> buildWhere(String search, AccountFilterForm accFF){
		Specification<Accounts> where = null;
		
//		CustomSpecifications init = new CustomSpecifications("init", "init");
		
		if (!StringUtils.isEmpty(search)) {
			search = search.trim();
			CustomSpecifications userName = new CustomSpecifications("username", search);
	
			where = Specification.where(userName);
		}
	
		
		return where; 
		
		
	}


}

@SuppressWarnings("serial")
@RequiredArgsConstructor
class CustomSpecifications implements Specification<Accounts>{

	@NonNull
	private String field;
	@NonNull
	private Object value;
	
	@Override
	public Predicate toPredicate(
			Root<Accounts> root, 
			CriteriaQuery<?> query, 
			CriteriaBuilder criteriaBuilder) {

		if (field.equalsIgnoreCase("init")) {
			return criteriaBuilder.equal(criteriaBuilder.literal(1), 1);
		}
		
		if (field.equalsIgnoreCase("username")) {
			return criteriaBuilder.like(root.get("username"), "%" + value.toString() + "%");
		}
		
		return null;
	}
	
}
