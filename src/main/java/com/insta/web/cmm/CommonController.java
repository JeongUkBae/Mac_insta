package com.insta.web.cmm;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;



/**
 * Handles requests for the application home page.
 */
@Controller
public class CommonController {
	
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	
	@GetMapping("/")
	public String home(//@ModelAttribute Customer param
			) {
		logger.info("======= root 진입 =======");
		return "index";
	}
	
}
