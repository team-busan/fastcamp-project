// article 데이터 : link 필드 추가
const ARTICLE = [
  {
    id: 1,
    title: "한국 최고의 냉면맛을 찾아서",
    content:
      "메밀향이 나는 거친 면과 맑은 육수의 평양냉면? 고구마전분의 쫄깃한 면과새콤달콤한 육수의 함흥냉면? 냉면의 계절 여름, 최고의 냉면에 대해 이야기해봅니다! 한국 최고의 냉면 맛집은 어디인가!",
    author: "test1",
    publish_date: new Date(),
    link: "https://naver.com",
    image: "/img/column_naengmyeon.png",
  },
  {
    id: 1,
    title: "음식이 주는 위로",
    content:
      "마음에 한줄기 치유를 주고 가는 저마다의 컴포트 푸드를 통해 험난한 세상을 헤쳐 나갈 힘을 얻기를 바란다.",
    author: "test2",
    publish_date: new Date(),
    link: "https://naver.com",
    image: "/img/column_deserts.png",
  },
];

/* restaurant 데이터 추가 필드 
  imgLink
  detail__location
  phone
  distance
  category
  tags
  time
*/
const RESTAURANTS = [
  {
    id: 1,
    name: "배비장보쌈",
    cuisine: [
      {
        food: "굴,과메기삼합",
        price: "68,000",
      },
      {
        food: "점심(모둠특선)",
        price: "21,000",
      },
      {
        food: "누룽지탕",
        price: "10,000",
      },
      {
        food: "녹두전 소",
        price: "7,000",
      },
      {
        food: "녹두전 대",
        price: "12,000",
      },
      {
        food: "된장찌개",
        price: "5,000",
      },
      {
        food: "점심(배비장특선)",
        price: "16,000",
      },
      {
        food: "배비장보쌈(2인) 중",
        price: "37,000",
      },
      {
        food: "배비장보쌈(3인) 대",
        price: "52,000",
      },
      {
        food: "모둠보쌈 2인",
        price: "48,000",
      },
      {
        food: "냉면",
        price: "5,000",
      },
    ],
    rating: 4.5,
    location: "구서본점",
    imgLink:
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20230611022228318_photo_f993c3bb3acd.jpg",
    detail__location: "부산광역시 금정구 구서동 84-15",
    phone: "010-1234-1234",
    distance: 1700,
    category: [
      "보쌈",
      "보쌈김치",
      "깔끔한",
      "밥집",
      "뚝배기",
      "공기밥",
      "두부",
      "커피",
      "대통밥",
    ],
    tags: ["가족외식", "무료주차", "배달"],
    time: "11:00 ~ 22:00",
  },
  {
    id: 2,
    name: "고도식",
    cuisine: [
      {
        food: "고도식 세트메뉴 3-4인",
        price: "79,000",
      },
      {
        food: "점심(모둠특선)",
        price: "21,000",
      },
      {
        food: "누룽지탕",
        price: "10,000",
      },
      {
        food: "녹두전 소",
        price: "7,000",
      },
      {
        food: "녹두전 대",
        price: "12,000",
      },
      {
        food: "된장찌개",
        price: "5,000",
      },
      {
        food: "점심(배비장특선)",
        price: "16,000",
      },
      {
        food: "배비장보쌈(2인) 중",
        price: "37,000",
      },
      {
        food: "배비장보쌈(3인) 대",
        price: "52,000",
      },
      {
        food: "모둠보쌈 2인",
        price: "48,000",
      },
      {
        food: "냉면",
        price: "5,000",
      },
    ],
    rating: 3.6,
    location: "부산본점",
    imgLink:
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20231225054330_photo1_20e8e2fc1a60.jpg",
    detail__location: "서울특별시 송파구 송파동 55-7",
    phone: "010-1234-1211",
    distance: 400,
    category: ["보쌈", "보쌈김치", "수육"],
    tags: ["깔끔한", "뷰가좋은", "가족외식"],
    time: "11:00 ~ 22:00",
  },
  {
    id: 3,
    name: "배비장보쌈",
    cuisine: [
      {
        food: "굴,과메기삼합",
        price: "68,000",
      },
      {
        food: "점심(모둠특선)",
        price: "21,000",
      },
      {
        food: "누룽지탕",
        price: "10,000",
      },
      {
        food: "녹두전 소",
        price: "7,000",
      },
      {
        food: "녹두전 대",
        price: "12,000",
      },
      {
        food: "된장찌개",
        price: "5,000",
      },
      {
        food: "점심(배비장특선)",
        price: "16,000",
      },
      {
        food: "배비장보쌈(2인) 중",
        price: "37,000",
      },
      {
        food: "배비장보쌈(3인) 대",
        price: "52,000",
      },
      {
        food: "모둠보쌈 2인",
        price: "48,000",
      },
      {
        food: "냉면",
        price: "5,000",
      },
    ],
    rating: 2.7,
    location: "구서본점",
    imgLink: "/img/restaurantImg.jpg",
    detail__location: "부산광역시 금정구 구서동 84-15",
    phone: "010-1234-1234",
    distance: 2600,
    category: ["보쌈", "보쌈김치"],
    tags: ["무료주차", "놀이방", "가족외식"],
    time: "11:00 ~ 22:00",
  },
  {
    id: 4,
    name: "배비장보쌈",
    cuisine: [
      {
        food: "굴,과메기삼합",
        price: "68,000",
      },
      {
        food: "점심(모둠특선)",
        price: "21,000",
      },
      {
        food: "누룽지탕",
        price: "10,000",
      },
      {
        food: "녹두전 소",
        price: "7,000",
      },
      {
        food: "녹두전 대",
        price: "12,000",
      },
      {
        food: "된장찌개",
        price: "5,000",
      },
      {
        food: "점심(배비장특선)",
        price: "16,000",
      },
      {
        food: "배비장보쌈(2인) 중",
        price: "37,000",
      },
      {
        food: "배비장보쌈(3인) 대",
        price: "52,000",
      },
      {
        food: "모둠보쌈 2인",
        price: "48,000",
      },
      {
        food: "냉면",
        price: "5,000",
      },
    ],
    rating: 5.0,
    location: "구서본점",
    imgLink: "/img/restaurantImg.jpg",
    detail__location: "부산광역시 금정구 구서동 84-15",
    phone: "010-1234-1234",
    distance: 5000,
    category: ["보쌈", "보쌈김치"],
    tags: ["고급스러운", "가족외식", "무료주차"],
    time: "11:00 ~ 22:00",
  },
  {
    id: 5,
    name: "배비장보쌈",
    cuisine: [
      {
        food: "굴,과메기삼합",
        price: "68,000",
      },
      {
        food: "점심(모둠특선)",
        price: "21,000",
      },
      {
        food: "누룽지탕",
        price: "10,000",
      },
      {
        food: "녹두전 소",
        price: "7,000",
      },
      {
        food: "녹두전 대",
        price: "12,000",
      },
      {
        food: "된장찌개",
        price: "5,000",
      },
      {
        food: "점심(배비장특선)",
        price: "16,000",
      },
      {
        food: "배비장보쌈(2인) 중",
        price: "37,000",
      },
      {
        food: "배비장보쌈(3인) 대",
        price: "52,000",
      },
      {
        food: "모둠보쌈 2인",
        price: "48,000",
      },
      {
        food: "냉면",
        price: "5,000",
      },
    ],
    rating: 1.2,
    location: "구서본점",
    imgLink: "/img/restaurantImg.jpg",
    detail__location: "부산광역시 금정구 구서동 84-15",
    phone: "010-1234-1234",
    distance: 1,
    category: ["보쌈", "보쌈김치"],
    tags: ["놀이방", "24시영업", "배달", "깔끔한", "가족외식"],
    time: "11:00 ~ 22:00",
  },
  {
    id: 6,
    name: "배비장보쌈",
    cuisine: [
      {
        food: "굴,과메기삼합",
        price: "68,000",
      },
      {
        food: "점심(모둠특선)",
        price: "21,000",
      },
      {
        food: "누룽지탕",
        price: "10,000",
      },
      {
        food: "녹두전 소",
        price: "7,000",
      },
      {
        food: "녹두전 대",
        price: "12,000",
      },
      {
        food: "된장찌개",
        price: "5,000",
      },
      {
        food: "점심(배비장특선)",
        price: "16,000",
      },
      {
        food: "배비장보쌈(2인) 중",
        price: "37,000",
      },
      {
        food: "배비장보쌈(3인) 대",
        price: "52,000",
      },
      {
        food: "모둠보쌈 2인",
        price: "48,000",
      },
      {
        food: "냉면",
        price: "5,000",
      },
    ],
    rating: 4.8,
    location: "구서본점",
    imgLink: "/img/restaurantImg.jpg",
    detail__location: "부산광역시 금정구 구서동 84-15",
    phone: "010-1234-1234",
    distance: 800,
    category: ["보쌈", "보쌈김치"],
    tags: ["뷰가좋은", "조용한", "가성비좋은", "가족외식"],
    time: "11:00 ~ 22:00",
  },
  {
    id: 7,
    name: "배비장보쌈",
    cuisine: [
      {
        food: "굴,과메기삼합",
        price: "68,000",
      },
      {
        food: "점심(모둠특선)",
        price: "21,000",
      },
      {
        food: "누룽지탕",
        price: "10,000",
      },
      {
        food: "녹두전 소",
        price: "7,000",
      },
      {
        food: "녹두전 대",
        price: "12,000",
      },
      {
        food: "된장찌개",
        price: "5,000",
      },
      {
        food: "점심(배비장특선)",
        price: "16,000",
      },
      {
        food: "배비장보쌈(2인) 중",
        price: "37,000",
      },
      {
        food: "배비장보쌈(3인) 대",
        price: "52,000",
      },
      {
        food: "모둠보쌈 2인",
        price: "48,000",
      },
      {
        food: "냉면",
        price: "5,000",
      },
    ],
    rating: 3.9,
    location: "구서본점",
    imgLink: "/img/restaurantImg.jpg",
    detail__location: "부산광역시 금정구 구서동 84-15",
    phone: "010-1234-1234",
    distance: 1000,
    category: ["보쌈", "보쌈김치"],
    tags: ["24시영업", "배달", "가족외식"],
    time: "11:00 ~ 22:00",
  },
  {
    id: 8,
    name: "배비장보쌈",
    cuisine: [
      {
        food: "굴,과메기삼합",
        price: "68,000",
      },
      {
        food: "점심(모둠특선)",
        price: "21,000",
      },
      {
        food: "누룽지탕",
        price: "10,000",
      },
      {
        food: "녹두전 소",
        price: "7,000",
      },
      {
        food: "녹두전 대",
        price: "12,000",
      },
      {
        food: "된장찌개",
        price: "5,000",
      },
      {
        food: "점심(배비장특선)",
        price: "16,000",
      },
      {
        food: "배비장보쌈(2인) 중",
        price: "37,000",
      },
      {
        food: "배비장보쌈(3인) 대",
        price: "52,000",
      },
      {
        food: "모둠보쌈 2인",
        price: "48,000",
      },
      {
        food: "냉면",
        price: "5,000",
      },
    ],
    rating: 4.1,
    location: "구서본점",
    imgLink: "/img/restaurantImg.jpg",
    detail__location: "부산광역시 금정구 구서동 84-15",
    phone: "010-1234-1234",
    distance: 1200,
    category: ["보쌈", "보쌈김치"],
    tags: ["가족외식", "무료주차", "배달"],
    time: "11:00 ~ 22:00",
  },
  {
    id: 9,
    name: "배비장보쌈",
    cuisine: [
      {
        food: "굴,과메기삼합",
        price: "68,000",
      },
      {
        food: "점심(모둠특선)",
        price: "21,000",
      },
      {
        food: "누룽지탕",
        price: "10,000",
      },
      {
        food: "녹두전 소",
        price: "7,000",
      },
      {
        food: "녹두전 대",
        price: "12,000",
      },
      {
        food: "된장찌개",
        price: "5,000",
      },
      {
        food: "점심(배비장특선)",
        price: "16,000",
      },
      {
        food: "배비장보쌈(2인) 중",
        price: "37,000",
      },
      {
        food: "배비장보쌈(3인) 대",
        price: "52,000",
      },
      {
        food: "모둠보쌈 2인",
        price: "48,000",
      },
      {
        food: "냉면",
        price: "5,000",
      },
    ],
    rating: 2.3,
    location: "구서본점",
    imgLink: "/img/restaurantImg.jpg",
    detail__location: "부산광역시 금정구 구서동 84-15",
    phone: "010-1234-1234",
    distance: 520,
    category: ["보쌈", "보쌈김치"],
    tags: ["뷰가좋은", "조용한", "고급스러운", "가족외식"],
    time: "11:00 ~ 22:00",
  },
  {
    id: 10,
    name: "배비장보쌈",
    cuisine: [
      {
        food: "굴,과메기삼합",
        price: "68,000",
      },
      {
        food: "점심(모둠특선)",
        price: "21,000",
      },
      {
        food: "누룽지탕",
        price: "10,000",
      },
      {
        food: "녹두전 소",
        price: "7,000",
      },
      {
        food: "녹두전 대",
        price: "12,000",
      },
      {
        food: "된장찌개",
        price: "5,000",
      },
      {
        food: "점심(배비장특선)",
        price: "16,000",
      },
      {
        food: "배비장보쌈(2인) 중",
        price: "37,000",
      },
      {
        food: "배비장보쌈(3인) 대",
        price: "52,000",
      },
      {
        food: "모둠보쌈 2인",
        price: "48,000",
      },
      {
        food: "냉면",
        price: "5,000",
      },
    ],
    rating: 3.6,
    location: "구서본점",
    imgLink: "/img/restaurantImg.jpg",
    detail__location: "부산광역시 금정구 구서동 84-15",
    phone: "010-1234-1234",
    distance: 3800,
    category: ["보쌈", "보쌈김치"],
    tags: ["가족외식", "무료주차", "배달", "깔끔한"],
    time: "11:00 ~ 22:00",
  },
];

