/**
 * 首页 js
 * @author  sl
 * time 2018-10-31
 */
$(function() {
	var memberStatisticsTabCon = new Swiper('#memberStatisticsTabCon', {
		pagination: {
		    el: '#memberStatisticsTabCon .swiper-pagination',
		    bulletActiveClass: 'bullet-active',
		},
		on: {
		    slideChangeTransitionEnd: function() {
		      // 切换时，动态修改当前tab
		      $('.member-statistics-tabbar>span').eq(this.activeIndex).addClass('active').siblings().removeClass('active');
		    }
		}
	});

	// 会员统计数据，tab切换
	$('.member-statistics-tabbar>span').each(function(i) {
		$(this).click(function() {
			memberStatisticsTabCon.slideTo(i,  500, false);
			$(this).addClass('active').siblings().removeClass('active');
		})
	});
});