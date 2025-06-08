<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
	<title>블록앱 퍼블리싱 (모바일)</title>

	<style type="text/css">
		html, body { margin: 0; padding: 0; }
		ul, li { padding: 0; margin: 0; list-style: none; }
		body{font-size: 12px; color: #666; font-style: normal; font-variant: normal; line-height: normal; font-family: "맑은 고딕", dotum, 돋움, Sans-Serif;}

		#header h1 { height: 60px; line-height: 60px; padding-left: 28px; margin-top: 0; color: #fff; background: #424242;}

		table { margin-bottom: 150px; border-collapse: collapse; border-spacing: 0; }

		#Contwrap{padding: 0 50px;}
		.guide_table { width: 100%; }
		.guide_table thead th { background: #f1f1f1; padding: 3px; border: solid 1px #dadada; }
		.guide_table tbody td { padding: 3px; border: solid 1px #dadada; }
		.guide_table tbody td.filelink a { text-decoration: none; color: #0177bd; }
		.guide_table tr.dep01 td { border-top: solid 2px #dadada; }
		.guide_table td.filelink a { }
		.red { color: #ff0000; }
		.nofile { background: #D9E3E6; font-weight: bold; text-align: center; }
		#g_footer { padding: 30px; text-align: right; }
		.eng td { background: #e3edec; }
		.issue { font-size: 11px; font-family: '돋움'; color: #000; }
		.issue li { margin-top: 10px; }
		.issue li:first-child { margin-top: 0; }
		.issue strong { margin-bottom: 3px; display: block; color: #ff6000; }
		.issue span { color: #ff6000; }
		.color { background-color: #bbf7fe; }
		table tr td:first-child { text-align: center; }
		.design_summary_web,
		.design_summary_tab,
		.design_summary_mob { display: inline-block; color: rosybrown; font-weight: bold; font-size: 12px; margin-right: 30px; }
		.coding_summary_web,
		.coding_summary_tab,
		.coding_summary_mob { display: inline-block; color: red; font-weight: bold; font-size: 12px; margin-right: 30px; }
		.dev_summary { display: inline-block; color: green; font-weight: bold; font-size: 12px; margin-right: 30px; }
		.coding_stat_web,
		.coding_stat_tab,
		.coding_stat_mob { background: #ddffca; }
		.dev_stat_web,
		.dev_stat_web,
		.dev_stat_web { background: rosybrown; color: #fff; }
		.bg_gray { background: #f0f0f0; }
		.tab_li > li { float: left; width: 100px; height: 30px; line-height: 30px; text-align: center; background: #424242; color: #fff; margin-right: 5px; margin-bottom: 5px; }
		.tab_li > li > a { color: #fff; text-decoration: none; display: block; }
		.tab_li > li.on { font-weight: bold; text-decoration: underline; font-size: 16px; }
		td strong { color: red; }
		.auto-style1 { height: 20px; }
		.auto-style2 { background: #ddffca; height: 20px; }
	</style>

</head>
<body>
	<div id="header">
		<h1>블럭앱 퍼블리싱</h1>
	</div>
	<div id="Contwrap">
		<div class="contents">
			<h3>Flie List</h3>
			<p class="guide_summary">
			</p>
			<ul style="margin-bottom: 10px;">
				<li class="coding_summary_web"></li>
			</ul>

			<table class="guide_table">
				<thead>
					<tr>
						<th>구분</th>
						<th>2 Depth</th>
						<th>3 Depth</th>
						<th>4 Depth</th>
						<th>파일명</th>
						<th>비고</th>
					</tr>
				</thead>
				<tbody>
          <tr>
						<td style="text-align: center;" rowspan="9">1. 로그인 및 회원가입</td>
						<td style="text-align: center;">온보딩 (popup)</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_onboarding.html" target="_blank">BO_onboarding.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">접근권한설정 (popup)</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_access.html" target="_blank">BO_access.html</a></td>
						<td style="text-align: center;">버튼 input태그로 변경</td>
					</tr>
					<tr>
						<td style="text-align: center;" rowspan="3">로그인</td>
						<td style="text-align: center;">로그인</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_login.html" target="_blank">BO_login.html</a></td>
						<td style="text-align: center;">버튼 input태그로 변경<br/>body 스크롤 막기 class추가</td>
					</tr>
					<tr>
						<td style="text-align: center;">아이디 찾기</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/" target="_blank"></a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">비밀번호 찾기</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/" target="_blank"></a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;" rowspan="4">회원가입</td>
						<td style="text-align: center;">약관동의</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_register_step1.html" target="_blank">BO_register_step1.html</a></td>
						<td style="text-align: center;">버튼비활성화 class 적용<br/>버튼 input태그로 변경</td>
					</tr>
					<tr>
						<td style="text-align: center;">가입유형선택</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_register_step2.html" target="_blank">BO_register_step2.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">회원정보입력</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_register_step3.html" target="_blank">BO_register_step3.html</a></td>
						<td style="text-align: center;">버튼활성화 적용<br/>버튼 input태그로 변경<br/>파일첨부/radio 추가</td>
					</tr>
					<tr>
						<td style="text-align: center;">가입완료</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_register_step4_popup.html" target="_blank">BO_register_step4_popup.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<!------ Layout ------>
          <tr>
						<td style="text-align: center;" rowspan="2">2. 레이아웃</td>
						<td style="text-align: center;">레이아웃</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_layout.html" target="_blank">BO_layout.html</a></td>
						<td style="text-align: center;">* 하단 고정 영역 아이콘이미지 변경(클래스명 확인!!)<br/>메뉴 내 사용자유형 수정</td>
					</tr>
					<tr>
						<td style="text-align: center;">컨펌(popup)</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_confirm_popup.html" target="_blank">BO_confirm_popup.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<!------ Main ------>
          <tr>
            <td style="text-align: center;">3. 메인화면</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;">
							<a href="html/BO_main.html" target="_blank">BO_main.html</a><br/>
							<a href="html/BO_main_02.html" target="_blank">BO_main_02.html</a>
						</td>
						<td style="text-align: center;">사용자명,사용자유형 추가<br/>시안2가지로 설정</td>
					</tr>
					<!------ Menu -------->
					<tr>
            <td style="text-align: center;" rowspan="5">4. 메뉴별 페이지</td>
						<td style="text-align: center;" rowspan="3">마이페이지</td>
						<td style="text-align: center;">사용자</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_mypage_user.html" target="_blank">BO_mypage_user.html</a></td>
						<td style="text-align: center;">input에 class="block" 추가</td>
					</tr>
					<tr>
						<td style="text-align: center;">파트너</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_mypage_partner.html" target="_blank">BO_mypage_partner.html</a></td>
						<td style="text-align: center;">수익관리/사용자관리/매니저관리 추가</td>
					</tr>
					<tr>
						<td style="text-align: center;">비밀번호 변경</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_login_change.html" target="_blank">BO_login_change.html</a></td>
						<td style="text-align: center;">버튼 input태그로 변경<br/>body 스크롤 막기 class추가</td>
					</tr>
					<!-- <tr>
						<td style="text-align: center;">사용자관리</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/" target="_blank"></a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">수익관리</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/" target="_blank"></a></td>
						<td style="text-align: center;"></td>
					</tr> -->
					<tr>
						<td style="text-align: center;">설정관리</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/" target="_blank"></a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">공지사항</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/" target="_blank"></a></td>
						<td style="text-align: center;"></td>
					</tr>
					<!------ sub ------>
					<tr>
            <td style="text-align: center;">5. 결제 페이지</td>
						<td style="text-align: center;" >충전/기간연장/출금하기</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_payment.html" target="_blank">BO_payment.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<!------ 사용자 페이지 ------>
					<tr>
            <td style="text-align: center;" rowspan="8">6. 사용자 페이지</td>
						<td style="text-align: center;" rowspan="2">목록</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_list_user.html" target="_blank">BO_list_user.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">필터설정</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_filter.html" target="_blank">BO_filter.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;" rowspan="6">입찰하기</td>
						<td style="text-align: center;">목록</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_bidding.html" target="_blank">BO_bidding.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">요청하기</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_bidding_order.html" target="_blank">BO_bidding_order.html</a></td>
						<td style="text-align: center;">1. 카운팅 버튼에 not이라는 클래스를 추가하면 작동안하는 버튼으로 변경<br/>2. 특이사항에 있는 버튼에 select 클래스 추가하면 선택된 버튼으로 변경</td>
					</tr>
					<tr>
						<td style="text-align: center;" rowspan="2">확정알림</td>
						<td style="text-align: center;">일반페이지</td>
						<td style="text-align: left;"><a href="html/BO_bidding_alert.html" target="_blank">BO_bidding_alert.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">팝업</td>
						<td style="text-align: left;"><a href="html/BO_bidding_alert_popup.html" target="_blank">BO_bidding_alert_popup.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;" rowspan="2">그룹관리</td>
						<td style="text-align: center;">목록</td>
						<td style="text-align: left;"><a href="html/BO_group_list.html" target="_blank">BO_group_list.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">설정 상세</td>
						<td style="text-align: left;"><a href="html/BO_group_setting.html" target="_blank">BO_group_setting.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<!------ 매칭현황 ------>
					<tr>
            <td style="text-align: center;" rowspan="6"><span class="red">7. 매칭현황</span></td>
						<td style="text-align: center;" class="red">목록</td>
						<td style="text-align: center;"></td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_matching_list.html" target="_blank">BO_matching_list.html</a></td>
						<td style="text-align: center;">datepicker로 변경</td>
					</tr>
					<tr>
						<td style="text-align: center;">게시그룹</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_matching_group.html" target="_blank">BO_matching_group.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">메세지</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_message.html" target="_blank">BO_message.html</a></td>
						<td style="text-align: center;">착석결정 누르면 착석결정 플로팅팝업 나오게 설정</td>
					</tr>
					<tr>
						<td style="text-align: center;" class="red">일일장부</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_list_dailyledger.html" target="_blank">BO_list_dailyledger.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
					<tr>
						<td style="text-align: center;" class="red">출근부기록</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: center;">&nbsp;</td>
						<td style="text-align: left;"><a href="html/BO_list_worker.html" target="_blank">BO_list_worker.html</a></td>
						<td style="text-align: center;"></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</body>

</html>