/* review 데이터 추가 필드
  imgLink
  name
  imgLinkList
*/
const REVIEW = [
  {
    id: 1,
    user_id: 1,
    restaurant_id: 1,
    rating: 4.5,
    comment:
      "칼국수 국물의 깊이가 있고 배추보쌈도 고기가 야들야들하니 맛있었어요 보쌈이랑 파전때문에 배부를 것 같아서 셋이서 칼국수 2인만 시켰는데 그릇3개로 나눠서 주셔서 감동이었습니다. 다만 사람이 너무 많아서 바쁘신지 파전이 계속 안나와서 서빙이 안된걸 확인하고 파전은 식은채로 먹어서 아쉬웠습니다.",
    created_at: new Date(),
    imgLink:
      "https://media.istockphoto.com/id/1458719394/ko/%EC%82%AC%EC%A7%84/%ED%9A%8C%EC%9D%98-%EC%A4%91-%ED%86%A0%EB%A1%A0%EC%9D%84-%EB%93%A3%EA%B3%A0-%EC%9E%88%EB%8A%94-%EC%82%AC%EC%97%85%EA%B0%80.jpg?s=1024x1024&w=is&k=20&c=njt5KD5Z2_fYD_E6p5MVEFu0JuDWCyv3YhaAP1zeuB4=",
    name: "나봉이",
    imgLinkList: [
      {
        imgLink:
          "https://d12zq4w4guyljn.cloudfront.net/20230512095818587_photo_a0b494512cec.jpg",
      },
      {
        imgLink:
          "https://d12zq4w4guyljn.cloudfront.net/300_300_20191205115314_photo1_e7dbf6690af0.jpg",
      },
      {
        imgLink:
          "https://d12zq4w4guyljn.cloudfront.net/20220706091725102_photo_9f0c35fec356.jpg",
      },
    ],
  },
  {
    id: 1,
    user_id: 1,
    restaurant_id: 1,
    rating: 5,
    comment:
      "칼국수 국물의 깊이가 있고 배추보쌈도 고기가 야들야들하니 맛있었어요 보쌈이랑 파전때문에 배부를 것 같아서 셋이서 칼국수 2인만 시켰는데 그릇3개로 나눠서 주셔서 감동이었습니다. 다만 사람이 너무 많아서 바쁘신지 파전이 계속 안나와서 서빙이 안된걸 확인하고 파전은 식은채로 먹어서 아쉬웠습니다.",
    created_at: new Date(),
    imgLink:
      "https://media.istockphoto.com/id/1458719394/ko/%EC%82%AC%EC%A7%84/%ED%9A%8C%EC%9D%98-%EC%A4%91-%ED%86%A0%EB%A1%A0%EC%9D%84-%EB%93%A3%EA%B3%A0-%EC%9E%88%EB%8A%94-%EC%82%AC%EC%97%85%EA%B0%80.jpg?s=1024x1024&w=is&k=20&c=njt5KD5Z2_fYD_E6p5MVEFu0JuDWCyv3YhaAP1zeuB4=",
    name: "이재형",
    imgLinkList: [
      {
        imgLink:
          "https://d12zq4w4guyljn.cloudfront.net/20230512095818587_photo_a0b494512cec.jpg",
      },
      {
        imgLink:
          "https://d12zq4w4guyljn.cloudfront.net/300_300_20191205115314_photo1_e7dbf6690af0.jpg",
      },
      {
        imgLink:
          "https://d12zq4w4guyljn.cloudfront.net/20220706091725102_photo_9f0c35fec356.jpg",
      },
    ],
  },
  {
    id: 2,
    user_id: 1,
    restaurant_id: 2,
    rating: 5.0,
    comment:
      "여러명이 칼국수 + 보쌈 시키면 칼국수 여러 그릇에 나눠서 주십니다. 예를 들면 4인 가면 칼국수 3인분을 네그릇에 나눠서 주세요. 그래도 양이 많습니다. 보쌈 양은 보통인 것 같고요. 배추가 달고 맛있습니다. 다만 바닥이 기름진 것 처럼 미끄러워서 조심해야할 것 같습니다..",
    created_at: new Date(),
    imgLink:
      "https://media.istockphoto.com/id/1450340623/ko/%EC%82%AC%EC%A7%84/%EC%84%B1%EA%B3%B5%EC%A0%81%EC%9D%B8-%EC%84%B1%EC%88%99%ED%95%9C-%EC%83%81%EC%82%AC-%EC%95%88%EA%B2%BD%EC%9D%84-%EC%93%B4-%EC%95%84%EC%8B%9C%EC%95%84%EC%9D%B8%EC%9D%98-%EA%B3%A0%EC%9C%84-%EC%82%AC%EC%97%85%EA%B0%80%EA%B0%80-%EC%B9%B4%EB%A9%94%EB%9D%BC%EB%A5%BC-%EB%B3%B4%EA%B3%A0-%EC%9B%83%EA%B3%A0-%EC%9E%88%EA%B3%A0-%ED%8C%94%EC%A7%B1%EC%9D%84-%EB%81%BC%EA%B3%A0-%ED%98%84%EB%8C%80%EC%A0%81%EC%9D%B8-%EC%82%AC%EB%AC%B4%EC%8B%A4-%EA%B1%B4%EB%AC%BC-%EC%95%88%EC%97%90%EC%84%9C-%EC%9D%BC%ED%95%98%EB%8A%94-%EB%82%A8%EC%9E%90%EC%9D%98-%EC%B4%88%EC%83%81%ED%99%94.jpg?s=1024x1024&w=is&k=20&c=m7mrvBElf4_iYagnSDWq0TtdRFaNSWV7HmJ_T771snM=",
    name: "Sebas Kim",
    imgLinkList: [
      {
        imgLink:
          "https://d12zq4w4guyljn.cloudfront.net/20220706091725102_photo_9f0c35fec356.jpg",
      },
      {
        imgLink:
          "https://d12zq4w4guyljn.cloudfront.net/20231011062639839_photo_c08d474744cd.jpg",
      },
      {
        imgLink:
          "https://d12zq4w4guyljn.cloudfront.net/20220706091725102_photo_9f0c35fec356.jpg",
      },
    ],
  },
];

