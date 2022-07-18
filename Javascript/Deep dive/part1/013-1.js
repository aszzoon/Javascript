var hometown = [
    {name: '남준', place: '일산', city:'고양'},
    {name: '진', place: '과천'},
    {name: '호석', place: '광주', city:'전라도'},
    {name: '지민', place: '부산', city:'경상도'}
    
]; // 반복문에 실행될 변수, 배열 자료형 값

for (var i = 1; i < hometown.length; i++) // 번복문의 조건, 

{   var h = hometown[i]; // 홈타운 배열의 i번째 요소를 반환하여 변수 h에 대입
    if (!h || !h.city) continue; // 

    console.log(i + ' 번째 실행 입니다.');

    if (h.name === '지민') {
        console.log(h.name + '의 고향은' + h.city + ' ' + h.place + 
        '입니다.' );
        break;
    }
}