/* blogreview 데이터 추가
  포함 되어있는 필드 : 
  id
  restaurant_id
  title
  comment
*/
const BLOGREVIEW = [
  {
    id: 1,
    restaurant_id: 1,
    title: "을지로 또간집 종로 맛집 노포 느낌 에서 보쌈에 낮술 웨이팅",
    comment:
      "대련집 서울 종로구 종로 16길 37 ⏰월 - 토 11:00 ~ 21:30 브레이크타임 14:30 ~ 17:00 매주 일요일 정기휴무 02-2265-5349 주차 불가능 예전부터 종로맛집 을지로맛집인 #대련집 유명해서 장소 저장해놓고 가보고싶다 생각했었눈데",
  },
  {
    id: 2,
    restaurant_id: 1,
    title: "(종로3가) 을지로 찐노포맛집 웨이팅필수 대련집 무생채 보쌈과 칼국수",
    comment:
      "안녕하세요 hee 입니다 오늘은 종로노포맛집 을지로 찐맛집으로 유명한 대련집 다녀왔습니다 웨이팅에 항상 실패했던 곳인데 이번에 다녀오면서 느낌 웨이팅 꿀팁도 알려드릴게용 대련집 웨이팅 꿀팁 ✔️오후 8시쯤",
  },
  {
    id: 3,
    restaurant_id: 2,
    title: "또간집 종로 사골칼국수 생배추보쌈 돼지국밥 우육면 식당 여깁니다!",
    comment:
      "안녕하세요~ 오늘도 또간집 종로편 정리해왔습니다. 종로는 솔직히 2가 3가로 나눠야될거 같을만큼 맛집이 많을거 같은데요. 광장시장도 있고 낙원상가도 있어서 거리가 오래되어서 더 기대됩니다. 그럼 그 중에 어떤 집을",
  },
];

/* 유저 데이터 추가 필드
  intro
*/
const USER = [
  {
    id: 1,
    username: "FoodLove",
    hashed_password: "asd123",
    wishlist: [1, 2, 3],
    intro: "안녕하세요 음식을 좋아하는 미식가 FoodLove입니다.",
  },
];

export { ARTICLE, RESTAURANTS, REVIEW, BLOGREVIEW, USER };
